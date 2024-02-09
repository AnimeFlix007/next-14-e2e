import React from "react";
import { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export const GradeInput = ({ question, onGradeChange }: any) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleRadioChange = (event: any) => {
    setSelectedValue(event.target.value);
    onGradeChange(event.target.value);
  };
  return (
    <div className="mb-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-300 to-rose-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <p className="text-slate-800 text-xl font-bold">{question}</p>
              <FormControl>
                <div className="flex gap-2 justify-center">
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={selectedValue}
                    onChange={handleRadioChange}
                  >
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Strongly disagree"
                      labelPlacement="bottom"
                      style={{ color: "black" }}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Disagree"
                      labelPlacement="bottom"
                      style={{ color: "black" }}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Agree"
                      labelPlacement="bottom"
                      style={{ color: "black" }}
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="Strongly Agree"
                      labelPlacement="bottom"
                      style={{ color: "black" }}
                    />
                    <FormControlLabel
                      value="5"
                      control={<Radio />}
                      label="I don't know"
                      labelPlacement="bottom"
                      style={{ color: "black" }}
                    />
                  </RadioGroup>
                </div>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
