import styled from 'styled-components'

export const ContainerGeral = styled.div`
  display: flex;
`

export const ContainerHome = styled.div`
  background-image: linear-gradient(
    to top,
    #4b7bc4,
    #4f8cd4,
    #559de3,
    #5caff1,
    #64c0ff
  );
  width: 100%;
  min-height: 100vh;

  .ContainerMenor {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #e5e3e3;
    width: 100%;

    h2 {
      color: #1c203b;
      padding: 30px 0px;
      text-align: left;
    }
    h3 {
      text-align: center;
      color: rgb(28, 32, 59);
    }

    .buttonTabela {
      color: #5caff1;
      background: #fff;
      border: 1px solid #5caff1;

      :hover {
        scale: 1.1;
        transform: 2s;
      }
    }

    table {
      width: 100%;

      border-collapse: collapse;

      tr {
      }
      th {
        background: #5caff1;
        color: #fff;
        height: 54.3px;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
    td {
      border-bottom: 1px solid #5caff1;
      text-align: center;
      height: 65px;
      font-weight: 600;
      color: #000;
      padding-left: 20px;
      padding-right: 20px;

      p {
        color: #000;
      }
    }

    .ContainerTabela {
      border-radius: 5px;
      width: 90%;
      height: 100%;
      border-radius: 5px;
      background-color: #fff;

      display: flex;
      flex-direction: column;

      margin-bottom: 50px;
      align-items: center;

      .containerBotaoCadastro {
        height: 70px;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: space-between;

        div {
          margin: 0px 50px;
        }
      }
    }
  }
  button {
    padding: 5px 10px;
    margin: 5px 10px;
    border: 1px solid #fff;

    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .button-cadastro {
    background: #5caff1;
    text-decoration: none;
    padding: 8px 15px;
    text-align: center;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    :hover {
      scale: 1.5;
    }
  }
`
