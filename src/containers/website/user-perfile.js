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
          .post("/user/edit",data,{
          })
          .then(res =>{
            alert("updated")
            //console.log(res.data)
          })
    }

      function openModal() {
        /* window.location.reload(false); */
            setIsOpen(true);
            setIsShow(false)
            //setIsShown(false)  
      }
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        //subtitle.style.color = '#f00';
      }
      function closeModal() {
        setIsOpen(false);
        setIsShow(true)
        //setIsShown(true)
      }
         return (
      < >
                 <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        class="modal-class" style={{width:"100%" , height:"30%"}}> 

                        <div className='mp-data-comes' >
                          <div class="container">
                            <div class="row signup-box">
                              <div class="signup-box-inner">
                                <div class="card card-primary web-bg" >
                                  <h3 class="form-group col-12 signup-h3" style={{color:"white"}}>Edit User Details</h3>
                                  
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
                                          <select onChange = {(e) =>upload(e)} id="gender" name="choice" class="form-control select-gender" style={{width:"100%", height:"100%"}}>
                                            <option class="option-gender" value="second" disabled selected>Gender</option>
                                            <option class="option-gender"  value="male">Male</option>
                                            <option class="option-gender"  value="female">Female</option>
                                          </select>
                                        </div>
                                      </div>

                                      <div class="row">
                                        <div class="form-group col-12">
                                          <select onChange = {(e) =>upload(e)} id="nationality" name="choice" class="form-control select-gender" style={{width:"100%", height:"100%"}}>
                                            <option class="option-gender" value="second" disabled selected>Country</option>
                                            <option class="option-gender" value="Pakistan">Pakistan</option>
                                            <option class="option-gender" value="India">India</option>
                                          </select>
                                        </div>
                                      
                                      </div>
                                      <div class="row">
                                        <div class="form-group col-12">
                                            <input onChange = {(e) =>upload(e)} id="first_name" type="text" name="first_name"   class="form-control input" placeholder="first_name"/> 
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="form-group col-12">
                                            <input onChange = {(e) =>upload(e)} id="last_name" type="text" name="last_name"   class="form-control input"  placeholder="last_name"/> 
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="form-group col-12">
                                            <input onChange = {(e) =>upload(e)} id="phone_number" type="text" name="phone_number"   class="form-control input" data-indicator="pwindicator" placeholder="Phone Number"/> 
                                        </div>
                                      </div>
                                      <div class="row">
                                        <div class="form-group col-12">
                                            <input onChange = {(e) =>upload(e)} id="email" type="email" name="email"   class="form-control input" data-indicator="pwindicator" placeholder="Email"/>
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
                                        <button  type="submit" class="btn btn-lg btn-block" style={{color:"white"}}>
                                              Edit
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
                  </Modal>   
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
                    
              <div class="profile-p2">
                <div class="profile-p2p1 stv-profile-p1">
                  <div class="p2p1-edit">
                    <div class="p2p1-edit-box">
                      <a onClick={openModal} class="p2p1-edit-btn" href= "">
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
                  </div>
                  <p class="p2p1-about">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
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
                        <br></br><h3 class="info-h3"> johndoe@gmail.com</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a onClick={openModal} class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a onClick={openModal} class="change-btn" href= "">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.Password} */}
                          Password
                        </label>
                        <br></br><h3 class="info-h3">*******</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a onClick={openModal} class="change-btn" href= "">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a onClick={openModal} class="change-btn" href= "">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.phone_number} */}
                          Phone Number
                        </label>
                        <br></br><h3 class="info-h3">+92 300 1234 562</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a onClick={openModal} class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a onClick={openModal} class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.date_of_birth} */}
                          Date of Birth
                        </label>
                        <br></br><h3 class="info-h3">08-03-1995</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a onClick={openModal} class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a onClick={openModal} class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.language} */}
                          Language
                        </label>
                        <br></br><h3 class="info-h3">English</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a onClick={openModal} class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a onClick={openModal} class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
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
            
            </div>
            {isshow && (<WebFooter/>)} 
          </div>
          </>
         );
      }
export default UserPerfile;