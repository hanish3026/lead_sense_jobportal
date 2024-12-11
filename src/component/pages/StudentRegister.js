import React, { useEffect, useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import Loader from "../com/Loader";
import '../css/form.css'
import Fotter from "../com/Fotter";
import PageHeader from "../com/PageHeader";
const StudentRegister = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        nav("/otp");
      }, 3000);
    }
  }, [loading, nav]);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [data, setData] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    flavor: null,
    flavorTwo: null,
  });

  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    numberError: false,
    passwordError: false,
    flavorError: false,
    flavorTwoError: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevData) => ({
      ...prevData,
      nameError: name === "name" && (!value || value[0] !== value[0].toUpperCase()),
      emailError: name === "email" && !value.includes("@"),
      numberError: name === "number" && value.length !== 10,
      passwordError: name === "password" && value.length < 8,
    }));
  }

  function handleSelectChange(name, selectedOption) {
    setData((prevState) => ({
      ...prevState,
      [name]: selectedOption,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const updatedErrors = {
      nameError: !data.name || data.name[0] !== data.name[0].toUpperCase(),
      emailError: !data.email.includes("@"),
      numberError: data.number.length !== 10,
      passwordError: data.password.length < 8,
      flavorError: !data.flavor,
      flavorTwoError: !data.flavorTwo,
    };
    setErrors(updatedErrors);
    const hasNoErrors = !Object.values(updatedErrors).includes(true);
    if (hasNoErrors) {
      setLoading(true);
    }
  }

  return (
    <div>
      
    <div className="container mb-5 p-5">
    <PageHeader/>
      {loading ? <Loader /> : null}
      <div className="card shadow p-5 mt-5">
        <form onSubmit={handleSubmit}>
          <h3 className="text-danger text-center mb-5">Student Registration</h3>
          
          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <input
                name="name"
                placeholder="Name"
                type="text"
                className="form-control"
                value={data.name}
                onChange={handleChange}
              />
              {errors.nameError && (
                <small className="text-danger d-flex mt-2">Please enter a valid name</small>
              )}
            </div>
            <div className="col-12 col-md-6">
              <input
                name="email"
                placeholder="Email"
                type="email"
                className="form-control"
                value={data.email}
                onChange={handleChange}
              />
              {errors.emailError && (
                <small className="text-danger d-flex mt-2">Please enter a valid email</small>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <input
                name="number"
                placeholder="Number"
                type="text"
                className="form-control"
                value={data.number}
                onChange={handleChange}
              />
              {errors.numberError && (
                <small className="text-danger d-flex mt-2">Please enter a valid number</small>
              )}
            </div>
            <div className="col-12 col-md-6">
            <Select
      options={options}
      value={data.flavor}
      onChange={(selectedOption) =>
        handleSelectChange("flavor", selectedOption)
      }
      placeholder="Select Flavor"
      className="w-100"
      styles={{
        control: (base) => ({
          ...base,
          textAlign: "left",
        }),
        placeholder: (base) => ({
          ...base,
          textAlign: "left",
        }),
      }}
    />
              {errors.flavorError && (
                <small className="text-danger d-flex mt-2">Please select a valid option</small>
              )}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <input
                name="password"
                placeholder="Password"
                type="password"
                className="form-control"
                value={data.password}
                onChange={handleChange}
              />
              {errors.passwordError && (
                <small className="text-danger d-flex mt-2">Password must be at least 8 characters</small>
              )}
            </div>
            <div className="col-12 col-md-6">
            <Select
      options={options}
      value={data.flavorTwo}
      onChange={(selectedOption) =>
        handleSelectChange("flavorTwo", selectedOption)
      }
      placeholder="Select Another Flavor"
      className="w-100"
      styles={{
        control: (base) => ({
          ...base,
          textAlign: "left",
        }),
        placeholder: (base) => ({
          ...base,
          textAlign: "left",
        }),
      }}
    />
              {errors.flavorTwoError && (
                <small className="text-danger d-flex mt-2">Please select a valid option</small>
              )}
            </div>
          </div>

          <div className="text-center d-flex justify-content-md-end justify-content-center mt-4">
            <button type="submit" className=" btn btn-danger btn-lg ">
              Next
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>

  );
};

export default StudentRegister;
