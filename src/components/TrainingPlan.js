import React from "react";


const overviewTrainingPlan = [
  {
    week: 1,
    workouts: [
      { workoutType: "easyRun", distance: 3, duration: 30 },
      { workoutType: "interval", distance: 4, duration: 40 },
      { workoutType: "easyRun", distance: 3, duration: 30 },
      { workoutType: "rest" },
      { workoutType: "tempoRun", distance: 5, duration: 45 },
      { workoutType: "easyRun", distance: 3, duration: 30 },
      { workoutType: "longRun", distance: 6, duration: 60 },
    ],
  },
  // Add more weeks with their respective workouts
];


function TrainingPlan() {
  return (
    <div>
      <h1>Your Training Plan</h1>
      <table>
        <thead>
          <tr>
            <th>Week</th>
            <th>Workouts</th>
          </tr>
        </thead>
        <tbody>
          {overviewTrainingPlan.map((week, index) => (
            <tr key={index}>
              <td>{`Week ${week.week}`}</td>
              <td>
                {week.workouts.map((workout, idx) => (
                  <div key={idx}>{`${workout.workoutType} - ${
                    workout.duration ? workout.duration : ""
                  }${workout.distance ? ` - ${workout.distance} miles` : ""}`}</div>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainingPlan;