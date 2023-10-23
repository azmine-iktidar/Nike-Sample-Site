import { reviews } from "../constants/constants";

const CustomerReviewCards = () => {
  return (
    <div className="flex gap-5 justify-center pt-10 relative flex-wrap">
      {reviews.map((review, index) => (
        <>
          <div className="w-20 h-20 bg-coral-red rounded-full absolute -top-2 scale-[90%] right-72"></div>
          <div className="w-20 h-20 bg-coral-red rounded-full absolute bottom-1 scale-[160%] right-1/2"></div>
          <div
            key={index}
            className="flex flex-col justify-center items-center py-10 shadow-md w-[300px]  flex-wrap relative z-10 bg-coral-red rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-100"
          >
            <img
              src={review.imgURL}
              alt=""
              className="rounded-full"
              width={60}
            />

            <p className="w-1/2 text-center">{review.feedback}</p>
            <p className="font-bold">⭐{review.rating}</p>
            <p className="font-bold text-xl">{review.customerName}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default CustomerReviewCards;
