"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GradeForm from "@/app/components/freeTools/GradeForm";
import Image from "next/image";
import GradeModal from "@/app/components/freeTools/GradeModal";

const steps = [
  {
    label: "Tell us about how you attract customers.",
  },
  {
    label: "Tell us about how you engage customers.",
  },
  {
    label: "Tell us about how you delight customers.",
  },
  {
    label: "Tell us about how you fight friction in your customer experience.",
  },
];

const GrowthGrader = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const [grades, setGrades] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [open, setOpen] = useState(false);
  const [calculatedGrade, setCalculatedGrade] = useState(0);

  const isLastStep = activeStep === maxSteps - 1;

  const handleNext = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const calculatedGrade: any =
      grades.length > 0
        ? (
            (grades.reduce((sum, grade) => sum + grade, 0) / grades.length) *
            20
          ).toFixed(2)
        : 0;

    setCalculatedGrade(parseInt(calculatedGrade));
    setFormSubmitted(true);

    handleOpenModal();
  };

  return (
    <>
      <div className="flex justify-center items-center text-gray-800">
        <Image
          src="https://img.freepik.com/free-vector/five-star-grading-evaluation-rating-estimating-excellent-review-customer-satisfaction-with-service-highest-score-client-feedback-concept-illustration_335657-2037.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704585600&semt=sph"
          alt="Top Right Corner"
          style={{
            position: "absolute",
            top: "20%",
            right: 20,
            width: "300px",
            height: "300px",
          }}
          width={300}
          height={300}
        />
        <Box sx={{ maxWidth: 700, mt: 4, mb: 10 }}>
          <h6 className="text-center text-2xl font-bold">
            {steps[activeStep].label}
          </h6>
          <p className="text-center mt-2">
            Do you agree or disagree with the following?
          </p>

          <Box sx={{ height: "auto", maxWidth: 700, width: "100%", p: 2 }}>
            <GradeForm
              step={activeStep + 1}
              grades={grades}
              setGrades={setGrades}
              handleSubmit={handleSubmit}
            />
          </Box>
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={activeStep === 0}
              className="text-rose-600 font-bold text-xl"
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </button>

            {isLastStep ? (
              <button
                type="button"
                className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-[#1d42d9] border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
                onClick={handleSubmit}
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-[#1d42d9] border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
                onClick={handleNext}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </button>
            )}

            <Image
              src="https://img.freepik.com/premium-vector/stock-market-analysis-concept_23-2148604771.jpg?w=360"
              alt="Bottom Left Corner"
              style={{
                position: "absolute",
                bottom: 0,
                left: 20,
                width: "300px",
                height: "200px",
              }}
              width={300}
              height={300}
            />
          </div>
        </Box>
      </div>
      <GradeModal
        open={open}
        setOpen={setOpen}
        calculatedGrade={calculatedGrade}
      />
    </>
  );
};

export default GrowthGrader;
