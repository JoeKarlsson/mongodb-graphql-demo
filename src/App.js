import React from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { loading, error, data } = useQuery(gql`
    query AllInstaPosts {
      instaposts {
        description
        imageUrl
      }
    }
  `);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App">
        {loading && <div>loading</div>}
        {error && <div>{`encountered an error: ${error}`}</div>}
        {data && <div>{`successfully queried ${data.length} movies`}</div>}
      </div>
    </div>
  );
}

export default App;
