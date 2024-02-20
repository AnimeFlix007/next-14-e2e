"use client";

import React from "react";
import { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { toast } from "react-toastify";
import SignatureModal from "./SignatureModal";

const FreeInfluencerOutrichForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [open, setOpen] = useState(false);

  const handleCreateSignature = () => {
    if (
      name.trim() === "" &&
      email.trim() === "" &&
      phone.trim() === "" &&
      address.trim() === "" &&
      jobTitle.trim() === "" &&
      company.trim() === "" &&
      website.trim() === ""
    ) {
      toast.error("Please provide details");
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <div>
        <div className="bg-gray-100 p-4">
          <h2 className="p-4 text-2xl text-center text-[#ff2d55] font-bold">
            Create your free email signature
          </h2>
          <div className="container md:flex gap-10">
            <div>
              <div className="w-full">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-2 flex flex-col my-2">
                  <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Full Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-2"
                        id="grid-first-name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Email
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                        id="grid-last-name"
                        type="text"
                        placeholder="john@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-2 mb-2 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Mobile Number
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-2"
                        id="grid-first-name"
                        type="text"
                        placeholder="9898787898"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Address
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                        id="grid-last-name"
                        type="text"
                        placeholder="United States"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-2 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Job Title
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-2"
                        id="grid-first-name"
                        type="text"
                        placeholder="Software Developer"
                        value={jobTitle}
                        onChange={(e) => setJobTitle(e.target.value)}
                      />
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-last-name"
                      >
                        Company
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-2 px-4"
                        id="grid-last-name"
                        type="text"
                        placeholder="Google"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="-mx-3 md:flex mb-2">
                    <div className="md:w-1/2 px-3 mb-2 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                        htmlFor="grid-first-name"
                      >
                        Website URL
                      </label>
                      <input
                        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-2 px-4 mb-3"
                        id="grid-first-name"
                        type="text"
                        placeholder="google.in"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-white shadow-md rounded px-8 pt-6 pb-2 mb-2 flex flex-col my-2">
                <div className="bg-gray-800 p-4  rounded shadow-md text-white">
                  <MoreHorizIcon sx={{ color: "#fff" }} />
                  <hr />
                  <div className="p-2">
                    <p className="text-sm font-bold">To: Your Recipient</p>
                    <p className="text-sm font-bold">
                      Subject: Check out my new Email Signature
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap py-6 rounded shadow-md font-serif">
                  <div className=" px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xl">
                      {name}
                    </h2>
                    <p className="mt-1">{jobTitle}</p>
                    <p className="mt-1">{company}</p>
                    {website && <LinkIcon />} {website}
                  </div>
                  <div className=" px-12 mt-4 lg:mt-0">
                    <div className="flex flex-col gap-3">
                      <p className="flex flex-row gap-2">
                        {phone && <CallIcon />} {phone}
                      </p>
                      <p className="flex flex-row gap-2">
                        {email && <EmailIcon />} {email}
                      </p>

                      <p className="flex flex-row gap-2">
                        {address && <LocationOnIcon />} {address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={handleCreateSignature}
                className="relative z-10 inline-flex mt-5 items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-[#1d42d9] border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-[#1d42d9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
              >
                Create Signature
              </button>
            </div>
          </div>
        </div>
      </div>

      <SignatureModal
        open={open}
        setOpen={setOpen}
        jobTitle={jobTitle}
        name={name}
        company={company}
        email={email}
        phone={phone}
        address={address}
        website={website}
      />
    </>
  );
};

export default FreeInfluencerOutrichForm;
