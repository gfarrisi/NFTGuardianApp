import { ReactElement } from 'react';
import  * as ReactDOM from 'react-dom';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/styles/tailwind.css";
import { Link } from 'react-router-dom';


export function App(): ReactElement {
  return (
    <div>
    <h1>Home</h1>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="landing">Landing</Link>
    </nav>
  </div>
  );
}
