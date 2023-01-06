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
          <>
          {languagesate && (
            <div>

            
            <Header/>
                    
            <div class="stv-plan-main">
                    <div class="stv-plan-box">
                        <div class="stv-plan-p1"><h2>Pricing Plan</h2></div>
                        <div class="stv-plan-p2">
                            {/* DESKTOP VIEW PRICING PLAN ENDS ============================================================ */}
                            <div class="desktop-view-plan stv-plan-p2-box">
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
                                    <div class="plan-p3-col"><h3>New Movies</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>SaloMTV Special</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>American Tv Shows</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Hollywood Movies</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Video Quality</h3></div>
                                    <div class="plan-p3-col"><h4>SD (480p)</h4></div>
                                    <div class="plan-p3-col"><h4 class="pink">HD (720p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Add Free Entertainment</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-times pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row p3-last-row">
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                </div>

                            </div>
                            {/* DESKTOP VIEW PRICING PLAN ENDS ============================================================ */}
                            {/* MOBILE MENU PRICING PLAN STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                            <div class="mobile-menu-plan stv-plan-p2-box">
                                <div class="stv-plan-row">
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        {/* <img src="web-assets/img/price-tag.png"></img> */}
                                        <p>Basic</p>
                                        <h2><b>Pricing </b><br></br>Plan</h2>
                                    </div>
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        {/* <img src="web-assets/img/price-tag.png"></img> */}
                                        <p>Basic</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    {/* <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag.png")`}}>
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
                                    </div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>New Movies</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>SaloMTV Special</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>American Tv Shows</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Hollywood Movies</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Video Quality</h3></div>
                                    <div class="plan-p3-col"><h4>SD (480p)</h4></div>
                                    {/* <div class="plan-p3-col"><h4 class="pink">HD (720p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Add Free Entertainment</h3></div>
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row p3-last-row">
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    {/* <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div> */}
                                </div>

                            </div>

                            <div class="mobile-menu-plan stv-plan-p2-box">
                                <div class="stv-plan-row">
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag.png")`}}>
                                        <p class="pink">Standard</p>
                                        <h2><b>Pricing</b><br></br>Plan</h2>
                                    </div>
                                    {/* <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                       
                                        <p>Basic</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div> */}
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag.png")`}}>
                                        <p class="pink">Standard</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    {/* <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Platinum</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Premium</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>New Movies</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>SaloMTV Special</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>American Tv Shows</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Hollywood Movies</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Video Quality</h3></div>
                                    {/* <div class="plan-p3-col"><h4>SD (480p)</h4></div> */}
                                    <div class="plan-p3-col"><h4 class="pink">HD (720p)</h4></div>
                                    {/* <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Add Free Entertainment</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-times pink"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row p3-last-row">
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    {/* <div class="plan-p3-col"><a class="purchase">Purchase</a></div> */}
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    {/* <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div> */}
                                </div>

                            </div>

                            <div class="mobile-menu-plan stv-plan-p2-box">
                                <div class="stv-plan-row">
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Platinum</p>
                                        <h2><b>Pricing</b><br></br> Plan</h2>
                                    </div>
                                    {/* <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Basic</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag.png")`}}>
                                        <p class="pink">Standard</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div> */}
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Platinum</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                    {/* <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Premium</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>New Movies</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>SaloMTV Special</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>American Tv Shows</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Hollywood Movies</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Video Quality</h3></div>
                                    {/* <div class="plan-p3-col"><h4>SD (480p)</h4></div>
                                    <div class="plan-p3-col"><h4 class="pink">HD (720p)</h4></div> */}
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                    {/* <div class="plan-p3-col"><h4>FHD (1080p)</h4></div> */}
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Add Free Entertainment</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-times pink"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                </div>
                                <div class="plan-p3-row p3-last-row">
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    {/* <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div> */}
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    {/* <div class="plan-p3-col"><a class="purchase">Purchase</a></div> */}
                                </div>

                            </div>

                            <div class="mobile-menu-plan stv-plan-p2-box">
                                <div class="stv-plan-row">
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Premium</p>
                                        <h2><b>Pricing</b><br></br> Plan</h2>
                                    </div>
                                    {/* <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
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
                                    </div> */}
                                    <div class="stv-plan-col plan-p2-p1" style={{backgroundImage:`url("web-assets/img/price-tag-hover.png")`}}>
                                        <p>Premium</p>
                                        <h2><b>$19 </b>/ Per<br></br> month</h2>
                                    </div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>New Movies</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>SaloMTV Special</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>American Tv Shows</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Hollywood Movies</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Video Quality</h3></div>
                                    {/* <div class="plan-p3-col"><h4>SD (480p)</h4></div>
                                    <div class="plan-p3-col"><h4 class="pink">HD (720p)</h4></div>
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div> */}
                                    <div class="plan-p3-col"><h4>FHD (1080p)</h4></div>
                                </div>
                                <div class="plan-p3-row">
                                    <div class="plan-p3-col"><h3>Add Free Entertainment</h3></div>
                                    {/* <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-times pink"></i></div>
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div> */}
                                    <div class="plan-p3-col"><i class="fa fa-check"></i></div>
                                </div>
                                <div class="plan-p3-row p3-last-row">
                                    <div class="plan-p3-col"><i class="fa fa-times"></i></div>
                                    {/* <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div> */}
                                    <div class="plan-p3-col"><a class="purchase">Purchase</a></div>
                                </div>

                            </div>                                                        
                            {/* MOBILE MENU PRICING PLAN ENDS ============================================================= */}

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