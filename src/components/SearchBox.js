import React from "react";

const SearchBox = ({ SearchChange }) => {
  return (
    <div className='pa2'>
      <input 
        className="pa2 ph4 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="Search actors" 
        onChange={SearchChange}/>
    </div>
  );
};

export default SearchBox;
