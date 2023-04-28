import React from "react";

function NutritionTips({ tips }) {
  return (
    <div>
      <h1>Nutrition Tips</h1>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
}

export default NutritionTips;
