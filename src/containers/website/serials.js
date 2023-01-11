import React, { useState,useEffect,Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useRef } from "react";
import Modal from 'react-modal';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {data} from "../../mockdata/mockData"
import {dataB} from "../../mockdata/mockDataB"
import {dataC} from "../../mockdata/mockDataC"
import {dataD} from "../../mockdata/mockDataD"
import {dataE} from "../../mockdata/mockDataE"
import { MdChevronLeft, MdChevronRight, MdLaptopWindows } from 'react-icons/md';

const videoId = "video_1672240550063"
function Serials() {


    const videoRef = useRef(null);
    const progressBar = useRef();
    const [playing, setPlaying] = useState(true);
    const [ismuted, setIsMuted] = useState(true);
    const [videoTime, setVideoTime] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1)
    const [muted, setMuted] = useState(false)
    const finalVolume = muted ? 0 : volume ** 2;
    const [languagedata, setLanguageData] = useState()
    const [languagesate, setLanguageSate] = useState(true)
    //
   
    const lang= localStorage.getItem("key")
    /* useEffect(() => { 
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
          
        },[]); */


    const videoHandler = (control) => {
        if (control === "play") {
          videoRef.current.play();
           console.log(videoRef.current.volume ) 
           /* videoRef.current.volume = 0.02 */

          setPlaying(true);
          var vid = document.getElementById("video1");
          setVideoTime(vid.duration);
        } else if (control === "pause") {
          videoRef.current.pause();
          /* videoRef.current.volume = 1 */
          setPlaying(false);
        }
      };

       const  isMuted= () => {
        setIsMuted(false)
        videoRef.current.volume=0;
 
      }; 
      const  isMutedOff= () => {
        setIsMuted(true)
        videoRef.current.volume=0.5;
        setVolume(0.5)
 
      };
      
      
      const fastForward = () => {
        videoRef.current.currentTime += 5;
      };
    
      const revert = () => {
        videoRef.current.currentTime -= 5;
      };

      window.setInterval(function () {
        setCurrentTime(videoRef.current?.currentTime);
        setProgress((videoRef.current?.currentTime / videoTime) * 100);
      }, 1000);
      
   //
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const [SeasonmodalIsOpen, setSeasonIsOpen] = React.useState(false)
    const [isShown, setIsShown] = useState(true);
    const [dbdata, setData] = useState([])
    const [selectedmoviedata, setSelectedMovieData] = useState([])

    // useEffect(() => {
    //   axios
    //     .get("/movie/get")
    //     .then(Response =>{
    //     setData(Response.data)
    //     console.log(dbdata)
    //     //console.log(data)  
    //   })
    // .catch(err =>{
    //     console.log(err)
    //   })
      
    // },[]);
 
    const slideLeft = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideLeft2 = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft - 500;
      };
      const slideLeft3 = () => {
        var slider3 = document.getElementById('slider3');
        slider3.scrollLeft = slider3.scrollLeft - 500;
      };
      const slideLeft4 = () => {
        var slider4 = document.getElementById('slider4');
        slider4.scrollLeft = slider4.scrollLeft - 500;
      };
      const slideLeft5 = () => {
        var slider5 = document.getElementById('slider5');
        slider5.scrollLeft = slider5.scrollLeft - 500;
      };
      const slideLeft6 = () => {
        var slider5 = document.getElementById('slider6');
        slider5.scrollLeft = slider5.scrollLeft - 500;
      };
      const slideLeft7 = () => {
        var slider7 = document.getElementById('slider7');
        slider7.scrollLeft = slider7.scrollLeft - 500;
      };
    
      const slideRight = () => {
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500
      };
      const slideRight2 = () => {
        var slider2 = document.getElementById('slider2');
        slider2.scrollLeft = slider2.scrollLeft + 500
      };
      const slideRight3 = () => {
        var slider3 = document.getElementById('slider3');
        slider3.scrollLeft = slider3.scrollLeft + 500
      };
      const slideRight4 = () => {
        var slider4 = document.getElementById('slider4');
        slider4.scrollLeft = slider4.scrollLeft + 500
      };
      const slideRight5 = () => {
        var slider5 = document.getElementById('slider5');
        slider5.scrollLeft = slider5.scrollLeft + 500
      };
      const slideRight6 = () => {
        var slider6 = document.getElementById('slider6');
        slider6.scrollLeft = slider6.scrollLeft + 500
      };
      const slideRight7 = () => {
        var slider7 = document.getElementById('slider7');
        slider7.scrollLeft = slider7.scrollLeft + 500
      };

      function openModal() {
        /* window.location.reload(false); */
        setIsOpen(true);
        setIsShown(false)
        
        
      }
      function SeasonopenModal() {
        setSeasonIsOpen(true);
        setIsShown(false)
      }
    
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
      function SeasonafterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
      }
    
      function closeModal() {
        setIsOpen(false);
        setIsShown(true)
      }
      function SeasoncloseModal() {
        setSeasonIsOpen(false);
        setIsShown(true)
      }
      function selectedMovies(event,item) {
        console.log("this is selected movie")
        //console.log(item)
        setSelectedMovieData(item)
        console.log(selectedmoviedata)
      }
  
         return (
            <>
            {languagesate && ( 
               <div>  
                   {/* HOME PAGE MODAL STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                   <Modal
                   isOpen={modalIsOpen}
                   onAfterOpen={afterOpenModal}
                   onRequestClose={closeModal}
                   contentLabel="Example Modal"
                   class="modal-class"
                 >
                   {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                   {/* <button onClick={closeModal}>close</button> */}
                   <main class="home-popup web-bg-color">
                           <container class="home-popup-box">
                               <section class="home-popup-s1">
                               {/* video li width or heihgt 100% krni hai or baher wali div ki height adjust krni hai */}
                               <div class="video-box">
                                    <video id="video1" ref={videoRef} className="video" src="/video.mp4"  autoplay="autoplay"></video> 
                                   {/* <video id="video1" ref={videoRef} className="video" src={selectedmoviedata.trailer}  autoplay="autoplay"></video> */}
                               </div>
                               
                               <div className="controlsContainer">
           
                                   <div class="audio-control audio-control-row">
                                       {/* <img className="video-play-center" alt="" src="/audioIcon.gif"/>  setMuted(m => !m) */}
                                       <div class="audio-btn-box audio-control-col opacity">
                                       {ismuted ? (
           
                                           
                                           <a   class="center-video-btn audio-play-center">
                                               <i className="fa fa-volume-up" onClick={() =>isMuted() }></i>
                                           </a>
                                           ) : (
                                           <a   class="center-video-btn audio-play-center">
                                               <i className="fas fa-volume-mute" onClick={() =>isMutedOff() }></i>
                                           </a>
                                       
                                       )}
                                       </div>
                                       <div class="audio-control-col audio-bar input-row">
                                           <input  class="input-col"
                                               type="range"
                                               min={0}
                                               max={1}
                                               step={0.02}
                                               value={volume}
                                               onChange={event => {
                                                   setVolume(event.target.valueAsNumber)
                                                   const resetVolume =event.target.valueAsNumber/10;
                                                   /* console.log (typeof(resetVolume))
                                                   console.log (typeof(videoRef.current.volume)) */
                                                   videoRef.current.volume = resetVolume;
                                                   console.log(videoRef.current.volume)
           
                                           }}
                                           />
                                           {/* <button onClick={() => setMuted(m => !m)}>
                                               {muted ? "muted" : "unmuted"}
                                           </button> */}
                                           <p class="input-col"> &nbsp;{(finalVolume.toFixed(1)*100)}</p>
                                       </div>
           
                                       
                                   </div>
           
                               <div class="center-box opacity">
                                   {playing ? (
                                   <a onClick={() => videoHandler("pause")} class="center-video-btn">
                                       <img className="controlsIcon--small video-play-center" alt="" src="/pause.svg"/> 
                                   </a>
           
                                   ) : (
                                   <a onClick={() => videoHandler("play")} class="center-video-btn">
                                       <img className="controlsIcon--small video-play-center" alt="" src="/play.svg"/>
                                   </a>
                                   )}
                               </div>
           
                               <div className="controls">
                                   {/* <img onClick={revert} className="controlsIcon" alt="" src="/backward-5.svg"/> */}
                                   <div class="video-title"><h2>THE MARSHAL KING </h2></div>
                               {playing ? (
           
                                   <a onClick={() => videoHandler("pause")} class="btn-trailer video-btn">
                                       <img className="controlsIcon--small video-play" alt="" src="/pause.svg"/> &nbsp; Resume 
                                   </a>
                                   
                                   ) : (
                                   <a onClick={() => videoHandler("play")} class="btn-trailer video-btn">
                                       <img className="controlsIcon--small video-play" alt="" src="/play.svg"/> &nbsp; Resume
                                   </a>
                                   )}
                                   <div class="video-btn-like-row">
                                       <div class="part2-1 btn-like-col"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                       <div class="part2-1 btn-like-col"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                   </div>
                                   {/* <img onClick={fastForward} className="controlsIcon" alt="" src="/forward-5.svg"/> */}
                               </div>
                               </div>
                               <div className="timecontrols">
                               
                                   <div className="time_progressbarContainer">
                                       <div style={{ width: `${progress}%` }} className="time_progressBar"></div>
                                   </div>
                                   <div class="movie-time-control">
                                       <p className="controlsTime">{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
                                       &nbsp; &nbsp; <p> of </p> &nbsp; &nbsp;
                                       <p className="controlsTime">{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</p>
                                   </div>
                               </div>
                                {/* // Volume Control Range slider */} 
                               {/* <input
                                   type="range"
                                   defaultValue="0"
                                   className="mx-2 progressBarvolume bar volume"
                               /> */}
                               
                                   
                               
                                {/* <input
                                   type="range"
                                   className="progressBar bar"
                                   defaultValue="0"
                                   ref={progressBar}
                                   onChange={changeRange}
                               /> */}                     
                               
                               </section>
           
                               <section class="home-popup-s2-row" >
                                   <container class="home-popup-s2-col home-popup-s2-p1">
                                       <img src="https://i.pinimg.com/236x/c1/2b/d7/c12bd72009000fa249ee4260b2b9b4c5--english-movies-hollywood.jpg"></img>
                                   </container>
           
                                   <container class="home-popup-s2-col home-popup-s2-p2">
           
                                       <div class="popup-s2-btn-row">
                                           <a class="popup-s2-btn-col">Crime</a>
                                           <a class="popup-s2-btn-col">Drama</a>
                                           <a class="popup-s2-btn-col">Mystery</a>
                                       </div>
           
                                       <div class="popup-s2-movie-title">
                                           <h1>The Marshal King</h1>
                                       </div>
           
                                       <div class="popup-s2-rait-row rait-star">
                                           <a class="popup-s2-rait-col imbd">IMDB</a>
                                           <h5 class="popup-s2-rait-col points">8.5</h5>
                                           <div class="popup-s2-rait-col stars">
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star grey" aria-hidden="true"></i>
                                           </div>
                                       </div>
           
                                       <div class="popup-s2-rait-row time-movie">
                                           <div class="popup-s2-rait-col age"><a>18+</a></div>
                                           <div class="popup-s2-rait-col movie-time">2h 12m </div>
                                           <div class="popup-s2-rait-col quality"><a>HD</a></div>
                                           <div class="popup-s2-rait-col year">2022</div>
                                       </div>
           
                                       <div class="popup-s2-rait-row add-favrt">
                                           <div class="popup-s2-rait-col squre-dil"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                           <div class="popup-s2-rait-col favourite"><h5>Add to Favourites</h5></div>
                                       </div>
           
                                       <div class="popup-s2-rait-row-content" >
                                           <h5>Lorem ipsum dilorr ammet, consectur adispgn ddeit, sed it ells, tempor me so widll addcteid him form us </h5>
                                       </div>
           
                                   </container>
           
                                   <container class="home-popup-s2-col home-popup-s2-p3">
                                       <div><p>Cast, Mark King, Williamson, Kate, Wmma Robert Eiza Gonz, More</p></div><br></br>
                                       <div><p>Cast, Mark King, Williamson, Kate, Wmma Robert Eiza Gonz, More</p></div><br></br>
                                       <div><p>Cast, Mark King, Williamson, Kate, Wmma Robert Eiza Gonz, More</p></div><br></br>
                                   </container>
           
                               </section>
           
                               <section class="box-shadow-top">
                                   
                               <div class="stv-hp-row">
                                   <div class="stv-hp-header">
                                   <h3 class="title stv-hm-rs-box1">More like this</h3>
                                   <div class="stv-hp-progress-bar">
                                       <div class="progress-item"></div>
                                       <div class="progress-item"></div>
                                       <div class="progress-item"></div>
                                   </div>
                                   </div>
                                   <div class="stv-hp-container">
                                   <button class="handle left-handle">
                                       <div class="text">
                                           <i class="fa fa-angle-left"></i>
                                       </div>
                                   </button>
                                   <div class="stv-hp-slider">
                                       {data.map((item) => (
                                       // <div class="stv-hp-slidein">
                                           <div  class="stv-hp-movie">
                                               <img class="list-images-movie" src={item.img} />
                                               <div class="overlay-movie">
                                                   <div class="overlay-box">
                                                       <div class="overlay-parts overlay-part1">
                                                           <h4>Boop Bitty</h4>
                                                           <div class="part1-1">
                                                               <span class="movie-about views">16+</span>
                                                               <span class="movie-about">2h 40m</span>
                                                           </div>
                                                           <div class="part1-2 slide_right">
                                                               <a class="btn-trailer" onClick={openModal}>
                                                                   <i class="fa-solid fa-play"></i> Play Now
                                                               </a>
                                                               <input type="hidden"/>
                                                           </div>
                                                       </div>
                                                       <div class="overlay-parts overlay-part2">
                                                           <div class="part2-1">
                                                               <a href="">
                                                                   <i class="fa fa-volume-down"></i>
                                                               </a>
                                                           </div>
                                                           <div class="part2-1">
                                                               <a href=""><i class="fa-solid fa-heart"></i></a>
                                                           </div>
                                                           <div class="part2-1">
                                                               <a href=""><i class="fa-solid fa-plus"></i></a>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
           
                                           </div>
                                           
                                       // </div>
                                       ))}
                                       
                                   </div>
                                   <button class="handle right-handle">
                                       <div class="text">
                                       <i class="fa fa-angle-right"></i>
                                       </div>
                                   </button>
                                   </div>
                               </div> 
           
           
                                       {/* SLIDER LIST TWO 2 STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                                       <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title">Featured Movies to watch now</h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {data.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div>
                                       {/* SLIDER LIST TWO 2 ENDS =========================================================*/} 
           
                                       {/* SLIDER LIST THREE 3 STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++*/} 
                                       <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title">Upcoming Movies</h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {data.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div> 
                                       {/* SLIDER LIST THREE 3 ENDS =========================================================*/}
           
                                       {/* SLIDER LIST FOUR 4 STARTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                                       <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title">Your Favourites</h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {data.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div> 
                                       {/* SLIDER LIST FOUR 4 ENDS =========================================================*/}
                                   
                               </section>
                           </container>
                       </main>
                   
                   </Modal>
                   <Modal
                   isOpen={SeasonmodalIsOpen}
                   onAfterOpen={SeasonafterOpenModal}
                   onRequestClose={SeasoncloseModal}
                   contentLabel="Example Modal"
                   class="modal-class"
                 >
                   {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
                   {/* <button onClick={closeModal}>close</button> */}
                   <main class="home-popup web-bg-color">
                           <container class="home-popup-box">
                               <section class="home-popup-s1">
                               {/* video li width or heihgt 100% krni hai or baher wali div ki height adjust krni hai */}
                               <div class="video-box">
                                    <video id="video1" ref={videoRef} className="video" src="/video.mp4"  autoplay="autoplay"></video> 
                                   {/* <video id="video1" ref={videoRef} className="video" src={selectedmoviedata.trailer}  autoplay="autoplay"></video> */}
                               </div>
                               
                               <div className="controlsContainer">
           
                                   <div class="audio-control audio-control-row">
                                       {/* <img className="video-play-center" alt="" src="/audioIcon.gif"/>  setMuted(m => !m) */}
                                       <div class="audio-btn-box audio-control-col opacity">
                                       {ismuted ? (
           
                                           
                                           <a   class="center-video-btn audio-play-center">
                                               
                                               <i className="fa fa-volume-up" style={{fontSize:"36px", color:"whitesmoke"}} onClick={() =>isMuted() }></i>
                                           </a>
                                           ) : (
                                           <a   class="center-video-btn audio-play-center">
                                               <i className="fas fa-volume-mute" style={{fontSize:"36px", color:"whitesmoke"}} onClick={() =>isMutedOff() }></i>
                                           </a>
                                       
                                       )}
                                       </div>
                                       <div class="audio-control-col audio-bar input-row">
                                           <input  class="input-col"
                                               type="range"
                                               min={0}
                                               max={1}
                                               step={0.02}
                                               value={volume}
                                               onChange={event => {
                                                   setVolume(event.target.valueAsNumber)
                                                   const resetVolume =event.target.valueAsNumber/10;
                                                   /* console.log (typeof(resetVolume))
                                                   console.log (typeof(videoRef.current.volume)) */
                                                   videoRef.current.volume = resetVolume;
                                                   console.log(videoRef.current.volume)
           
                                           }}
                                           />
                                           {/* <button onClick={() => setMuted(m => !m)}>
                                               {muted ? "muted" : "unmuted"}
                                           </button> */}
                                           <p class="input-col"> &nbsp;{(finalVolume.toFixed(1)*100)}</p>
                                       </div>
           
                                       
                                   </div>
           
                               <div class="center-box opacity">
                                   {playing ? (
                                   <a onClick={() => videoHandler("pause")} class="center-video-btn">
                                       <img className="controlsIcon--small video-play-center" alt="" src="/pause.svg"/> 
                                   </a>
           
                                   ) : (
                                   <a onClick={() => videoHandler("play")} class="center-video-btn">
                                       <img className="controlsIcon--small video-play-center" alt="" src="/play.svg"/>
                                   </a>
                                   )}
                               </div>
           
                               <div className="controls">
                                   {/* <img onClick={revert} className="controlsIcon" alt="" src="/backward-5.svg"/> */}
                                   <div class="video-title"><h2>THE MARSHAL KING </h2></div>
                               {playing ? (
           
                                   <a onClick={() => videoHandler("pause")} class="btn-trailer video-btn">
                                       <img className="controlsIcon--small video-play" alt="" src="/pause.svg"/> &nbsp; Resume 
                                   </a>
                                   
                                   ) : (
                                   <a onClick={() => videoHandler("play")} class="btn-trailer video-btn">
                                       <img className="controlsIcon--small video-play" alt="" src="/play.svg"/> &nbsp; Resume
                                   </a>
                                   )}
                                   <div class="video-btn-like-row">
                                       <div class="part2-1 btn-like-col"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                       <div class="part2-1 btn-like-col"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                   </div>
                                   {/* <img onClick={fastForward} className="controlsIcon" alt="" src="/forward-5.svg"/> */}
                               </div>
                               </div>
                               <div className="timecontrols">
                               
                                   <div className="time_progressbarContainer">
                                       <div style={{ width: `${progress}%` }} className="time_progressBar"></div>
                                   </div>
                                   <div class="movie-time-control">
                                       <p className="controlsTime">{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
                                       &nbsp; &nbsp; <p> of </p> &nbsp; &nbsp;
                                       <p className="controlsTime">{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</p>
                                   </div>
                               </div>
                                {/* // Volume Control Range slider */} 
                               {/* <input
                                   type="range"
                                   defaultValue="0"
                                   className="mx-2 progressBarvolume bar volume"
                               /> */}
                               
                                   
                               
                                {/* <input
                                   type="range"
                                   className="progressBar bar"
                                   defaultValue="0"
                                   ref={progressBar}
                                   onChange={changeRange}
                               /> */}                     
                               
                               </section>
           
                               <section class="home-popup-s2-row" >
                                   <container class="home-popup-s2-col home-popup-s2-p1">
                                       <img src="https://i.pinimg.com/236x/c1/2b/d7/c12bd72009000fa249ee4260b2b9b4c5--english-movies-hollywood.jpg"></img>
                                   </container>
           
                                   <container class="home-popup-s2-col home-popup-s2-p2">
           
                                       <div class="popup-s2-btn-row">
                                           <a class="popup-s2-btn-col">Crime</a>
                                           <a class="popup-s2-btn-col">Drama</a>
                                           <a class="popup-s2-btn-col">Mystery</a>
                                       </div>
           
                                       <div class="popup-s2-movie-title">
                                           <h1>The Marshal King</h1>
                                       </div>
           
                                       <div class="popup-s2-rait-row rait-star">
                                           <a class="popup-s2-rait-col imbd">IMDB</a>
                                           <h5 class="popup-s2-rait-col points">8.5</h5>
                                           <div class="popup-s2-rait-col stars">
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star" aria-hidden="true"></i>
                                               <i class="fa fa-star grey" aria-hidden="true"></i>
                                           </div>
                                       </div>
           
                                       <div class="popup-s2-rait-row time-movie">
                                           <div class="popup-s2-rait-col age"><a>18+</a></div>
                                           <div class="popup-s2-rait-col movie-time">2h 12m </div>
                                           <div class="popup-s2-rait-col quality"><a>HD</a></div>
                                           <div class="popup-s2-rait-col year">2022</div>
                                       </div>
           
                                       <div class="popup-s2-rait-row add-favrt">
                                           <div class="popup-s2-rait-col squre-dil"><i class="fa fa-heart" aria-hidden="true"></i></div>
                                           <div class="popup-s2-rait-col favourite"><h5>Add to Favourites</h5></div>
                                       </div>
           
                                       <div class="popup-s2-rait-row-content" >
                                           <h5>Lorem ipsum dilorr ammet, consectur adispgn ddeit, sed it ells, tempor me so widll addcteid him form us </h5>
                                       </div>
           
                                   </container>
           
                                   <container class="home-popup-s2-col home-popup-s2-p3">
                                       <div><p>Cast, Mark King, Williamson, Kate, Wmma Robert Eiza Gonz, More</p></div><br></br>
                                       <div><p>Cast, Mark King, Williamson, Kate, Wmma Robert Eiza Gonz, More</p></div><br></br>
                                       <div><p>Cast, Mark King, Williamson, Kate, Wmma Robert Eiza Gonz, More</p></div><br></br>
                                   </container>
           
                               </section>
           
                               <section class="box-shadow-top">
                                    
                                   
                               </section>
                           </container>
                       </main>
                   
               </Modal> 
                        {/* HOME PAGE MODAL ENDS ================================================================================= */}
           
           <main class="web-bg-color">
           
                 {isShown && (<Header/>)}
                   {/* <video id="video1" ref={videoRef} className="video" src="http://localhost:7000/static/trailer_1668071025491.mp4"></video>
                    <div className="controlsContainer">
                   <div className="controls">
                       <img onClick={revert} className="controlsIcon" alt="" src="/backward-5.svg"/>
                     {playing ? (
                       <img onClick={() => videoHandler("pause")} className="controlsIcon--small" alt="" src="/pause.svg"/>
                       ) : (
                       <img onClick={() => videoHandler("play")} className="controlsIcon--small" alt="" src="/play.svg"/>
                       )}
                     <img onClick={fastForward} className="controlsIcon" alt="" src="/forward-5.svg"/>
                   </div>
                 </div>
                 <div className="timecontrols">
                 <p className="controlsTime">{Math.floor(videoTime / 60) + ":" + ("0" + Math.floor(videoTime % 60)).slice(-2)}</p>
                   <div className="time_progressbarContainer">
                     <div style={{ width: `${progress}%` }} className="time_progressBar"></div>
                   </div>
                   <p className="controlsTime">{Math.floor(currentTime / 60) + ":" + ("0" + Math.floor(currentTime % 60)).slice(-2)}</p>
               </div> */}
               
               
               {/* <div class="fullwidth-slider first-page-slider">
               <div>
                 
               </div>
                       <div id="headerslider" class="carousel slide"> 
                           
                           <div class="carousel-inner" role="listbox">
                               <div class="item active">
                                   <div class="fill banner-ship-img" style={{backgroundImage:`url("web-assets/img/banner-img/serial2.jpg")`}}>
                                    <div class="bs-slider-overlay"></div>
                                       <div class="container movie-slider-container"> 
                                           <div class="row">
                                                <div class="col-sm-12 movie-slider-content"> 
                                                   <div class="slider-content" >
                                                       <div class="title" data-animation="animated bounceInRight" >Game of Thrones</div>
                                                       <div><span class="movie-about views">16+</span><span class="movie-about">2h 40m</span></div>
                                                       <div class="title-detail">
                                                           <p>
                                                                Nine noble families wage war against each other in order to gain control over the mythical land of Westeros.
                                                           </p>
                                                       </div>
                                                       <div class="slide_right" data-animation="animated bounceInRight">
                                                           <Link href="javascript:;" class="btn-trailer" to="/player">
                                                               
                                                               Play Now
                                                           </Link> 
                                                           <a href="javascript:;" class="btn-detail">
                                                               
                                                               More Details
                                                           </a>
                                                       </div>
                                                       <div class="watch-trailer">
                                                           <a href=""><img src="web-assets/img/play (1).png" alt=""/> </a> &nbsp; &nbsp; Watch Trailer
                                                       </div>
                                                       <div class="gradient"></div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div class="item">
                                   <div class="fill  banner-ship-img2" style={{backgroundImage:`url("web-assets/img/banner-img/serial7.png")`}}>
                                    <div class="bs-slider-overlay"></div>
                                       <div class="container movie-slider-container"> 
                                           <div class="row">
                                                <div class="col-sm-12 movie-slider-content"> 
                                                   <div class="slider-content" >
                                                       <div class="title" data-animation="animated bounceInRight" >The Vampire Diaries</div>
                                                       <div><span class="movie-about views">16+</span><span class="movie-about">2h 40m</span></div>
                                                       <div class="title-detail">
                                                           <p>
                                                                On her first day at high school, Elena meets Stefan and immediately feels a connection with him.
                                                           </p>
                                                       </div>
                                                       <div class="slide_right" data-animation="animated bounceInRight">
                                                           <a href="javascript:;" class="btn-trailer">Play Now</a> <a href="javascript:;" class="btn-detail">More details</a>
                                                       </div>
                                                       <div class="watch-trailer">
                                                           <a href=""> <img src="web-assets/img/play (1).png" alt=""/>  </a> &nbsp; &nbsp; Watch Trailer
                                                       </div>
                                                       <div class="gradient"></div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div class="item">
                                   <div class="fill  banner-ship-img3" style={{backgroundImage:`url("web-assets/img/banner-img/serial4.jpg")`}} data-bg-image="images/header/header.png">
                                    <div class="bs-slider-overlay"></div>
                                       <div class="container movie-slider-container"> 
                                           <div class="row">
                                                <div class="col-sm-12 movie-slider-content"> 
                                                   <div class="slider-content" >
                                                       <div class="title" data-animation="animated bounceInRight" >Money Heist</div>
                                                       <div><span class="movie-about views">16+</span><span class="movie-about">2h 40m</span></div>
                                                       <div class="title-detail">
                                                           <p>
                                                                A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded 
                                                                history -- to print billions of euros in the Royal Mint of Spain.
                                                           </p>
                                                       </div>
                                                       <div class="slide_right" data-animation="animated bounceInRight">
                                                           <a href="javascript:;" class="btn-trailer">Play Now</a> <a href="javascript:;" class="btn-detail">More details</a>                                            </div>
                                                       <div class="watch-trailer">
                                                           <a href=""><img src="web-assets/img/play (1).png" alt=""/> </a> &nbsp; &nbsp; Watch Trailer
                                                       </div>
                                                       <div class="gradient"></div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <a class="carousel-control left" href="#headerslider" data-slide="prev">
                               <i class="fa fa-angle-left"></i>
                           </a>
                           <a class="carousel-control right" href="#headerslider" data-slide="next">
                               <i class="fa fa-angle-right"></i>
                           </a>
                       </div> 
                       <div class="home-gradient-1">
                       </div> 
                   </div>  */}
           
                   {/* LINEAR GRADIENT STARTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                   
                   {/* LINEAR GRADIENT ENDS ============================================================*/}
                    {/* this problem code start */}
           
                   {/* SLIDER LIST ONE 1 STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
           
                   <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title stv-hm-rs-box1">TV Thrillers <a>see all</a></h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {dataC.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div>
                    {/* SLIDER LIST ONE 1 ENDS =========================================================*/} 
           
                   {/*dont touch umar*/}
                   {/* <div>
                   <div >TV Thrillers  <a>see all</a></div>
                    <div className='relative flex items-center'  >
                   <span class="show-arrow"><MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100 hover-css  text-[#FFFFFF]' onClick={slideLeft7} size={40} /></span>
                   <div
                     id='slider7'
                     className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                   >
                     {dbdata.map((item) => (
                       <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300">
                       <img
                         className='list-images inline-block hover:scale-105 ease-in-out duration-300'
                         src={item.thumbnail}
                         alt='/'
                       />
                       <div class="overlay">
                       <div class="overlay-box">
                                                 <div class="overlay-parts overlay-part1">
                                                     <h4>Boop Bitty</h4>
                                                     <div class="part1-1">
                                                         <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                                     </div>
                                                     <div class="part1-2 slide_right">
                                                         <a  onClick={(event) => { selectedMovies(event,item); openModal();}}class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                                         <input type="hidden"/>
                                                     </div>
                                                 </div>
                                                 <div class="overlay-parts overlay-part2">
                                                     <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                                     <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                                     <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                                 </div>
                                             </div>
                         
                       </div>
                     </div>
                       
                     ))}
                   </div >
                   <span class="show-arrow"><MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 hover-css text-[#FFFFFF] ' onClick={slideRight7} size={40}  /></span>
                 </div> 
                   </div> */}
                   {/*dont touch above  */}
           
                    {/* SLIDER LIST TWO 2 STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                    <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title stv-hm-rs-box1">Your Favourites <a>see all</a></h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {dataE.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div> 
                   {/* SLIDER LIST TWO 2 ENDS =========================================================*/} 
           
                   {/* SLIDER LIST THREE 3 STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++*/} 
                   <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title stv-hm-rs-box1">TV Thrillers <a>see all</a></h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {dataD.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div>
                   {/* SLIDER LIST THREE 3 ENDS =========================================================*/}
           
                   {/* SLIDER LIST FOUR 4 STARTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                   <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title stv-hm-rs-box1">Featured Movies to watch now <a>see all</a></h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {dataB.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div> 
                    {/* SLIDER LIST FOUR 4 ENDS =========================================================*/}
                    {/* there is problem code ends */}
           
                    {/* HOMEPAGE CENTER SLIDER 2 VIDEO SLIDER STARTS ++++++++++++++++++++++++++++++++++++++++++ */}
                   {/* new */}  
                   <div class="fullwidth-slider video-slider">
                       <div id="headerslider1" class="carousel slide"> 
                           
                           <div class="carousel-inner" role="listbox">
                               <div class="item active">
                                   <div class="fill">
                                       <div class="bs-slider-overlay"></div>
                                       <div class="container movie-slider-container section-3rd"> 
                                           <div class="row third-row">
                                               <div class="third-col">
                                                   <div class="courses-details video-link">
                                                       <div class="courses-details-images">
                                                               <img src="web-assets/img/banner-img/serial.jpg" alt="Courses Details"/>
                                                           <a class="courses-play"  target="_blank">
                                                               <i class="fa-solid fa-play play"></i>
                                                           </a>
                                                       </div>
                                                   </div>
                                               </div>
                   
                                               <div class="col-sm-12 movie-slider-content third-col" style={{backgroundImage: `url("web-assets/img/banner-img/serial.jpg")`}}> 
                                                   <div class="slider-content" >
                                                       <div class="title section-3rd-title" data-animation="animated bounceInRight" >Shadow and Bone</div>
                                                       <div class="views-ratings">
                                                           <div class="raiting"><i class="fa fa-eye"></i> 13k</div>
                                                           <div class="raiting"><span class="fa fa-star checked"></span> (7.50)</div>
                                                       </div>
                                                       <div class="title-detail title-detail-2">
                                                           <p>
                                                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                           </p>
                                                       </div>
                                                       <div class="slide_right" data-animation="animated bounceInRight">
                                                           <a href="javascript:;" class="btn-trailer">
                                                               {/* {languagedata.watch_now} */}
                                                               watch_now
                                                           </a>                                                 
                                                       </div>
                                                       <div class="gradient"></div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div class="item">
                                   <div class="fill">
                                       <div class="bs-slider-overlay"></div>
                                       <div class="container movie-slider-container section-3rd"> 
                                           <div class="row third-row">
                                               <div class="third-col">
                                                   <div class="courses-details video-link">
                                                       <div class="courses-details-images">
                                                               <img src="web-assets/img/banner-img/serials5.jpg" alt="Courses Details"/>
                                                           <a class="courses-play"  target="_blank">
                                                           <i class="fa-solid fa-play play"></i>
                                                           </a>
                                                       </div>
                                                   </div>
                                               </div>
                   
                                               <div class="col-sm-12 movie-slider-content third-col" style={{backgroundImage: `url("web-assets/img/banner-img/serials5.jpg")`}}> 
                                                   <div class="slider-content" >
                                                       <div class="title section-3rd-title" data-animation="animated bounceInRight" >Sail Coaster</div>
                                                       <div class="views-ratings">
                                                           <div class="raiting"><i class="fa fa-eye"></i> 13k</div>
                                                           <div class="raiting"><span class="fa fa-star checked"></span> (7.50)</div>
                                                       </div>
                                                       <div class="title-detail title-detail-2">
                                                           <p>
                                                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                           </p>
                                                       </div>
                                                       <div class="slide_right" data-animation="animated bounceInRight">
                                                           <a href="javascript:;" class="btn-trailer">Watch Now</a> 
                                                       </div>
                                                       <div class="gradient"></div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div class="item">
                                   <div class="fill">
                                       <div class="bs-slider-overlay"></div>
                                       <div class="container movie-slider-container section-3rd"> 
                                           <div class="row third-row">
                                               <div class="third-col">
                                                   <div class="courses-details video-link">
                                                       <div class="courses-details-images">
                                                               <img src="web-assets/img/banner-img/serials3.jpg" alt="Courses Details"/>
                                                           <a class="courses-play"  target="_blank">
                                                               <i class="fa-solid fa-play play"></i>
                                                           </a>
                                                       </div>
                                                   </div>
                                               </div>
                   
                                               <div class="col-sm-12 movie-slider-content third-col" style={{backgroundImage: `url("web-assets/img/banner-img/serials3.jpg")`}}> 
                                                   <div class="slider-content" >
                                                       <div class="title section-3rd-title" data-animation="animated bounceInRight" >Lord of the Rings</div>
                                                       <div class="views-ratings">
                                                           <div class="raiting"><i class="fa fa-eye"></i> 13k</div>
                                                           <div class="raiting"><span class="fa fa-star checked"></span> (7.50)</div>
                                                       </div>
                                                       <div class="title-detail title-detail-2">
                                                           <p>
                                                               Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium inventore doloribus suscipit nostrum nesciunt mollitia ullam, molestiae, quam praesentium!
                                                           </p>
                                                       </div>
                                                       <div class="slide_right" data-animation="animated bounceInRight">
                                                           <a href="javascript:;" class="btn-trailer">Watch Now</a>                                                 
                                                       </div>
                                                       <div class="gradient"></div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                   
                           <a class="carousel-control left" href="#headerslider1" data-slide="prev">
                               <i class="fa fa-angle-left"></i>
                           </a>
                           <a class="carousel-control right" href="#headerslider1" data-slide="next">
                               <i class="fa fa-angle-right"></i>
                           </a>
                       </div>  
                   </div> 
                   {/* HOMEPAGE CENTER SLIDER 2 VIDEO SLIDER ENDS ============================================= */}
           
                   {/* <div style={{ marginBottom:"20px", height:"250px", border:"2px solid green", backgroundColor:"#0d0d31"}}>
                       <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px", height : "20%", width:"100%"}}>Trending see all <a style={{color:"red"}}>see all</a></div>
                         <div className='relative flex items-center'  >
                             <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft6} size={40} />
                             <div id='slider6'className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                               <div style={{height:"70%", width:"100%"}}>
                               {data.map((item) => (
                                 <div style={{border:"3px solid yellow"}} className='w-[200px] h-[110px] inline-block p-2 cursor-pointer '>
                                   <div className='w-[200px] h-[110px] coming-slider-item' >
                                         <img  src={item.img}  alt='/' />
                                         <div class="overlay">
                                             <div class="overlay-box">
                                                 <div class="overlay-parts overlay-part1">
                                                     <h4>Boop Bitty</h4>
                                                     <div class="part1-1">
                                                         <span class="movie-about views">16+</span><span class="movie-about">2h 40m</span>
                                                     </div>
                                                     <div class="part1-2 slide_right">
                                                         <a  class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
                                                     </div>
                                                 </div>
                                                 <div class="overlay-parts overlay-part2">
                                                     <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                                     <div class="part2-1"><a href=""><i class="fa-solid fa-heart"></i></a></div>
                                                     <div class="part2-1"><a href=""><i class="fa-solid fa-plus"></i></a></div>
                                                 </div>
                                             </div>
                                         </div>
                                     </div >
                                 </div>
                               ))}
           
                               </div>
                               
                             </div>
                             <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight6} size={40}  />
                       
                           </div>
                   </div > */}
           
                   {/* SLIDER LIST FIVE 5 STARTS ++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/}
                   <div class="stv-hp-row">
                       <div class="stv-hp-header">
                       <h3 class="title stv-hm-rs-box1">Upcoming Movies <a>see all</a></h3>
                       <div class="stv-hp-progress-bar">
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                           <div class="progress-item"></div>
                       </div>
                       </div>
                       <div class="stv-hp-container">
                       <button class="handle left-handle">
                           <div class="text">
                               <i class="fa fa-angle-left"></i>
                           </div>
                       </button>
                       <div class="stv-hp-slider">
                           {data.map((item) => (
                           // <div class="stv-hp-slidein">
                               <div  class="stv-hp-movie">
                                   <img class="list-images-movie" src={item.img} />
                                   <div class="overlay-movie">
                                       <div class="overlay-box">
                                           <div class="overlay-parts overlay-part1">
                                               <h4>Boop Bitty</h4>
                                               <div class="part1-1">
                                                   <span class="movie-about views">16+</span>
                                                   <span class="movie-about">2h 40m</span>
                                               </div>
                                               <div class="part1-2 slide_right">
                                                   <a class="btn-trailer" onClick={openModal}>
                                                       <i class="fa-solid fa-play"></i> Play Now
                                                   </a>
                                                   <input type="hidden"/>
                                               </div>
                                           </div>
                                           <div class="overlay-parts overlay-part2">
                                               <div class="part2-1">
                                                   <a href="">
                                                       <i class="fa fa-volume-down"></i>
                                                   </a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-heart"></i></a>
                                               </div>
                                               <div class="part2-1">
                                                   <a href=""><i class="fa-solid fa-plus"></i></a>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
           
                               </div>
                               
                           // </div>
                            ))}
                           
                       </div>
                       <button class="handle right-handle">
                           <div class="text">
                           <i class="fa fa-angle-right"></i>
                           </div>
                       </button>
                       </div>
                   </div> 
                   {/* SLIDER LIST FIVE 5 ENDS =============================================================*/}    
                   {isShown && (<WebFooter/>)}   
           </main>
           </div>
               )}
                             </>
        
         );
      }

export default Serials;

