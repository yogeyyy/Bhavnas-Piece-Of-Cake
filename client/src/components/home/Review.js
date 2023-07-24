import React from "react";
import authorImg1 from '../../assets/kiran.JPG';
import authorImg2 from '../../assets/Anita.JPG';
import authorImg3 from '../../assets/Vanshaj.jpg';

function Reviews() {
  const reviews = [
    {
      content:
        "Some people deserve more than just a thank you. Just like you! Thanking you from the core of my heart. I truly appreciate you. My heart is overflowing with gratitude. Trust me people who celebrated with your cake were so happy to taste & Compliment so much. Taste was supremely delicious. ",
      author: "Kiran Mangharamani",
      image: authorImg1,
    },
    {
      content:
        "Thank you so much for all of your help. I really appreciate your willingness to work with me on such short notice. Thank you so very, very much for the cake and everything. It was absolutely adorable. You do amazing work.will definitely remember you for future orders.",
      author: "Anita Tharani",
      image: authorImg2,
    },
    {
      content:
        "Really loved the cake! My family is very selective about the bakeries from where we get the cakes for our parties but after trying out the Choco Truffle cake, we're certainly going to place our next order here only! Thanks again for putting in so much work and making them the yummiest! xD",
      author: "Vanshaj Bhatnagar",
      image: authorImg3,
    },
    
  ];

  return (
    <div id="reviews" className="flex items-center justify-center w-full">
      <div className="pb-12 sm:pb-24 w-11/12 md:w-10/12 lg:w-5/6 xl:w-5/6 2xl:w-4/6 flex flex-col items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-inter font-black color-purple">Reviews</h1>
        <div className="flex flex-wrap justify-center mt-12 w-full gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 relative my-4 purplebg p-4 rounded-md flex flex-review"
            >
              <div className="mb-16">
                <p className="font-poppins text-sm">{review.content}</p>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-16 bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm flex justify-center items-center rounded-md gap-6">
                <img src={review.image} alt="Author" className="rounded-full w-10 h-10"/>
                <h2 className="text-black text-md font-poppins font-semibold text-center ">
                  {review.author}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reviews;
