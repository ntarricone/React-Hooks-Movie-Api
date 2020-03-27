import React, { ReactElement } from "react";

interface Props {
  handleInput(e: any): void;
  search(e: any): void;
}

function Search({ handleInput, search }: Props): ReactElement {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        placeholder="Search for a movie.."
        className="searchbox"
        onChange={handleInput}
        onKeyPress={search}
      />
    </section>
  );
}

export default Search;
