import "./App.css";
import { Fragment } from "react";
import GlobalStyles from "./globalStyles";
import Homepage from "./Homepage";

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <div className="App">
        <h2>This is my eccomerce site</h2>
        <Homepage />
      </div>
    </Fragment>
  );
}

export default App;
