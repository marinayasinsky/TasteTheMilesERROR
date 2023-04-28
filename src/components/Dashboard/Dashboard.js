import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard({ user, trainingPlan }) {
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <h2>Your Training Plan</h2>
      {/* Display the current week and upcoming workouts from trainingPlan */}
      {/* Replace this with actual data from your trainingPlan */}
      <p>Week 1 - Run 3 miles, Rest, Run 4 miles, Rest, Run 5 miles, Rest, Long Run 6 miles</p>

      <h2>General Nutrition Tips</h2>
      {/* Add your nutrition tips content here */}

      <h2>Navigation</h2>
      <nav>
        <Link to="/training-plan">Detailed Training Plan</Link><br />
        <Link to="/nutrition-tips">Nutrition Tips</Link><br />
        <Link to="/edit-profile">Edit Profile</Link><br />
        <Link to="/logout">Log Out</Link>
      </nav>
    </div>
  );
}

export default Dashboard;
