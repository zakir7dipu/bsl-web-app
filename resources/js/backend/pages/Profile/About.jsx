import React from 'react';

function About(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Update Information</h4>
            </div>
            <div className="card-body">
                <form action="#" className="form-profile">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" name="name" placeholder="name" type="text"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" name="email" placeholder="email" type="email"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Phone</label>
                                <input className="form-control" name="phone" placeholder="phone" type="text"/>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Avatar</label>
                                <input className="form-control" name="avatar" type="file"/>
                            </div>
                        </div>

                    </div>
                    <div className="form-group">
                        <label>About</label>
                        <textarea className="form-control" name="textarea" id="textarea" cols="30" rows="2"
                                  placeholder="About"></textarea>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary px-3">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default About;
