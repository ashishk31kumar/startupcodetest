import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import TopHeader from "././components/auth/TopHeader";
import SideHeader from "././components/auth/SideHeader";
import MainBody from "././components/auth/MainBody";
import StartPage from "./components/auth/StartPage";
import "./style/bootstrap.css"
import "./style/plugin.css";
import "./style/style.css"
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div>
            <Route exact path="/" component={StartPage} />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
