import React from "react";
import "./macWindow.scss";
import { Rnd } from "react-rnd";

const MacWindow = ({children}) => {
  return (
    <Rnd>
      <div className="window">
        <nav>
            <div className="dots">
                <p className="red dot"></p>
                <p className="yellow dot"></p>
                <p className="green dot"></p>
            </div>
            <div>
                <p>sumitvishnoi</p>
            </div>
        </nav>
        <div className="main-content">
            {children}
        </div>
      </div>
    </Rnd>
  );
};

export default MacWindow;
