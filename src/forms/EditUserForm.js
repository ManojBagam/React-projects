import React, { useState, useEffect } from "react";

const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);
  

  const handleInputChange = event => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateUser(user);
      }}
    >
       <div className="col-xs-3">
      <label>Name</label>
      <input class="form-control"
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      /></div>
      <div className="col-xs-3">
      <label>Email</label>
      <input class="form-control"
        type="text"
        name="email"
        value={user.username}
        onChange={handleInputChange}
      /></div><br/>
      <button className="btn btn-success">Update user</button>&nbsp;&nbsp;
      <button
        onClick={() => props.setEditing(false)}
        class="btn btn-warning"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
