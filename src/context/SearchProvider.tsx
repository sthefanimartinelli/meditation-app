import { useState, ReactNode } from 'react';
import SearchContext from './SearchContext';

type SearchProviderProps = {
  children: ReactNode;
};

function SearchProvider({ children }: SearchProviderProps) {
  const [searchInContext, setSearchInContext] = useState('');

  function updateSearch(searchValue: string) {
    setSearchInContext(searchValue);
  }

  const providedAssets = {
    searchInContext, updateSearch,
  };

  return (
    <SearchContext.Provider value={ providedAssets }>
      { children }
    </SearchContext.Provider>
  );
}

export default SearchProvider;
