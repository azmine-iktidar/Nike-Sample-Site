import CustomerReviewCards from "../components/CustomerReviewCards";

const CustomerReviews = () => {
  return (
    <div className="pt-24 py-10">
      <h2 className="text-4xl font-bold font-montserrat text-center max-sm:text-2xl">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <h2 className="font-montserrat text-center pt-5 max-sm:text-sm">
        Listen to what our customers are saying about our products.
        <br /> We are very happy to hear from them. Our quality products are
        <br /> the reason why we are a top brand in the market.
      </h2>
      <div>
        <CustomerReviewCards />
      </div>
    </div>
  );
};

export default CustomerReviews;
