import "./About.css";
import mainImg from "./ProjectImages/AboutPageMainImg.png";
import Img1 from "./ProjectImages/AboutpageImg1.jpg";
import Img2 from "./ProjectImages/AboutpageImg2.jpg";
import Img3 from "./ProjectImages/AboutpageImg3.jpg";
import TeamImg from "./ProjectImages/AboutPageTeamImg.jpg";
import userImg1 from "./ProjectImages/AboutpageuserImg1.jpg";
import userImg2 from "./ProjectImages/AboutpageuserImg2.jpg";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
    <div>
      <img style={{height:"600px"}} className=" w-full opacity-70" src={mainImg} alt="" />
   <Navbar/>

   <div className="howitstarted text-center w-full text-3xl flex justify-center items-center bg-stone-400">
    <div className=" mt-5" style={{width:"650px", height:"450px"}}>
    <h1 className="text-4xl py-3 text-stone-800">How It Started</h1>
    <hr className=' w-96 mx-auto mb-3' />
    <p className="para text-2xl text-stone-700">Our journey in interior design began with a passion for transforming spaces into beautiful, functional, and personalized environments. What started as a small venture fueled by creativity and a keen eye for detail soon evolved into a full-fledged design studio. With a deep understanding of aesthetics, architecture, and modern trends, we have been crafting interiors that reflect the unique personality and lifestyle of our clients. </p>
   </div>
   </div>

   <div>
   <h1 className="text-4xl text-center my-3 py-3 text-stone-800">We'll Let Our Number Do The Talking</h1>
   <div className="Achivements flex justify-center items-center " style={{columnGap:"3rem"}}>
    <div className="p-4 px-5 shadow-lg text-center transform transition duration-300 hover:scale-105">
   <img className="h-24 w-28 ml-3 text-center" src={Img2} alt="" />
   <p className=" text-lg font-bold pt-2">1,00,000+</p>
   <p className=" text-md text-gray-400">#LuxeHeavenHomes</p>
    </div>

    <div className="p-4 px-5 shadow-lg text-center transform transition duration-300 hover:scale-105">
    <img className="h-24 w-28 ml-3 " src={Img1} alt="" />
    <p className=" text-lg font-bold pt-2">4,000+</p>
    <p className=" text-md  text-gray-400">#expert Designer</p>
    </div>

    <div className="p-4 px-5 shadow-lg text-center transform transition duration-300 hover:scale-105">
    <img className="h-24 w-28 ml-3 " src={Img3} alt="" />
    <p className=" text-lg font-bold pt-2">3 Contries</p>
    <p className=" text-md  text-gray-400">85+ Cities</p>
    </div>
   </div>
   </div>

   <div className="OurTeam flex justify-center items-center mt-5 pt-4 w-full bg-neutral-500" style={{columnGap:"3rem"}}>
      <div className="teamCaption mt-5 p-5" style={{width:"40%", height:"350px"}}>
      <h1 className=" text-5xl text-neutral-300 pb-4">The Team Behind Our Success</h1>
      <p className=" text-2xl text-neutral-300">Our diverse team of award-winning designers and experts are here to make your home the best it could be.</p>
      </div>
      <br />
      <img className="teamImg shadow-lg" style={{width:"40%", height:"350px"}} src={TeamImg} alt="" />
   </div>
   

   <div className="text-center py-3">
    <h1 className=" text-4xl py-3">The Team</h1>
    <hr className=' w-96 mx-auto mb-3' />
    <p className=" text-2xl pb-3">Get to know the team that'll be with you every step of the way</p>

    <div className="Achivements flex justify-center items-center"style={{columnGap:"2rem"}}>
      <div className=" p-4 " style={{height:"250px", width:"400px"}}>
        <img className="h-24 w-28 mx-auto " src={Img2} alt="" />
        <div>
          <p className="text-2xl font-bold">The Design Lead (DL)</p>
          <p className="text-lg ">The Design  Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are.</p>
        </div>
      </div>

      <div className=" p-4" style={{height:"250px", width:"400px"}}>
        <img className="h-24 w-28 mx-auto " src={userImg2} alt="" />
        <div>
          <p className="text-2xl font-bold">The Business Manager (BM)</p>
          <p className="text-lg ">To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensure there are no hiccups.</p>
        </div>
      </div>

     <div className=" p-4" style={{height:"250px", width:"400px"}}>
        <img className="h-24 w-28 mx-auto " src={userImg1} alt="" />
        <div>
          <p className="text-2xl font-bold">The Project Manager (PM)</p>
          <p className="text-lg ">Your Project Manager streers the execution. They make it their life's mission get your home ready in time.</p>
        </div>
      </div>
    </div>
    <br /><br />

</div>
   
<div className=" text-center w-full py-14 bg-zinc-500 my-4">
<h1 className=" text-4xl py-4 text-zinc-400">Your Dream Home is Just a Click Away</h1>
   <button className=" btn btn-outline-light rounded-full py-2 px-8 text-lg ">Get Started</button>
</div>

   <footer className="footer bg-slate-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2025 LuxeHaven. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>

    </div>
    </>
  );
};

export default About;