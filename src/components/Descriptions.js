import React from 'react';

const Descriptions = () => {
  return (
    <div>
      <h1>Descriptions</h1>
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
  {
    id: 4,
    task: 'Take double',
    description: 'Take double shots of vodka'
  },
  { id: 5, task: 'Lucky', description: 'Lucky you, no need to do anything' },
  { id: 6, task: 'Lucky', description: 'Lucky you, no need to do anything' },
  { id: 7, task: 'Lucky', description: 'Lucky you, no need to do anything' }
];

export default Descriptions;
