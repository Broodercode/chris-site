import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      company: "",
      email: "",
      message: ""
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("/.netlify/functions/postmail", {
      // method: "POST",

      // body: JSON.stringify(this.state),

      // fetch('localhost:9000/postmail',{
      method: "POST",
      headers: {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Headers':
        //  'Origin, X-Requested-With, Content-Type, Accept'
      },
      //       headers: {
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/json'
      // },
      body: JSON.stringify(this.state)
    })
      // .then(response => {
      //   console.log(response)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })

      .then(response => {
        if (response.ok === true) {
          alert("Message Sent.");
          this.resetForm();
        } else {
          console.log(response.ok === false);
          alert("Message failed to send.");
        }
        //   })
      })

      .catch(err => {
        console.log(err);
      });

    // fetch('localhost:9000/postmail',{
    //       method: "POST",
    //       body: JSON.stringify(this.state),
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //     }).then(
    //     (response) => (response.json())
    //      ).then((response)=>{
    //     if (response.status === 'success'){
    //       alert("Message Sent.");
    //       this.resetForm()
    //     }else if(response.status === 'fail'){
    //       alert("Message failed to send.")
    //     }
    //   })

    // axios({
    //   method: "POST",
    //   url: "localhost:9000/postmail",
    //   data: this.state
    // }).then((response) => {
    //   if (response.data.status === "success") {
    //     alert("Message sent.");
    //     this.resetForm()
    //   } else if (response.data.status === 'fail') {
    //     alert("Message failed to send")
    //   }
    // })

    //     const fetchMail = async () => await(await

    // fetchMail()

    // fetch('/',{
    //   method: "POST",
    //   headers: {

    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   body: encode({"form-name": "contact", ...this.state}),

    // })
    // .then(() => alert("Success!"))
    // .catch(error => alert(error))

    // e.preventDefault();
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "", company: "" });
  }
  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onCompanyChange(e) {
    this.setState({ company: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <section className="section-contact" id="contact">
        <div className="row">
          <div className="contact">
            <div className="contact__form">
              <form
                method="POST"
                className="form"
                onSubmit={this.handleSubmit.bind(this)}
                name="contact-form"
              >
                <div className="">
                  <h2 className="heading-secondary">
                    I would love to hear from you
                  </h2>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    name="form-name"
                    className="form__input"
                    id="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.onNameChange.bind(this)}
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Name{" "}
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    name="form-company"
                    className="form__input"
                    placeholder="Company name"
                    id="company"
                    value={this.state.company}
                    onChange={this.onCompanyChange.bind(this)}
                    required
                  />
                  <label htmlFor="company" className="form__label">
                    Company name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    name="form-email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>
                <div className="form__group">
                  <textarea
                    name="form-message"
                    className="form__comment"
                    id="comment"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                    required
                  ></textarea>
                  <label htmlFor="comment" className="form__label">
                    Message
                  </label>
                </div>
                <div className="form__group">
                  <button
                    type="submit"
                    value="submit"
                    className="btn btn--green"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
