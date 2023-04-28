import React from "react";

function TrainingPlan({ trainingPlan }) {
  return (
    <div>
      <h1>Your Training Plan</h1>
      {/* Render your training plan details here */}
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Workouts</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace this with actual data from your trainingPlan */}
          {trainingPlan.map((week, index) => (
            <tr key={index}>
              <td>{`Week ${index + 1}`}</td>
              <td>{week.workouts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainingPlan;
