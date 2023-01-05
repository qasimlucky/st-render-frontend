import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link,useNavigate } from 'react-router-dom';
function Languages(){
  const [data, setData] = useState([])
  useEffect(() => {
        
        axios
        .get("/language/select")
        .then(Response =>{
            setData(Response.data)
            console.log(Response.data)
            console.log("this is selected dataaaaaa")
            console.log(data)

            
        })
        .catch(err =>{
            console.log(err)
        })
        
        },[]);

    let navigate = useNavigate();
    function editSale(sendData){
        console.log("this is send dataaaaa")
        console.log(sendData)
        navigate("/editlanguage",{state:{sendData:sendData}})
         
      }
  
       return (
        <>
      <Navbar/>
      <Sidebar/>
      <div className="main-content">
        <section className="section adminNewSection">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h4>All Languages</h4>
                  <div className="card-header-form">
                    <Link  to="/addlanguage" className="btn btn-success" style={{color:"white"}}>
                      + Add language
                    </Link>
                  </div>
                </div>
                <div className="card-header mb-3">
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                      />
                      <div className="input-group-btn ml-1">
                        <button className="btn btn-primary">
                          <i className="fas fa-search" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown d-inline ml-1">
                    <button
                      className="btn btn-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Country
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" >
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                  <div className="dropdown d-inline ml-1 float-right">
                    <button
                      className="btn btn-danger dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      State
                    </button>
                    <div className="dropdown-menu">
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                  </div>
                </div>
                <div className="card-body p-0">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                        <tr className="align-center">
                          <th>Image</th>
                          <th>Title</th>
                          <th>keyword</th>
                          <th>Action</th> 
                         </tr> 
                         {data.map(language => ( 
                          <tr className="align-center">
                          <td>
                            <img
                              alt="image"
                               src={language.flag}
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>{language.language_title}</td>
                          <td>{language.keyword}</td>
                          
                          
                          <td>
                            <button  onClick={()=>editSale(language)} className="btn btn-primary">
                              Edit
                            </button>
                          </td>
                        </tr>

                           ))}   
                       
                        
                        {/*  <tr className="align-center">
                          <td> 001</td>
                          <td>
                            <img
                              alt="image"
                              src="https://thecurrent.pk/wp-content/uploads/2020/01/Kashmala-FP.jpg"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Kashmala</td>
                          <td>Razzaq</td>
                          <td>kashmalarazzaq@gmail.com</td>
                          <td>03367172775</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr>
                        <tr className="align-center">
                          <td>002</td>
                          <td>
                            <img
                              alt="image"
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQERgwLBNv_0KQ/profile-displayphoto-shrink_200_200/0/1561833158378?e=1671667200&v=beta&t=cHtjAVQjAltuaeOwNL0hL-eKXWqQeZFFtot_0G0iAEI"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Maryam</td>
                          <td>Rasheed</td>
                          <td>maryamrasheed@gmail.com</td>
                          <td>03367375777</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Non-Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> 
                        <tr className="align-center">
                          <td> 003</td>
                          <td>
                            <img
                              alt="image"
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQHJXs8nWJovsg/profile-displayphoto-shrink_200_200/0/1645556992614?e=1669852800&v=beta&t=RB9Ti7Q8F9J3xluz9fctIAXlO7NseETM-LJTYYP-cIA"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Mehak</td>
                          <td>irfan</td>
                          <td>mehakirfan@gmail.com</td>
                          <td>03068386555</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> 
                        <tr className="align-center">
                          <td> 004</td>
                          <td>
                            <img
                              alt="image"
                              src="https://i1.rgstatic.net/ii/profile.image/582825606647814-1515967861507_Q512/Sara-Abawi-2.jpg"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Sara</td>
                          <td>tameem</td>
                          <td>saratameem@gmail.com</td>
                          <td>03212731675</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Non-Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> 
                        <tr className="align-center">
                          <td>005</td>
                          <td>
                            <img
                              alt="image"
                              src="https://stat1.bollywoodhungama.in/wp-content/uploads/2022/04/Photos-Salman-Khan-Aahana-Kumra-Esha-Gupta-Zaheer-Iqbal-and-others-snapped-at-Baba-Siddique%E2%80%99s-Iftaar-party-5.jpg"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Esha</td>
                          <td>Zaheer</td>
                          <td>eshazaheer@gmail.com</td>
                          <td>03168971553</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> 
                        <tr className="align-center">
                          <td>006</td>
                          <td>
                            <img
                              alt="image"
                              src="https://traditionstores.com/wp-content/uploads/2022/04/Rang-Riaz-Khobsoorat-Festive22-D8-a.jpg"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Esha</td>
                          <td>Riaz</td>
                          <td>eshariaz@gmail.com</td>
                          <td>03458133009</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Non-Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> 
                        <tr className="align-center">
                          <td>007</td>
                          <td>
                            <img
                              alt="image"
                              src="https://media-exp1.licdn.com/dms/image/C4D03AQELOkSptmjc9A/profile-displayphoto-shrink_800_800/0/1627808739055?e=2147483647&v=beta&t=uBVYTwl1EMlti3sAW8d334uAAkCmyKCp2ri7jEauZls"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Hina</td>
                          <td>Shahbaz</td>
                          <td>hinashahbaz@gmail.com</td>
                          <td>03484561049</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> 
                        <tr className="align-center">
                          <td>008</td>
                          <td>
                            <img
                              alt="image"
                              src="https://i1.sndcdn.com/avatars-ICj61BHzyi4r2Tyl-DljyuA-t240x240.jpg"
                              className="rounded-circle"
                              width={35}
                              data-toggle="tooltip"
                            />
                          </td>
                          <td>Iqra</td>
                          <td>Javed</td>
                          <td>iqrajaved@gmail.com</td>
                          <td>03316754890</td>
                          <td>
                            <div className="badge badge-danger badge-shadow">
                              Non-Active
                            </div>
                          </td>
                          <td>
                            <div class="pretty p-switch p-fill">
                              <input type="checkbox" />
                              <div class="state p-success">
                                <label>Verified</label>
                              </div>
                            </div>
                          </td>
                          <td>
                            <a href="#" className="btn btn-primary">
                              View
                            </a>
                          </td>
                        </tr> */}  
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer/>
      
  

        </>
       );
}


export default Languages;