import React, { Component } from "react";
import { Link } from "react-router-dom";
import Annoucne from "../components/Annoucne";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default class Login extends Component {
  //style
  inputStyle =
    "border-[2px] border-silver rounded-lg outline-[#8a4af3] p-2 focus:border-[#8a4af3] ease-linear duration-200 ";

  //states
  state = {
    email: "",
    pass: "",
  };

  handleChange = (evt) => {
    const fields = Object.assign({}, this.state);
    fields[evt.target.name] = evt.target.value;
    this.setState({ ...fields });
  };

  render() {
    return (
      <>
        <Annoucne />
        <Navbar />

        <div className="flex justify-center w-[100%] h-[100vh] mobile:h-[50vh] bg-[#b892f7]">
          <div className="flex flex-col absolute top-[30%]  mobile:absolute mobile:top-[15%] bg-white shadow-lg border-silver border-[2px] rounded-lg p-5 w-[40%] mobile:w-[90%]   ">
            <text className="text-2xl ">Log in</text>

            {/* First Name Last Name */}
            <div className="flex mt-7">
              {/* Email */}
              <input
                className={this.inputStyle + ` mt-2 w-[100%]`}
                name="email"
                type="email"
                placeholder="Email"
                onChange={this.handleChange}
                value={this.state.email}
                required
              />
            </div>
            {/* Password */}
            <div className="flex mt-7">
              <input
                className={this.inputStyle + ` w-[100%]`}
                name="pass"
                type="password"
                placeholder="Password"
                onChange={this.handleChange}
                value={this.state.pass}
                required
              />
            </div>
            {/* Submit button */}
            <input
              type="button"
              className="mt-5 flex justify-center bg-[#8a4af3] text-white font-medium rounded-md p-2 hover:bg-white hover:text-[#8a4af3] hover:scale-[1.0.5] hover:border-[2px] hover:shadow-md hover:border-[#8a4af3] ease-linear duration-200"
              value="Log in"
              disabled
            />

            <div className="flex justify-between  mobile:flex-col">
              <Link to="/">
                <p className="underline text-blue-800">Go to Home Page</p>
              </Link>

              <Link to="/register">
                <p>
                  Don't have an Account ?
                  <span className="underline text-blue-800">Sign-up</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}
