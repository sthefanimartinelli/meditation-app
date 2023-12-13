import { createContext } from 'react';

interface SearchContextType {
  searchInContext: string;
  updateSearch: (searchValue: string) => void;
}

const SearchContext = createContext<SearchContextType>({} as SearchContextType);

export default SearchContext;
