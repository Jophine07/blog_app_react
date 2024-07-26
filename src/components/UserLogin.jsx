import React, { useState } from 'react'

const UserLogin = () => {
    const[data,setData]=useState(
        {
            "email":"",
            "password":""
        }
    )
        const inputhandler=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        const readvalue=()=>{
            console.log(data)
            axios.post("",data).then(
                (response)=>{
                    console.log(response.data)
                    if(response.data.status=="success")
                        {
                        alert("login success")
                        }
                    else{
                        alert("login failed")
                    }
                }
            )
        }
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
                                    <input type="email" class="form-control" id="floatingInput" name="email" value={data.email} onChange={inputhandler} placeholder="name@example.com"/>
                                        <label for="floatingInput">Email address</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div class="form-floating">
                                    <input type="password" name="password" value={data.password} onChange={inputhandler} class="form-control" id="floatingPassword" placeholder="Password"/>
                                        <label for="floatingPassword">Password</label>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <center>
                                    <button className="btn btn-success" onClick={readvalue}>Login</button>
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