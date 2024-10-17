import React from 'react';
import Slider from 'react-slick';

const testimonials = [
    {
        text: "Visited Chennai for medical purpose and stayed around 10 days in the hotel. The hotel is situated at a very convenient location and the rooms and service was all really good. The owner is really very helpful and looks after whatever is required. Definitely will be staying here the next time I visit.",
        author: "Nafis Saleheen"
    },
    {
        text: "Recently we had stayed here for medical purpose, very good rooms with kitchen setup and budget friendly. Walkable distance to Apollo hospital, Staffs are very kind and helpful. Many Bengali restaurants right opposite to the Hotel. Overall it was a comfortable experience with the family. Thank you!",
        author: "SONA SUNITA"
    },
    {
        text: "Maa Residency is the best place to stay for people to stay in Greams Road in Chennai. But it is a bit costly in comparison to other hotels in the vicinity.",
        author: "Pradip Chatterjee"
    },
    {
        text: "Most horrific experience of my life. Very untidy hotel and there was a short Bengali worker who tried selling guthka and cigarettes to my 6 year old child. I don't know why they hire stupid workers like that.",
        author: "Anurag Roy"
    },
    {
        text: "Good rooms with good hospitality. Just 2 to 3 minutes walk to Apollo Greams. Will highly recommend to individuals coming for health checkups.",
        author: "Niharika Borgohain"
    }
];

const TestimonialsCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false // Hide arrows for a cleaner look
    };

    return (
        <div className="container mx-auto px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
            <h3 className="text-center text-gray-500 text-2xl md:text-3xl lg:text-4xl font-bold mt-8 mb-6">
                Testimonials
            </h3>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="p-4 md:p-6 lg:p-8">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg">
                            {testimonial.text}
                        </p>
                        <p className="text-right text-gray-500 text-xs md:text-sm lg:text-base mt-2">
                            - {testimonial.author}
                        </p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default TestimonialsCarousel;
