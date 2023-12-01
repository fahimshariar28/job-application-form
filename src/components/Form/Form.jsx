import { useForm } from "react-hook-form";
import EducationInfo from "./FormSteps/EducationInfo";
import ExperienceInfo from "./FormSteps/ExperienceInfo";
import PersonalInfo from "./FormSteps/PersonalInfo";
import { useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
  // Current Step
  const [currentStep, setCurrentStep] = useState(1);

  // Handle Next Step
  const handleNextStep = () => {
    // setCurrentStep(currentStep + 1);
    // Check if any error in form
    const isValid = Object.keys(errors).length === 0;
    if (isValid) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Handle Previous Step
  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Form handler function
  const onSubmit = (data) => {
    Swal.fire({
      title: "Success!",
      text: "Your form has been submitted successfully",
      html: `<div class="text-left">
      <p class="text-2xl font-bold">Personal Information</p>
      <p class="text-xl">Name:${data.name}</p>
      <p class="text-xl">Email: ${data.email}</p>
      <p class="text-xl">Phone Number: ${data.number}</p>
      <p class="text-xl">Address: ${data.address}</p>
      <p class="text-2xl font-bold">Educational Background</p>
      <p class="text-xl">Field of Study: ${data.field}</p>
      <p class="text-xl">Institution Name: ${data.institute}</p>
      <p class="text-xl">Graduation Year: ${data.graduate}</p>
      <p class="text-2xl font-bold">Work Experience</p>
      <p class="text-xl">Company Name: ${data.company}</p>
      <p class="text-xl">Position Held: ${data.position}</p>
      <p class="text-xl">Employment Duration: ${data.duration}</p>
      <p class="text-xl">Description: ${data.description}</p>
      </div>`,
      confirmButtonText: "Ok",
    });
  };

  // Steps
  const steps = [
    {
      stepNo: 1,
      title: "Personal Information",
      component: (
        <PersonalInfo
          handleNextStep={handleNextStep}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      stepNo: 2,
      title: "Education Background",
      component: (
        <EducationInfo
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleNextStep}
          register={register}
          errors={errors}
        />
      ),
    },
    {
      stepNo: 3,
      title: "Work Experience",
      component: (
        <ExperienceInfo
          handlePreviousStep={handlePreviousStep}
          register={register}
          errors={errors}
        />
      ),
    },
  ];

  // Getting component on basis of current step
  const currentStepComponent = steps.find(
    (step) => step.stepNo === currentStep
  ).component;

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex justify-center items-center">
        {steps.map((step) => (
          <div
            key={step.stepNo}
            className={`flex items-center justify-center w-10 rounded-full mx-auto py-2 ${
              step.stepNo === currentStep ? "bg-blue-500" : "bg-gray-300"
            }`}
          >
            <h1
              className={`text-white font-bold text-xl ${
                step.stepNo === currentStep ? "text-white" : "text-gray-700"
              }`}
            >
              {step.stepNo}
            </h1>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>{currentStepComponent}</form>
    </div>
  );
};
export default Form;
