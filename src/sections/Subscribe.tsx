const Subscribe = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-wrap max-lg:flex-col space-y-10 justify-center items-center">
      <h3 className="font-bold text-2xl font-montserrat w-1/2 max-lg:w-full text-center">
        Sign Up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>
      <form
        className="w-1/2 flex gap-4 max-lg:w-full justify-center items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          name="email"
          placeholder="Type your email here"
          className="bg-slate-200 w-full text-lg p-4 rounded-full focus:border-2 focus:border-x-black focus:border-y-coral-red border-collapse outline-none ring-inset"
        />

        <button
          type="submit"
          className="border rounded-full px-6 py-4 bg-coral-red flex justify-center items-center gap-2 max-lg:text-[12px] text-white font-bold"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
