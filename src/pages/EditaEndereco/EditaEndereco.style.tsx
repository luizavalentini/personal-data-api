import styled from 'styled-components'

export const ContainerCadastro = styled.div`
  background-image: linear-gradient(
    to top,
    #4b7bc4,
    #4f8cd4,
    #559de3,
    #5caff1,
    #64c0ff
  );
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-bottom: 9%;

  h1 {
    margin-top: 20%;
    margin-bottom: 2%;
    color: #fff;
    text-align: center;
    padding-bottom: 20px;
  }
  p {
    font-weight: 500;
    color: #000;
    padding-bottom: 10px;
  }

  .ContainerMenor {
    display: flex;
    justify-content: center;
    flex-direction: column;

    div {
      width: 500px;
      border-radius: 10px;
      background-color: #fff;
      opacity: 85%;
      padding: 20px;
      box-shadow: 1px 1px 10px 2px #4b7bc4;

      h1 {
        text-align: center;
        padding-top: 10px;
      }

      select {
        padding-left: 2%;
        background: #ebebec;
        height: 40px;
        margin-bottom: 15px;
        border-radius: 8px;
        border: none;
      }

      form {
        display: flex;
        flex-direction: column;

        input {
          padding-left: 2%;
          background: #ebebec;
          height: 40px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: none;
        }
        button {
          background: #4b7bc4;
          margin-top: 5%;
          border-radius: 8px;
          text-decoration: none;
          padding: 5px 10px;
          text-align: center;
          font-weight: 600;
          color: #fff;
          padding-bottom: 5px;
          cursor: pointer;
          height: 50px;
          border: none;
          :hover {
            scale: 1.01;
            transition: all ease 2s;
          }
        }
      }
    }
  }
`
