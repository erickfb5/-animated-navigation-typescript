import { useState } from "react";

import "./App.css";

const App = (): JSX.Element => {
  const [isNavActive, setIsNavActive] = useState<boolean>(true);

  const toggleNav = (): void => setIsNavActive((prevIsNavActive: boolean) => !prevIsNavActive);

  return (
    <div className="App">
      <nav className={isNavActive ? "active" : ""} id="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="icon" id="toggle" onClick={toggleNav}>
          <div className="line line1"></div>
          <div className="line line2"></div>
        </button>
      </nav>
    </div>
  );
}

export default App;
