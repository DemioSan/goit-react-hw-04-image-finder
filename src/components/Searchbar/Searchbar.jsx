import { useState } from 'react';
import { Header } from './Searchbar.styled';

export const Searchbar = props => {
  const [input, setInput] = useState('');

  function onType(e) {
    const value = e.target.value;
    setInput(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmit(e);
  }

  return (
    <Header className="searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchForm-input"
          type="text"
          name="input"
          value={input}
          onChange={onType}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button type="submit" className="SearchForm-button" name="button">
          <span className="button-label">Search</span>
        </button>
      </form>
    </Header>
  );
};
