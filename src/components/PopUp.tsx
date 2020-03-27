import React, { ReactElement } from "react";

interface Props {
  selected: any;
  closePopUp(id: any): void;
}

function PopUp({ selected, closePopUp }: Props): ReactElement {
  return (
    <section className="popup">
      <div className="content">
        <h2>
          {selected.Title} <span>{selected.Year}</span>{" "}
        </h2>
        <p className="rating">Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
          <button className="close" onClick={closePopUp}>Close</button>
        </div>
      </div>
    </section>
  );
}

export default PopUp;
