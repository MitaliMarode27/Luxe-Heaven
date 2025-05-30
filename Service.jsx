import { useEffect, useState } from "react";
import Navbar from "./src/Navbar";

const Service = () => {
  const [info, setInfo] = useState([]);

  const showDetails = async () => {
    try {
      const response = await fetch(`http://localhost:5000/service`, {
        method: "GET",
      });
      if (response.ok) {
        const result = await response.json();
        setInfo(result.data || []); // Corrected state setter
      } else {
        console.error("Failed to fetch services:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    showDetails();
  }, []);

  const images = [
  "https://www.morgantewilson.com/uploads/_blogHero/NorthshoreMediterranean11023_UHR.jpg",
  "https://www.swamiinterior.in/wp-content/uploads/2022/08/commercial-interior-designers-in-mumbai-swami-interior.webp",
  "https://media.designcafe.com/wp-content/uploads/2022/08/18154955/interior-design-cost-in-mumbai.jpg",
  "https://archicgi.com/wp-content/uploads/2021/04/3d-architectural-visualization-projects-7-questions-view01.jpg",
  "https://www.pakitchen.com/wp-content/uploads/2024/03/Feature-Home-renovation-project-feature-image.jpg",
  "https://nomvo.com/wp-content/uploads/2016/06/example-of-example-seo-consultation-servics.jpg",

];

console.log(info);
  return (
    <>
      <Navbar />
<h1 className="text-center text-4xl py-5 mt-5 pt-8 text-neutral-500">Elegant & Professional</h1>
<hr className=' w-80 mx-auto mb-5' />

<div className="p-4">
  <h3 className=" text-center text-3xl mb-2 text-neutral-400">"Crafting Beautiful Spaces That Reflect Your Style"</h3>
  <p className=" text-center text-2xl mb-4 text-neutral-300">Discover our range of interior design services tailored to bring your dream spaces to life with precision, creativity, and care.</p>
</div>

    {info.map((val, idx) => (
    
      <div className="col-md-12 d-flex justify-center  mb-4" key={idx}>
<div className="card mb-14 transform transition duration-500 hover:scale-105 hover:opacity-55 shadow-md" style={{width:"70%", height:"50%", backgroundSize: "cover"}}>
 <img
            src={images[idx]|| "https://via.placeholder.com/150"}
            className="card-img-top"
            alt={val.service || "Service Image"}
           
          />   <div className="card-body">
            <h3 className="card-title text-2xl  text-black">{val.services}</h3>
            <p className="card-text text-neutral-400">{val.description}</p>
            <p className="text-slate-500 mt-2 ">{val.price}</p>
          </div>
</div>
      </div>
    ))}

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

    </>
  );
};

export default Service;