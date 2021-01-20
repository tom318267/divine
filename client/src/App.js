import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { loadUser } from "./actions/auth";
import Homepage from "./components/Homepage/Homepage";
import Navbar from "./components/Navbar/Navbar";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import MediumsList from "./components/MediumsList/MediumsList";
import PostReview from "./components/PostReview/PostReview";
import PrivateRoute from "./routing/PrivateRoute";
import Reviews from "./components/Reviews/Reviews";
import About from "./components/About/About";
import { LOGOUT } from "./actions/types";

// Redux
import { Provider } from "react-redux";
import store from "./store";
import setAuthToken from "./utils/setAuthToken";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);
  return (
    <div className="App">
      <div className="overlay">
        <Provider store={store}>
          <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route exact path="/register" component={Signup} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/mediums" component={MediumsList} />
              <Route exact path="/reviews" component={Reviews} />
              <Route exact path="/about" component={About} />
              <PrivateRoute
                exact
                path="/add-review/:id"
                component={PostReview}
              />
            </Switch>
          </Router>
        </Provider>
      </div>
    </div>
  );
};

export default App;
