"use client";

import React, { useState } from "react";
import axios from "axios";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CircularProgress from "@mui/material/CircularProgress";

const SeoRanking = () => {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const checkCertificate = async () => {
    try {
      setLoading(true);

      // Make a GET request to the SSL Checker API
      const response = await axios.get(
        `https://api.footprynt.in/sslchecker?url=${url}`
      );

      // Handle the response
      setResult(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };
  return (
    <>
      <div className="container flex flex-col items-center justify-center gap-4 py-10">
        <h1 className="text-4xl font-extrabold text-black text-center">
          <span className="text-rose-500">Free</span> SSL Checker
        </h1>
        <p className="text-gray-600 text-xl text-center">
          Use our fast SSL Checker to help you quickly diagnose problems with
          your SSL certificate installation. You can verify the SSL certificate
          on your web server to make sure it is correctly installed, valid,
          trusted and doesn't give any errors to any of your users. To use the
          SSL Checker, simply enter your server's public hostname (internal
          hostnames aren't supported) in the box below and click the Check SSL
          button.
        </p>
        <div className="bg-rose-500 w-full mt-10 px-4 py-8 flex flex-col items-center justify-center">
          <h2 className="text-white font-bold text-xl text-center">
            Enter the URL you’d Like To Check SSL
          </h2>

          <div className="w-full max-w-md">
            <div className="flex flex-col">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex flex-col space-y-2">
                <input
                  type="text"
                  className="h-10 rounded-md placeholder-gray-400 px-4 border border-gray-300 focus:outline-none focus:ring focus:border-rose-500"
                  placeholder="Target URL (https://example.com)"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
                <button
                  type="submit"
                  onClick={checkCertificate}
                  className="bg-teal-600 h-10 text-white px-6 text-lg font-semibold rounded-md"
                >
                  {loading ? (
                    <CircularProgress color="inherit" size={24} />
                  ) : (
                    "Check SSL"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {result && (
          <div className="text-xl text-blue-700 font-semibold">
            <ul>
              <li>
                <TaskAltIcon style={{ color: "green", marginRight: "10px" }} />{" "}
                Server Type: {result.http_server_type}
              </li>
              <li>
                <TaskAltIcon style={{ color: "green", marginRight: "10px" }} />{" "}
                Certificate trusted by all major web browsers: yes
              </li>
              <li>
                <TaskAltIcon style={{ color: "green", marginRight: "10px" }} />{" "}
                Certificate will expire in {result.expiration_days} days
              </li>
              <li>
                <TaskAltIcon style={{ color: "green", marginRight: "10px" }} />{" "}
                The hostname {result.hostname} is correctly listed in the
                certificate.
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default SeoRanking;
