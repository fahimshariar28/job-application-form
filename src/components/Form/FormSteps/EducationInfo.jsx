const EducationInfo = ({
  handleNextStep,
  handlePreviousStep,
  register,
  errors,
}) => {
  const dropDownOptions = [
    "Frontend Developer",
    "Backend Developer",
    "System Analyst",
  ];
  return (
    <>
      {/* Degree */}
      <div>
        <label className="block text-xl mt-5" htmlFor="degree">
          Highest Degree
        </label>
        <select
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          {...register("degree", { required: true })}
        >
          {dropDownOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.degree && (
          <p className="text-red-500">Please select your Highest Degree</p>
        )}
      </div>

      {/* Field of study */}
      <div>
        <label className="block text-xl mt-5" htmlFor="filed">
          Field of Study
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="CSE"
          {...register("filed", {
            required: true,
          })}
        />
        {errors.field && (
          <p className="text-red-500">Please enter your Email address</p>
        )}
      </div>

      {/* Institute Name */}
      <div>
        <label className="block text-xl mt-5" htmlFor="institute">
          Institute Name
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="National University"
          {...register("institute", { required: true })}
        />
        {errors.institute && (
          <p className="text-red-500">Please enter your Institute Name</p>
        )}
      </div>

      {/* Graduation Year Field */}
      <div>
        <label className="block text-xl mt-5" htmlFor="graduate">
          Graduation Year
        </label>
        <input
          className="w-full py-2 px-3 mt-2 bg-gray-300 bg-opacity-50 rounded"
          type="text"
          placeholder="2026"
          {...register("graduate", { required: true })}
        />
        {errors.graduate && (
          <p className="text-red-500">Please enter your Graduation Year</p>
        )}
      </div>

      {/* Form Buttons */}
      <div className="flex gap-5 justify-end my-10">
        <button onClick={handlePreviousStep}>Previous</button>
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

export default EducationInfo;
