"use client";

import * as React from "react";
import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import LinkIcon from "@mui/icons-material/Link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import  ReactCopyToClipboard  from "react-copy-to-clipboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignatureModal({
  open,
  setOpen,
  jobTitle,
  company,
  name,
  website,
  phone,
  email,
  address,
}: any) {
  const modalContentRef = useRef(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleClose = () => {
    setOpen(false);
    setIsCopied(false);
  };

  const handleCopySignature = () => {
    if (modalContentRef.current) {
      const modalContent: any = modalContentRef.current;
      navigator.clipboard.writeText(modalContent.innerText);
      setIsCopied(true);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 className="text-xl text-center font-bold text-gray-600">
          A Shiny New Email Signature, Just For You.
        </h2>
        <div
          className="flex flex-wrap py-6 rounded shadow-md font-serif"
          ref={modalContentRef}
        >
          <div className="px-6 w-full md:w-1/2">
            {" "}
            <p className="title-font font-semibold text-gray-900 tracking-widest text-xl">
              Name : {name}
            </p>
            <p className="mt-1">Job Title : {jobTitle}</p>
            <p className="mt-1">Company Name : {company}</p>
            Company Website : {website && <LinkIcon />} {website}
          </div>
          <div className="px-6 mt-4 w-full md:w-1/2">
            {" "}
            <div className="flex flex-col gap-3">
              <p className="flex flex-row gap-1">
                Contact Number : {phone && <CallIcon />} {phone}
              </p>
              <p className="flex flex-row gap-1">
                Email : {email && <EmailIcon />} {email}
              </p>

              <p className="flex flex-row gap-1">
                Address : {address && <LocationOnIcon />} {address}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-4">
          <ReactCopyToClipboard.CopyToClipboard
            text={`Your generated content here`}
            onCopy={handleCopySignature}
          >
            <button className="relative z-10 inline-flex items-center justify-center w-full md:w-auto px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-rose-500 border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-rose-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]">
              Copy Signature
            </button>
          </ReactCopyToClipboard.CopyToClipboard>
        </div>
        {isCopied && (
          <p className="text-green-500 mt-2">Signature successfully copied!</p>
        )}
      </Box>
    </Modal>
  );
}
