import "./Sidebar.css";
import React,{Component} from "react";
import ReactDOM from "react-dom";

import Avatar from '@material-ui/core/Avatar';



class Sidebar extends Component {

 componentDidMount (){
  let btn = document.querySelector("#btn");
  let sidebar = document.querySelector(".sidebar");
  let searchBtn = document.querySelector(".bx-search");

  

  //  btn.onclick = function() {
  //    sidebar.classList.toggle("active");
  //    if(btn.classList.contains("bx-menu")){
  //      btn.classList.replace("bx-menu" , "bx-menu-alt-right");
  //    }else{
  //      btn.classList.replace("bx-menu-alt-right", "bx-menu");
  //    }
  //  }
  //  searchBtn.onclick = function() {
  //    sidebar.classList.toggle("active");
  //  }
  }



render(){
  return (
<div>
  {/* Created By CodingLab - www.codinglabweb.com */}
  <meta charSet="UTF-8" />
  {/*<title> Responsive Sidebar Menu  | CodingLab </title>*/}
  <link rel="stylesheet" href="style.css" />
  {/* Boxicons CDN Link */}
  <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="sidebar">
    <div className="logo_content">
      <div className="logo">
        {/* <i className="bx bxl-c-plus-plus" /> */}
        {/* <div className="logo_name">CodingLab</div> */}
      </div>
      {/* <i className="bx bx-menu" id="btn" /> */}
    </div>
    <ul className="nav_list">
    
 {/* <li>
        <a href="#">
        <i className='bx bx-chevron-left-circle'/>
          <span className="links_name">Back</span>
        </a>
        <span className="tooltip">Back</span>
      </li> */}

      <li>
        <a href="#">
        <i class='bx bxs-home' />
          <span className="links_name">Home</span>
        </a>
        <span className="tooltip">Home</span>
      </li>

      <li>
        <a href="#">
        <i className='bx bxs-pie-chart-alt-2'></i>
          <span className="links_name">Party Result</span>
        </a>
        <span className="tooltip">Party Result</span>
      </li>
     
      <li>
        <a href="#CanResultView">
        <i className='bx bxs-face'></i>
          <span className="links_name">Candidate Result</span>
        </a>
        <span className="tooltip">Candidate Result</span>
      </li>
      {/* <li>
        <a href="#wonSeatView">
          <i className="bx bxs-trophy" />
          <span className="links_name">Won Seats</span>
        </a>
        <span className="tooltip">Won Seats</span>
      </li> */}
     
    </ul>
    {/* <div className="profile_content">
      <div className="profile">
        <div className="profile_details">
          <img src="profiles" alt="profiles"/>
          <div className="name_job">
            <div className="name">Prem Shahi</div>
            <div className="job">Web Designer</div>
          </div>
        </div>
        <i className="bx bx-log-out" id="log_out" />
      </div>
    </div> */}
  </div>
  {/* <div class="home_content">
    <div class="text">Home Content</div>
  </div> */}
</div>


  )};
}

  export default Sidebar;