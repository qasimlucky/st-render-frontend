import React, { useState,useEffect,Component,useCallback } from 'react';
import { useLocation} from 'react-router-dom';
import Modal from 'react-modal';
import { useFullScreen } from 'react-hooks-full-screen'
import { useRef } from "react";
const MoviePlayer = () => {
   const location = useLocation();
   const Rdata = location.state.sendData

                  var  videoURL=Rdata.video
           //     var  videoURL="https://drive.google.com/file/d/1Z33KOxLan_dWA0ZG3imfxt4bscBd3927/preview"          
  
         return (
            <div style={{width: "100%", height: "750px", position: "relative"}}>
               <div style={{width: "80px", height: "80px", position: "absolute", opacity: 0, right: "0px", top: "0px"}}> </div>
               <iframe src={videoURL} width="100%" height="750px" frameborder="0"  seamless="" allow="autoplay"></iframe>
            </div>
         );
      }
export default MoviePlayer;