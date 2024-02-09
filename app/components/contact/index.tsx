"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import baseUrl from "@/app/utils/BaseURL";
import SuccessModal from "@/app/components/common/SuccessModal";

type Props = {};

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function ContactForm({}: Props) {
  const [agreed, setAgreed] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [attemptedSubmitWithoutAgree, setAttemptedSubmitWithoutAgree] =
    useState(false);

  const { handleChange, handleBlur, errors, values, touched, handleSubmit } =
    useFormik({
      enableReinitialize: true,
      initialValues: {
        name: "",
        email: "",
        number: "",
        subject: "",
        text: "",
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Name is Required"),
        email: Yup.string()
          .email("Enter a valid Email")
          .required("E-mail is Required"),
        number: Yup.string()
          .length(10, "Please enter valid phone number")
          .required("Phone Number is Required"),
        subject: Yup.string().required("Subject is Required"),
        text: Yup.string().required("Text is Required"),
      }),
      onSubmit: async (values, action) => {
        try {
          if (!agreed) {
            // Set the state to indicate that the user attempted to submit without agreeing
            setAttemptedSubmitWithoutAgree(true);
            return;
          }
          const url = `${baseUrl}/inquiry`;

          const response = await axios.post(url, values);
          console.log(response);
          if (response.status >= 200 && response.status < 300) {
            console.log("Request successful:", response.data);
            setShowSuccessModal(true);
          } else {
            console.log("Request failed with status:", response.status);
          }
        } catch (error) {
          console.log(error);
        }
        action.resetForm();
      },
    });
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit} className="mx-auto mt-5 max-w-xl sm:mt-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.name}
                onChange={handleChange}
                required
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.email}
                onChange={handleChange}
                required
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2.5">
              <input
                type="number"
                name="number"
                id="number"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.number}
                onChange={handleChange}
                required
                onBlur={handleBlur}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={values.subject}
                onChange={handleChange}
                required
                onBlur={handleBlur}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="text"
                id="text"
                rows={2}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={""}
                value={values.text}
                onChange={handleChange}
                required
                onBlur={handleBlur}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
          {attemptedSubmitWithoutAgree && !agreed && (
            <p className="text-sm leading-6 text-red-600">
              Please agree to our privacy policy.
            </p>
          )}
        </div>
        <div className="mt-5 mb-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </div>
      </form>{" "}
      {showSuccessModal && (
        <SuccessModal
          isOpen={showSuccessModal}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
    </div>
  );
}
