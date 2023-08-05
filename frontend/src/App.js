// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import AllSpots from "./components/Spots/AllSpots";
import SingleSpot from "./components/SingleSpot";
import CreateSpotForm from "./components/CreateSpotForm";
import ManageAllSpots from "./components/ManageSpots/AllSpots";
import EditSpotForm from "./components/EditSpot";
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
        <Route exact path='/spots/new' component={CreateSpotForm}></Route>
        <Route exact path='/spots/current' component={ManageAllSpots}></Route>
        <Route path ='/spots/:id/edit' component={EditSpotForm}></Route>
        <Route path='/spots/:spotId' component={SingleSpot}></Route>
        <Route path="/signup"></Route>
        </Switch>}
    </>
  );
}

export default App;
