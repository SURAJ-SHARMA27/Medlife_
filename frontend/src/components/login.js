import React from 'react'
import { useRef } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom'


const Login = () => {
  const formRef=useRef(null)
  const history = useHistory();
  const handleSubmit=(e)=>{
e.preventDefault();
const formdata=new FormData(formRef.current);
// console.log(formdata)
var object = {};
formdata.forEach(function(value, key){
    object[key] = value;
});
console.log(object)
// axios.post("localhost:8080/signup",object)



axios({
  method:"POST",
  url:"http://localhost:9080/login",
  data:object,
}).then((res)=>res.data).then((res)=>{
  if(res==="status working")
  {
    history.push('/description');
  }
  else if(res==="not working")
  {
    alert('Incorrect email and password');
  }
}).catch((e)=>{
  console.log(e)
})





  }
  return (
    <>
    <section className="background-radial-gradient overflow-hidden">
    <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" style={{zIndex:"10"}}>
        <h1 className="my-5 display-5 fw-bold ls-tight" style={{color: "hsl(218, 81%, 95%)"}}>
         A Heartly Welcome to <br />
          <span style={{color: "hsl(218, 81%, 75%)"}}>Medlife Pharmacy</span>
        </h1>
        <p className="mb-4 opacity-70" style={{color: "hsl(218, 81%, 85%)"}}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Temporibus, expedita iusto veniam atque, magni tempora mollitia
          dolorum consequatur nulla, neque debitis eos reprehenderit quasi
          ab ipsum nisi dolorem modi. Quos?
        </p>
      </div>

      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
        <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
        <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <form method="POST"  onSubmit={handleSubmit} ref={formRef} >
        
              {/* <!-- Email input --> */}
            
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" placeholder='Email address' className="form-control" name="email" />
                <label className="form-label" htmlFor="form3Example3"></label>
              </div>

              {/* <!-- Password input --> */}
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" placeholder='Password' className="form-control" name="password" />
                <label className="form-label" htmlFor="form3Example4"></label>
              </div>

              {/* <!-- Checkbox --> */}
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" name="newsletter"  />
                <label className="form-check-label" htmlFor="form2Example33">
                  Subscribe to our newsletter
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit"  /*onClick={()=>{history.push("/description")}} */ className="btn btn-danger btn-block mb-4 mx" >
                LOGIN
              </button>

              {/* <!-- Register buttons --> */}
              <div className="text-center">
                <p>or sign up with:</p>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter"></i>
                </button>

                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    
    </>
  )
}

export default Login