import { useState, useContext } from 'react';
import SearchContext from '../context/SearchContext';

function SearchBar() {
  const [search, setSearch] = useState('');
  const { updateSearch } = useContext(SearchContext);

  const handleSearch = () => {
    updateSearch(search);
    setSearch('');
  };

  return (
    <div className="search-bar">
      <input
        className="input-search-bar"
        type="text"
        placeholder="Search"
        value={ search }
        onChange={ (e) => setSearch(e.target.value) }
      />
      <button
        className="btn-search-bar"
        type="button"
        onClick={ () => handleSearch() }
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
