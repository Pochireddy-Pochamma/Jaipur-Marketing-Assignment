import { Component } from "react";
import Home from "../Home";

import "./index.css";

class Form extends Component {
  state = {
    firstName: "",
    phone: "",
    email: "",
    password: "",
    showNameErr: false,
    showMailErr: false,
    showPhoneErr: false,
    showPwdError: false,
    submitForm: false,
  };

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName();
    this.setState({ showNameErr: !isValidFirstName });
  };

  validateFirstName = () => {
    const { firstName } = this.state;
    return firstName !== "";
  };

  onBlurEmail = () => {
    const isValidEmail = this.validateMail();
    this.setState({ showMailErr: !isValidEmail });
  };

  validateMail = () => {
    const { email } = this.state;
    return email !== "";
  };

  onBlurPhone = () => {
    const isValidPhone = this.validatePhone();
    this.setState({ showPhoneErr: !isValidPhone });
  };

  validatePhone = () => {
    const { phone } = this.state;
    return phone !== "";
  };

  onBlurPwd = () => {
    const isValidPwd = this.validatePwd();
    this.setState({ showPwdError: !isValidPwd });
  };

  validatePwd = () => {
    const { password } = this.state;
    return password !== "";
  };

  onChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  onChangePhone = (event) => {
    this.setState({ phone: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePwd = (event) => {
    this.setState({ password: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const isValidFirstName = this.validateFirstName();
    const isValidEmail = this.validateMail();
    const isValidPhone = this.validatePhone();
    const isValidPwd = this.validatePwd();
    if (isValidFirstName && isValidEmail && isValidPhone && isValidPwd) {
      this.setState({ submitForm: true });
    } else {
      this.setState({
        showNameErr: !isValidFirstName,
        showMailErr: !isValidEmail,
        showPhoneErr: !isValidPhone,
        showPwdError: !isValidPwd,
        submitForm: false,
      });
    }
  };

  render() {
    const {
      firstName,
      phone,
      email,
      password,
      showNameErr,
      showMailErr,
      showPhoneErr,
      showPwdError,
    } = this.state;
    return (
      <div className="app-container">
        <Home />
        <div>
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <input
              type="text"
              placeholder="Full Name"
              className="name-inp"
              value={firstName}
              onChange={this.onChangeFirstName}
              onBlur={this.onBlurFirstName}
            />
            {showNameErr && <p className="error-message">Required</p>}
            <input
              type="text"
              placeholder="Phone"
              className="name-inp"
              value={phone}
              onChange={this.onChangePhone}
              onBlur={this.onBlurEmail}
            />
            {showMailErr && <p className="error-message">Required</p>}
            <input
              type="Email"
              placeholder="Email"
              className="name-inp"
              value={email}
              onChange={this.onChangeEmail}
              onBlur={this.onBlurPhone}
            />
            {showPhoneErr && <p className="error-message">Required</p>}
            <input
              type="password"
              placeholder="Password"
              className="name-inp"
              value={password}
              onChange={this.onChangePwd}
              onBlur={this.onBlurPwd}
            />
            {showPwdError && <p className="error-message">Required</p>}
            <button type="submit" className="button">
              Signup
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
