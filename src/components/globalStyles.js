import {createGlobalStyle} from 'styled-components';
const GlobalStyle = createGlobalStyle`
//-----------
* {
	padding: 0%;
	margin: 0%;
	box-sizing: border-box;
	user-select: var(--SubThemeC2);
  margin: 0;
    box-sizing:border-box;
    font-family: 'Montserrat' , sans-Serif;
}

/* ROOT VARIABLES */
*{
	--MainThemeC: #0d1e67;
	--SubThemeC: #ffffff;
	--SubThemeC2: #007afb;
}
//-----------


/* *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Montserrat' , sans-Serif;
    
} */
//--------------------------------------------------------------
html,body{
    /* overflow: hidden; */
    /* height: 100vh; */
  overflow-x: hidden;
    color: white;
  font-weight: 200;
  margin: 0;
  font-size: 1.0rem;
  scroll-behavior: smooth;
  /* overflow: hidden; */
}



//----------- Form Validate Error Message ---------------//
.validate{
  font-size: smaller;
  color: red;
  font-weight: 100;
  width: 235px;
}
.helpicon{
  color: grey;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
  top: 12px;
  color: grey;
}
.tooltip .tooltiptext {
  visibility: hidden;
  width: 150px;
  font-size: 0.8rem;
  font-stretch: condensed;
  background-color: #5db2ea8f;
  color: #04273d;
  text-align: center;
  border-radius: 6px;
  padding: 5px 5px;
  position: absolute;
  z-index: 1;
  left: 90%;
  /* top: 5%; */
  opacity: 0;
  transition: opacity 0.3s;
}
.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 45%;
  right: 100%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent #5db2ea8f transparent transparent;
}
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
//...................PersonList Search Bar....................//
.searchBar {
  margin: 5px;
}
.searchButton {
    padding: 1;
}
/*-------------------------------------------------------------*/
/*-------------------------------------------------------------*/
/*login page*/

.login-container{
  display:flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 3rem;
  
}

/*text styles login*/ 
.large {
  font-size: 3rem;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.lead {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  padding-left: 35rem;
}

.text-primary {
  color: var(#263238);
  padding-left: 40rem;
  
}
.p {
  padding: 0.2rem;
  
}
/*alert for login*/ 
.alert {
  padding: 0.8rem;
  margin: 1rem ;
  position: fixed;
  opacity: 0.9;
  background:#FB7179;
  border-radius: 10px;
  margin-left:42rem;
  color: #333;
  
}
/* Form login*/

.btn {
    background-color: #263238;
    color: white;
    font-size: 20px;
    padding: 10px 50px;
    border-radius: 5px;
    /* margin: 10px 20px; */
    cursor: pointer;
    /* margin-left: 40rem; */
    margin-top: 10px;
    margin-left: 40rem;
    margin-bottom:10rem;
  };
.form .form-group {
  margin: 0.4rem 30rem;

  
  
}

.form .form-text {
  display: block;
  margin-top: 0.3rem;
  color: #000;
  font-size:1.2rem;
  
}

.form input[type="text"],
.form input[type="password"],
.form select,
.form textarea {
  display: block;
  width: 100%;
  padding: 0.4rem;
  font-size: 0.8rem;
  border: none; /* Remove the default border */
    box-shadow: 
        inset 0 0 5px rgba(0,0,0,0.1),
        inset 0 3px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    background: #f9f9f9;
    color: #777;
    transition: color 0.3s ease-out;

  
  
  
}

.form input[type="submit"],
button {
  font: inherit;
}
.particles{
    position:fixed !important;
    left:0;
    top:0;
    width:100%;
    height:100%;
}

/*-----icons grid styles------------------------------------------------------*/
//animated text



/* .anime-text {
  margin-bottom:0.7rem;
  display:flex;
  min-height:20px;
  align-items:center;
} */
.fa-i-cursor {
  font-size:1rem;
  margin-left:0.3rem;
  animation-name:cursor;
  animation-duration:1s;
  animation-iteration-count:infinite;
}
@keyframes cursor {
  from {opacity:1;}
  to {opacity:0;}
}
.anime-text {
  margin-bottom:0.7rem;
  margin-left:-30px;
  display:flex;
  font-weight:bolder;
  color:rgb(120, 240, 240);
  min-height:20px;
  align-items:center;
  cursor: pointer;
  //color:white;
}

a-link, .a-link{
  text-decoration: none;
  color:white;
  cursor: pointer;
}
a-link:hover, .a-link:hover {
  color:yellow;
  text-decoration:underline;
} 


//------------------------------
.particles {
    position: fixed;
    right: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  
/*Banner Style*/
.banner {
  padding: calc(120 /1438 * 100vw);
/*   min-height: calc(100vh - 100px);  */
  font-size:2rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  /* max-width:1000px; */
  background: url('../assets/bak-22.png');
  overflow: hidden;
  background-size: cover;
  
}
.hi {
  display:flex;
}

.name h2 {
  font-family:'Catamaran', sans-serif;
  font-weight:800;
  line-height:40px;
  margin:30px 0;
  color:white;
  cursor: pointer;
}
p{
  line-height:30px;
  font-family:"Work Sans", sans-serif;
  font-size:1.2rem;
  margin-bottom:30px;
  cursor: pointer;
  //color:white;
}
p1{
  line-height:30px;
  font-family:"Work Sans", sans-serif;
  font-size:1.2rem;
  margin-left:40px;
  cursor: pointer;
}

//------------------
//-----------Main content background---------
.MainContent_background{
  background: url('../assets/bak-5.jpg');
  height: 100%;
  /* overflow: hidden; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-color:black; */

}
/* ================================= ABOUT US PAGE START =================================== */
.AboutPageContainer {
  margin: auto;
	width: 55%;
	display: flex;
	justify-content: space-between;
    color: black;
}

.AboutPageContainer .AboutTitle {
	font-size: 3.6rem;
	margin-bottom: 4rem;
}

.AboutPageContainer .ADetailPara {
	font-size: 1.7rem;
	margin-bottom: 3.8rem;
}

.AboutPageContainer ul {
	margin-bottom: 6rem;
}

.AboutPageContainer ul li {
	font-size: 1.6rem;
	margin-bottom: 2rem;
}

.AboutSingleBoxContainer {
	border-radius: 6px;
	background-color: var(--SubThemeC);
	-webkit-box-shadow: 0 0 1.25rem rgb(108 118 134 / 13%);
	box-shadow: 0 0 1.25rem rgb(108 118 134 / 13%);
	margin-bottom: 3.5rem;
  margin-top:3.5rem;
	height: 20.5rem;
	padding: 4.4rem 2rem;
	border: 1px solid rgb(240, 240, 240);
}

.AboutSingleBoxContainer::before {
	position: absolute;
	content: "";
	opacity: 0;
	top: 0;
	left: 1.2rem;
	width: 90%;
	height: inherit;
	background: var(--MainThemeC);
	transform: rotate(0deg);
	z-index: -1;
	transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-ms-transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	-webkit-border-radius: 6px;
	-moz-border-radius: 6px;
	border-radius: inherit;
	transform: rotate(0deg);
}

.AboutSingleBoxContainer:hover:before {
	opacity: 1;
	transform: rotate(15deg);
}

.AboutSingleBoxContainer h1 {
	color: var(--SubThemeC2);
	font-weight: 400;
	font-size: 4.2rem;
	margin-bottom: 2rem;
}

.AboutSingleBoxContainer h3 {
	font-size: 2.5rem;
}

.AboutListIcon {
	color: var(--SubThemeC2);
}

@media screen and (max-width: 998px) {
	.AboutUS-RSideContainer {
		margin-top: 5rem;
	}
}
//-----------------

//----------------COntact us page start----------

//----------------contact us page END---------------
/* =========== SCROLL TO TOP BTN START ============= */
.back-to-top .top {
	z-index: 999;
	position: fixed;
	color: var(--SubThemeC);
	background: var(--MainThemeC);
	bottom: 120px;
	right: 10px;
	font-size: 3rem;
	width: 5rem;
	height: 5rem;
	text-align: center;
	border-radius: 10px;
	-webkit-transition: all 0.3s ease-in-out;
	-moz-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	display: none;
	cursor: pointer;
	transition: 0.6s;
}

.ShowHideBtn .top {
	display: block !important;
	transition: 0.6s;
	-webkit-animation: slide-in-fwd-bottom 0.8s
		cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
	animation: slide-in-fwd-bottom 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

@-webkit-keyframes slide-in-fwd-bottom {
	0% {
		-webkit-transform: translateZ(-1400px) translateY(800px);
		transform: translateZ(-1400px) translateY(800px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateZ(0) translateY(0);
		transform: translateZ(0) translateY(0);
		opacity: 1;
	}
}
@keyframes slide-in-fwd-bottom {
	0% {
		-webkit-transform: translateZ(-1400px) translateY(800px);
		transform: translateZ(-1400px) translateY(800px);
		opacity: 0;
	}
	100% {
		-webkit-transform: translateZ(0) translateY(0);
		transform: translateZ(0) translateY(0);
		opacity: 1;
	}
}

/* =========== SCROLL TO TOP BTN END ============= */


  
//-------clock-----------
.clock-container {
    font-family: 'Share Tech Mono', monospace;
    color: #ffffff;
    font-size: 2rem;
    max-width: max-content;
    display: flex;
    position: absolute;
    margin-left: 50%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    transform: translate(-50%, -50%);
    color: #daf6ff;
    }
    
    .clock {
      font-size: 1.0rem;
      letter-spacing: 4px;
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.7),
        -1px -1px 2px rgba(0, 0, 0, 0.3);
    }
//------------map css-----------
/* start Map css */

/* .root {
    overflow: hidden;
} */

.paper {
    /* width: 50%; */
    height: 800px;
    margin: 30px 10px 10px 10px;
    padding: 20px;
}

.parent {
    position: relative;
    height: 1000;
    width: 1000;
}

.mapDist {
    width: 600px;
    height: 800px;
    margin: auto;
    /* transform: scale(0.6); */
    stroke: #ffffff; 
    stroke-linecap: round; 
    stroke-width: 2;
}

.B{
    fill: #cc1100;
    stroke: snow;
    stroke-width: 1px;
    transition: fill 0.3s;
    
}

.B:hover {
    fill: orange;
    cursor: pointer;
}

.mapDiv {
    width: 600px;
    height: 800px;
    margin: auto;
    /* transform: scale(0.6); */
    stroke: #ffffff; 
    stroke-linecap: round; 
    stroke-width: 2;
}

.A{
    fill: #cc1100;
    opacity: 0.6;
    stroke: white;
    stroke-width: 1px;
    transition: fill 0.3s;
    
}

.A:hover{
    fill: orange;
    cursor: pointer;
    /* stroke-width: 2px;
    -webkit-transform:scale(1.01); */
}

.overlay{
    position: absolute;
    display: block;
    visibility: hidden;
    /* transition: cubic-bezier(0.98, 0.06, 0.14, 0.99); */
    width: 680px;
    height: 750px;
    top: 80px;
    left: 30px;
    right: 0;
    bottom: 0;
    background-color: #ffffffc9;
}

.district{
    transform: scale(4.5);
    display: block;
    margin-top: 300px;
    margin-left: 300px;
    width: 120px;
    height: 120px;
    animation: 750ms 1 forwards disAnime;
    /* animation-play-state: running; */
}
.district path:hover{
    fill: orange;
    cursor: pointer;
}
.district g:hover{
    fill: orange;
    cursor: pointer;
}

/* .districtAnime{
    animation: 1s 1 forwards disAnime;
} */
@keyframes disAnime {
    0%   {opacity: 0; transform: scale(0.5);}
    100% {opacity: 1;transform: scale(4.5);}
  }


/* @keyframes disAnime {
    0%   {background: red; left: 0px; top: 0px;}
    25%  {background: yellow; left: 200px; top: 0px;}
    50%  {background: blue; left: 200px; top: 200px;}
    75%  {background: green; left: 0px; top: 200px;}
    100% {background: red; left: 0px; top: 0px;}
  } */

  /* End Map CSS */

  /* Start HeaderBar CSS */

  main {
    background: #9869a3;
    grid-area: main;
    overflow-y: auto;
  }
  
  .main__container {
    padding: 20px 35px;
  }
  
  .main__title {
    display: flex;
    align-items: center;
  }
  
  .main__title > img {
    max-height: 100px;
    object-fit: contain;
    margin-right: 20px;
  }
  
  .main__greeting > h1 {
    font-size: 24px;
    color: #4d0741;
    margin-bottom: 5px;
  }
  
  .main__greeting > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
  }
  
  .main__cards {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 30px;
    margin: 20px 0;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 110px;
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #555151, -5px -5px 13px #7a6e6e;
  }
  
  .card_inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .card_inner > span {
    font-size: 20px;
  }
  /* End HeaderBar CSS */

  /* Start ChartBar CSS */
  .charts {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    margin-top: 50px;
  }
  
  .charts__left {
    padding: 25px;
    border-radius: 10px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #555151, -5px -5px 13px #7a6e6e;
  }
  
  .charts__left__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .charts__left__title > div > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
  }
  
  .charts__left__title > div > p {
    font-size: 14px;
    font-weight: 700;
    color: #a5aaad;
  }
  
  .charts__left__title > i {
    color: #ffffff;
    font-size: 20px;
    background: #cf4fcf;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
    padding: 15px;
  }
  
  .charts__right {
    padding: 25px;
    border-radius: 5px;
    background: #ffffff;
    box-shadow: 5px 5px 13px #555151, -5px -5px 13px #7a6e6e;
  }
  
  .hr.new {
    border: 1px solid;
  }
  
  .table_style{
    border: 1px solid black;
  }
  
  .charts__right__title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .charts__right__title > div > h1 {
    font-size: 24px;
    color: #2e4a66;
    margin-bottom: 5px;
  }
  
  .charts__right__title > div > p {
    font-size: 14px;
    font-weight: 700;
    color: #04273d;
  }
  
  .charts__right__title > i {
    color: #ffffff;
    font-size: 20px;
    background: #39447a;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
    padding: 15px;
  }
  
  .charts__right__cards {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 30px;
  }
  
  
  
  @media only screen and (max-width: 855px) {
    .main__cards {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-bottom: 0;
    }
  
    .charts {
      grid-template-columns: 1fr;
      margin-top: 30px;
    }
  }

  .rowScroll{
    position: absolute;
    overflow-y:scroll;
    height: 350px;
  }
  /* End ChartBar CSS */
//------------------------
//----card items for rank homes----

.cards {
    padding: 8rem;
    background: #fff;
    
  }
  
  /* h1 {
    text-align: center;
  } */
 
  .page_heading {
    color: #0d1e67;
    text-align: center;
    font-weight: bold;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
  
  .cards__container {
    /* background: url('../assets/tile-bak-2.png') center center/cover no-repeat; */
    /* background: url('../assets/tile-bak-2.png'); */
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 90%;
    margin: 30px 200px;
  }
  
  .cards__wrapper {
    position: relative;
    margin: 50px 0 45px;
    
  }
  
  .cards__items {
    margin-bottom: 24px;
    
  }
  
  .cards__item {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 5px;
    margin-left: 50px;
    background: url('../assets/bak-4.jpg');
    
  }
  .cards__item:hover {
	-webkit-transform: translateY(-10px);
	transform: translateY(-10px);
  border-radius: 2px;
  box-shadow: 10px 10px 10px 10px rgba(126, 25, 155, 60%);
}
  
  .cards__item__link {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
  }
  
  .cards__item__pic-wrap {
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
  }
  
  .fade-img {
    animation-name: fade-img;
    animation-duration: 2s;
  }
  
  .cards__item__pic-wrap::after {
    content: attr(data-category);
    position: absolute;
    bottom: 0;
    margin-left: 100px;
    padding: 6px 8px;
    max-width: calc((100%) - 60px);
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    background-color: #1f98f4;
    box-sizing: border-box;
  }
  
  .cards__item__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.2s linear;
  }
  
  .cards__item__img:hover {
    transform: scale(1.1);
  }
  
  .cards__item__info {
    padding: 20px 30px 30px;
  }
  
  .cards__item__text {
    color: #252e48;
    font-size: 18px;
    line-height: 24px;
  }
  
  @media only screen and (min-width: 1200px) {
    .content__blog__container {
      width: 84%;
    }
  }
  
  @media only screen and (min-width: 1024px) {
    .cards__items {
      display: flex;
    }
  }
  
  @media only screen and (max-width: 1024px) {
    .cards__item {
      margin-bottom: 2rem;
    }
  }
  //------rank1 home background------
  .Rank1Home_page{
  background: url('../assets/home_1.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
   /* .Rank1Home_page{
    height: 100vh;
    overflow: hidden;
    background: linear-gradient(90deg, rgb(0, 0, 0) 25%, rgb(38, 218, 218) 60%);
    margin: 0;
    } */
  //---------Rank2 home background----------------
  .Rank2Home_page{
  background: url('../assets/home_2.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //--------------------------------------------
  //---------Rank3 home background----------------
  .Rank3Home_page{
  background: url('../assets/home_3.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //--------------------------------------------
  //---------Rank4 home background----------------
  .Rank4Home_page{
  background: url('../assets/home_4.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //--------------------------------------------
  //------------Add person page background------
  .AddPerson_page{
    background: url('../assets/bak-19.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //-------------Add party background-------------------------------
  .AddParty_page{
  background: url('../assets/bak-6.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //------------------
   //------------Add candidate page background------
   .AddCandidate_page{
  background: url('../assets/bak-11.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //------------AdminList and add admin page background------
  .AdminList_page{
  background: url('../assets/bak-5.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //------------------
  //----------------Add district page bakground----------------------------
  .AddDistrict_page{
  background: url('../assets/bak-22.png');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  .Setting_page{
  background: url('../assets/pattern-11.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  .Databaseview_page{
  background: url('../assets/pattern-12.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  .setting_container{
    box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 20%);
  -webkit-box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 10%);
  background: url('../assets/pattern-5.png');
  height: 100%;
 
  }
  //------------polling center page background------
  .PollingCenter_page{
    background: url('../assets/bak-26.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  }
  //--------------------------------------------
  //----------------Admin list table------------------------
  .tableContainer {
	background-color: yellowgreen;
	-webkit-box-shadow: 0 0 1.25rem rgb(108 118 134 / 10%);
	box-shadow: 0 0 1.25rem rgb(108 118 134 / 10%);
	padding: 3.5rem 3rem;
  height: 100%;
  margin-left: 8rem;
	/* margin-bottom: 3rem; */
	position: relative;
	z-index: 1;
	-webkit-transition: 0.5s;
	transition: 0.5s;
	border-radius: 0.5rem;
	border: 1px solid rgb(242, 242, 242);
  }
  .tableContainer::before {
	top: 50%;
	left: 50%;
	width: 0%;
	z-index: -1;
	height: 100%;
	content: "";
	position: absolute;
	-webkit-transition: all 0.3s ease-in-out;
	transition: all 0.3s ease-in-out;
	background-color: yellowgreen;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	border-radius: 0.5rem;
	-webkit-transition: 0.5s;
	transition: 0.5s;
}

.tableContainer:hover {
	-webkit-transform: translateY(-10px);
	transform: translateY(-10px);
}
  //-------------------add admin layout------------------
  /* .Admin_page{
  background: url('../assets/bak-6.jpg');
  height: 100vh;
  overflow: hidden;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  } */
//------------add admin--------------
.add_admin_container{
	box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 20%);
  -webkit-box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 10%);
  background: url('../assets/pattern-5.png');
	padding: 3.5rem 3rem;
  height: 100%;
  width:33rem;
  margin-left: 7rem;
	/* margin-bottom: 3rem; */
	position: relative;
	z-index: 1;
	-webkit-transition: 0.5s;
	transition: 0.5s;
	border-radius: 0.5rem;
	border: 2px solid rgb(242, 242, 102);
  }
  .Rank_filter{
    display: flex;
    margin-top: 20px;
    /* margin-left: 112px; */
    margin-left: 112px;
    
    
  }
  .Rank_label{
    color:white;
    font-size: 10px;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  //-----------add person page---------------
  .add_person_container{
	box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 20%);
  -webkit-box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 10%);
  background: url('../assets/pattern-5.png');
	padding: 3.5rem 3rem;
  height: 100%;
  width:33rem;
  margin-left: 7rem;
	/* margin-bottom: 3rem; */
	position: relative;
	z-index: 1;
	-webkit-transition: 0.5s;
	transition: 0.5s;
	border-radius: 0.5rem;
	border: 2px solid rgb(242, 242, 102);
  }
  .add_candidate_container{
	box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 20%);
  -webkit-box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 10%);
  background: url('../assets/pattern-10.jpg');
	padding: 3.5rem 3rem;
  height: 100%;
  width:33rem;
  margin-left: 7rem;
	/* margin-bottom: 3rem; */
	position: relative;
	z-index: 1;
	-webkit-transition: 0.5s;
	transition: 0.5s;
	border-radius: 0.5rem;
	border: 2px solid rgb(242, 242, 102);
  }
  .add_party_container{
	box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 20%);
  -webkit-box-shadow:1rem 1rem 1rem 1rem rgb(148 148 34 / 10%);
  background: url('../assets/pattern-9.jpg');
	padding: 3.5rem 3rem;
  height: 100%;
  width:33rem;
  margin-left: 7rem;
	/* margin-bottom: 3rem; */
	position: relative;
	z-index: 1;
	-webkit-transition: 0.5s;
	transition: 0.5s;
	border-radius: 0.5rem;
	border: 2px solid rgb(242, 242, 102);
  }
`;

export  default GlobalStyle;