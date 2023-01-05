import { useState,useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MoviesUpload() {
    const [progress, setProgress] = useState(null)
    const [isshow, setIsShow] = useState(true)
    const [istrailer, setIsTrailer] = useState(false)
    const [isvideo, setIsVideo] = useState(false)
    const [currentstep, setCurrentStep] = useState(0)
    const [movieId, setmovieId] = useState([{}])
    const [thumbnailfile, setThumbnailFile] = useState();
    const [bannerfile, setBannerFile] = useState();
    const [trailerfile, setTrailerFile] = useState();
    console.log(isshow)
       const movie_id=  movieId.movie_id;
    //create collection
    
    useEffect(() => {
      
      axios
      .get("/movie/create")
      .then(Response =>{
          setmovieId(Response.data)
          
        })
      .catch(err =>{
          console.log(err)
        })
        
      },[]);
      
            

    //upload data
            const url = "/movie/details"
             const [data, setData] = useState({
                title : "",
                genres : "",
                tags : "",
                cast : "",
                status : "",

            }) 
            
             
            const [bannerdata, setbannerData] = useState({
              banner:"",
              test:"this is test2",

            })
            useEffect(() => {
              bannersubmitted();
                
              },[bannerdata]);


            const [thumbnaildata, setthumbnailData] = useState({
              thumbnail:"",
              test:"this is test3",

            })

            useEffect(() => {
              thumbnailsubmitted()
                
              },[thumbnaildata]);

              const [trailerdata, settrailerData] = useState({
                trailer:"",
                test:"this is test4",
  
              })


              useEffect(() => {
              
                trailersubmitted();
                },[trailerdata]);

                const [videodata, setvideoData] = useState({
                  video:"",
                  test:"this is test5",
    
                })
  
  
                useEffect(() => {
                  videosubmitted();
                  },[videodata]);

            

            
            function upload (e){
            const newdata = {...data}
            newdata[e.target.id] = e.target.value
            newdata["movie_id"] = movie_id
            setData(newdata)
            console.log(newdata)

            } 

         async  function bannerupload (e){
          /* setCount(count + 1, () => {
            afterSetCountFinished();
         }) */;
            const bannernew = {...bannerdata}
            const file = e.target.files[0]
            bannernew[e.target.id] = e.target.files[0]
            setThumbnailFile(URL.createObjectURL(e.target.files[0]));

            bannernew["movie_id"] = movie_id
             setbannerData(bannernew)
              console.log(bannernew)
              console.log("this is banner data")
              
              
  
              }
              async function thumbnailupload (e){
                /* setCount(count + 1, () => {
                  afterSetCountFinished();
               }) */;
                  const thumbnailnew = {...thumbnaildata}
                  const file = e.target.files[0]
                  thumbnailnew[e.target.id] = e.target.files[0]
                  setBannerFile(URL.createObjectURL(e.target.files[0]));
      
                  thumbnailnew["movie_id"] = movie_id
                  setthumbnailData(thumbnailnew)
                    console.log(thumbnailnew)
                    console.log("this is thumbnail data")
                    
                    
        
                    }
                    async function trailerupload (e){
                      /* setCount(count + 1, () => {
                        afterSetCountFinished();
                     }) */;
                        const trailernew = {...trailerdata}
                        const file = e.target.files[0]
                        trailernew[e.target.id] = e.target.files[0]
                        setTrailerFile(URL.createObjectURL(e.target.files[0]));
                        setIsTrailer(true);

            
                        trailernew["movie_id"] = movie_id
                        settrailerData(trailernew)
                          console.log(trailernew)
                          console.log("this is trailer data")
                          
                          
              
                          }
                          async function videoupload (e){
                            /* setCount(count + 1, () => {
                              afterSetCountFinished();
                           }) */;
                              const videonew = {...videodata}
                              const file = e.target.files[0]
                              videonew[e.target.id] = e.target.files[0]
                              setIsVideo(true)
                  
                              videonew["movie_id"] = movie_id
                              setvideoData(videonew)
                                console.log(videonew)
                                console.log("this is video data")
                                
                                
                    
                                }


               function bannersubmitted(){;
                axios
                        .post("/movie/banner",bannerdata, {
                        
                             headers: {
                                "Content-Type": "multipart/form-data",
                            }, 
                            onUploadProgress:(bardata)=>{
                                setProgress(Math.round((100 * bardata.loaded) / bardata.total))
                                console.log(bardata.loaded,bardata.total)
                                console.log(Math.round((100 * bardata.loaded) / bardata.total))
                            }
                            
                
                        })
              } 

              function thumbnailsubmitted(){;
                    axios
                    .post("/movie/thumbnail",thumbnaildata, {
                    
                          headers: {
                            "Content-Type": "multipart/form-data",
                        }, 
                        onUploadProgress:(bardata)=>{
                            setProgress(Math.round((100 * bardata.loaded) / bardata.total))
                            console.log(bardata.loaded,bardata.total)
                            console.log(Math.round((100 * bardata.loaded) / bardata.total))
                        }
                        
            
                    })
              }

              function trailersubmitted(){;
                axios
                .post("/movie/trailer",trailerdata, {
                
                      headers: {
                        "Content-Type": "multipart/form-data",
                    }, 
                    onUploadProgress:(bardata)=>{
                        setProgress(Math.round((100 * bardata.loaded) / bardata.total))
                        console.log(bardata.loaded,bardata.total)
                        console.log(Math.round((100 * bardata.loaded) / bardata.total))
                    }
                    
        
                })
              }

              function videosubmitted(){;
                axios
                .post("/movie/add",videodata, {
                
                      headers: {
                        "Content-Type": "multipart/form-data",
                    }, 
                    onUploadProgress:(bardata)=>{
                        setProgress(Math.round((100 * bardata.loaded) / bardata.total))
                        console.log(bardata.loaded,bardata.total)
                        console.log(Math.round((100 * bardata.loaded) / bardata.total))
                    }
                    
        
                })
              }
             

            function handle(e){
                
                const newdata = {...data}
                newdata[e.target.id] = e.target.value
                setData(newdata)
            } 
                function submit(e){
                  console.log("this is data")
                    console.log(data)
                    setIsShow(false)
                        e.preventDefault();
                        axios
                        .post(url,data, {
                        
                            /*  headers: {
                                "Content-Type": "multipart/form-data",
                            }, */ 
                            onUploadProgress:(bardata)=>{
                                setProgress(Math.round((100 * bardata.loaded) / bardata.total))
                                console.log(bardata.loaded,bardata.total)
                                console.log(Math.round((100 * bardata.loaded) / bardata.total))
                            }
                            
                
                        })
                        .then(res =>{
                        alert("updated")
                        console.log(res.data)
                        })
                
                } 

  
  return (
    <>


<Sidebar/> 
 <Navbar/>
<div id="app" style={{marginTop : 100}}>
        
  {/* problem */}
  
    <section class="section adminNewSection">
      
     
      {isshow && (
       <div class="container mt-10">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-10 offset-xl-2">
            <div class="card card-primary">
              <div class="card-header">
                <h4>Add Movie</h4>
              </div>
              <div class="card-body">
              
                    
                <form onSubmit = {(e) =>submit(e)} method="HTTP_METHOD" encType="multipart/form-data">
                  

                <label  className="badge badge-primary badge-shadow" style={{padding:"8px"}}>Basic Details</label>
                <div class="row">
                  <div class="form-group col-6">
                    <h5><label > Movie ID  :   {movieId.movie_id}</label></h5>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label for="">Title</label>
                    <input onChange = {(e) =>upload(e)} id="title" type="text" class="form-control" name="title"  placeholder="" style={{border:" solid 1px" }}/>
                  </div>
                  <div class="form-group col-6">
                    <label for="">genres</label>
                    <input id="genres" onChange = {(e) =>upload(e)} type="text" class="form-control" name="genres"   placeholder="" />
                  </div>  
                </div>
                <div class="row">
                  <div class="form-group col-6">
                    <label for="">Tags</label>
                    <input onChange = {(e) =>upload(e)} id="tags" type="text" class="form-control" name="tags"  placeholder= "" />
                  </div>
                  <div class="form-group col-6">
                    <label for="">cast</label>
                    <input onChange = {(e) =>upload(e)} id="cast" type="text" class="form-control" name="cast"  placeholder="" />
                  </div>  
                </div>
                {/* <div class="row">
                  <div class="col-1">
                  <label >Description</label>
                  </div>
                </div> */}
                <div class="form-group row mb-4">
                      <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Content</label>
                      <div class="col-sm-12 col-md-7">
                        <textarea class="summernote-simple"></textarea>
                      </div>
                    </div>
                {/* <div class="row">
                    <div class="col-6">
                      <textarea class="summernote-simple"></textarea>
                    </div>
                </div> */}
                <div class="row">
                  <div class="form-group col-4"></div>
                  <div class="form-group col-4">
                      <button type="submit" class="btn btn-success btn-lg btn-block">
                        Next
                      </button>
                  </div>    
                </div> 
                
              </form>
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      {!isshow && (
       <div class="container mt-10">
        <div class="row">
          <div class="col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-8 offset-lg-2 col-xl-10 offset-xl-2">
            <div class="card card-primary">
              <div class="card-header">
                {/* <h4>Add Movie</h4> */}
              </div>
              <div class="card-body">
                
                <label  className="badge badge-primary badge-shadow" style={{padding:"8px"}}>Movies Graphics</label>
                
                <div class="row">
                  
                      <div class="form-group col-6">
                            <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Thumbnail</label>
                            <div class="col-sm-12 col-md-7">
                              <div id="image-preview" class="image-preview">
                                <div class="custom-file">
                                <label  for="customFile">Thumbnail</label>
                                <img src={thumbnailfile} />
                                <input type="file" onChange = {(e) =>bannerupload(e)}  name="banner"  class="custom-file-input form-control" id="banner"/>
                              </div>

                                </div>
                                
                            </div>
                          </div>

                      
                      <div class="form-group col-6">
                        <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Banner</label>
                        <div class="col-sm-12 col-md-7">
                          <div id="image-preview" class="image-preview">
                            
                            <div class="custom-file">
                              <img src={bannerfile}  style={{zIndex:"-1"}}/>
                              <label  for="customFile">Banner</label>
                              <input type="file" onChange = {(e) =>thumbnailupload(e)}  name="thumbnail"  class="custom-file-input form-control" id="thumbnail"/>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                     </div>
                     <div class = "row">
                     <div class="form-group col-6">
                        <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Trailer</label>
                        <div class="col-sm-12 col-md-7">
                          <div id="image-preview" class="image-preview">
                            
                            <div class="custom-file">
                            {istrailer && 
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJLR0-jyZzf-9MAb2YJ4zic9IaSHLYDI0iaQ&usqp=CAU"  />

                            }
                               
                              <label  for="customFile">Trailer</label>
                              <input type="file" onChange = {(e) =>trailerupload(e)}  name="trailer"  class="custom-file-input form-control" id="trailer"/>
                            </div>
                            
                          </div>
                        </div>
                      </div>

                      <div class="form-group col-6">
                        <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">Video</label>
                        <div class="col-sm-12 col-md-7">
                        
                          <div id="image-preview" class="image-preview">
                            <div class="custom-file">
                            {isvideo && 
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtiUPHNy38Ecbb7sG7K29UpH7IoWYwBpDNA&usqp=CAU"  />

                            }
                              <label>Video</label>
                              <input type="file" onChange = {(e) =>videoupload(e)}  name="video"  class="custom-file-input form-control" id="video"/>
                            </div>
                            
                          </div>
                        </div>
                      </div>

                     </div>

                     

                     
                <form  method="HTTP_METHOD" encType="multipart/form-data">
                
                {progress &&<div class="row">
                <div class="form-group col-3"></div>
                    <div class="col-6">
                    <div class="progress" style={{height:"20px"}}>
                    <div class="progress-bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" style={{width:`${progress}%`}}>
                       <div>{`${progress}%`}</div> 
                    </div>
                    </div>
                    </div>
                    <div class="form-group col-3"></div>    
                  </div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}  
    </section>
  </div>
     
    </>
    
    
  )
}



export default MoviesUpload