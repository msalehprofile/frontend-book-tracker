
import { FormEventHandler } from 'react'

type SearchBarProps = {
    searchTerm: string;
    handleSearchTerm: FormEventHandler<HTMLInputElement>
}

const SearchBar = ({searchTerm, handleSearchTerm}: SearchBarProps) => {
  return (
    <div className="navigation__search">
        <input type="text"
            onInput={handleSearchTerm}
            value={searchTerm} 
             placeholder="Seach by name" className="search__searchbox"/></div>
  )
}

export default SearchBar