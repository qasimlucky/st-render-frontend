import React from "react";
import { useState,useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import Modal from 'react-modal';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 

function UserPerfile() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [isshow, setIsShow] = useState(true)
  const [isshowinput, setIsShowInput] = useState(false)
  const [data, setData] = useState({})

  function upload (e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(newdata)
    }

    function submit(e){
      console.log("this is submit")
      console.log(data)
          e.preventDefault();
          axios
          .post("https://salomtv-backend.onrender.com/user/edit",data,{
          })
          .then(res =>{
            alert("updated")
            //console.log(res.data)
          })
    }

      function openForm() {
        /* window.location.reload(false); */
        setIsShowInput(true);
            //setIsShown(false)  
      } 
      function closeForm() {
        /* window.location.reload(false); */
        setIsShowInput(false);
            //setIsShown(false)  
      }
       return (
      < >
                    
        {/* {languagesate && ( */}
          <div class="stv-profile web-bg-color">
                      

           {isshow && (<Header/>)}
                
            <div class = "user-perfile profile-box">
                 
              <div class="profile-p1">
                <h3 class= "profile-p1-h3 text-color">
                  {/* {languagedata.account_setting} */}
                  Account Setting
                </h3>
              </div>
              <form onSubmit = {(e)=>submit(e)}  method="HTTP_METHOD" encType="multipart/form-data">     
                <div class="profile-p2">
                  <div class="profile-p2p1 stv-profile-p1">
                    <div class="p2p1-edit">
                      <div class="p2p1-edit-box">
                        <a  class="p2p1-edit-btn" href= "">
                          {/* {languagedata.edit} */}
                          Edit
                        </a>
                      </div>
                    </div>
                    <div  class="p2p1-pic">
                      <div class="p2p1-pic-box form-group col-8">
                        <img class="p2p1-pic-img rounded-circle" alt="image" src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1" />
                      </div>
                    </div>   
                    <div class="p2p1-name">
                      <div class="p2p1-name-box">
                        <h3 class="p2p1-name-h3">
                          John Doe
                        </h3>
                      </div>
                      {isshowinput && (
                        <input onChange = {(e) =>upload(e)} id="first_name" type="text" name="first_name"   class="form-control input" placeholder="first_name"/>
                      )}
                      
                    </div>
                    <p class="p2p1-about">
                      Hello! John doe, <br/> this is all about you. You can edit it any time and can save it easily. 
                      You also can update your payment info and change your plan.
                    </p>
                  </div>

                  <div class="profile-p2p2">
                    <div class="p2p2-hm">
                      <h3 class="p2p2-hm-h3">
                        {/* {languagedata.personal_details} */}
                        Personal Details
                      </h3>
                    </div> 
                    <div class="p2p2-main">
                      <div class="p2p2-box row">
                        <div class="box-info form-group col-6 content-user-profile">
                          <label class="info-label">
                            {/* {languagedata.email} */}
                            Email
                          </label>
                          {isshowinput ? (
                          <div class="form-group col-12">
                              <input onChange = {(e) =>upload(e)} id="email" type="email" name="email"   class="form-control input" data-indicator="pwindicator" placeholder="Email"/>
                          </div>
                          ) : (
                            <div><h3 class="info-h3"> johndoe@gmail.com</h3></div>
                          )}
                        </div>
                        
                        <div class="form-group col-4" ></div>
                        {isshowinput ? (
                        <div class="box-change form-group col-2">
                          <a onClick={closeForm} class="change-btn">
                            {/* {languagedata.change} */}
                           Save
                          </a>
                        </div>
                        ) : (
                          <div class="box-change form-group col-2">
                          <a onClick={openForm} class="change-btn">
                            {/* {languagedata.change} */}
                           Change
                          </a>
                        </div>
                        )}

                        <div class="box-change2 form-group col-12">
                        {isshowinput ? (
                          <a onClick={closeForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                           Save
                          </a>
                          ) : (
                            <a onClick={openForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Change
                            </a>
                            )}
                        </div>
                      </div> 
                      <div class="p2p2-box row">
                        <div class="box-info form-group col-6 content-user-profile">
                          <label class="info-label">
                            {/* {languagedata.Password} */}
                            Password
                          </label>
                          
                          {isshowinput ? (
                          <div class="form-group col-12">
                              <input onChange = {(e) =>upload(e)} id="password" type="password" name="password"   class="form-control input" data-indicator="pwindicator" placeholder="Password"/>
                          </div>
                          ) : (
                          <div><h3 class="info-h3">*******</h3></div>
                          )}
                        </div>
                          
                        <div class="form-group col-4" ></div>
                        {isshowinput ? (
                        <div class="box-change form-group col-2">
                          <a onClick={closeForm} class="change-btn">
                            {/* {languagedata.change} */}
                           Save
                          </a>
                        </div>
                        ) : (
                          <div class="box-change form-group col-2">
                          <a onClick={openForm} class="change-btn">
                            {/* {languagedata.change} */}
                           Change
                          </a>
                        </div>
                        )}
                        <div class="box-change2 form-group col-12">
                        {isshowinput ? (
                          <a onClick={closeForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                           Save
                          </a>
                          ) : (
                            <a onClick={openForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Change
                            </a>
                            )}
                        </div>
                      </div> 
                      <div class="p2p2-box row">
                        <div class="box-info form-group col-6 content-user-profile">
                          <label class="info-label">
                            {/* {languagedata.phone_number} */}
                            Phone Number
                          </label>
                          {isshowinput ? (
                          <div class="form-group col-12">
                              <input onChange = {(e) =>upload(e)} id="phone_number" type="text" name="phone_number"   class="form-control input" data-indicator="pwindicator" placeholder="Phone Number"/> 
                          </div>
                          ) : (
                            <div><h3 class="info-h3">+92 300 1234 562</h3></div>
                          )}
            
                        </div>
                        <div class="form-group col-4" ></div>
                        {isshowinput ? (
                        <div class="box-change form-group col-2">
                          <a onClick={closeForm} class="change-btn">
                            {/* {languagedata.change} */}
                            Save
                          </a>
                        </div>
                        ) : (
                          <div class="box-change form-group col-2">
                          <a onClick={openForm} class="change-btn">
                            {/* {languagedata.change} */}
                            Change
                          </a>
                        </div>
                        )}
                        <div class="box-change2 form-group col-12">
                        {isshowinput ? (
                          <a onClick={closeForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Save
                          </a>
                          ) : (
                            <a onClick={openForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Change
                            </a>
                            )}
                        </div>
                      </div> 
                      <div class="p2p2-box row">
                        <div class="box-info form-group col-6 content-user-profile">
                          <label class="info-label">
                            {/* {languagedata.date_of_birth} */}
                            Date of Birth
                          </label>
                          {isshowinput ? (
                          <div class="form-group col-12">
                              <input onChange = {(e) =>upload(e)} id="dob" type="text" name="dob"   class="form-control input"  placeholder="D.O.B"/>
                          </div>
                          ) : (
                            <div><h3 class="info-h3">08-03-1995</h3></div>
                          )}
                          
                        </div>
                        <div class="form-group col-4" ></div>
                        {isshowinput ? (
                        <div class="box-change form-group col-2">
                          <a onClick={closeForm} class="change-btn">
                            {/* {languagedata.change} */}
                            Save
                          </a>
                        </div>
                        ) : (
                          <div class="box-change form-group col-2">
                          <a onClick={openForm} class="change-btn">
                            {/* {languagedata.change} */}
                           Change
                          </a>
                        </div>
                        )}
                        <div class="box-change2 form-group col-12">
                        {isshowinput ? (
                          <a onClick={closeForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Save
                          </a>
                          ) : (
                            <a onClick={openForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Change
                            </a>
                            )}
                        </div>
                      </div> 
                      <div class="p2p2-box row">
                        <div class="box-info form-group col-6 content-user-profile">
                          <label class="info-label">
                            {/* {languagedata.language} */}
                            Language
                          </label>
                          {isshowinput ? (
                          <div class="form-group col-12">
                              <input onChange = {(e) =>upload(e)} id="language" type="text" name="language"   class="form-control input"  placeholder="Language"/>
                          </div>
                          ) : (
                            <div><h3 class="info-h3">English</h3></div>
                          )}
                        </div>
                        <div class="form-group col-4" ></div>
                        {isshowinput ? (
                        <div class="box-change form-group col-2">
                          <a onClick={closeForm} class="change-btn">
                            {/* {languagedata.change} */}
                            Save
                          </a>
                        </div>
                        ) : (
                          <div class="box-change form-group col-2">
                          <a onClick={openForm} class="change-btn">
                            {/* {languagedata.change} */}
                           Change
                          </a>
                        </div>
                        )}
                        <div class="box-change2 form-group col-12">
                        {isshowinput ? (
                          <a onClick={closeForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Save
                          </a>
                          ) : (
                            <a onClick={openForm} class="change-btn" href= "">
                            {/* {languagedata.change} */}
                            Change
                            </a>
                            )}
                        </div>
                      </div>
                      <div class="p2p2-hm">
                        <h3 class="p2p2-hm-h3">
                          {/* {languagedata.billing_details} */}
                          Billing Details
                        </h3>
                      </div> 
                      <div class="p2p2-box row">
                        <div class="box-info form-group col-6 content-user-profile">
                          <label class="info-label">
                            {/* {languagedata.your_next_billing_date_is} */}
                            Your next billing date is 19 september 2022
                          </label>
                        </div>
                        <div class="form-group col-2" ></div>
                        <div class="box-change form-group col-4">
                          <Link class="change-btn" to= "/pricingplan">
                            {/* {languagedata.update_payment_info} */}
                            Update Payment info
                          </Link>
                        </div>
                        <div class="box-change2 form-group col-12">
                          <a class="change-btn" href= "/pricingplan">
                            {/* {languagedata.update_payment_info} */}
                            Update Payment info
                          </a>
                        </div>
                      </div> 
                      <div class="membership row">
                        <div class="membership-box form-group col-6 content-user-profile">
                          <button class="membership-btn btn">
                            {/* {languagedata.cancel_membership} */}
                            Cancel Membership
                          </button>
                        </div>
                        <div class="form-group col-4" ></div>
                        <div class="form-group col-2"></div>
                      </div>
                      <div class="p2p2-hm">
                        <h3 class="p2p2-hm-h3">
                          {/* {languagedata.plan_details} */}
                          Plan Details
                        </h3>
                      </div>
                      <div class="p2p2-box row">
                        <div class="box-info form-group col-6 content-user-profile">
                          <label class="info-label">
                            premium
                          </label>
                        </div>
                        <div class="form-group col-2" ></div>
                        <div class="box-change form-group col-4">
                          <Link class="change-btn" to="/pricingplan">
                            {/* {languagedata.change_plan} */}
                            Change Plan
                          </Link>
                        </div>
                        <div class="box-change2 form-group col-12">
                          <a class="change-btn" to="/pricingplan">
                            {/* {languagedata.change_plan} */}
                            Change Plan
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </form>
            </div>
            {isshow && (<WebFooter/>)} 
          </div>
          </>
         );
      }
export default UserPerfile;