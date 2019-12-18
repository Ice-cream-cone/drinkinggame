import React from 'react';

const Descriptions = props => {
  console.log('props', props);
  return (
    <div>
      <h3 id="result">Result: {props.result}</h3>
      <table class="ui celled table unstackable">
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
  { id: 1, task: 'Drink a shot', description: 'drink a shot of vodka' },
  { id: 2, task: 'Drink beer', description: 'drink half a beer bottle' },
  { id: 3, task: 'Lucky', description: 'Lucky you, no need to do anything' },
  { id: 4, task: 'Take double', description: 'Take double shots of vodka' },
  { id: 5, task: 'Traitor', description: 'Choose a person to take a shot' },
  { id: 6, task: 'Hater', description: 'Everyone except you drink a shot' },
  { id: 7, task: 'Strong man', description: 'Do a 10 push up in 20 seconds' },
  { id: 8, task: 'Drink beer', description: '' },
  { id: 9, task: 'LOL', description: 'LOL' },
  { id: 10, task: 'LOL', description: 'LOL' },
  { id: 11, task: 'LOL', description: 'LOL' },
  { id: 12, task: 'LOL', description: 'LOL' }
];

export default Descriptions;
