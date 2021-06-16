import { useContext, useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import AuthContext from "../contexts/auth.context";
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
import Nav from "./Nav";
import { AuthProvider } from "../contexts/auth.context";

function App() {
  const history = useHistory();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    history.push("/login");
  }, []);

  return (
    <AuthProvider>
      <Nav />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
