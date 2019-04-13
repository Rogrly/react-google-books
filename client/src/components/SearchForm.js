import React from 'react';

const SearchForm = ({onSubmit, onChange, value}) => {
  return (
    <form onSubmit={onSubmit}>
      <input 
        placeholder="Search For Book" 
        className="form-control border-danger mb-2"
        type="text"
        onChange={onChange}
        value={value}
        name="searchTerm"
      />
      <button 
        className="btn btn-block btn-outline-dark"
        onClick={onSubmit}
        >
       Search
      </button>
    </form>
  )
}

export default SearchForm;