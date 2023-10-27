import React from "react";

const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements.search.value);
  };

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="search-input form-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
