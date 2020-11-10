import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Poppins', sans-serif !important;
    color: green;
  }

  .app {
    height: 100vh;
    width: 700px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 100px auto;
}

.inputs input {
    width: 80%;
    height: 40px;
    outline: none;
    font-size: 1.1rem;
    padding: 0 5px;
}

.inputs {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.add-task {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    height: 40px;
    padding: 20px 0;
    margin-left: 5px;
    font-size: 1rem;
}

.check-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 145px;
    height: 25px;
    margin: 5px 0 0px;
    font-size: .9rem;
}

.filter-btns {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
`