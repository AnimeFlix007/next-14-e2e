"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormHelperText from "@mui/material/FormHelperText";

const industry = [
  "AI/ML",
  "Cybersecurity",
  "Data center",
  "Fintech",
  "Health tech",
  "Legal tech",
  "SaaS",
  "Tech manufacture and infrastructure",
  "Technology consultant",
  "I don't work in tech",
];

const role = [
  "Marketing",
  "Technology/Operations",
  "Executive/Founder",
  "Other",
];

const tools = [
  "Marketing Hub",
  "CMS Hub",
  "Sales Hub",
  "Operations Hub",
  "Service Hub",
  "None",
];

interface IProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IValues {
  firstName: string;
  lastName: string;
  workEmail: string;
  company: string;
  techIndustry: string;
  jobRole: string;
  hubSpotTools: string[];
}

const initialValues: IValues = {
  firstName: "",
  lastName: "",
  workEmail: "",
  company: "",
  techIndustry: "",
  jobRole: "",
  hubSpotTools: [],
};

export default function LeadScoreModal({ open, setOpen }: IProps) {
  const [loading, setLoading] = useState(false);
  const cancelButtonRef = useRef(null);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    workEmail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    techIndustry: Yup.string().required("Tech Industry is required"),
    company: Yup.string().required("Company is required"),
    jobRole: Yup.string().required("Job Role is required"),
    hubSpotTools: Yup.array().min(
      1,
      "At least one HubSpot tool must be selected"
    ),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        window.location.href =
          "https://docs.google.com/document/d/1Dxs906Mjpq1DFgLy8iMt7wojLw18Il648ovIgjtO-Qk/edit#heading=h.bn0n6qfmmn90";
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="sm:flex sm:items-start">
                      <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-2xl font-semibold leading-6 text-[#ff2d55]"
                        >
                          Get instant access to our lead scoring worksheet
                        </Dialog.Title>
                        <div className="mt-2">
                          <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                htmlFor="firstName"
                                className="block uppercase tracking-wide text-grey-darker text-xs mb-2"
                              >
                                First Name
                              </label>
                              <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formik.values.firstName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`appearance-none block w-full ${
                                  formik.touched.firstName &&
                                  formik.errors.firstName
                                    ? "border-red"
                                    : "bg-grey-lighter"
                                } text-grey-darker border border-red rounded py-2 px-4 mb-2`}
                              />
                              {formik.touched.firstName &&
                                formik.errors.firstName && (
                                  <p className="text-red-500 text-xs">
                                    {formik.errors.firstName}
                                  </p>
                                )}
                            </div>
                            <div className="md:w-1/2 px-3">
                              <label
                                htmlFor="lastName"
                                className="block uppercase tracking-wide text-grey-darker text-xs mb-2"
                              >
                                Last Name
                              </label>
                              <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formik.values.lastName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`appearance-none block w-full ${
                                  formik.touched.lastName &&
                                  formik.errors.lastName
                                    ? "border-red"
                                    : "bg-grey-lighter"
                                } text-grey-darker border border-grey-lighter rounded py-2 px-4`}
                              />
                              {formik.touched.lastName &&
                                formik.errors.lastName && (
                                  <p className="text-red-500 text-xs">
                                    {formik.errors.lastName}
                                  </p>
                                )}
                            </div>
                          </div>
                          <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                htmlFor="workEmail"
                                className="block uppercase tracking-wide text-grey-darker text-xs mb-2"
                              >
                                Work Email
                              </label>
                              <input
                                id="workEmail"
                                name="workEmail"
                                type="text"
                                value={formik.values.workEmail}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`appearance-none block w-full ${
                                  formik.touched.workEmail &&
                                  formik.errors.workEmail
                                    ? "border-red"
                                    : "bg-grey-lighter"
                                } text-grey-darker border border-red rounded py-2 px-4 mb-2`}
                              />
                              {formik.touched.workEmail &&
                                formik.errors.workEmail && (
                                  <p className="text-red-500 text-xs">
                                    {formik.errors.workEmail}
                                  </p>
                                )}
                            </div>
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                              <label
                                htmlFor="workEmail"
                                className="block uppercase tracking-wide text-grey-darker text-xs mb-2"
                              >
                                Work Email
                              </label>
                              <input
                                id="company"
                                name="company"
                                type="text"
                                value={formik.values.company}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={`appearance-none block w-full ${
                                  formik.touched.company &&
                                  formik.errors.company
                                    ? "border-red"
                                    : "bg-grey-lighter"
                                } text-grey-darker border border-red rounded py-2 px-4 mb-2`}
                              />
                              {formik.touched.company &&
                                formik.errors.company && (
                                  <p className="text-red-500 text-xs">
                                    {formik.errors.company}
                                  </p>
                                )}
                            </div>
                          </div>
                          <div className="-mx-3 md:flex mb-2">
                            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                              <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth size="small">
                                  <InputLabel id="techIndustryLabel">
                                    Tech Industry
                                  </InputLabel>
                                  <Select
                                    labelId="techIndustryLabel"
                                    id="techIndustry"
                                    label="Tech Industry"
                                    name="techIndustry"
                                    value={formik.values.techIndustry}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                      formik.touched.techIndustry &&
                                      Boolean(formik.errors.techIndustry)
                                    }
                                  >
                                    {industry.map((ind) => (
                                      <MenuItem key={ind} value={ind}>
                                        {ind}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {formik.touched.techIndustry &&
                                    formik.errors.techIndustry && (
                                      <FormHelperText error>
                                        {formik.errors.techIndustry}
                                      </FormHelperText>
                                    )}
                                </FormControl>
                              </Box>
                            </div>
                            <div className="md:w-1/2 px-3">
                              <Box sx={{ minWidth: 120 }}>
                                <FormControl fullWidth size="small">
                                  <InputLabel id="jobRoleLabel">
                                    Job Role
                                  </InputLabel>
                                  <Select
                                    labelId="jobRoleLabel"
                                    id="jobRole"
                                    label="Job Role"
                                    name="jobRole"
                                    value={formik.values.jobRole}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    error={
                                      formik.touched.jobRole &&
                                      Boolean(formik.errors.jobRole)
                                    }
                                  >
                                    {role.map((rol) => (
                                      <MenuItem key={rol} value={rol}>
                                        {rol}
                                      </MenuItem>
                                    ))}
                                  </Select>
                                  {formik.touched.jobRole &&
                                    formik.errors.jobRole && (
                                      <FormHelperText error>
                                        {formik.errors.jobRole}
                                      </FormHelperText>
                                    )}
                                </FormControl>
                              </Box>
                            </div>
                          </div>
                          <p>Which HubSpot tools do you currently use?</p>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              flexWrap: "wrap",
                            }}
                          >
                            {tools.map((tool) => (
                              <FormControl
                                key={tool}
                                component="fieldset"
                                variant="standard"
                                sx={{ flexBasis: "50%" }}
                              >
                                <FormGroup>
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        name="hubSpotTools"
                                        value={tool}
                                        checked={formik.values.hubSpotTools.includes(
                                          tool
                                        )}
                                        onChange={(e) => {
                                          const { checked } = e.target;
                                          formik.setFieldValue(
                                            "hubSpotTools",
                                            checked
                                              ? [
                                                  ...formik.values.hubSpotTools,
                                                  tool,
                                                ]
                                              : formik.values.hubSpotTools.filter(
                                                  (selectedTool) =>
                                                    selectedTool !== tool
                                                )
                                          );
                                        }}
                                      />
                                    }
                                    label={tool}
                                  />
                                </FormGroup>
                              </FormControl>
                            ))}
                            {formik.touched.hubSpotTools &&
                              formik.errors.hubSpotTools && (
                                <FormHelperText error>
                                  {formik.errors.hubSpotTools}
                                </FormHelperText>
                              )}
                          </Box>
                          <p className="text-sm text-gray-500 font-bold">
                            By submitting this form, I agree to receive
                            marketing communications from Kiwi Creative, which
                            I&apos;m allowed to unsubscribe from at any time.
                          </p>
                        </div>
                        <button
                          type="submit"
                          className="relative mt-5 z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-[#1d42d9] border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-[#1d42d9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
                        >
                          {loading ? (
                            <span className="flex items-center">
                              <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></span>
                              Processing...
                            </span>
                          ) : (
                            "GET MY FREE DOWNLOAD"
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
