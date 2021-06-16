import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="bg-purple-800 text-white p-4">
      <ul className="flex gap-4 justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <div className="flex gap-4">
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </li>
      </ul>
    </div>
  );
}
