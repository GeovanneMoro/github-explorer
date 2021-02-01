import React, { FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import logo from '../../assets/logo.svg';
import {
  Title,
  Form,
  Repositories,
  Error,
  ButtonClear,
  Loading,
} from './styles';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [input, setInput] = React.useState('');
  const [inputError, setInputError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [repositories, setRepositories] = React.useState<Repository[]>(() => {
    const localRepositories = localStorage.getItem(
      '@githubExplorer:repositories',
    );

    if (localRepositories) {
      return JSON.parse(localRepositories);
    }

    return [];
  });

  React.useEffect(() => {
    localStorage.setItem(
      '@githubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // Adição de um novo repositório
    // Consumir API do Github
    // Salvar novo repositório no estado
    event.preventDefault();
    if (!input) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    try {
      setLoading(true);
      setInputError('');
      const response = await api.get<Repository>(`repos/${input}`);

      const repository = response.data;
      setRepositories([...repositories, repository]);
    } catch (err) {
      setInputError('Erro na busca por esse repositório');
    } finally {
      setLoading(false);
      setInput('');
    }
  }

  function clearLocalStorage(): void {
    setRepositories([]);
    localStorage.clear();
  }

  return (
    <>
      <img src={logo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do repositório"
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error>}
      {loading && (
        <Loading>
          <span />
        </Loading>
      )}
      <Repositories>
        {repositories.map((repository) => (
          <Link key={repository.id} to={`/repository/${repository.full_name}`}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repositories>
      {repositories.length > 0 && (
        <ButtonClear onClick={clearLocalStorage}>Limpar</ButtonClear>
      )}
    </>
  );
};

export default Dashboard;
