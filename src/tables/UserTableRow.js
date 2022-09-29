import React, { useState, useEffect, Fragment } from "react";
import firebase from "../firebase";

function useTimes(sortBy = "TIME_ASC") {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection("times")
      .onSnapshot(snapshot => {
        const newTimes = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTimes(newTimes);
      });
    return () => unsubscribe();
  }, [sortBy]);

  return times;
}

const UserTableRow = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  const handleDeleteClick = id => {
    firebase
      .firestore()
      .collection("times")
      .doc(id)
      .delete();
  };

  const handleUpdateItemClick = data => {
    firebase
      .firestore()
      .collection("times")
      .doc(data.id)
      .set(data);
    props.setEditing(false);
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return props.editing && props.currentUser.id === props.userValue.id ? (
    <Fragment>
      <tr key={props.userValue.id}>
        <td>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="phonenumber"
            value={user.phonenumber}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <input
            type="text"
            name="salary"
            value={user.salary}
            onChange={handleInputChange}
          />
        </td>
        <td>
          <button type="button"
            onClick={() => props.setEditing(false)}
            class="btn btn-warning"
          >
            Cancel
          </button>&nbsp; &nbsp;
          <button type="button"
            onClick={() => handleUpdateItemClick(user)}
            class="btn btn-info"
          >
            Update
          </button>
        </td>
      </tr>
    </Fragment>
  ) : (
    <Fragment>
      <tr key={props.userValue.id}>
        <td>{props.userValue.name}</td>
        <td>{props.userValue.email}</td>
        <td>{props.userValue.phonenumber}</td>
        <td>{props.userValue.salary}</td>
        <td>
          <button type="button"
            onClick={() => {
              props.editRow(props.userValue);
            }}
            class="btn btn-success"
          >
            Edit
          </button>&nbsp;&nbsp;
          <button type="button"
            onClick={() => handleDeleteClick(props.userValue.id)}
            class="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    </Fragment>
  );
};

export default UserTableRow;
