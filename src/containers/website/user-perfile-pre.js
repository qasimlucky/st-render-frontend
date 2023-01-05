import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function UserPerfile() {
  const [languagedata, setLanguageData] = useState()
  const [languagesate, setLanguageSate] = useState(false)
  const lang= localStorage.getItem("key")
  useEffect(() => { 
    axios
    .post("/language/get",{
      keyword: "En"
  
    })
    .then(Response =>{
        setLanguageData(Response.data[0])
        setLanguageSate(true)
        console.log(Response.data[0])
  
        
      })
    .catch(err =>{
        console.log(err)
      })
      
    },[]);
      return (
      < >
        {languagesate && (
          <div class="stv-profile">
            <Header/>
            <div class = "user-perfile profile-box">    
              <div class="profile-p1" style={{width:"65%", margin:"auto"}}>
                <h3 class= "profile-p1-h3 text-color" style={{padding:"0 0 6px",fontFamily:'sans-serif'}}>
                  {languagedata.account_setting}
                </h3>
              </div>
                    
              <div class="profile-p2" style={{display:"flex", width :"67%",  margin :"auto",   position: "relative"}}>
                <div class="profile-p2p1 stv-profile-p1" style={{height:"275px",width: "30%",padding:"1%",  position: "relative" , float : "left",marginTop:"0 !important", margin:"auto", backgroundColor: "#0D0D3F"}}>
                  <div class="p2p1-edit" style= {{ fontSize: "initial", height :"10% !important", width : "100%"}}>
                    <div class="p2p1-edit-box" style={{textAlign:"right"}}>
                      <a class="p2p1-edit-btn" href= "" style={{ color:"red", textAlign:"right",fontFamily:'sans-serif'}}>
                        {languagedata.edit}
                      </a>
                    </div>
                  </div>
                  <div  class="p2p1-pic" style= {{ fontSize: "initial", height : "39%"}}>
                    <div class="p2p1-pic-box form-group col-8" style={{height: "100%" , width:"50%", margin: "auto"}}>
                      <img class="p2p1-pic-img" alt="image" src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1" className="rounded-circle" style={{height: "100%" }} />
                    </div>
                  </div>   
                  <div class="p2p1-name" style={{ color:"white" , textAlign:"center", paddingTop : "5px"}}>
                    <div class="p2p1-name-box">
                      <h3 class="p2p1-name-h3" style= {{color: "white",fontFamily:'sans-serif'}}>
                        John Doe
                      </h3>
                    </div>
                  </div>
                  <p class="p2p1-about" style={{color :"white", padding: " 2px 12px", textAlign: "center",fontFamily:'sans-serif',fontSize:"small", lineHeight:"22px"}}>
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>

                <div class="profile-p2p2" style={{height:"600px", width: "65%", margintop:"0",float : "left",position: "relative", margin:"auto" ,padding : "10px 20px" , backgroundColor: "#0D0D3F"}}>
                  <div>
                    <h3 style={{color: "white", borderBottom:"1px solid white" , padding: "10px 0",fontFamily:'sans-serif'}}>
                      {languagedata.personal_details}
                    </h3>
                  </div> 
                  <div>
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile " style={{color:"white"}}>
                        <label style={{color:"white",fontFamily:'sans-serif'}}>{languagedata.email}</label>
                        <br></br>johndoe@gmail.com
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2" style={{textAlign:"end"}} >
                        <a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>
                          {languagedata.change}
                        </a>
                      </div>
                    </div> 
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile" style={{color:"white",fontFamily:'sans-serif'}}>
                        <label style={{color:"white"}}>{languagedata.Password}</label>
                        <br></br>*******
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2" style={{textAlign:"end"}} >
                        <a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>
                          {languagedata.change}
                        </a>
                      </div>
                    </div> 
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile" style={{color:"white"}}>
                        <label style={{color:"white",fontFamily:'sans-serif'}}>{languagedata.phone_number}</label>
                        <br></br>+92 300 1234 562
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2" style={{textAlign:"end"}} >
                        <a style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>
                          {languagedata.change}
                        </a>
                      </div>
                    </div> 
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile" style={{color:"white"}}>
                        <label style={{color:"white",fontFamily:'sans-serif'}}>{languagedata.date_of_birth}</label>
                        <br></br>08-03-1995
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2" style={{textAlign:"end"}}>
                        <a style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>
                          {languagedata.change}
                        </a>
                      </div>
                    </div> 
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile" style={{color:"white"}}>
                        <label style={{color:"white",fontFamily:'sans-serif'}}>{languagedata.language}</label>
                        <br></br>English
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2" style={{textAlign:"end"}} >
                        <a style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>
                          {languagedata.change}
                        </a>
                      </div>
                    </div>
                    <div>
                      <h3 style={{color: "white", borderBottom:"1px solid white" , padding: "10px 0",fontFamily:'sans-serif'}}>
                        {languagedata.billing_details}
                      </h3>
                    </div> 
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile" style={{color:"white"}}>
                        <label style={{color:"white",fontFamily:'sans-serif'}}>
                          {languagedata.your_next_billing_date_is} 19 september 2022
                        </label>
                      </div>
                      <div class="form-group col-3" ></div>
                      <div class="form-group col-3" style={{textAlign:"end"}} >
                        <a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>
                          {languagedata.update_payment_info}
                        </a>
                      </div>
                    </div> 
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile" style={{color:"white",fontFamily:'sans-serif'}}>
                        <button class = "btn"  style={{backgroundColor:"#D51C58",borderRadius:"20px",color:"whitesmoke",padding:"8px 15px",fontWeight:"bold"}}>
                          {languagedata.cancel_membership}
                        </button>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2" style={{textAlign:"end"}}></div>
                    </div>
                    <div>
                      <h3 style={{color: "white", borderBottom:"1px solid white" , padding: "10px 0",fontFamily:'sans-serif'}}>
                        {languagedata.plan_details}
                      </h3>
                    </div>
                    <div class="row" style={{fontSize: "initial"}}>
                      <div class="form-group col-6 content-user-profile" style={{ color:"white",fontFamily:'sans-serif'}}>
                        <label style={{color:"white"}}>
                          premium
                        </label>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2" style={{textAlign:"end"}} >
                        <a href= "" style={{color:"red",fontFamily:'sans-serif',fontSize:"small"}}>
                          {languagedata.change_plan}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>


            <WebFooter/> 
          </div>
          )} 
          </>
         );
      }
export default UserPerfile;