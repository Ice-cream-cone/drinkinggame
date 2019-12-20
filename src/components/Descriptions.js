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
  //First Table [Beer]
  [
    { id: 1, task: "yellow", description: "Everyone drinks 1" },
    { id: 2, task: "orange", description: "Choose your enemy to drink 1" },
    {
      id: 3,
      task: "red",
      description:
        "Shotgun 1 can of beer, then take you are immune from drinking until it is your turn again"
    },
    { id: 4, task: "magenta", description: "All girls drink 1" },
    { id: 5, task: "pink", description: "All guys drink 1" },
    { id: 6, task: "purple", description: "Last person to raise hand drink 1" },
    {
      id: 7,
      task: "violet",
      description: "People who are single drink 1"
    },
    {
      id: 8,
      task: "navy",
      description: "People who are NOT single drink 1"
    },
    {
      id: 9,
      task: "blue",
      description: "Do 10 push-up, then 10 jumping jack"
    },
    { id: 10, task: "turqoise", description: "You drink 1 " },
    {
      id: 11,
      task: "green",
      description: "You drink 2"
    },
    {
      id: 12,
      task: "olive",
      description: "You drink 3"
    }
  ],

  //Second Table [hard liquor]

  [
    { id: 1, task: "yellow", description: "Everyone drinks 1 shot" },
    { id: 2, task: "orange", description: "Choose your enemy to drink 1 shot" },
    {
      id: 3,
      task: "red",
      description: "Flip a coin, if head drink 1 shot, if tail you are safe"
    },
    { id: 4, task: "magenta", description: "All girls drink 1 shot" },
    { id: 5, task: "pink", description: "All guys drink 1 shot" },
    {
      id: 6,
      task: "purple",
      description: "People who are NOT single drink 1 shot"
    },
    {
      id: 7,
      task: "violet",
      description: "Last person to raise hand drink 1 shot"
    },
    {
      id: 8,
      task: "navy",
      description: "People who are single drink 1 shot"
    },
    { id: 9, task: "blue", description: "Do 10 push-up, then 10 jumping jack" },
    { id: 10, task: "turqoise", description: "You drink 1 shot" },
    { id: 11, task: "green", description: "You drink 1.5 shots" },
    { id: 12, task: "olive", description: "You drink 2 shots" }
  ],

  //Third Table [Beer && hard liquor]

  [
    {
      id: 1,
      task: "yellow",
      description: "Call your Mom or Dad and say hello"
    },
    {
      id: 2,
      task: "orange",
      description:
        "Lick your elbow. If you cannot, lick an elbow of the person to your right. Or drink 1 shot"
    },
    {
      id: 3,
      task: "red",
      description: "Tell 3 truths (asked by others) or Drink 2 shots"
    },
    {
      id: 4,
      task: "magenta",
      description: "Person on your right drink 1 shot"
    },
    { id: 5, task: "pink", description: "Twerk for 15 seconds" },
    { id: 6, task: "purple", description: "You are very lucky :)" },
    {
      id: 7,
      task: "violet",
      description: "You drink 1 shot and half a beer"
    },
    { id: 8, task: "navy", description: "You drink 1 shot" },
    { id: 9, task: "blue", description: "You drink half a beer" },
    { id: 10, task: "turqoise", description: "Shotgun 1 beer" },
    {
      id: 11,
      task: "green",
      description: "You are banned from bathrooms for 30 minutes"
    },
    {
      id: 12,
      task: "olive",
      description:
        "You are the lucky one, assign each person either a shot or a beer"
    }
  ]
];

export default Descriptions;
