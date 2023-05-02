import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function UserProfile({ user, updateUser }) {
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateUser(formData);
    setEditing(false);
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>

      {editing ? (
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />

          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />

          <button type="submit">Update Profile</button>
        </form>
      ) : (
        <>
          <h2>Navigation</h2>
          <nav>
            <Link to="/training-plan">Training Plan</Link><br />
            <Link to="/workouts">Workouts</Link><br />
            <button onClick={() => setEditing(true)}>Edit Profile</button>
            <Link to="/logout">Log Out</Link>
          </nav>
        </>
      )}
    </div>
  );
}

export default UserProfile;
