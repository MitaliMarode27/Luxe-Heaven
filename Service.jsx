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
  "https://img.freepik.com/premium-photo/web-development-coding-programming-internet-technology-business-concept_628331-833.jpg?semt=ais_hybrid&w=740",
  "https://www.netleafinfosoft.com/our-blog/wp-content/uploads/2019/04/Graphic-_Design.jpg",
  "https://www.springboard.com/blog/wp-content/uploads/2022/06/why-is-digital-marketing-so-important-to-businesses.jpg",
  "https://www.developeronrent.com/blogs/wp-content/uploads/2019/09/python-for-web-development.jpg",
  "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR61DqwdWoklnEu9UNSeaK56__Dw852zWdjdA&s"
];

console.log(info);

  return (
    <>
      <Navbar />
<h1 className="text-center text-3xl my-5">Services</h1>

<div className="container">
  <div className="row justify-content-center">
    {info.map((val, idx) => (
    
      <div className="col-md-4 d-flex justify-content-around mb-4" key={idx}>
        <div className="card shadow-lg" style={{ width: "18rem" }}>
          <img
            src={images[idx]|| "https://via.placeholder.com/150"}
            className="card-img-top"
            alt={val.service || "Service Image"}
          />
          <div className="card-body">
            <h3 className="card-title text-2xl text-center text-black">{val.services}</h3>
            <p className="card-text">{val.description}</p>
            <p className="text-slate-500 mt-2">{val.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </>
  );
};

export default Service;