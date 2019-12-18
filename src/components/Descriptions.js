import React from "react";
import styles from "../css/Descriptions.module.css";

const Descriptions = props => {
  console.log("props", props);

  return (
    <div>
      {props.result ? (
        <>
          <p className={styles.resultText} id="result">
            Result: {fakeData[props.result].task}
          </p>
          <p id="description">
            Description: {fakeData[props.result].description}
          </p>
        </>
      ) : null}

      <table className="ui celled table unstackable">
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {fakeData.map(elem => (
            <tr key={elem.id}>
              <td data-label="Task">{elem.task}</td>
              <td data-label="Description">{elem.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const fakeData = [
  { id: 1, task: "Yellow", description: "drink a shot of vodka" },
  { id: 2, task: "Orange", description: "drink half a beer bottle" },
  { id: 3, task: "Red", description: "Lucky you, no need to do anything" },
  { id: 4, task: "Dark-pink", description: "Take double shots of vodka" },
  { id: 5, task: "Pink", description: "Choose a person to take a shot" },
  { id: 6, task: "Purple", description: "Everyone except you drink a shot" },
  { id: 7, task: "Dark-purple", description: "Do a 10 push up in 20 seconds" },
  { id: 8, task: "Dark-blue", description: "Do a 10 push up in 20 seconds" },
  { id: 9, task: "Blue", description: "Do a 10 push up in 20 seconds" },
  { id: 10, task: "Cyan", description: "Do a 10 push up in 20 seconds" },
  { id: 11, task: "Green", description: "Do a 10 push up in 20 seconds" },
  { id: 12, task: "Lime", description: "Do a 10 push up in 20 seconds" }
];

export default Descriptions;
