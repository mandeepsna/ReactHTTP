import React, { useRef } from "react";

const Userform = (props) => {
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const password = useRef();
  const cpassword = useRef();
  const country = useRef();
  const city = useRef();
  const date = useRef();
  const gender = useRef();

  const formSubmitted = (event) => {
    event.preventDefault();
    const user = {
      firstname: fname.current.value,
      lasttname: lname.current.value,
      email: email.current.value,
      password: password.current.value,
      confirm: cpassword.current.value,
      country: country.current.value,
      city: city.current.value,
      date: date.current.value,
      gender: gender.current.value,
    };

    //  fname.current.value='';
    //  lname.current.value='';
    //  email.current.value='';
    //  password.current.value='';
    //  cpassword.current.value='';
    //  country.current.value='';
    //  city.current.value='';
    //  date.current.value='';
    //  gender.current.value='';

    props.createuser(user);
  };

  return (
    <>
      <h1 className="text-center">Create User</h1>
      <div
        className="  m-4 p-5 bg-primary rounded-5 mx-auto "
        style={{ width: "40%" }}
      >
        <div
          className=" d-flex justify-content-end text-light fs-3"
          style={{ cursor: "pointer" }}
          onClick={props.closeform}
        >
          X
        </div>
        <form onSubmit={formSubmitted}>
          <div>
            <input
              type="text"
              placeholder="First name"
              className="me-3 rounded-2"
              ref={fname}
            />
            <input
              type="text"
              placeholder="Last name"
              className="rounded-2"
              ref={lname}
            />
          </div>
          <div>
            <input type="email" placeholder="Email" ref={email} />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="me-3 rounded-2 "
              ref={password}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="rounded-2"
              ref={cpassword}
            />
          </div>
          <div>
            <select
              name="country "
              className="me-5 rounded-2"
              placeholder="Select Country"
              ref={country}
            >
              <option value="select">Select Country</option>
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
            <select name="city" className="rounded-2" ref={city}>
              <option value="select">Select City</option>
              <option value="Delhi">Delhi</option>
              <option value="Berlin">Berlin</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
            </select>
          </div>
          <div>
            <input
              type="date"
              placeholder="Date of Birth"
              className="me-4 rounded-2"
              ref={date}
            />
            <select name="gender" className="rounded-2 " ref={gender}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Transgender">Transgender</option>
            </select>
          </div>
          <button className="add-user-button btn btn-info mx-5 mt-5">
            Create User
          </button>
        </form>
      </div>
    </>
  );
};

export default Userform;
