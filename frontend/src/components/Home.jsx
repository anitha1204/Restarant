import React, { useRef, useState } from "react";
import img4 from "../assets/Banner.png";
import { GiCentaurHeart } from "react-icons/gi";
import { RiVisaFill } from "react-icons/ri";
import { LuSchool } from "react-icons/lu";
import { GiBank } from "react-icons/gi";
import { IoRestaurantOutline } from "react-icons/io5";
import { GrUserPolice } from "react-icons/gr";
import { PiMapPin } from "react-icons/pi";
import { MdOutlineSchool } from "react-icons/md";
import img from "../assets/About.png";
import { FaStar } from "react-icons/fa6";
import img1 from "../assets/img5.png";
import a from "../assets/img6.png";
import logo from "../assets/logo_png.png";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

import {

  FaInstagram,
  FaGoogle,
} from "react-icons/fa";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Gallery from "./Gallery";
import Rooms from "./Rooms";



const Home = () => {

  const roomsRef = useRef(null);
  const [formData, setFormData] = useState({
    userName: "",
    phonNumber: "",
    email: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://restaurant-backend-ddwv.onrender.com/post",
        formData
      );
      console.log("User registered:", response.data);
      toast.success("User registered successfully!");

      // Reset form data
      setFormData({
        userName: "",
        phonNumber: "",
        email: "",
        location: "",
        date: "",
      });
    } catch (error) {
      console.error("There was an error registering the user!", error);
      toast.error("There was an error registering the user!");
    }
  };

  return (
    <div>
      <section className="relative w-full h-screen">
        <div className="relative w-full h-full">
          <img src={img4} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-5">
            <div className="absolute top-0 bg-white bg-opacity-70 p-2 rounded">
              <Link to="https://maahotels.in">
                <img src={logo} alt="Logo" className="w-44" />
              </Link>
            </div>
          
            <div className="mt-[500px] text-center lg:mb-[150px]">
              <p className="text-2xl md:text-4xl  lg:mr-[860px]">Best Service Apartment</p>
              <p className="text-2xl md:text-4xl lg:mr-[970px]">in Greams Road</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-3 mt-5 lg:mr-[890px] md:space-x-3">
              <Link to="tel:+919941177234">
                <button className="px-5 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80">
                  CALL NOW
                </button>
              </Link>

              <button
                className="px-5 py-2 text-sm md:text-lg bg-black bg-opacity-60 rounded hover:bg-opacity-80 w-[115px] ml-[65px] lg:w-40 "
                onClick={() => {
                  roomsRef.current?.scrollIntoView({
                    behavior: "smooth",
                  }); 
                }}
              >
                BOOK NOW
              </button>
            </div>
            </div>
            <div className="bg-gray-200 w-5/6 mt-20 rounded-xl text-black p-4 md:p-8 lg:mb-40">
              <h3 className="text-center text-gray-700 text-lg md:text-xl mb-4 ">
                Near by Maa Residency
              </h3>
              <div className="flex flex-wrap justify-center md:justify-evenly items-center gap-2 mb-6 lg:text-center ">
                <div className="flex items-center rounded-lg cursor-pointer p-2">
                  <GiCentaurHeart className="text-xl md:text-2xl lg:text-3xl" />
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg">
                    Apollo Heart Centre
                  </h1>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2">
                  <RiVisaFill className="text-xl md:text-2xl lg:text-3xl" />
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg mr-5">
                    Global Visa Centre
                  </h1>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2">
                  <LuSchool className="text-xl md:text-2xl lg:text-3xl" />
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg">
                    Matriculation School
                  </h1>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2">
                  <GiBank className= "text-xl md:text-2xl lg:text-3xl"/>
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg mr-10">
                    CBS Bank/ATM
                  </h1>
                </div>
              </div>

              <div className="flex flex-wrap justify-center md:justify-evenly items-center gap-2 mb-6 lg:text-center ">
                <div className="flex items-center rounded-lg cursor-pointer p-2 lg:mr-8">
                  <IoRestaurantOutline className="text-xl md:text-2xl lg:text-3xl" />
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg mr-2">
                    Multi Restaurants
                  </h1>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2">
                  <GrUserPolice className="text-xl md:text-2xl lg:text-3xl" />
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg mr-10">
                    Police Station
                  </h1>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 lg:ml-10">
                  <PiMapPin className="text-xl md:text-2xl lg:text-3xl"/>
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg">
                    5Minreact AnnaSalai
                  </h1>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 lg:ml-4">
                  <MdOutlineSchool className="text-xl md:text-2xl lg:text-3xl"/>
                  <h1 className="text-md ml-2 whitespace-nowrap lg:text-lg mr-10 ">
                    Exhiraj College
                  </h1>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-32 mt-[320px] md:mt-auto lg:mt-40 space-y-2 lg:space-y-0">
        <div className="w-full lg:w-3/4 space-y-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-center lg:text-left text-gray-500">
            Our Vision And Mission
          </h1>
          <p className="text-justify mt-8 font-semibold text-sm md:text-base p-3 lg:mr-10">
            Maa Group of Companies is a distinguished name in the world of hospitality. Established in 2018, our journey began with the operation of Hotel MAA Serviced Apartment near Apollo Hospital Greams Road. Over the years, we've expanded to offer a budget-class hotel with 25 keys, catering to budget travelers. In response to the growing demand for luxury at affordable prices, we proudly introduced Maa Grand, redefining the standards of hospitality in Tamil Nadu. Our commitment to excellence and impeccable service has made us the #1 choice for all your hospitality needs. Discover quality, comfort, and affordability with Maa Group of companies. Your satisfaction is our priority.
          </p>
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer lg:ml-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500" />
            <Link to={"https://www.google.com/travel/search?gsas=1&ts=GhwSGhIUCgcI6A8QBxgUEgcI6A8QBxgVGAEyAhAA&qs=MjZDaVFJOWJqVXAtenFvclRHQVJDYXRlNzl0NGU4MlhZYURTOW5MekV4Y25kcU5ucHdkRElRQVE4Ag&ap=ugEHcmV2aWV3cw&sa=X&ved=0CAAQ5JsGahcKEwjoxp-OjLOHAxUAAAAAHQAAAAAQDQ"}>
              <p className="ml-2 text-yellow-700 text-md">view reviews</p>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-3/4 h-auto p-4">
          <img className="rounded-lg w-full h-auto" src={img} alt="About" />
        </div>
      </div>
      
      <img 
  src={a} 
  alt="Responsive Image" 
  className="mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 lg:ml-[110px] mt-5"
/>


      <h3 className="text-center  font-bold mt-6 lg:mt-[60px] lg:mr-[940px]  text-2xl md:text-4xl text-gray-500">
        Amenities / Facilities
      </h3>
      <img
        src={img1}
        alt=""
        className="w-full max-w-[800px] h-auto mx-auto mt-10"
      />


      


        {/* <div className="flex space-x-4 overflow-x-auto ml-4 md:ml-10 mt-10 gap-4 p-4 lg:ml-24">
          <div className="text-center flex-shrink-0">
            <img src={Img5} alt="Double bedroom" className="w-[240px] md:w-[300px] h-[240px] md:h-[300px] object-cover rounded-lg" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">Double bedroom</h3>
          </div>
          <div className="text-center flex-shrink-0">
            <img src={Img6} alt="King size single room" className="w-[240px] md:w-[300px] h-[240px] md:h-[300px] object-cover rounded-lg" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">King size single room</h3>
          </div>
          <div className="text-center flex-shrink-0">
            <img src={Img7} alt="Queen size single room" className="w-[240px] md:w-[300px] h-[240px] md:h-[300px] object-cover rounded-lg" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">Queen size single room</h3>
          </div>
          <div className="text-center flex-shrink-0">
            <img src={Img8} alt="Extra Large single room" className="w-[240px] md:w-[300px] h-[240px] md:h-[300px] object-cover rounded-lg" />
            <h3 className="text-lg md:text-xl font-semibold mt-4">Extra Large single room</h3>
          </div>
        </div> */}
        <Rooms/>

  



      <Gallery />
      <p class="text-center text-base lg:text-lg font-bold text-gray-700 mt-8">
        Call Us: 9865434210 | 044-9876452312 | 9087653412 | Email: Maa.greamsroad@gmail.com.com
      </p>

      <div className="flex justify-center mt-10">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-4">
          <div className="w-full lg:w-1/2 p-3">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.244143178587!2d80.24817438655302!3d13.059711350435744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526715fbeeff8f%3A0xa06f234699827541!2sGems%20road%20chennai!5e0!3m2!1sen!2sin!4v1720004549356!5m2!1sen!2sin"
              width="100%"
              height="220"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-gray-700 mt-2">
              Location: Greams road, Thousand light, Chennai.
            </p>
          </div>

          <div className="hidden lg:block border-l-2 border-black h-60 "></div>

          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md mt-4">
            <form onSubmit={handleSubmit} className="w-full">
              <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
                <input
                  type="text"
                  name="userName"
                  placeholder="Full Name"
                  value={formData.userName}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
                <input
                  name="location"
                  placeholder="Location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
                <input
                  type="number"
                  name="phonNumber"
                  placeholder="Phone Number"
                  value={formData.phonNumber}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full md:w-1/2 px-4 py-2 border rounded-md"
                />
                <button
                  type="submit"
                  className="w-full md:w-1/2 px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>


      <TestimonialsCarousel />

      {/* Footer */}
      <div className="mt-16" ref={roomsRef}>
        <div className="bg-gray-200 py-10 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 backdrop-blur-sm rounded-t-xl p-8 lg:ml-40">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img
                    src={logo}
                    alt="Logo"
                    className="h-18 w-[200px] rounded-full mb-4"
                  />
                </Link>
                <p className="text-md text-[chocolate]">
                  Welcome to Maa Group of Companies, a pioneering entity that embarked on its journey in 2018, with a foray into the Hotel Division.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:col-span-2">
                <div className="text-center md:text-left">
                  <h1 className="text-xl font-bold mb-3 text-brown-200">
                    CONTACT US
                  </h1>
                  <div className="flex flex-col items-center md:items-start gap-5 mb-3 text-[chocolate]">
                    <p>maa.greamsroad@gmail.com</p>
                    <p>9941177234 | 7200247474</p>
                    <p>
                      NO.160, THIRU BUILDING, 2ND FLOOR, THOUSAND LIGHTS, CHENNAI - 600 006.
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-xl font-bold mb-3 text-brown-200">
                    SOCIAL LINKS
                  </h1>
                  <div className="flex justify-center md:justify-start gap-3 mt-6 text-[chocolate]">
                    <a
                      href="https://www.facebook.com/share/YUAxq7M5WFWwRwJ7/?mibextid=LQQJ4d"
                      className="hover:text-gray-700"
                    >
                      <RiFacebookBoxLine size={20} className="h-7 w-7" />
                    </a>
                    <a
                      href="https://www.google.co.in/"
                      className="hover:text-gray-700"
                    >
                      <FaGoogle size={20} className="h-7 w-7" />
                    </a>
                    <a
                      href="https://www.instagram.com/maa_hotels?igsh=MTZmcjBubmMwdDdrbQ%3D%3D&utm_source=qr"
                      className="hover:text-gray-700"
                    >
                      <FaInstagram size={20} className="h-7 w-7" />
                    </a>
                    <a
                      href="#"
                      className="hover:text-gray-700"
                    >
                      <CiLinkedin size={20} className="h-7 w-7" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;
