import { useState,useEffect } from "react";
import { Link,useNavigate } from 'react-router-dom';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
import axios from "axios";

function SignUpOtp() {
      const [data, setData] = useState({
        phoneNumber : "78979897879",
    })
    function upload (e){
      const newdata = {...data}
      newdata[e.target.id] = e.target.value
      setData(newdata)
      console.log(newdata)
      }



    let navigate = useNavigate();
     
      function submit(e){

        console.log("this is send dataaaaa")
        const sendData = data
        //console.log(sendData)
        console.log("this is submit")
        console.log(data)
            e.preventDefault();
            axios
            .post("/otp/send",data,{
            })
            .then(res =>{
              alert("updated")
              //console.log(res.data)
            })

            navigate("/signupotpverify",{state:{sendData:sendData}})
      
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
                  <form  onSubmit = {(e) =>submit(e)}  method="HTTP_METHOD" encType="multipart/form-data">
                    <div class="row">
                      <div class="form-group col-12">
                        <input onChange = {(e) =>upload(e)} id="phoneNumber" type="text" class="form-control input" placeholder="number"/>
                      </div>
                    </div>

                    <div class="row">
                      <div class="form-group col-12 signup-btn-box">
                      <button  type="submit" class="btn btn-lg btn-block">
                            Send otp
                          </button>   
                          </div>
                          
                          <div class="form-group col-2">
                          </div>
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
export default SignUpOtp;