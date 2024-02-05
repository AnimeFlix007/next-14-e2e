"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ILanguage {
  value: string;
  label: string;
}

type Props = {
  languages: ILanguage[];
};

export default function LanguageSwitch({ languages }: Props) {
  const [selected, setSelected] = useState(false);
  const [language, setLanguage] = useState<ILanguage | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const item: any = window.localStorage.getItem("FP_Language");
      if (item) {
        setLanguage(JSON.parse(item));
      }
    }
  }, []);
  return (
    <div className="flex">
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 "
        type="button"
        onClick={() => setSelected(!selected)}
      >
        {language && (
          <>
            {language.value === "US" ? (
              <Image
                src={"/flag/US.webp"}
                alt="USA_Flag"
                className="h-4 w-4 mr-2"
                width={30}
                height={30}
              />
            ) : language.value === "IN" ? (
              <Image
                src={"/flag/India.webp"}
                alt="India_Flag"
                className="h-4 w-4 mr-2"
                width={30}
                height={30}
              />
            ) : language.value === "AE" ? (
              <Image
                src={"/flag/UAE.jpg"}
                alt="UAE_Flag"
                className="h-4 w-4 mr-2"
                width={30}
                height={30}
              />
            ) : language.value === "GB" ? (
              <Image
                src={"/flag/UK.webp"}
                alt="UK_Flag"
                className="h-4 w-4 mr-2"
                width={30}
                height={30}
              />
            ) : null}
            {language.label}{" "}
          </>
        )}

        <svg
          className="w-2.5 h-2.5 ms-2.5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {selected && (
        <div
          className=" w-[98vw] h-screen absolute top-0 left-0 "
          onClick={() => setSelected(false)}
        >
          <div
            id="dropdown-states"
            className="absolute top-20 right-40 z-10 bg-white divide-y divide-gray-100 rounded-lg border-r-slate-800"
          >
            <ul
              className="py-2 text-sm text-gray-700 border-r-slate-800"
              aria-labelledby="states-button"
            >
              {languages.map((language) => (
                <li
                  key={language.value}
                  onClick={() => {
                    window.localStorage.setItem(
                      "FP_Language",
                      JSON.stringify(language)
                    );
                    setLanguage(language);
                    setSelected(false);
                  }}
                >
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    <div className="inline-flex items-center">
                      {language.value === "US" ? (
                        <Image
                          src={"/flag/US.webp"}
                          alt="USA_Flag"
                          className="h-4 w-4 mr-2"
                          width={30}
                          height={30}
                        />
                      ) : language.value === "IN" ? (
                        <Image
                          src={"/flag/India.webp"}
                          alt="India_Flag"
                          className="h-4 w-4 mr-2"
                          width={30}
                          height={30}
                        />
                      ) : language.value === "AE" ? (
                        <Image
                          src={"/flag/UAE.jpg"}
                          alt="UAE_Flag"
                          className="h-4 w-4 mr-2"
                          width={30}
                          height={30}
                        />
                      ) : language.value === "GB" ? (
                        <Image
                          src={"/flag/UK.webp"}
                          alt="UK_Flag"
                          className="h-4 w-4 mr-2"
                          width={30}
                          height={30}
                        />
                      ) : null}
                      {language.label}
                    </div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
