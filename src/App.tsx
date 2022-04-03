import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState } from "react";
import { TextFeildContext } from "context";
import { Header } from "Containers/Header";
import { InputLayout } from "Containers/Layout";
import Navbar from "navbar";
import { About } from "about";
import { OutputLayout } from "Containers/output";
import "App.css";
export default function App() {
  let [billValue, setBillValue] = useState(0);
  let [peoplenum, setPeoplenum] = useState(1);
  const [percentage, setPercentage] = useState(0);

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar></Navbar>
        <TextFeildContext.Provider
          value={{
            billValue,
            setBillValue,
            peoplenum,
            setPeoplenum,
            percentage,
            setPercentage,
          }}
        >
          <main className="Container__in-out">
            <Switch>
              <Route exact path="/"></Route>
              <InputLayout />
            </Switch>
            <Switch>
              <Route exact path="/layout"></Route>
              <About></About>
            </Switch>
            <Switch>
              <Route exact path="/"></Route>
              <OutputLayout />
            </Switch>
          </main>
        </TextFeildContext.Provider>
      </div>
    </Router>
  );
}
