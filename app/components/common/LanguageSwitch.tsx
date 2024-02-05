import Image from "next/image";
import { useState } from "react";

interface ILanguage {
  value: string;
  label: string;
}

type Props = {
  language: ILanguage;
  setLanguage: React.Dispatch<ILanguage>;
  languages: ILanguage[];
};

export default function LanguageSwitch({
  language,
  setLanguage,
  languages,
}: Props) {
  const [selected, setSelected] = useState(false);
  return (
    <div className="flex">
      <button
        id="states-button"
        data-dropdown-toggle="dropdown-states"
        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
        type="button"
        onClick={() => setSelected(!selected)}
      >
        {language.value === "USA" ? (
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
        ) : language.value === "UK" ? (
          <Image
            src={"/flag/UK.webp"}
            alt="UK_Flag"
            className="h-4 w-4 mr-2"
            width={30}
            height={30}
          />
        ) : null}
        {language.label}{" "}
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
          className=" w-screen h-screen absolute top-0 left-0 "
          onClick={() => setSelected(false)}
        >
          <div
            id="dropdown-states"
            className="absolute top-20 left-8 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="states-button"
            >
              {languages.map((lang) => (
                <li
                  key={lang.value}
                  onClick={() => {
                    setLanguage(lang);
                    setSelected(false);
                  }}
                >
                  <button
                    type="button"
                    className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    <div className="inline-flex items-center">
                      {language.value === "USA" ? (
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
                      ) : language.value === "UK" ? (
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
