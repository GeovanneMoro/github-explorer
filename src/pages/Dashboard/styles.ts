import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;
  max-width: 450px;
  line-height: 56px;

  @media (max-width: 900px) {
    font-size: 24px;
    text-align: center;
    margin-top: 20px;
    line-height: 34px;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input {
    height: 70px;
    padding: 0 24px;
    flex: 1;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #c53030;
        border-right: 0;
      `}

    &:focus {
      border: 2px solid #04d361;
      border-right: 0;
    }

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    height: 70px;
    width: 210px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;

    &:hover {
      background: ${shade(0.2, '#04d351')};
    }
  }

  @media (max-width: 900px) {
    input {
      height: 50px;
      padding: 0px 10px;
    }

    button {
      height: 50px;
      width: 86px;
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.2s, box-shadow 0.2s;

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(15px);
      box-shadow: 5px 5px 5px 0px rgba(168, 168, 179, 0.75);
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }

  @media (max-width: 900px) {
    margin-top: 60px;

    a {
      padding: 10px;

      div {
        margin: 0 8px;

        p {
          font-size: 16px;
        }
      }
    }
  }
`;

export const ButtonClear = styled.button`
  margin-top: 80px;
  height: 70px;
  width: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: 5px;
  background: #cbcbd6;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.2, '#cbcbd6')};
  }

  @media (max-width: 900px) {
    height: 50px;
    width: 120px;
    margin: 0 auto;
    margin-top: 40px;
  }
`;

export const Loading = styled.div`
  max-width: 700px;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }

  span {
    display: block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 10px solid #ccc;
    border-right-color: transparent;
    margin: auto;
    margin-top: 80px;
    animation: loading 0.8s infinite;
  }
`;
