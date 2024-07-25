import React from 'react'

const UserLogin = () => {
    return (
        
        <div>
            <center><h1>Login Page</h1></center>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                                        <label for="floatingPassword">Password</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-success">Login</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserLogin