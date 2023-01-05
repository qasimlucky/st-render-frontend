import { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function AddLanguage() {
 
 
  const url = "/language"
  const [data, setData] = useState({
      language_title : "",
      keyword : "",
      file : "",
      
  
  })

      function handle(e){
        
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
      //console.log(data.file)
    }

      function upload (e){
        const newdata = {...data}
        const file = e.target.files[0]
        newdata[e.target.id] = e.target.files[0]
        setData(newdata)
        console.log(newdata)

      }

      function submit(e){
        console.log(data)
            e.preventDefault();
            axios
            .post(url,data,{
              headers: {
                "Content-Type": "multipart/form-data",
              }
      
            })
            .then(res =>{
              alert("updated")
              //console.log(res.data)
            })
      
      }

  
  return (
    <>


<Sidebar/> 
 <Navbar/>
<div id="app" style={{marginTop : 100}}>
        
  {/* problem */}
  
    <section class="section adminNewSection">
      
     
       <div class="container mt-10">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-10 offset-xl-2">
            <div class="card card-primary">
              <div class="card-header">
                <h4>Language</h4>
              </div>
              <div class="card-body">
              
                    
              <form onSubmit = {(e) =>submit(e)} method="HTTP_METHOD" encType="multipart/form-data">
              
              
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Landing Details</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>
                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">Language Title &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="language_title" type="text" class="stv-lang-input form-control" name="language_title"   placeholder="language_title" />
                  </div>  
                </div>
                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">keyword &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="keyword" type="text" class="stv-lang-input form-control" name="keyword"   placeholder="keyword" />
                  </div>  
                </div>
                
                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">Flag &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                  
                  <div class="custom-file">
                  <input onChange = {(e) =>upload(e)} type="file"   name="flag"  class="stv-lang-input custom-file-input form-control" id="flag" placeholder="choose file"/>
                  <label class="custom-file-label" for="customFile">Choose file</label>
                  </div>
                  </div>   
                  
                </div>


                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Landing Page</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">World's Best &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="world_best" type="text" class="stv-lang-input form-control" name="world_best"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">MOVIES OF THIS SEASON &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="movies_of_this_season" type="text" class="stv-lang-input form-control" name="movies_of_this_season"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">SIGN UP &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="sign_up" type="text" class="stv-lang-input form-control" name="sign_up"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">SIGN IN &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="sign_in" type="text" class="stv-lang-input form-control" name="sign_in"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Download Favourites, Watch them Offline!. &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="download_favourites" type="text" class="stv-lang-input form-control" name="download_favourites"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">It's supper easy to save your favourite shows! &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="it_supper_easy" type="text" class="stv-lang-input form-control" name="it_supper_easy"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">What's New on SaloMTV &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="whats_New_on_salomtv" type="text" class="stv-lang-input form-control" name="whats_New_on_salomtv"  placeholder="Translation" />
                  </div>  
                </div> 
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Subscribe Now &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="subscribe_now" type="text" class="stv-lang-input form-control" name="subscribe_now"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for=""> Terms and Conditions Apply | $7.99 a month or $69.90 a year &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="terms_and_conditions" type="text" class="stv-lang-input form-control" name="terms_and_conditions"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Watch Anywhere You Want. &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="watch_anywhere_you_want" type="text" class="stv-lang-input form-control" name="watch_anywhere_you_want"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Watch an endless number of shows, on your phone, tablet, laptop and TV. &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="watch_an_endless" type="text" class="stv-lang-input form-control" name="watch_an_endless"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Popuplar Movies And Shows &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="popuplar_movies_and_shows" type="text" class="stv-lang-input form-control" name="popuplar_movies_and_shows"  placeholder="Translation" />
                  </div>  
                </div> 
                


                  <div class="row">
                    <div class="form-group col-4"></div>
                    <div class="text-center form-group col-4">
                      <h2>Homepage</h2>
                    </div>
                    <div class="form-group col-4"></div>
                  </div>
  
                  <div class="row">
                    <div class="stv-lgs-row form-group col-6">
                      <label class="stv-lang-label" for="">Play Now &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="play_now"  type="text" class="stv-lang-input form-control" name="play_now"   placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">More Details &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="more_details" type="text" class="stv-lang-input form-control" name="more_details"  placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">Trending &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="trendin_see_all" type="text" class="stv-lang-input form-control" name="trendin_see_all"  placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">Your Fovourites &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="your_fovourites" type="text" class="stv-lang-input form-control" name="your_fovourites"  placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">Featured Movies to Watch Now &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="featured_movies_to_watch_now" type="text" class="stv-lang-input form-control" name="featured_movies_to_watch_now"  placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">Upcoming Movies &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="upcoming_movies" type="text" class="stv-lang-input form-control" name="upcoming_movies"  placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">Watch Now &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="watch_now" type="text" class="stv-lang-input form-control" name="watch_now"  placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">TV Thrillers &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="tv_thrillers" type="text" class="stv-lang-input form-control" name="tv_thrillers"  placeholder="Translation" />
                    </div>  
                  </div>
                  <div class="row">
                    <div class="form-group col-6">
                      <label class="stv-lang-label" for="">see all &nbsp; </label>
                    </div>
                    <div class="form-group col-6">
                      <input onChange = {(e) =>handle(e)} id="see_all" type="text" class="stv-lang-input form-control" name="see_all"  placeholder="Translation" />
                    </div>  
                  </div>
                  
                  
              
              
                
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Homepage Popup</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">Crime &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="crime"  type="text" class="stv-lang-input form-control" name="crime"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Drama &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="drama" type="text" class="stv-lang-input form-control" name="drama"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Mystery &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="mystery" type="text" class="stv-lang-input form-control" name="mystery"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Add to Favourites &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="add_to_favourites" type="text" class="stv-lang-input form-control" name="add_to_favourites"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">More Like This &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="more_like_this" type="text" class="stv-lang-input form-control" name="more_like_this"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Favourites &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="favourites" type="text" class="stv-lang-input form-control" name="favourites"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Suggested For You &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="suggested_for_you" type="text" class="stv-lang-input form-control" name="suggested_for_you"  placeholder="Translation" />
                  </div>  
                </div>
              
                  

                
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Homepage Season Popup</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">The Marshal King &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="genres"  type="text" class="stv-lang-input form-control" name="genres"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">The Sail Coaster &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="cast" type="text" class="stv-lang-input form-control" name="cast"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Lord of the Rings &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="cast" type="text" class="stv-lang-input form-control" name="cast"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">The Dark Knight &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="cast" type="text" class="stv-lang-input form-control" name="cast"  placeholder="Translation" />
                  </div>  
                </div>
                
                
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>User Profile</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">Account Setting &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="account_setting"  type="text" class="stv-lang-input form-control" name="account_setting"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Edit &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="edit" type="text" class="stv-lang-input form-control" name="edit"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Personal Details &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="personal_details" type="text" class="stv-lang-input form-control" name="personal_details"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Email &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="email" type="text" class="stv-lang-input form-control" name="email"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Password &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="Password" type="text" class="stv-lang-input form-control" name="Password"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Phone Number &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="phone_number" type="text" class="stv-lang-input form-control" name="phone_number"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Date of Birth &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="date_of_birth" type="text" class="stv-lang-input form-control" name="date_of_birth"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Language &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="language" type="text" class="stv-lang-input form-control" name="language"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Billing Details &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="billing_details" type="text" class="stv-lang-input form-control" name="billing_details"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Your next billing date is &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="your_next_billing_date_is" type="text" class="stv-lang-input form-control" name="your_next_billing_date_is"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">CANCEL MEMBERSHIP &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="cancel_membership" type="text" class="stv-lang-input form-control" name="cancel_membership"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Plan Details &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="plan_details" type="text" class="stv-lang-input form-control" name="plan_details"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Change &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="change" type="text" class="stv-lang-input form-control" name="change"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Update Payment info &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="update_payment_info" type="text" class="stv-lang-input form-control" name="update_payment_info"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">change plan &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="change_plan" type="text" class="stv-lang-input form-control" name="change_plan"  placeholder="Translation" />
                  </div>  
                </div>
                 
                
              
              
                 
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Sign In</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">Sign In &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="sign_in"  type="text" class="stv-lang-input form-control" name="sign_in"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Forgot your password &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="forgot_your_password" type="text" class="stv-lang-input form-control" name="forgot_your_password"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Remember me &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="remember_me" type="text" class="stv-lang-input form-control" name="remember_me"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Don't have an account &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="dont_have_an_account" type="text" class="stv-lang-input form-control" name="dont_have_an_account"  placeholder="Translation" />
                  </div>  
                </div>
                 
                  
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Sign Up</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">Sign Up &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input id="sign_up_u" onChange = {(e) =>handle(e)} type="text" class="stv-lang-input form-control" name="sign_up_u"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">I accept &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="i_accept" type="text" class="stv-lang-input form-control" name="i_accept"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Terms and conditions &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="i_accept_terms_and_conditions" type="text" class="stv-lang-input form-control" name="i_accept_terms_and_conditions"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Alread have an account &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="i_accept_terms_and_conditions" type="text" class="stv-lang-input form-control" name="i_accept_terms_and_conditions"  placeholder="Translation" />
                  </div>  
                </div>
                 
                
              
              
                  
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Sign Up  OTP</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">The Marshal King &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="genres"  type="text" class="stv-lang-input form-control" name="genres"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">The Sail Coaster &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="cast" type="text" class="stv-lang-input form-control" name="cast"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Lord of the Rings &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="cast" type="text" class="stv-lang-input form-control" name="cast"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">The Dark Knight &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="cast" type="text" class="stv-lang-input form-control" name="cast"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="text-center form-group col-4">
                    <h2>Pricing Plan</h2>
                  </div>
                  <div class="form-group col-4"></div>
                </div>

                <div class="row">
                  <div class="stv-lgs-row form-group col-6">
                    <label class="stv-lang-label" for="">Pricing Plan &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input  onChange = {(e) =>handle(e)} id="pricing_plan" type="text" class="stv-lang-input form-control" name="pricing_plan"   placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">New Movies &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="new_movies" type="text" class="stv-lang-input form-control" name="new_movies"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">SaloMTV Special &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="salomtv_special" type="text" class="stv-lang-input form-control" name="salomtv_special"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">American Tv Shows &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="america_tv_shows" type="text" class="stv-lang-input form-control" name="america_tv_shows"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Hollywood Movies &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="hollywood_movies" type="text" class="stv-lang-input form-control" name="hollywood_movies"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Video Quality &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="video_quality" type="text" class="stv-lang-input form-control" name="video_quality"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">Add Free Entertainment &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="add_free_entertainment" type="text" class="stv-lang-input form-control" name="add_free_entertainment"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label class="stv-lang-label" for="">purchase &nbsp; </label>
                  </div>
                  <div class="form-group col-6">
                    <input onChange = {(e) =>handle(e)} id="purchase" type="text" class="stv-lang-input form-control" name="purchase"  placeholder="Translation" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="form-group col-4">
                      <button type="submit" class="btn btn-success btn-lg btn-block">
                        SUBMIT
                      </button>
                  </div>    
                </div>
                
              </form>
                
              </div>
            </div>
          </div>

        </div>
      </div>
     
    </section>
  </div>
     
    </>
    
    
  )
}



export default AddLanguage