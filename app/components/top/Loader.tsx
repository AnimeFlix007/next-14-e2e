import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-full">
        <Image
          className="h-16 w-16"
          src="https://icons8.com/preloaders/preloaders/1488/Iphone-spinner-2.gif"
          alt="loader"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default Loader;
