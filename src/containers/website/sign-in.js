import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function SignIn() {
  const [data, setData] = useState({})
  
  let navigate = useNavigate();
  
  function upload (e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
    }

    function submit(e){
      console.log("this is send dataaaaa")
      //console.log(sendData)
      console.log("this is submit")
      console.log(data)
          e.preventDefault();
          axios
          .post("https://salomtv-backend.onrender.com/user/login",data,{
          })
          .then(res =>{
            alert(res.data)
            if(res.data == "user"){
              navigate("/home")
            }else{
              navigate("/signin")
            }
            //console.log(res.data)
          })
    }
  
         return (
          <>
           <Header/>
   {/* stv-signin SECTION STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

  <div class="stv-signin" id="app">
    <section class="section">
      <div class="sign-img"  style={{backgroundImage:`url("https://lifeatthemovies.com/wp-content/uploads/2017/09/2000-672x372.png")`}}>
        <div class="container" >
          <div class="row signin-box">
            <div class="signin-box-inner">
              <div class="card card-primary web-bg" >
                <h3 class="form-group col-12 signin-h3">
                  Sign In
                </h3>
                
                <div class="card-body">
                  <form onSubmit = {(e)=>submit(e)}  method="HTTP_METHOD" encType="multipart/form-data">

                    <div class="row">
                      <div class="form-group col-12">
                        <input onChange = {(e) =>upload(e)} id="phone_number" type="text"  class="form-control input" name="phone_number"  placeholder="Email or Phone number"/>
                      </div>
                    </div> 

                    <div class="row">
                      <div class="form-group col-12">
                        <div class="input-group-prepend" >
                          <input onChange = {(e) =>upload(e)} id="password" type="password" name="password"   class="form-control input"  placeholder="Password"/>
                        </div>
                        <p class="signin-forgot">Forgot your password</p>
                      </div>
                    </div>

                    <div class="row">
                      {/* <div class="form-group col-2"></div> */}
                      <div class="form-group col-12 signin-btn-box">
                        <button  type="submit" class="btn btn-lg btn-block">
                          Sign In
                        </button>   
                      </div>
                      <div class="form-group col-2"></div>
                    </div>

                    <div class="signin-rem">
                      <input type="checkbox" value="isRememberMe" id="rememberMe"></input> 
                      <label>Remember me</label>
                    </div>

                    <div class="signin-signup">
                      <p>
                        Don't have an account? 
                        <a> Sign up</a><br></br> 
                      </p>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <WebFooter/>  
          </>
         );
      }
export default SignIn;