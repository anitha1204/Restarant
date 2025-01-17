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
import img2 from "../assets/img6.png";
import logo from "../assets/logo_png.png";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { RiFacebookBoxLine } from "react-icons/ri";
import { CiYoutube } from "react-icons/ci";
import { FaInstagram, FaGoogle } from "react-icons/fa";
import TestimonialsCarousel from "./TestimonialsCarousel";
import Gallery from "./Gallery";
import Rooms from "./Rooms";
import Video from "./Video";

import { useNavigate } from 'react-router-dom';

const Home = () => {

  const roomsRef = useRef(null);
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "", // Changed from phonNumber to phoneNumber
    email: "",
    location: "",
    date: "",
    room: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.userName) newErrors.userName = "Full Name is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.phoneNumber) newErrors.phoneNumber = "Phone Number is required"; // Changed from phonNumber to phoneNumber
    if (!formData.date) newErrors.date = "Date is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.room) newErrors.room = "Room selection is required";
    return newErrors;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const response = await axios.post(
        "https://restaurant-backend-0hlb.onrender.com/post",
        formData
      );
      console.log("User registered:", response.data);
      toast.success("User registered successfully!");

      // Reset form data after successful submission
      setFormData({
        userName: "",
        phoneNumber: "", // Changed from phonNumber to phoneNumber
        email: "",
        location: "",
        date: "",
        room: "",
      });

      // Navigate to the Thank You page
      navigate("/thankyou"); // Ensure this route exists

    } catch (error) {
      console.error("There was an error registering the user!", error);
      if (error.response && error.response.data && error.response.data.Error) {
        toast.error(error.response.data.Error);
      } else {
        toast.error("There was an error registering the user!");
      }
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
              <h1 className="text-2xl md:text-4xl  lg:mr-[860px]">Best Service Apartment</h1>
              <h1 className="text-2xl md:text-4xl lg:mr-[970px]">in Greams Road</h1>

              <div className="flex flex-col md:flex-row justify-center gap-3 mt-5 lg:mr-[900px] md:space-x-3">
                <Link to="tel:+91 9841177234">
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
              <h2 className="text-center text-gray-700 text-lg md:text-xl mb-4">
                Near by Maa Residency
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-2 mb-6">
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center">
                  <GiCentaurHeart className="text-lg lg:text-3xl" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">Apollo Heart Centre</h2>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center mr-4">
                  <RiVisaFill className="lg:text-3xl text-lg" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">Global Visa Centre</h2>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center">
                  <LuSchool className="lg:text-3xl text-lg" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">Matriculation School</h2>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center mr-10">
                  <GiBank className="lg:text-3xl text-lg" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">CBS Bank/ATM</h2>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center lg:mr-6 mr-6">
                  <IoRestaurantOutline className="lg:text-3xl text-lg" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">Multi Restaurants</h2>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center lg:mr-12 mr-12">
                  <GrUserPolice className="lg:text-3xl text-lg" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">Police Station</h2>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center">
                  <PiMapPin className="lg:text-3xl text-lg" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">5Min reach AnnaSalai</h2>
                </div>
                <div className="flex items-center rounded-lg cursor-pointer p-2 justify-center lg:mr-10 mr-10">
                  <MdOutlineSchool className="lg:text-3xl text-lg" />
                  <h2 className="text-md ml-2 whitespace-nowrap lg:text-lg">Ethiraj College</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="flex flex-col lg:flex-row justify-between items-center px-4 md:px-8 lg:px-32 mt-[300px] md:mt-auto lg:mt-40 space-y-2 lg:space-y-0">
        <div className="w-full lg:w-3/4 space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-center lg:text-left text-gray-500 lg:ml-2">
            Our Vision And Mission
          </h2>
          <p className="text-justify mt-8 font-semibold text-sm md:text-base p-3 lg:mr-10">
            Maa Group of Companies is a distinguished name in the world of
            hospitality. Established in 2018, our journey began with the
            operation of Hotel MAA Serviced Apartment near Apollo Hospital
            Greams Road. Over the years, we've expanded to offer a budget-class
            hotel with 25 keys, catering to budget travelers. In response to the
            growing demand for luxury at affordable prices, we proudly
            introduced Maa Grand, redefining the standards of hospitality in
            Tamil Nadu. Our commitment to excellence and impeccable service has
            made us the #1 choice for all your hospitality needs. Discover
            quality, comfort, and affordability with Maa Group of companies.
            Your satisfaction is our priority.
          </p>
          <div className="flex items-center gap-2 md:gap-4 cursor-pointer lg:ml-2 ml-3">
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
        <div className="w-[-10px] sm:w-5/6 md:w-4/5 lg:w-3/4 xl:w-2/3 2xl:w-1/2 h-auto p-4">
          <img className="rounded-lg w-full h-auto object-cover" src={img} alt="" />
        </div>
      </div>
      <img
        src={img2}
        alt=""
        className="mx-auto w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 lg:ml-[110px] mt-5"
      />
      <h2 className="text-center  font-bold mt-6 lg:mt-[60px] lg:mr-[940px]  text-2xl md:text-4xl text-gray-500">
        Amenities / Facilities
      </h2>
      <img
        src={img1}
        alt=""
        className="w-full max-w-[800px] h-auto mx-auto mt-10"
      />
      <Rooms />

      <Gallery />
      <p class="text-center text-base lg:text-lg font-bold text-gray-700 mt-8">
        Call Us: 9841177234 | 044-35647195 | 9043103224 | Email: Maa.greamsroad@gmail.com
      </p>
      <div className="flex justify-center mt-10">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-start gap-4">
          <div className="w-full lg:w-1/2 p-3">
            <iframe
              title="Maa Residency Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7773.244143178587!2d80.24817438655302!3d13.059711350435744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526751b4e27b95%3A0xc6688b56c4f51c75!2sMaa+Residency%2C+Greams+Rd%2C+Thousand+Lights%2C+Chennai%2C+Tamil+Nadu+600006!5e0!3m2!1sen!2sin!4v1720004549356!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="text-gray-700 mt-2">
              Location: Maa Residency, Greams Rd, Thousand Lights, Chennai, Tamil Nadu 600006.
            </p>
          </div>


          <div className="hidden lg:block border-l-2 border-black h-[290px] "></div>
          <div className="w-full lg:w-1/2 flex justify-center items-center p-4 bg-gray-100 rounded-lg shadow-md mt-2">
            <form onSubmit={handleSubmit} className="w-full " ref={roomsRef}>
              <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="text"
                    name="userName"
                    placeholder="Full Name"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  {errors.userName && <p className="text-red-500 text-sm ">{errors.userName}</p>}
                </div>

                <div className="w-full md:w-1/2">
                  <input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  {errors.location && <p className="text-red-500 text-sm ">{errors.location}</p>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="number"
                    name="phoneNumber" // Changed from phonNumber to phoneNumber
                    placeholder="Phone Number"
                    value={formData.phoneNumber} // Changed from phonNumber to phoneNumber
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  {errors.phoneNumber && <p className="text-red-500 text-sm ">{errors.phoneNumber}</p>}
                </div>

                <div className="w-full md:w-1/2">
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  {errors.date && <p className="text-red-500 text-sm ">{errors.date}</p>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
                <div className="w-full md:w-1/2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="w-full md:w-1/2">
                  <select
                    name="room"
                    value={formData.room}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-md"
                  >
                    <option value="">Select Room Type</option>
                    <option value="double bed with kitchen">Double Bed with Kitchen</option>
                    <option value="double bed without kitchen">Double Bed without Kitchen</option>
                    <option value="triple bed with kitchen">Triple Bed with Kitchen</option>
                    <option value="triple bed without kitchen">Triple Bed without Kitchen</option>
                    <option value="four bed with kitchen">Four Bed with Kitchen</option>
                    <option value="four bed without kitchen">Four Bed without Kitchen</option>
                    <option value="suite room">Suite Room</option>
                  </select>
                  {errors.room && <p className="text-red-500 text-sm ">{errors.room}</p>}
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
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
      <Video />

      {/* Footer */}
      <div className="mt-14" >
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
                  <h3 className="text-xl font-bold mb-3 text-brown-200">
                    CONTACT US
                  </h3>
                  <div className="flex flex-col items-center md:items-start gap-5 mb-3 text-[chocolate]">
                    <p>maa.greamsroad@gmail.com</p>
                    <p>9841177234 | 9043103224</p>
                    <p>
                      NO.160, THIRU BUILDING, 2ND FLOOR, THOUSAND LIGHTS, CHENNAI - 600 006.
                    </p>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold mb-3 text-brown-200">
                    SOCIAL LINKS
                  </h3>
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
                      href="https://www.youtube.com/@Maahotels-c4z"
                      className="hover:text-gray-700"
                    >
                      <CiYoutube size={20} className="h-7 w-7" />
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




