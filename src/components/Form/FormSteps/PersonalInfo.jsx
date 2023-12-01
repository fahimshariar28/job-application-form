// import { FaCheck } from "react-icons/fa";

const PersonalInfo = ({ handleNextStep, register, errors }) => {
  return (
    <>
      {/* Name Field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="name">
          Name
          <span className="text-red-500 text-xl">*</span>
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="Your Full Name"
          {...register("name", { required: true })}
        />
        {errors.name && <p className="text-red-500">Please enter your Name</p>}
      </div>

      {/* Email field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="email">
          Email
          <span className="text-red-500 text-xl">*</span>
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="email"
          placeholder="youremail@example.com"
          {...register("email", {
            required: true,
          })}
        />
        {errors.email && (
          <p className="text-red-500">Please enter your Email address</p>
        )}
      </div>

      {/* Phone Number field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="number">
          Phone Number
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="number"
          placeholder="(302) 555-0107"
          style={{ overflow: "hidden" }}
          {...register("number", { required: true })}
        />
        {errors.number && (
          <p className="text-red-500">Please enter your Phone Number</p>
        )}
      </div>

      {/* Address Field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="address">
          Address
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="2464 Royal Ln. Mesa, New Jersey 45463"
          {...register("address", { required: true })}
        />
        {errors.address && (
          <p className="text-red-500">Please enter your Address</p>
        )}
      </div>

      {/* Hobbies Field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="hobbies">
          Hobbies (max 5)
        </label>
        <div className="flex items-center gap-5">
          <input
            className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
            type="text"
            placeholder="Write your Hobby"
            {...register("hobbies", { required: true })}
          />
          {errors.hobbies && (
            <p className="text-red-500">Please enter your Hobbies</p>
          )}
          {/* <FaCheck /> */}
        </div>
      </div>

      {/* Image Field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="image">
          Image
        </label>
        <div className="flex items-center gap-5">
          <input
            className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
            type="file"
            placeholder="Upload Image"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <p className="text-red-500">Please enter your Image</p>
          )}
        </div>
      </div>

      {/* Form Buttons */}
      <div className="flex gap-5 justify-end my-10">
        <button disabled>Previous</button>
        <button
          className="bg-blue-600 text-white px-4 py-3 rounded"
          onClick={handleNextStep}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
