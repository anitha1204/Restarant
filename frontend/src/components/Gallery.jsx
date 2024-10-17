import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import img from "../assets/0019_1.JPG";
import img1 from "../assets/Banner.png";
import img2 from "../assets/About.png";
import img3 from "../assets/Room_1.png";
import img4 from "../assets/0026.JPG";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [img, img1, img2,img3,img4, img1, img2, img3 ,img4,img, img2,img3,img4,img,img1];

  const imagesPerPage = 3;
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  const currentImages = images.slice(
    currentIndex * imagesPerPage,
    currentIndex * imagesPerPage + imagesPerPage
  );

  return (
    <div className="flex flex-col items-center mt-8">
      <h3 className="text-center text-2xl md:text-4xl text-gray-500 font-bold ">
        Gallery
      </h3>
      <div className="flex flex-col sm:flex-row items-center mt-10">
        <div className='flex justify-center space-x-4 mb-4 sm:mb-0 sm:mr-4 lg:mr-20'>
          <button 
            onClick={handlePrev} 
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <FaArrowLeft className="text-xl" />
            <p className='text-xl mb-2 p-2'>Prev</p>
          </button>
          <button 
            onClick={handleNext} 
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <p className='text-xl mb-2 p-2'>Next</p>
            <FaArrowRight className="text-xl" />
          </button>
        </div>
        <div className="flex space-x-4 overflow-x-auto">
          {currentImages.map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`img ${index}`}
              className={`object-cover rounded-2xl p-2 ${
                index === 0 ? 'w-[280px] sm:w-[200px] md:w-[280px] h-[280px] md:h-[330px] lg:w-[350px] lg:h-[350px]' : 'lg:w-[260px] lg:h-[260px] w-[200px] sm:w-[240px] md:w-[280px] h-[200px] sm:h-[240px] md:h-[300px]'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
