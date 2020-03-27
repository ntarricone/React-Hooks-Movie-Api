import React, { ReactElement } from "react";

interface Props {
  result: any;
  openPopUp(id: any): void;}

function Result({ result, openPopUp }: Props): ReactElement {
  return (
    <div className="result" onClick={() => openPopUp(result.imdbID)}>
      <img src={result.Poster}/>
      <h3>{result.Title}</h3>
    </div>
  );
}

export default Result;
