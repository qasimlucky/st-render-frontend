import React from "react";
import { useState,useEffect } from "react";
import { useLocation} from 'react-router-dom';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer";
import axios from "axios";
function SignUp() {
          const [data, setData] = useState({})

        const location = useLocation();
        const Rdata = location.state.sendData
        console.log("this is Rdata")
        console.log(Rdata)


        function upload (e){
          const newdata = {...data}
          newdata[e.target.id] = e.target.value
          newdata["phone_number"] = Rdata
          setData(newdata)
          console.log(newdata)
          }


          function submit(e){
            console.log("this is send dataaaaa")
            const sendData = data
            //console.log(sendData)
            console.log("this is submit")
            console.log(data)
                e.preventDefault();
                axios
                .post("/user/add",data,{
                })
                .then(res =>{
                  alert("updated")
                  //console.log(res.data)
                })
          }

          
         return (
          <>
           <Header/>

<div class="stv-signup" id="app">
    <section class="section ">
        <div class="sign-img"  style={{backgroundImage:`url("https://lifeatthemovies.com/wp-content/uploads/2017/09/2000-672x372.png")`}}>
        <div class="container">
        <div class="row signup-box">
          <div class="signup-box-inner">
            <div class="card card-primary web-bg" >
              <h3 class="form-group col-12 signup-h3">Sign Up</h3>
              
              <div class="card-body">
                <form onSubmit = {(e)=>submit(e)}  method="HTTP_METHOD" encType="multipart/form-data">
                  {/* <div class="row">
                    <div class="form-group col-12" >
                      <input id="fullName" type="text"  class="form-control" name="full_name"  placeholder="Full Name"  style={{backgroundColor: "#1d1d41", border:"#1d1d41"}} />
                    </div>
                    
                  </div> */}
                    
                  {/* <div class="row">
                    <div class="form-group col-12">
                      <input id="email" type="email"  class="form-control" name="email"  placeholder="Email"   style={{backgroundColor: "#1d1d41", border:"#1d1d41"}}/>
                    </div>
                    
                  </div> */}
                  <div class="row">
                    <div class="form-group col-12">
                    <input onChange = {(e) =>upload(e)} id="dob" type="date" value="date" placehoder ="D.O.E" class="form-control input"></input>
                    </div>
                  </div>
                  {/* <div class="row">
                    <div class="form-group col-12">
                      <input id="username" type="text"  class="form-control" name="username"  placeholder="User Name"   style={{backgroundColor: "#1d1d41", border:"#1d1d41",color:"grey"}}/>
                    </div>
                    
                  </div>  */}
                  <div class="row">
                    <div class="form-group col-12">
                      <select onChange = {(e) =>upload(e)} id="gender" name="choice" class="form-control select-gender">
                        <option class="option-gender" value="second" disabled selected>Gender</option>
                        <option class="option-gender"  value="male">Male</option>
                        <option class="option-gender"  value="female">Female</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-12">
                      <select onChange = {(e) =>upload(e)} id="nationality" name="choice" class="form-control select-gender">
                        <option class="option-gender" value="second" disabled selected>Country</option>
                        <option class="option-gender" value="Pakistan">Pakistan</option>
                        <option class="option-gender" value="India">India</option>
                      </select>
                    </div>
                  
                  </div>
                  <div class="row">
                    <div class="form-group col-12">
                        <input onChange = {(e) =>upload(e)} id="password" type="password" name="password"   class="form-control input" data-indicator="pwindicator" placeholder="Password"/>
                      
                    </div>
                  </div>

                  <div class="row">
                  {/* <div class="form-group col-2"></div> */}
                    <div class="form-group col-12 signup-btn-box">
                     <button  type="submit" class="btn btn-lg btn-block">
                          Sign Up
                        </button>   
                        </div>
                        
                        <div class="form-group col-2">
                        </div>
                  </div>
                  <div class="signup-accept">
                    <input type="checkbox"/>
                    <label>I accept
                      <a> Terms and conditions</a>
                    </label>
                  </div>
                  <div >
                    <p class="already-account">Alread have an account? 
                      <a> Sign In</a>
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
export default SignUp;