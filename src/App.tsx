import React, { useState } from "react";
import Search from "./components/Search";
import axios from "axios";
import Results from "./components/Results";
import PopUp from "./components/PopUp";

function App() {
  interface IState {
    search: string;
    results: [];
    selected: { Title: string | undefined };
  }
  const [state, setState] = useState<IState>({
    search: "",
    results: [],
    selected: { Title: "" }
  });

  const apiurl = "http://www.omdbapi.com/?apikey=ed762fca";

  const search = (e: any) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.search).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results };
        });
      });
    }
  };
  const handleInput = (e: any) => {
    let search = e.target.value;

    setState(prevState => {
      return {
        ...prevState,
        search: search
      };
    });
    console.log(state.search);
  };

  const openPopUp = (id: any) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      console.log(id);
      console.log(apiurl + "&i=" + id);

      setState(prevState => {
        return { ...prevState, selected: result };
      });
    });
  };

  const closePopUp = () => {
    setState(prevState => {
      return { ...prevState, selected: { Title: "" } };
    });
  };

  const clearSearch = () => {
    setState(prevState => {
      return {... prevState, results: []}
    })
  }
  return (
    <div className="App">
      <header>
        <h1>Movie DB</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        {console.log(state.results.length)}
        {Boolean(state.results.length) && (
          <button style={{ backgroundColor: "#f44336", color: "white" }}
          onClick={clearSearch}>
            X
          </button>
        )}
        <Results results={state.results} openPopUp={openPopUp} />
        {state.selected.Title !== "" && (
          <PopUp selected={state.selected} closePopUp={closePopUp} />
        )}
      </main>
    </div>
  );
}

export default App;
