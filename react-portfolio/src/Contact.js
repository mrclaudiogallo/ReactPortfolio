import React from 'react';

const Contact = () => {
    return (
    <div className="Contact">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h1>Contact Me</h1>
                </div>
                <div className="col-sm-6"></div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div id="divide"></div>
                </div>
            </div>
        </div>
        <br />
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <form>
                    <div className="form-group">
                    <label for="exampleInputPassword1">Name</label>
                    <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    ></textarea>
                </div>
                </form>
                </div>
            </div>
            </div>
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <button type="button" className="btn btn-dark">
                    SUBMIT
                    </button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Contact;