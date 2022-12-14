import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`* {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  body {
    height: 100%;
    width: 100%;
    font-family: Roboto, 'Lucida Sans', 'Lucida Sans Regular', sans-serif;
  }

  .login-page {
    width: 350px;
  }

  .input-title {
    color: white;
    font-size: 20px;
    font-wheight: 500;
  }

  .footer {
    align-items: center;
    bottom: 0;
    color: white;
    display: flex;
    height: 40px;
    justify-content: space-between;
    position: fixed;
    width: 360px;
  }

  .default-size {
    width: 360px;
  }

  .radios-filter {
    display: flex;
    justify-content: space-between;
  }

  .displayCard {
    align-items: space-around;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 360px;
    padding: 12px;
  }

  .card-img {
    background-size: cover;
    border-radius: 0.4rem 0.4rem 0 0;
    height: 140px;
    margin-bottom: 2px;
    margin-top: -1px;
    width: 140px;
  }

  .card-recommended {
    border: 1px solid '#000000';
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default GlobalStyle;
