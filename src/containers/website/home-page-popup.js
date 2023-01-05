import React from "react";
import {data} from "../../mockData"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
function HomePopUp() {
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
  
         return (
          <>
          {/* <div class="home-popup-s1-p1">
                            <iframe src="https://www.youtube.com/watch?v=SxTYjptEzZs"></iframe>
                        </div> */}
            <main class="home-popup web-bg-color">
                <container class="home-popup-box">
                    <section class="home-popup-s1">
                        
                    <div class="player-container">
                        <video class="video-selector" preload="auto" oncontextmenu="return false" data-pause="true" data-changing="false">
                            <source src="http://localhost:7000/static/trailer_1668071025491.mp4" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                        <div class="player-controls">
                            <div class="controls-background"></div>
                            <div class="preview-area"><span>0:00</span><img src="" alt=""/></div>
                            <div class="player-progressbar">
                                <div class="range-container" >
                                    <input type="range" step="any" min="0" max="100" value="0"/>
                                    <div class="lower">
                                        <div class="preview-progress"></div>
                                        <div  class="loaded-progress"></div>
                                        <div class="upper"></div>
                                    </div>
                                </div>
                            </div>  
                        
                            <div class="lower-controls">
                            <svg class="play-btn" height="40" width="40"><path d="M14.167 30.083V9.792l15.958 10.166Z"/></svg>
                            <svg class="pause-btn hide-controls" viewBox="0 0 36 36" height="40" width="40"><path d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z"></path></svg>
                            <svg class="rwd" height="40" width="40"><path d="M33.083 27.708 21.708 20l11.375-7.708Zm-14.791 0L6.917 20l11.375-7.708Z"/></svg>
                            <svg class="stop" viewBox="0 0 39 39" height="32" width="32"><path d="M12.167 27.833V12.167h15.666v15.666Z"/></svg>
                            <svg class="fwd" height="40" width="40"><path d="M6.875 27.708V12.292L18.25 20Zm14.875 0V12.292L33.125 20Z"/></svg>
                            <div class="digital-timer">
                                    <span class="running-time">0:00</span>
                                    / 
                                    <span class="total-time">0:00</span>
                                </div>
                                
                            <div class="fullscreen">
                                    <span></span>
                                    <svg viewBox="0 0 40 40" height="31" width="31" data-fullscreen="false"><path d="M7.583 32.417v-9.334h3.667v5.667h5.667v3.667Zm0-15.5V7.583h9.334v3.667H11.25v5.667Zm15.5 15.5V28.75h5.667v-5.667h3.667v9.334Zm5.667-15.5V11.25h-5.667V7.583h9.334v9.334Z"/></svg>
                                    <svg class="hide-fullscreen" viewBox="0 0 40 40" height="32" width="32"><path d="M13.708 31.667v-5.375H8.333v-2.75h8.125v8.125ZM8.333 16.458v-2.75h5.375V8.333h2.75v8.125Zm15.209 15.209v-8.125h8.125v2.75h-5.375v5.375Zm0-15.209V8.333h2.75v5.375h5.375v2.75Z"/></svg>
                            </div>
                            <svg class="pic-in-pic-mode" viewBox="0 0 39 39" height="40" width="40"><path d="M16.792 28.5h15.041V18H16.792ZM6.125 33.333q-1.125 0-1.958-.833-.834-.833-.834-1.958V9.458q0-1.125.834-1.958.833-.833 1.958-.833h27.75q1.125 0 1.958.833.834.833.834 1.958v21.084q0 1.125-.834 1.958-.833.833-1.958.833Zm0-2.791h27.75V9.458H6.125v21.084Zm0 0V9.458v21.084Z"/></svg>
                            <div class="volume">
                                    <svg class="vol-100" height="25px" viewBox="0 0 23 23" width="25px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 9v6h4l5 5V4L7 9H3zm7-.17v6.34L7.83 13H5v-2h2.83L10 8.83zM16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z"/></svg>
                                    <svg class="vol-60" height="25" viewBox="0 0 23 23" width="25"><path d="M5 15V9h4l5-5v16l-5-5Zm11 1V7.95q1.125.525 1.812 1.625.688 1.1.688 2.425 0 1.325-.688 2.4Q17.125 15.475 16 16Zm-4-7.15L9.85 11H7v2h2.85L12 15.15ZM9.5 12Z"/></svg>
                                    <svg class="vol-30" height="25" viewBox="0 0 23 23" width="25"><path d="M7 15V9h4l5-5v16l-5-5Zm2-2h2.85L14 15.15v-6.3L11.85 11H9Zm2.5-1Z"/></svg>
                                    <svg class="vol-0" height="25" viewBox="0 0 23 23" width="25"><path d="m19.8 22.6-3.025-3.025q-.625.4-1.325.688-.7.287-1.45.462v-2.05q.35-.125.688-.25.337-.125.637-.3L12 14.8V20l-5-5H3V9h3.2L1.4 4.2l1.4-1.4 18.4 18.4Zm-.2-5.8-1.45-1.45q.425-.775.638-1.625.212-.85.212-1.75 0-2.35-1.375-4.2T14 5.275v-2.05q3.1.7 5.05 3.137Q21 8.8 21 11.975q0 1.325-.362 2.55-.363 1.225-1.038 2.275ZM9.1 11.9Zm7.15 1.55L14 11.2V7.95q1.175.55 1.838 1.65.662 1.1.662 2.4 0 .375-.062.738-.063.362-.188.712ZM12 9.2 9.4 6.6 12 4Zm-2 5.95V12.8L8.2 11H5v2h2.85Z"/></svg>
                                    <input type="range" min="0" max="1" step="any" value="0.8"/>
                            </div> 
                            </div> 
                        </div>
                    </div>    
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
                        
                            <div style={{paddingTop:"25px", backgroundColor:"#0d0d31"}}>
                            <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
                            <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
                            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft7} size={40} />
                            <div
                            id='slider7'
                            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                            style={{padding:"13px 0"}}>
                            {data.map((item) => (
                                <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
                                <img
                                className='list-images inline-block hover:scale-105 ease-in-out duration-300'
                                src={item.img}
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
                                                                <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
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
                            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight7} size={40}  />
                            </div> 
                            </div> 
                            <div>
                            <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
                            <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
                            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft6} size={40} />
                            <div
                            id='slider6'
                            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                            style={{padding:"13px 0"}}>
                            {data.map((item) => (
                                <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
                                <img
                                className='list-images inline-block hover:scale-105 ease-in-out duration-300'
                                src={item.img}
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
                                                                <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
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
                            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight6} size={40}  />
                            </div> 
                            </div> 
                            <div>
                            <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
                            <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
                            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft5} size={40} />
                            <div
                            id='slider5'
                            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                            style={{padding:"13px 0"}}>
                            {data.map((item) => (
                                <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
                                <img
                                className='list-images inline-block hover:scale-105 ease-in-out duration-300'
                                src={item.img}
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
                                                                <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
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
                            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight5} size={40}  />
                            </div> 
                            </div> 
                            <div>
                            <div style={{ backgroundColor:"#0d0d31", color:"white", padding:"8px 52px 0",fontSize:"18px", fontWeight:"bold"}}>TV Thrillers  <a style={{color:"#d51c58"}}>see all</a></div>
                            <div className='relative flex items-center' style={{ backgroundColor:"#0d0d31"}} >
                            <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100  text-[#FFFFFF]' onClick={slideLeft4} size={40} />
                            <div
                            id='slider4'
                            className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
                            style={{padding:"13px 0"}}>
                            {data.map((item) => (
                                <div class="container  inline-block p-2 hover:scale-105 ease-in-out duration-300" style={{ width:"200px"}}>
                                <img
                                className='list-images inline-block hover:scale-105 ease-in-out duration-300'
                                src={item.img}
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
                                                                <a href="https://www.youtube.com/watch?v=zJgHbifIx-Q" class="btn-trailer"><i class="fa-solid fa-play"></i> Play Now</a>
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
                            <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100 text-[#FFFFFF] ' onClick={slideRight4} size={40}  />
                            </div> 
                            </div> 
                        
                    </section>
                </container>
            </main>
          </>
         );
      }
export default HomePopUp;