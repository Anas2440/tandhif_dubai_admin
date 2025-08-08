import React from "react";
import "../UserForm/UserForm.css";
const UserForm = () => {
  return (
    <div className="user-forms-Main-div">
      <div className="form-first-flex">
        <div className="Card-flex-add">
          <div className="form-control-flexable">
            <span className="Full_name_form_span">Full Name</span>
            <div class="col-sm-9 text-secondary">
              <input type="text" class="form-control" value="John Doe" />
            </div>
          </div>
          <div className="form-control-flexable">
            <span className="Full_name_form_span">Email</span>
            <div class="col-sm-9 text-secondary">
              <input
                type="email"
                class="form-control"
                value="john@example.com"
              />
            </div>
          </div>
          {/* <div className="form-control-flexable">
            <span className="Full_name_form_span">Phone</span>
            <div class="col-sm-9 text-secondary">
              <input type="text" class="form-control" value="(320) 380-4539" />
            </div>
          </div> */}
          <div className="form-control-flexable">
            <span className="Full_name_form_span">Mobile</span>
            <div class="col-sm-9 text-secondary">
              <input type="text" class="form-control" value="(320) 380-4539" />
            </div>
          </div>
          <div className="form-control-flexable">
            <span className="Full_name_form_span">Address</span>
            <div class="col-sm-9 text-secondary">
              <input
                type="text"
                class="form-control"
                value="Bay Area, San Francisco, CA"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-sm-3"></div>
            {/* <div class="col-sm-9 text-secondary">
              <input
                type="button"
                class="btn btn-primary px-4"
                value="Save Changes"
              />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
