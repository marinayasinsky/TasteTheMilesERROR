import React, { useState } from "react";

function EditProfile({ user, updateUser }) {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    fitnessLevel: user.fitnessLevel,
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    updateUser(formData);
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Fitness Level</label>
        <select name="fitnessLevel" value={formData.fitnessLevel} onChange={handleChange} required>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default EditProfile;
