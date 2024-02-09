import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Slider from "@mui/material/Slider";
import { Link } from "@mui/material";
import Image from "next/image";

export default function GradeModal({
  open,
  setOpen,
  calculatedGrade,
  handleSubmit,
}: any) {
  const cancelButtonRef = useRef<any>(null);
  const [confirmationMessage, setConfirmationMessage] = useState<any>(null);
  const [sliderValue, setSliderValue] = useState(0);

  useEffect(() => {
    setSliderValue(calculatedGrade);
    setConfirmationMessage(getConfirmationMessage(calculatedGrade));
  }, [calculatedGrade]);

  const handleSliderChange = (event: any, newValue: any) => {
    setSliderValue(newValue);
    setConfirmationMessage(getConfirmationMessage(newValue));
  };

  const getConfirmationMessage = (grade: any): any => {
    if (grade < 50) {
      return "Okay";
    } else if (grade >= 50 && grade <= 80) {
      return "Good";
    } else {
      return "Excellent";
    }
  };

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
              <Dialog.Panel className="relative py-5 px-10 transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="text-center text-gray-800 font-bold">
                  <Image
                    className="w-40 mx-auto"
                    src="https://aussiechildcarenetwork.com.au/media/k2/items/cache/7243c908e4e38dba962bd8a04c957a8f_L.jpg"
                    width={150}
                    height={150}
                    alt="child"
                  />
                  <h6 className="text-2xl">
                    Your Growth Grade is {confirmationMessage}
                  </h6>

                  <h6 className="text-2xl text-teal-600">{calculatedGrade}</h6>

                  <Slider
                    value={sliderValue}
                    onChange={handleSliderChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={100}
                    sx={{ mt: 4, pr: 2 }}
                  />

                  <Link
                    href="/"
                    type="button"
                    className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-rose-500 border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-rose-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
                  >
                    Back
                  </Link>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
