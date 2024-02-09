import React from "react";
import { useState } from "react";
import { GradeInput } from "./GradeInput";

const GradeForm = ({ step, grades, setGrades, handleSubmit }: any) => {
  const handleGradeChange = (grade: any) => {
    setGrades((prevGrades: any) => [...prevGrades, parseInt(grade)]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <>
          <GradeInput
            question={
              "There are multiple ways for visitors to convert on our website besides submitting the contact us form."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We create content that focuses on the goals and needs of our buyers."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We participate in the places where our best prospects spend their time."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We run targeted ad campaigns to generate new visitors/leads."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We have an SEO strategy that focuses on topics rather than keywords."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We have effective referral strategy to bring in new visitors and prospects."
            }
            onGradeChange={handleGradeChange}
          />
        </>
      )}

      {step === 2 && (
        <>
          <GradeInput
            question={
              "We use automation and personalization to deliver leads the most relevant message at the ideal time."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We provide multiple channels for buyers to communicate with us."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We use automation to streamline manual, tedious, and time-consuming tasks in the sales process."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We provide leads/prospects with valuable content or information before asking anything of them."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We have a scalable sales outreach program that still respects our buyer’s differences."
            }
            onGradeChange={handleGradeChange}
          />
        </>
      )}

      {step === 3 && (
        <>
          <GradeInput
            question={
              "We provide customers with self-service options to troubleshoot issues by themselves."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We proactively help customers achieve success with our products and services."
            }
            onGradeChange={handleGradeChange}
          />

          <GradeInput
            question={"We resolve customer issues quickly."}
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We effectively organize and track all customer communications."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We regularly measure the health of our customer relationships."
            }
            onGradeChange={handleGradeChange}
          />
        </>
      )}

      {step === 4 && (
        <>
          <GradeInput
            question={
              "Our contact databases are integrated across the organization."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We organize teams and objectives around common, customer-centric goals."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "Our systems are integrated in a way that saves time for our internal teams and helps us better serve our customers."
            }
            onGradeChange={handleGradeChange}
          />
          <GradeInput
            question={
              "We automate internal processes to allow our teams to focus on high impact activities."
            }
            onGradeChange={handleGradeChange}
          />
        </>
      )}
    </form>
  );
};

export default GradeForm;
