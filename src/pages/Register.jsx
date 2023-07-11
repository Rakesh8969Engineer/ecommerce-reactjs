import React, { Component } from "react";
import Annoucne from "../components/Annoucne";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
export default class Register extends Component {
  //style
  inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 min-w-0";

  buttonStyle =
    "mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 ease-linear duration-200";
  activeButtonStyle =
    " hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] cursor-pointer";
  disableButtonStyle = " opacity-50";
  //states
  state = {
    first: "",
    last: "",
    email: "",
    pass: "",
    confirm: "",
    errors: {
      confirm: false,
    },
  };

  checkPass = () => {
    if (this.state.pass === this.state.confirm) {
      this.setState({ ...this.state, errors: { confirm: false } });
    } else {
      this.setState({ ...this.state, errors: { confirm: "Not Same" } });
    }
  };
  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields }, this.checkPass);
  };

  render() {
    return (
      <>
        <Annoucne />

        <Navbar />
        <div className="flex justify-center w-[100%] h-[100vh] mobile:h-[60vh] bg-[#b892f7] ">
          <div className="flex flex-col absolute top-[20%] shadow-lg border-silver border-[2px] bg-white rounded-lg p-5 mobile:w-[90%]">
            <text className="text-2xl text-center  ">REGISTER</text>

            {/* First Name Last Name */}
            <div className="flex mt-7 w-auto">
              <input
                className={this.inputStyle + ` mr-3`}
                name="first"
                type="text"
                placeholder="First Name"
                onChange={this.handleChange}
                value={this.state.first}
                required
              />
              <input
                className={this.inputStyle}
                name="last"
                type="text"
                placeholder="Last Name"
                onChange={this.handleChange}
                value={this.state.last}
              />
            </div>

            {/* Email */}
            <input
              className={this.inputStyle + ` mt-7 mobile:w-[100%]`}
              name="email"
              type="email"
              placeholder="Email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            />

            {/* Password */}
            <div className="flex mt-7">
              <input
                className={this.inputStyle + ` mr-3`}
                name="pass"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.pass}
                required
              />
              <input
                className={this.inputStyle}
                name="confirm"
                type="password"
                placeholder="Confirm Password"
                onChange={this.handleChange}
                value={this.state.confirm}
                required
              />
            </div>
            <div className="flex justify-center">
              <span className="flex-1 mr-3"></span>
              <span className="flex-1 text-red-500">
                {this.state.errors.confirm}
              </span>
            </div>

            {/* Submit button */}
            <input
              type="button"
              className={
                this.state.errors.confirm
                  ? this.buttonStyle + this.disableButtonStyle
                  : this.buttonStyle + this.activeButtonStyle
              }
              value="Sign up"
            />

            <div className="flex justify-between  mobile:flex-col">
              <Link to="/">
                <p className="underline text-blue-800">Go to Home Page</p>
              </Link>

              <Link to="/log-in">
                <p>
                  have an Account ?
                  <span className="underline text-blue-800">Sign-in</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* <NewsLetter/> */}
        <Footer />
      </>
    );
  }
}
