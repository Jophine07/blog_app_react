import React, { useState } from 'react'

const UserSignUp = () => {
  const [data, setData] = useState(
    {
      "name":"",
      "dob":"",
      "gender":"",  
      "email": "",
      "password": ""
    }
  )

  const inputhandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const readvalue = () => {
    console.log(data)
    axios.post("", data).then(
      (response) => {
        console.log(response.data)
        if (response.data.status == "success") {
          alert("Login Success")
        }
        else {
          alert("Login failed")
        }
      }
    )
  }

  return (
    <div>
      <h1> <center>SIGN UP PAGE</center></h1>
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Name:</label>
                <input type="text"name="name" value={data.name} onChange={inputhandler} className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Enter your date of birth</label>
                <input type="date" name="dob" value={data.value} onChange={inputhandler} id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Enter your gender</label>
                <input type="text" name="gender" value={data.gender} onChange={inputhandler} className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Enter your email</label>
                <input type="email" name="email" value={data.email} onChange={inputhandler} id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Enter a Password</label>
                <input type="password" name="password" value={data.password} onChange={inputhandler} id="" className="form-control" />
              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <center>
                  <button className="btn btn-success" onClick={readvalue}>Submit</button>
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default UserSignUp