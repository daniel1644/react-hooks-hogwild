import React, { useState } from "react";
import Nav from "./Nav";
import HogTile from "./HogTile";
import hogs from "../porkers_data";

function App() {
  const [selectedHog, setSelectedHog] = useState(null);

  return (
    <div className="App">
      <Nav />
      <div className="ui grid container">
        {hogs.map((hog) => (
          <HogTile key={hog.name} hog={hog} setSelectedHog={setSelectedHog} />
        ))}
      </div>
      {selectedHog && (
        <div className="ui grid container">
          <div className="ui eight wide column">
            <h2>{selectedHog.name}</h2>
            <img src={selectedHog.image} alt={selectedHog.name} />
          </div>
          <div className="ui eight wide column">
            <p>Specialty: {selectedHog.specialty}</p>
            <p>Weight: {selectedHog.weight}</p>
            <p>Greased: {selectedHog.greased ? "Yes" : "No"}</p>
            <p>
              Highest Medal Achieved: {selectedHog["highest medal achieved"]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;