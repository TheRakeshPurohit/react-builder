import React, { useContext } from "react";
import { ThemeContext } from "../App";
import { DARK } from "../constants/constants";
import { useMobileDetect } from "../hooks/useMobileDetect";
import { useWindowSize } from "../hooks/useWindowSize";
import { GithubMetrics } from "./GithubMetrics";

const InfoPane = () => {
  const mode = useContext(ThemeContext);
  const themeClass = mode.theme === DARK ? mode.theme : null;
  const isMobile = useMobileDetect();
  const windowSize = useWindowSize();
  return (
    <div className={`InfoPane ${themeClass} ${isMobile && "mobileInfoPane"}`}>
      <div className="header">
        <h1>
          <img src={require("../assets/logo.png")} alt="React-Builder-Logo" />{" "}
          React Builder
        </h1>
        <img
          className={`toggleTheme ${themeClass}`}
          src={require("../assets/day-and-night.svg")}
          alt="Theme-Toggle-Button"
          onClick={mode.toggleTheme}
        ></img>
      </div>
      <div className="container-info">
        <div className="main">
          Want to create a React App Super fast with less steps?
        </div>

        <p>
          You can create a react app with few simple steps. <br />
          <br />
          This is a simple tool that helps you to quikcly create components and
          pages in your react app with your preffered component type(Functional
          or Class Based) <br /> <br />
          You can also integrate Routing with predefined Navigation bar and
          routing done in App{" "}
        </p>

        <div className={`box ${themeClass}`}>
          {!isMobile ? (
            <>
              <h4>Instructions</h4>
              <ul>
                <li>
                  {" "}
                  {" 🔹 "} <strong>Step 1</strong> : Choose the desired settings
                  on {windowSize.width <= 768 ? "bottom" : "right"} pane
                </li>
                <li>
                  {" "}
                  {" 🔹 "} <strong>Step 2</strong> : Once you click create app
                  it will download a js file and show you a script
                </li>
                <li>
                  {" "}
                  {" 🔹 "} <strong>Step 3</strong> : Place that js script in the
                  folder you want to create react app
                </li>
                <li>
                  {" "}
                  {" 🔹 "} <strong>Step 4</strong> : Run that script in that
                  folder.
                </li>
              </ul>
            </>
          ) : (
            <h4>Open this website in a desktop browser to access it.</h4>
          )}
        </div>
      </div>
      {isMobile && (
        <div className="githubMetrics">
          <GithubMetrics />
        </div>
      )}
      <h4 className="madeBy">Made with love by Aman Jagdev</h4>
    </div>
  );
};

export default InfoPane;
