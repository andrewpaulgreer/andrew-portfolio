import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/xknqvlqy"
        method="POST"
        className="box"
      >
        <div className="field has-text-centered"></div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control has-icons-left">
            <input
              type="email"
              className="input"
              placeholder="e.g. user@gmail.com"
              name="_replyto"
            />
            <span className="icon is-small is-left">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control has-icons-left">
            <input type="name" name="name" className="input" placeholder="Name" required />
            <span className="icon is-small is-left">
              <i className="fa fa-user"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control has-icons-left">
            <input
              type="message"
              name="message"
              className="input is-large"
              placeholder="message"
              required
            />
          </div>
        </div>
        {status === "SUCCESS" ? (
          <p>Thanks!</p>
        ) : (
          <button className="button is-success" type="submit">
            Submit
          </button>
        )}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
