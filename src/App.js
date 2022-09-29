import React, { useState, Fragment } from "react";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";
import UserTable from "./tables/UserTable";
import firebase from "./firebase";
import './styles.css'

const App = () => {
  // Data
  const usersData = [{ id: null, name: "", email: "",phonenumber:'',salary:''}];
  const initialFormState = { id: null, name: "", email: "",phonenumber:'',salary:''};

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    // toggle shown state
    setIsShown(current => !current);

    // or simply set it to true
    // setIsShown(true);
  };

  // CRUD operations
  const addUser = user => {
    firebase
      .firestore()
      .collection("times")
      .add({
        name: user.name,
        email: user.email,
        phonenumber:user.phonenumber,
        salary:user.salary

      })
      .then(() => {
        //setTitle("");
        //setTime("");
      });
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = updatedUser => {
    setEditing(false);
    firebase
      .firestore()
      .collection("times")
      .doc(updatedUser.id)
      .set(updatedUser);
  };

  const editRow = user => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, email: user.email,phonenumber:user.phonenumber,
      salary:user.salary });
    //console.log("editRow", user);
  };

  return (
    <div className="container">
      <h1>Empolyee Data management</h1>
      {isShown && <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Empolyee</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>&nbsp;&nbsp;Add Emp</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>}<br/><br/><br/>
      <div className="container">
        <div className="flex-large">
          <h2>View Empolyees</h2>
          <button type="button" class="btn btn-primary" id ='addEmp' onClick={handleClick}>Add Empolyee</button><br/>
          <UserTable
            users={users}
            editRow={editRow}
            deleteUser={deleteUser}
            editing={editing}
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
