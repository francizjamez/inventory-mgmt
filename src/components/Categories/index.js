import { useContext, useEffect } from "react";
import { Link, Route, Switch, useHistory, useLocation } from "react-router-dom";
import AuthContext from "../../contexts/auth.context";
import Mobile from "./Mobile";
import Laptops from "./Laptops";
import Appliances from "./Appliances";
import Button from "../common/Button";
import AddForm from "./AddForm";
import ItemContext from "../../contexts/item.context";

const Categories = () => {
  const auth = useContext(AuthContext);
  const item = useContext(ItemContext);
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (!auth.user) {
      history.push("/login");
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container text-white m-5 mx-auto rounded-lg overflow-hidden">
      <div className="p-4 flex bg-purple-800 items-center justify-between">
        <div className="flex gap-4">
          <Link
            to="/laptops"
            className={location.pathname === "/laptops" ? `text-pink-400` : ``}
          >
            Laptops
          </Link>
          <Link
            to="/appliances"
            className={
              location.pathname === "/appliances" ? `text-pink-400` : ``
            }
          >
            Appliances
          </Link>
          <Link
            to="/mobiles"
            className={location.pathname === "/mobiles" ? `text-pink-400` : ``}
          >
            Mobiles
          </Link>
        </div>
        <Button className="justify-self-end" onClick={item.toggleForm}>
          Add
        </Button>
      </div>
      <div className="bg-green-600">
        <Switch>
          <Route path="/mobiles" component={Mobile} />
          <Route path="/laptops" component={Laptops} />
          <Route path="/appliances" component={Appliances} />
        </Switch>
      </div>
      <AddForm show={item.showForm} />
    </div>
  );
};

export default Categories;
