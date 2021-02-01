import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    svg {
      margin-right: 4px;
    }

    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      height: 120px;
      width: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #737380;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }

  @media (max-width: 900px) {
    margin-top: 40px;

    header {
      img {
        height: 80px;
        width: 80px;
      }

      div {
        margin-left: 12px;

        strong {
          font-size: 22px;
        }

        p {
          font-size: 16px;
        }
      }
    }

    ul {
      margin-top: 20px;

      li {
        & + li {
          margin-left: 20px;
        }

        strong {
          font-size: 20px;
        }

        span {
          font-size: 18px;
        }
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

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
    margin-top: 40px;

    a {
      padding: 10px;

      div {
        margin: 0 8px;

        strong {
          word-break: break-word;
        }

        p {
          font-size: 16px;
        }
      }
    }
  }
`;

export const Loading = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid #ccc;
  border-right-color: transparent;
  margin: auto;
  margin-top: 100px;
  animation: loading 0.8s infinite;

  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
