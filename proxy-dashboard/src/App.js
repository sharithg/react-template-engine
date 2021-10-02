import React from "react";
import "./App.css";
import Admin from "./layout/Admin";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./Auth/Login";
import Authenticate from "./Auth/Authenticate";
import { ProductProvider } from "./contexts/ProductContext";
import { DataProvider } from "./contexts/DataContext";

/* {tenentToken ? <Admin /> : <h1>no tenent token found</h1>} */

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthProvider>
            <ProductProvider>
              <DataProvider>
                <PrivateRoute exact path="/residential" component={Admin} />
                <PrivateRoute exact path="/datacenter" component={Admin} />
                <PrivateRoute exact path="/isp" component={Admin} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/authorize" component={Authenticate} />
                <Route exact path="/">
                  <Redirect to="/residential" />
                </Route>
              </DataProvider>
            </ProductProvider>
          </AuthProvider>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
