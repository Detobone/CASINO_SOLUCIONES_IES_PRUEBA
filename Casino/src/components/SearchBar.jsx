import React, { useState } from 'react';

export const SearchBar = () => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query); //TODO: pendiente de definir esta fn
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar..."
      />
      <button className="btn__search" type="submit">
        Buscar
      </button>
    </form>
  );
};
