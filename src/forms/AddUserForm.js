import React, { useState } from "react";


const AddUserForm = props => {
const initialFormState = { id: null, name: "", email: "",phonenumber:"",salary:""};
const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {
  const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };
const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

  return (
    <div>
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.email || !user.phonenumber || !user.salary)
          return;

        props.addUser(user);
        setUser(initialFormState);
      } }
    >
        <div className="col-xs-3">
          <label for="ex1">Name</label>
          <input className="form-control" id="ex1" type="text"
            name="name"
            value={user.name}
            onChange={handleInputChange} />
        </div>
        <div className="col-xs-3">
          <label>Email</label>
          <input class="form-control"
            type="text"
            name="email"
            value={user.email}
            onChange={handleInputChange} />
        </div>
        <div className="col-xs-3">
          <label>Phone Number</label>
          <input class="form-control"
            type="text"
            name="phonenumber"
            value={user.phonenumber}
            onChange={handleInputChange} />
        </div>
        <div className="col-xs-3">
          <label>Salary</label>
          <input class="form-control"
            type="text"
            name="salary"
            value={user.salary}
            onChange={handleInputChange} />
        </div><br/>
        &nbsp;&nbsp;<button class="btn btn-primary" data-toggle="modal" 
        data-target="#exampleModal" style={{ margin: "5px" }}>Add new Empolyee</button>
      </form>
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Sucess Window</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Submitted sucessfully !!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

      </div>
  );
};

export default AddUserForm;
