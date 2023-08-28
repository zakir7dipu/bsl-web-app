import React from 'react';

function ResetPassword(props) {
    return (
        <div className="card">
            <div className="card-header">
                <h4>Password Reset</h4>
            </div>
            <div className="card-body">
                <form action="#" className="form-profile">
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" name="password" type="password"/>
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input className="form-control" name="confirm_password" type="password"/>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary px-3">Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
