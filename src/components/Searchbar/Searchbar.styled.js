import styled from 'styled-components';

export const Header = styled('header')`
  top: 0;
  left: 0;
  position: fixed;
  z-index: 1100;

  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  width: 100%;
  color: #fff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  background-color: #fbe7da;
  border-radius: 5px;
  padding: 10px 0;

  .SearchForm {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
  }

  .SearchForm-input {
    display: inline-block;
    width: 100%;
    height: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }

  .SearchForm-input::placeholder {
    font: inherit;
    font-size: 18px;
  }

  .SearchForm-button {
    display: inline-block;
    width: 50%;
    height: 48px;
    border: 0;

    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);

    padding: 10px 20px;
    font-size: 16px;
    background-color: #ff8a5b;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .SearchForm-button:hover {
    background-color: #ea526f;
  }

  .SearchForm-button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }
`;
