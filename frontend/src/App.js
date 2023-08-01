// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllSpots from "./components/Spots/AllSpots";
import SingleSpot from "./components/SingleSpot";
import CreateSpotForm from "./components/CreateSpotForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && <Switch>
        <Route exact path='/' component={AllSpots}></Route>
        <Route path="/login"></Route>
        <Route path='/spots/new' component={CreateSpotForm}></Route>
        <Route path='/spots/:spotId' component={SingleSpot}></Route>
        <Route path="/signup"></Route>
        </Switch>}
    </>
  );
}

export default App;
