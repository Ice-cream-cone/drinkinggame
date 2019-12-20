import React from "react";
import styles from "../css/Descriptions.module.css";

const Descriptions = props => {
  return (
    <div>
      <div className={styles.resultsctn}>
        {props.result === "" ? (
          "Press spin to start"
        ) : (
          <div>
            <a
              className={`ui label ${
                fakeData[props.table][props.result].task
              } ${styles.resultText}`}
              id="result"
            >
              {fakeData[props.table][props.result].task}
            </a>
            <div className={styles.resultDescriptionText} id="description">
              {fakeData[props.table][props.result].description}
            </div>
          </div>
        )}
      </div>
      <div className={styles.tableContainer}>
        <table className="ui inverted celled table unstackable">
          <thead>
            <tr>
              <th>Color</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {fakeData[props.table].map(elem => (
              <tr key={elem.id}>
                <td data-label="Task">
                  <a className={`tbbtn ui label ${elem.task}`}>{elem.task}</a>
                </td>
                <td data-label="Description">{elem.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const fakeData = [
  [
    { id: 1, task: "yellow", description: "Everyone drink" },
    { id: 2, task: "orange", description: "Choose someone else to drink :D" },
    { id: 3, task: "red", description: "You drink lel" },
    { id: 4, task: "magenta", description: "All ladies drink" },
    { id: 5, task: "pink", description: "All guys drink" },
    { id: 6, task: "purple", description: "Last person to raise hand drink" },
    {
      id: 7,
      task: "violet",
      description: "Pick another person to drink with you"
    },
    {
      id: 8,
      task: "navy",
      description: "Start a rhyme, keep going until someone cannot fucks up"
    },
    {
      id: 9,
      task: "blue",
      description:
        "Pick a category, keep going until someone can't come up with answer"
    },
    {
      id: 10,
      task: "turqoise",
      description: "Blank space, drink some water bruh"
    },
    {
      id: 11,
      task: "green",
      description:
        "Pose a question to anyone in the game. That person has to respond to the question with another question"
    },
    {
      id: 12,
      task: "olive",
      description: "Pours some of your drink into the King's cup"
    }
  ],
  [
    { id: 1, task: "yellow", description: "Vodka" },
    { id: 2, task: "orange", description: "drink half a beer bottle" },
    { id: 3, task: "red", description: "Lucky you, no need to do anything" },
    { id: 4, task: "magenta", description: "Take double shots of vodka" },
    { id: 5, task: "pink", description: "Choose a person to take a shot" },
    { id: 6, task: "purple", description: "Everyone except you drink a shot" },
    {
      id: 7,
      task: "violet",
      description: "Do a 10 push up in 20 seconds"
    },
    { id: 8, task: "navy", description: "Do a 10 push up in 20 seconds" },
    { id: 9, task: "blue", description: "Do a 10 push up in 20 seconds" },
    { id: 10, task: "turqoise", description: "Do a 10 push up in 20 seconds" },
    { id: 11, task: "green", description: "Do a 10 push up in 20 seconds" },
    { id: 12, task: "olive", description: "Do a 10 push up in 20 seconds" }
  ],
  [
    { id: 1, task: "yellow", description: "Both" },
    { id: 2, task: "orange", description: "drink half a beer bottle" },
    { id: 3, task: "red", description: "Lucky you, no need to do anything" },
    { id: 4, task: "magenta", description: "Take double shots of vodka" },
    { id: 5, task: "pink", description: "Choose a person to take a shot" },
    { id: 6, task: "purple", description: "Everyone except you drink a shot" },
    {
      id: 7,
      task: "violet",
      description: "Do a 10 push up in 20 seconds"
    },
    { id: 8, task: "navy", description: "Do a 10 push up in 20 seconds" },
    { id: 9, task: "blue", description: "Do a 10 push up in 20 seconds" },
    { id: 10, task: "turqoise", description: "Do a 10 push up in 20 seconds" },
    { id: 11, task: "green", description: "Do a 10 push up in 20 seconds" },
    { id: 12, task: "olive", description: "Do a 10 push up in 20 seconds" }
  ]
];

export default Descriptions;
