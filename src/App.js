
import { Route, Routes } from 'react-router-dom';
import { useState,useEffect } from "react";
import axios from "axios";
import './App.css';
import "bootstrap/dist/css/bootstrap.css"; 


// admin pages
import AdminHomePage from './containers/admin/index';
import MoviesUpload from './containers/admin/movies-upload';
 import AddMovies from './containers/admin/movies'; 
import User from './containers/admin/user';
import Post from './containers/admin/post';
import AddLanguage from './containers/admin/add-languages'
import Languages from './containers/admin/language';
import EditLanguage from './containers/admin/edit-language';
import MoviesEdit from './containers/admin/edit-movie';

//web Pages
import SignUp from './containers/website/sign-up';
import UserPerfile from './containers/website/user-perfile';
import LandingPage from './containers/website/landing-page';
import TestList from './containers/website/test';
import HomePage from './containers/website/home';
import SignIn from './containers/website/sign-in';
import SignUpOtp from './containers/website/signup-otp';
import PricingPlan from './containers/website/pricing-plan';
import HomePopUp from './containers/website/home-page-popup';
import MoviePlayer from './containers/website/movie-player';
import TvShows from './containers/website/tv-shows';
import Serials from './containers/website/serials';
import Movies from './containers/website/movies';
import WatchList from './containers/website/watch-list';
import KidsSection from './containers/website/kids-section';
import SignUpOtpVerify from "./containers/website/sign-up-otpverify"



function App() {
  const [data, setData] = useState({});
          useEffect(() => {
            axios
            .get("/user/role",{
            })
            .then(Response =>{
                console.log("this is app data")
                console.log(Response.data[0].role)
                const role = Response.data[0].role
                setData(Response.data[0])
            }).catch(err =>{
              console.log(err)
            })
            },[]);

        return (
          <main>
                   <Routes>
                      <Route path="/" exact element={<LandingPage/>}/>
                      <Route path="/signin" exact element={<SignIn/>}/>
                      <Route path="/dashboard" exact element={<AdminHomePage/>}/>
                      
                      <Route path="/home" exact element={<HomePage/>}/>
                      <Route path="/signup" exact element={<SignUp/>}/>
                      <Route path="/userprofile" exact element={<UserPerfile/>}/>
                      <Route path="/test" exact element={<TestList/>}/>
                      <Route path="/signupotp" exact element={<SignUpOtp/>}/>
                      <Route path="/signupotpverify" exact element={<SignUpOtpVerify/>}/>
                      <Route path="/pricingplan" exact element={<PricingPlan/>}/>
                      <Route path="/popup" exact element={<HomePopUp/>}/>
                      <Route path="/player" exact element={<MoviePlayer/>}/>
                      <Route path="/tvshow" exact element={<TvShows/>}/>
                      <Route path="/serials" exact element={<Serials/>}/>
                      <Route path="/movies" exact element={<Movies/>}/>
                      <Route path="/watchlist" exact element={<WatchList/>}/>
                      <Route path="/kidsection" exact element={<KidsSection/>}/>
                      
                  </Routes> 
      
                  <Routes>
                      <Route path="/dashboard" exact element={<AdminHomePage/>}/>
                      {/* <Route path="/movieupload" exact element={<MoviesUpload/>}/> */}  
                      <Route path="/addmovies" exact element={<AddMovies/>}/>
                      <Route path="/editmovies" exact element={<MoviesEdit/>}/>
                      
                      
                       <Route path="/user" exact element={<User/>}/>
                       <Route path="/post" exact element={<Post/>}/>
                       <Route path="/addlanguage" exact element={<AddLanguage/>}/>
                       <Route path="/language" exact element={<Languages/>}/>
                       <Route path="/editlanguage" exact element={<EditLanguage/>}/>
                      
                     {/* <Route path="/subscription" exact element={<Subscription/>}/>
                      <Route path="/notification" exact element={<Notification/>}/> */}
                  </Routes>
                 {/*  <h1> this ism w</h1> */}
                  
              </main>
        );

        

      }   

export default App;
