import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Modal from 'react-modal';
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function PricingPlan() {
  const [languagedata, setLanguageData] = useState()
  const [languagesate, setLanguageSate] = useState(false)
 
  const lang= localStorage.getItem("key")

  
 
  useEffect(() => { 
    axios
    .post("https://salomtv-backend.onrender.com/language/get",{
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
          <>
          {languagesate && (
            <div>

            
            <Header/>
                    
                <div class="stv-plan-main">
                    <div class="stv-plan-box">
                        <div class="stv-plan-p1"><h2>{languagedata.pricing_plan}</h2></div>
                        <div class="stv-plan-p2">
                            <div class="stv-plan-p2-box">
                                <div class="stv-plan-row">
                                    <div class="stv-plan-col plan-p2-p1">
                                        {/* <h2><b>$19 </b>/ Per<br></br> month</h2> */}
                                    </div>
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        {/* <img src="web-assets/img/price-tag.png"></img> */}
                                        <p>Basic</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag.png")`}}>
                                        <p class="pink">Standard</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Platinum</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Premium</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>{languagedata.new_movies}</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>{languagedata.salomtv_special}</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>{languagedata.america_tv_shows}</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>{languagedata.hollywood_movies}</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>{languagedata.video_quality}</h3></div>
                                    <div class="plan-p3-col"><h4>SD (480p)</h4></div>
                                    <div class="plan-p3-col"><h4 class="pink">HD (720p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>{languagedata.add_free_entertainment}</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-times pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row p3-last-row">
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><a class="purchase">{languagedata.purchase}</a></div>
                                    <div class="plan-p3-col"><a class="purchase">{languagedata.purchase}</a></div>
                                    <div class="plan-p3-col"><a class="purchase">{languagedata.purchase}</a></div>
                                    <div class="plan-p3-col"><a class="purchase">{languagedata.purchase}</a></div>
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
export default PricingPlan;