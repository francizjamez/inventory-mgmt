// import { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
// import AuthContext from "../contexts/auth.context";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Nav from "./Nav";
import { AuthProvider } from "../contexts/auth.context";
import Categories from "./Categories";
import { ItemProvider } from "../contexts/item.context";

function App() {
  return (
    <AuthProvider>
      <ItemProvider>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Categories} />
        </Switch>
      </ItemProvider>
    </AuthProvider>
  );
}

export default App;
