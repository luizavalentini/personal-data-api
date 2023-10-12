import styled from 'styled-components'
import EfeitoBackground from '../../assets/Efeito-background.svg'
import EfeitoBackgroundBranco from '../../assets/Efeito-background-branco.svg'

interface backgroundImage {
  img?: string
}

export const ContainerGeral = styled.div`
  display: flex;
`

export const ContainerImagem = styled.div`
  background-image: linear-gradient(
    to top,
    #4b7bc4,
    #4f8cd4,
    #559de3,
    #5caff1,
    #64c0ff
  );
  background-color: #559de3;
  background-image: url(${EfeitoBackgroundBranco});
  background-repeat: no-repeat;
  background-position: right -3em bottom;
  background-size: 15em 50em;
  width: 90%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-top: -100px;
    color: #fff;
    font-size: 50px;
    padding: 0px 200px 0px 160px;
  }

  h4 {
    color: #fff;
    font-size: 20px;
    padding: 15px 200px 0px 160px;
  }
`

export const ContainerLogin = styled.div`
  background-color: #fff;
  background-image: url(${EfeitoBackground});
  background-repeat: no-repeat;
  background-position: right -1em bottom;
  background-size: 5em 20em;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  .ContainerLogo {
    margin: 0px 0px 50px 0px;

    img {
      width: 150px;
      height: 150px;
      transform: translatey(0px);
      animation: float 5s ease-in-out infinite;
    }
    @keyframes float {
      0% {
        transform: translatey(0px);
      }
      50% {
        transform: translatey(-30px);
      }
      100% {
        transform: translateY(0px);
      }
    }
  }

  .buttonLogin {
    background-color: #559de3;
    color: #fff;
    border: none;
    margin-top: 30px;
    cursor: pointer;
    border-radius: 5px;

    :hover {
      scale: 1.01;
      transform: 2s;
    }
  }

  .ContainerMenor {
    width: 400px;
    height: 400px;

    h1 {
      text-align: center;
      padding-bottom: 30px;
      color: #559de3;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      color: #559de3;
      height: 40px;
      margin-bottom: 10px;
      border: transparent;
      background: transparent;
      border-bottom: 2px solid #559de3;

      :focus {
        outline: 0;
        box-shadow: 0 0 0 0;
      }

      ::placeholder {
        border: none;
        color: #559de3;
        border: none;
      }
    }
  }
  a {
    color: #294e67;
    text-decoration: none;
  }
`
