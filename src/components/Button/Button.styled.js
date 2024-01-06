import styled from 'styled-components';

export const LoadMore = styled('button')`
  margin: 20px auto;
  padding: 10px 80px;
  font-size: 16px;
  background-color: #ff8a5b;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #ea526f;
    border: none;
  }
`;
