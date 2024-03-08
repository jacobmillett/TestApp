import React from "react";
import "./App.css";
import jsonData from "./CollegeBasketballTeams.json";

interface CBBTeam {
  school: string;
  name: string;
  city: string;
  state: string;
}

function Welcome() {
  return (
    <div>
      <h1>NCAA Basketball Team's</h1>{" "}
      <h2>
        This website is a list of all of the NCAA Basketball team, their mascots
        and their location.
      </h2>
      ;
    </div>
  );
}

class Team extends React.Component<CBBTeam> {
  render() {
    const oneTeam = this.props;

    return (
      <div
        style={{ border: "2px solid #000", padding: "20px", width: "200px" }}
      >
        <h2>{oneTeam.school}</h2>
        <h4>{oneTeam.name}</h4>
        <h4>
          {oneTeam.city}, {oneTeam.state}
        </h4>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {jsonData.teams.map((teamNum: CBBTeam) => (
        <Team key={teamNum.school} {...teamNum} />
      ))}
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
