import React, { ReactElement } from "react";
import Result from "./Result";

interface Props {
  results: [];
  openPopUp(id: any): void;
}

function Results({ results, openPopUp }: Props): ReactElement {
  return (
      <>
   {results? <section className="results">
      {results.map(result => (
        <Result result={result} openPopUp={openPopUp} />
      ))}
    </section>:
    <h1 style={{color: "white"}}>No movies were found</h1>}
    </>
  );
}

export default Results;
