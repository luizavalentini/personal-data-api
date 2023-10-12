import styled from 'styled-components'

export const ContainerHeader = styled.div`
  width: 20%;
  background-color: #559de3;

  display: flex;

  border-bottom: 1px solid #fff;
  align-items: center;
  flex-direction: column;

  .ContainerLogout {
    width: 100%;

    .iconLogout {
      margin: 10px;
      cursor: pointer;
      background-color: #559de3;
      color: #fff;
      border-radius: 5px;
      padding: 2px;
      border: none;
    }
  }
`

export const ContainerMenu = styled.div`
  width: 80%;
  height: 90px;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0px;

  background: #559de3;

  img {
    width: 100px;
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

  .containerIcon {
    width: 100%;
    margin-top: 50px;
  }

  button {
    padding: 5px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #64c0ff;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    :hover {
      scale: 1.02;
      transform: 2s;
    }
  }
  a {
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    :hover {
      color: #1c203b;
    }
  }

  p {
    color: #fff;
    padding: 5px 0px;
    display: flex;
    align-items: center;

    i {
      margin-right: 10px;
    }
  }
`
