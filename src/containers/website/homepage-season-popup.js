import React from "react";
import {data} from "../../mockData"
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
function HomeSeasonPopUp() {
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
            <main class="home-popup web-bg-color">
                <container class="home-popup-box">
                    <section class="home-popup-s1">
                        <div class="home-popup-s1-p1">
                            <iframe src="https://www.youtube.com/watch?v=SxTYjptEzZs"></iframe>
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
                            <div><p><span class="pink">Cast:</span>Mark King, Williamson, Kate, Emma Robert Eiza Gonz, more</p></div><br></br>
                            <div><p><span class="pink">Genres:</span> US Movies, Action & Adventure</p></div><br></br>
                            <div><p><span class="pink">This movie is: </span>Exciting</p></div><br></br>
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
                            
                        
                    </section>
                </container>
            </main>
          </>
         );
      }
export default HomeSeasonPopUp;