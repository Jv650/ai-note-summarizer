import React, {useState} from 'react';
import '../css/App.css';

interface SearchInputProps {
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ handleSearch })=> {
    
    return (
        <div className='Search-input'>
        <input type='text' placeholder='Food search goes here' onChange={handleSearch}/>
        </div>
    );
}
export default SearchInput;