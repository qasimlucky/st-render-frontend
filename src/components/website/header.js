
import React from "react";
import { Link,useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { useState,useEffect } from "react";
import axios from "axios";
function Header() {
    if(!localStorage.getItem("key")){
        localStorage.setItem("key", "En")
    }
    if(!localStorage.getItem("language_title")){
        localStorage.setItem("language_title", "English")
        localStorage.setItem("flag", "web-assets/img/flags/italy.png")
        window.location.reload(false);
    }
    const language_title= localStorage.getItem("language_title")
    const lang_flag= localStorage.getItem("flag")
    console.log(language_title)
    console.log(lang_flag)
    const [data, setData] = useState([])
    const [selecteddata, setSelectedData] = useState(false);
    
    let navigate = useNavigate();
    
    useEffect(() => {
        
        axios
        .get("https://salomtv-backend.onrender.com/language/select")
        .then(Response =>{
            setData(Response.data)
            console.log("this is response data")
            console.log(Response.data)
            console.log("this is selected dataaaaaa")
            console.log(data)

            
        })
        .catch(err =>{
            console.log(err)
        })
        
        },[]);
        function handle(e){
            localStorage.setItem("key", e.keyword)
            localStorage.setItem("language_title", e.language_title)
            localStorage.setItem("flag", e.flag)
            //setSelectedData(e)
            window.location.reload(false);
            //setIsShown(true)
              
        }


        function submit(e){
            console.log("this is send dataaaaa")
            //console.log(sendData)
            console.log("this is submit")
            console.log(data)
                e.preventDefault();
                axios
                .get("https://salomtv-backend.onrender.com/user/logout",data,{
                })
                .then(res =>{
                  alert(res.data)
                  navigate("/signin")
                  //console.log(res.data)
                })
          }
    const countries = [
        { value: 'me', label: 'Montenegro', image: 'https://media.istockphoto.com/id/519611160/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=0HueaQHkdGC4Fw87s3DbeTE9Orv3mqHRLce88LV47E4=' },
        { value:'rs', label: 'Serbia', image: 'https://media.istockphoto.com/id/472330681/vector/flag-of-pakistan.jpg?s=612x612&w=0&k=20&c=6UIVoI58ZU_9cSuaDubD7BG_c0xXAVA8vAP1lIO5lVo=' }
      ];
  
         return (
          <>
            {/* <Select id="stv-flag-main"
                options={countries}
                formatOptionLabel={country => (
                    <div className="country-option stv-flag-box">
                    <img src={country.image} class="stv-flag-img" alt="country-image" />
                    <span>{country.label}</span>
                    </div>
                )}
            /> */}
        <header id="navbar" class="sticky-nav">
            
            <div class="stv-header-menu header-menu header-sticky header-menu-2">
                <div class="custom-container">
                    <div class="row desktop-menu header-row">
                        <div class="header-col col-xl-2 col-lg-3 col-8">
                            <div class="header-logo pt-15 pb-15">
                                <a href="index.html"><img src="web-assets/img/logo-salomTV.png" class="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div class="header-col col-xl-7 col-lg-6 col-4">
                            <div class="main-menu d-none d-lg-block">
                                <nav id="mobile-menu">
                                    <ul>
                                        <li><Link to="/home">Home</Link> </li>
                                        {/* <li><Link to="/tvshow">Tv Shows</Link></li> */}
                                        <li><Link to="/movies">Movies</Link></li>
                                        <li><Link to="/serials">Serials</Link></li>
                                        <li><Link to="/watchlist">Watch list</Link></li>
                                        <li><Link to="/kidsection">Kids Section</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
    
                        <div class="header-col col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="header-right header-right-2 text-end">
                                <ul class="z-index header-3rd-section">
                                    <li class="stv-lng-select">
                                        {/* <Select id="stv-flag-main"
                                            options={countries}
                                            formatOptionLabel={country => (
                                                <div className="country-option stv-flag-box">
                                                <img src={country.image} class="stv-flag-img" alt="country-image" />
                                                <span>{country.label}</span>
                                                </div>
                                            )}
                                        /> */}
                                        <ul>
                                            <a  class="lng-select-img-box">
                                                <img class="lng-flag" src={lang_flag} alt="profile img"/><h3>{language_title}</h3>
                                            </a>
                                            
                                            <div class="lng-dp">
                                            {data.map((item) => (
                                             <div  class="lng-dp-box">
                                                 <div onClick = {() =>handle(item)} class="lng-dp-item">
                                                     <a class="lng-dp-row">
                                                         <img class="lng-dp-col" src={item.flag}></img>
                                                         <p class="lng-dp-col">{item.language_title}</p>
                                                     </a>
                                                 </div>
                                             </div>
                                             ))}
                                            </div>
                                            
                                        </ul>
                                        {/* <select class="selectpicker" data-width="fit">
                                            <option data-content='<span class="flag flag-us"></span> English'>English</option>
                                            <option  data-content='<span class="flag-icon flag-icon-mx"></span> Español'>Español</option>
                                        </select> */}
                                        {/* <form.Control as="select">
                                            <option><span className="flag-icon flag-icon-gr"></span>Germany</option>
                                            <option><span className="flag-icon flag-icon-gr"></span>English</option>
                                        </form.Control> */}
                                         {/* <select class="language-menu selectpicker bg-dark text-white text-lg-center h5" data-width="fit">
                                            <option class="rounded" style={{backgroundImage:`url("web-assets/img/banner-img/ship-img2.jpg")`}}  data-content='English'><div style={{backgroundImage:`url("web-assets/img/banner-img/ship-img2.jpg")`}}></div>English</option>
                                            <option class="rounded"  data-thumbnail="web-assets/img/flags/italy.png" data-content='Espanol'>Español</option>
                                            <option class="rounded"  data-content='Italiano'>Italiano</option>
                                            <option class="rounded"  data-content='Dansk'>Dansk</option>
                                        </select>  */}
                                    </li>
                                    <li class="mt-1.5"><a class="btn-padding"><i class="fa fa-search nav-icons"></i></a></li>
                                    <li class="mt-1.5"><a class="btn-padding"><i class="fa fa-bell-o nav-icons"></i></a></li>

                                    {/* PROFILE SECTION STARTS ++++++++++++++++++++++++++++++++++++++++++++++++*/}
                                    <li class="profile-dp">
                                        <a>
                                            <img class="profile" src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1" alt="profile img"/>
                                        </a>

                                        <div class="stv-profile-dropdown">
                                            <div class="stv-profile-dropdown-box">
                                                <div class="stv-profile-dropdown-item">
                                                    <Link class="stv-profile-row" to="/userprofile">
                                                        <img class="stv-profile-col" src="web-assets/img/user-profile-icon.png"></img>
                                                        <p class="stv-profile-col">My Profile</p>
                                                    </Link>
                                                </div>
                                                <div class="stv-profile-dropdown-item stv-pf-d-p1">
                                                    <Link class="stv-profile-row" to="/pricingplan">
                                                        <img class="stv-profile-col" src="web-assets/img/settings.png"></img>
                                                        <p class="stv-profile-col">Pricing Plan</p>
                                                    </Link>
                                                </div>
                                                <div class="stv-profile-dropdown-item">
                                                    <Link onClick = {(e) =>submit(e)} class="stv-profile-row" href="">
                                                        <img class="stv-profile-col" src="web-assets/img/signout.png"></img>
                                                        <p class="stv-profile-col">Logout</p>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    {/* PROFILE SECTION ENDS  =================================================*/}

                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* MOBILE MENU HEADER STARTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                    <div class="stv-mobile-header row mobile-menu-row header-row">


                         {/* <div class="header-col part-2">                            
                            <button id="myBtn" class="openbtn" onclick="openNav()">☰</button> 
                            <div class="btn-cover">
                                <div class="h-btn h-parts">
                                    <a href="">get a quote <i class="fas fa-arrow-right"style="color:dodgerblue;"></i> </a>
                                </div>
                            </div>
                            <div id="myModal" class="modal">
                                <div class="modal-content">
                                  <span class="close">&times;</span>
                                  <ul class="detail-list">
                                    <li><a class="underline-opening" href="">Home</a></li>
                                    <li><a href="">IT Services</a></li>
                                    <li><a href="">IT Trainings</a></li>
                                    <li><a href="">Certifications</a></li>
                                    <li><a href="">Why KUN</a></li>
                                    <li><a href="">join us</a></li>
                                </ul>
                                </div>
                            </div>
                        </div> */}
                        <div class="header-col mobile-list-menu">
                            <button id="myBtn" class="openbtn" onclick="openNav()">☰</button> 
                                
                            <div id="myModal" class="modal">
                                <div class="modal-content">
                                    {/* <span class="close">&times;</span> */}
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li><Link to="/home">Home</Link> </li>
                                            <li><a href="service.html">Tv Shows</a></li>
                                            <li><a href="about.html">Serials</a></li>
                                            <li><Link to="/player">Movies</Link></li>
                                            <li><a href="contact.html">Watch list</a></li>
                                            <li><a href="blog.html">Kids Section</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <div class="header-col">
                            <div class="header-logo">
                                <a href="index.html"><img src="web-assets/img/logo-salomTV.png" class="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>

                        <div class="header-col opt-more">
                            <div class="box-more">
                                <img class="more" src="web-assets/img/more.png"></img>
                            </div>

                            <div class="header-col social-icons opt-more-dropdown">
                                <div class="header-right header-right-2 opt-more-dpd-box">
                                    <ul class="z-index header-3rd-section">
                                        <li class="stv-lng-select">
                                            <ul>
                                                <a class="lng-select-img-box">
                                                    <img class="lng-flag" src="web-assets/img/flags/italy.png" alt="profile img"/><h3>English</h3>
                                                </a>

                                                <div class="lng-dp">
                                                    <div class="lng-dp-box">
                                                        <div class="lng-dp-item">
                                                            <a class="lng-dp-row">
                                                                <img class="lng-dp-col" src="web-assets/img/flags/spain.png"></img>
                                                                <p class="lng-dp-col">Spain</p>
                                                            </a>
                                                        </div>
                                                        <div class="lng-dp-item lng-dp-item-1">
                                                            <a class="lng-dp-row">
                                                                <img class="lng-dp-col" src="web-assets/img/flags/denmark.png"></img>
                                                                <p class="lng-dp-col">Denmark</p>
                                                            </a>
                                                        </div>
                                                        <div class="lng-dp-item">
                                                            <a class="lng-dp-row">
                                                                <img class="lng-dp-col" src="web-assets/img/flags/united-states.png"></img>
                                                                <p class="lng-dp-col">United States</p>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ul>
                                        </li>
                                        <li class="mt-1.5"><a class="btn-padding"><i class="fa fa-search nav-icons"></i></a></li>
                                        <li class="mt-1.5"><a class="btn-padding"><i class="fa fa-bell-o nav-icons"></i></a></li>

                                        {/* PROFILE SECTION STARTS ++++++++++++++++++++++++++++++++++++++++++++++++*/}
                                        <li class="profile-dp">
                                            <a>
                                                <img class="profile" src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1" alt="profile img"/>
                                            </a>

                                            <div class="stv-profile-dropdown">
                                                <div class="stv-profile-dropdown-box">
                                                    <div class="stv-profile-dropdown-item">
                                                        <Link class="stv-profile-row" to="/userprofile">
                                                            <img class="stv-profile-col" src="web-assets/img/user-profile-icon.png"></img>
                                                            <p class="stv-profile-col">My Profile</p>
                                                        </Link>
                                                    </div>
                                                    <div class="stv-profile-dropdown-item stv-pf-d-p1">
                                                        <Link class="stv-profile-row" to="/pricingplan">
                                                            <img class="stv-profile-col" src="web-assets/img/settings.png"></img>
                                                            <p class="stv-profile-col">Pricing Plan</p>
                                                        </Link>
                                                    </div>
                                                    <div class="stv-profile-dropdown-item">
                                                        <Link onClick = {(e) =>submit(e)} class="stv-profile-row" href="">
                                                            <img class="stv-profile-col" src="web-assets/img/signout.png"></img>
                                                            <p class="stv-profile-col">Logout</p>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        {/* PROFILE SECTION ENDS  =================================================*/}
                                    </ul>
                                </div>
                            </div>
                            {/* <div class="header-col social-icons opt-more-dropdown">
                                <div class="header-right header-right-2 opt-more-dpd-box">
                                    <ul class="header-3rd-section">
                                        <li>
                                            <select class="selectpicker bg-dark text-white small" data-width="fit">
                                                <option class="rounded"  data-content='English'>English</option>
                                                <option class="rounded"  data-content='Espanol'>Español</option>
                                                <option class="rounded"  data-content='Italiano'>Italiano</option>
                                                <option class="rounded"  data-content='Dansk'>Dansk</option>
                                            </select>
                                        </li>
                                        <li><a href=""><i class="fa fa-search nav-icons"></i></a></li>
                                        <li><a href=""><i class="fa fa-bell-o nav-icons"></i></a></li> */}

                                        {/* PROFILE SECTION MOBILE STARTS ++++++++++++++++++++++++++++++++++++++++++++++++*/}
                                        {/* <li class="profile-dp">
                                            <a>
                                                <img class="profile" src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1" alt="profile img"/>
                                            </a>

                                            <div class="stv-profile-dropdown">
                                                <div class="stv-profile-dropdown-box">
                                                    <div class="stv-profile-dropdown-item">
                                                        <a class="stv-profile-row" href="http://localhost:3000/userprofile">
                                                            <img class="stv-profile-col" src="web-assets/img/user-profile-icon.png"></img>
                                                            <p class="stv-profile-col">My Profile</p>
                                                        </a>
                                                    </div>
                                                    <div class="stv-profile-dropdown-item stv-pf-d-p1">
                                                        <a class="stv-profile-row" href="http://localhost:3000/pricingplan">
                                                            <img class="stv-profile-col" src="web-assets/img/settings.png"></img>
                                                            <p class="stv-profile-col">Pricing Plan</p>
                                                        </a>
                                                    </div>
                                                    <div class="stv-profile-dropdown-item">
                                                        <a class="stv-profile-row" href="">
                                                            <img class="stv-profile-col" src="web-assets/img/signout.png"></img>
                                                            <p class="stv-profile-col">Logout</p>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li> */}
                                        {/* PROFILE SECTION MOBILE ENDS  =================================================*/}

                                        {/* <a href=""><img class="profile" src="web-assets/img/user-icon 1.png" alt="profile img"/></a> */}
                                    {/* </ul>
                                </div>
                            </div> */}
                        </div>
                        

    
                    </div>

                    {/* <div class="row mobile-menu-row header-row align-items-center">
                        <div class="header-col col-xl-2 col-lg-3 col-8">
                            <div class="header-logo pt-15 pb-15">
                                <a href="index.html"><img src="web-assets/img/logo-salomTV.png" class="img-fluid" alt="Logo"/></a>
                            </div>
                        </div>
                        <div class="header-col social-icons col-xl-3 col-lg-3 d-none d-lg-block">
                            <div class="header-right header-right-2">
                                <ul class="z-index header-3rd-section">
                                    <li>
                                        <select class="selectpicker bg-dark text-white small" data-width="fit">
                                            <option class="rounded"  data-content='English'>English</option>
                                            <option class="rounded"  data-content='Espanol'>Español</option>
                                            <option class="rounded"  data-content='Italiano'>Italiano</option>
                                            <option class="rounded"  data-content='Dansk'>Dansk</option>
                                        </select>
                                    </li>
                                    <li><a href=""><i class="fa fa-search nav-icons"></i></a></li>
                                    <li><a href=""><i class="fa fa-bell-o nav-icons"></i></a></li>
                                    <a href=""><img class="profile" src="web-assets/img/user-icon 1.png" alt="profile img"/></a>
                                </ul>
                            </div>
                        </div>

                        <div class="header-col col-xl-7 col-lg-6 col-4">
                               
                            <button id="myBtn" class="openbtn" onclick="openNav()">☰</button> 
                                
                            <div id="myModal" class="modal">
                               
                                <div class="modal-content">
                                <span class="close">&times;</span>
                                <nav id="mobile-menu">
                                        <ul>
                                            <li><a href="index.html">Home</a> </li>
                                            <li><a href="service.html">Tv Shows</a></li>
                                            <li><a href="about.html">Serials</a></li>
                                            <li><a href="faq.html">Movies</a></li>
                                            <li><a href="contact.html">Watch list</a></li>
                                            <li><a href="blog.html">Kids Section</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
    
                    </div> */}
                    {/* MOBILE MENU HEADER ENDS ====================================================================*/}


                </div>
            </div>
        </header>
          </>
         );
      }
export default Header;  