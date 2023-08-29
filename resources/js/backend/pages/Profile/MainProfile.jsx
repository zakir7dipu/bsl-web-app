import React from 'react';

function MainProfile({user}) {
    return (
        <div className="col-lg-5 col-xl-4">
            <div className="card">
                <div className="card-body">
                    <div className="media align-items-center mb-4">
                        <img className="mr-3" src={user?.avatar} width="80" height="80" alt=""/>
                        <div className="media-body">
                            <h3 className="mb-0">{user?.name}</h3>
                            <p className="text-muted mb-0">Admin</p>
                        </div>
                    </div>

                    <h4>About Me</h4>
                    <p className="text-muted">{user?.abouts}</p>
                    <ul className="card-profile__info">
                        <li className="mb-1"><strong className="text-dark mr-4">Mobile</strong>
                            <span>{user?.phone}</span></li>
                        <li><strong className="text-dark mr-4">Email</strong> <span>{user?.email}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainProfile;
