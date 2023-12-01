const ExperienceInfo = ({
  handlePreviousStep,
  register,

  errors,
}) => {
  return (
    <>
      {/*Company Name Field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="company">
          Company Name
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="Company name here"
          {...register("company", { required: true })}
        />
        {errors.company && (
          <p className="text-red-500">Please enter your Name</p>
        )}
      </div>

      {/* Position field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="position">
          Position Held
          <span className="text-red-500 text-xl">*</span>
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="Junior Developer"
          {...register("position", {
            required: true,
          })}
        />
        {errors.position && (
          <p className="text-red-500">Please enter your Email address</p>
        )}
      </div>

      {/* Employment Duration field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="duration">
          Employment Duration
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="6 months"
          {...register("duration", { required: true })}
        />
        {errors.duration && (
          <p className="text-red-500">Please enter your Email address</p>
        )}
      </div>

      {/* Experience description Field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="description">
          Description
        </label>
        <textarea
          rows={5}
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          placeholder="Description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <p className="text-red-500">Please enter your Phone Number</p>
        )}
      </div>

      {/* Form Buttons */}
      <div className="flex gap-5 justify-end my-10">
        <button onClick={handlePreviousStep}>Previous</button>
        <input
          type="submit"
          value="Submit"
          className="bg-blue-600 text-white px-4 py-3 rounded"
        />
      </div>
    </>
  );
};

export default ExperienceInfo;
