"use client";

import { Fragment, useState, useEffect } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
  UserIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
// import logo from "../../asset/images";
import { ButtonOne, ButtonTwo } from "./Button";
// import instagram from "../../asset/images/common/InstagramCircle.png";
// import twitter from "../../asset";
// import youtube from "../../asset/images";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    const storedCountry = localStorage.getItem("selectedCountry");
    if (storedCountry) {
      setSelectedCountry(storedCountry);
    }
  }, []);

  //   const handleCountryChange = (event) => {
  //     const newCountry = event.target.value;
  //     setSelectedCountry(newCountry);

  //     localStorage.setItem("selectedCountry", newCountry);

  //     const currentPath = window.location.pathname;
  //     window.history.pushState(null, "", `${currentPath}?country=${newCountry}`);
  //     window.location.reload();
  //   };

  const handleSubMenuToggle = (index) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  const categories = [
    {
      id: "whoweserve",
      name: "Who We Serve",
      serve: [
        {
          name: "E-COMMERCE",
          href: "/ecommerce",
          bg: "bg-green-100",
        },
        {
          name: "AGENCIES",
          href: "/agencies",
          bg: "bg-orange-100",
        },
        {
          name: "ENTERPRISE",
          href: "/enterprise",
          bg: "bg-zinc-100",
        },
      ],
    },
    {
      id: "platform",
      name: "Our Platform",
      serve: [
        {
          subtitle1: "Search & Analyze Creators",
          subtitle2: "Track & Measure Sales",
          subtitle3: "Track Influencer Campaigns",
          icon1: <MagnifyingGlassIcon className="h-6 w-6" />,
          icon2: <Bars3Icon className="h-6 w-6" />,
          icon3: <UserIcon className="h-6 w-6" />,
          href1: "/search-analyze",
          href2: "/sales-tracking",
          href3: "/influencer-campaigns",
          bg: "bg-green-100",
        },
        {
          subtitle1: "Management & Outreach",
          subtitle2: "Find & Hire UGC Creators",
          subtitle3: "Client Reporting Dashboard",
          icon1: <GlobeAltIcon className="h-6 w-6" />,
          icon2: <ShoppingBagIcon className="h-6 w-6" />,
          icon3: <PresentationChartLineIcon className="h-6 w-6" />,
          href1: "/brief-outreach",
          href2: "/ugc-content",
          href3: "/User-Dashboard-Page",
          bg: "bg-orange-100",
        },
      ],
    },
    {
      id: "free",
      name: "Free Tools",
      serve: [
        {
          name: "Email Signature Generator",
          href: "/email-generator",
          bg: "bg-green-100",
        },

        {
          name: "Lead Score Worksheet",
          href: "/lead-score-googlesheet",
          bg: "bg-green-100",
        },

        {
          name: "Growth Grader",
          href: "/growth-grader",
          bg: "bg-green-100",
        },
        {
          name: "SSL Checker",
          href: "/ssl-checker",
          bg: "bg-green-100",
        },
      ],
    },
    {
      id: "influencer",
      name: "Influencers",
      serve: [
        {
          name: "Instagram",
          href: "/top-instagram",
          bg: "bg-green-100",
          icon: "/common/InstagramCircle.png",
        },
        {
          name: "Youtube",
          href: "/top-youtube",
          bg: "bg-orange-100",
          icon: "/common/YoutubeCircle.png",
        },
        {
          name: "Twittter",
          href: "/top-twitter",
          bg: "bg-zinc-100",
          icon: "/image/ButtonCircle.png",
        },
      ],
    },
  ];

  const pages = [
    { name: "Pricing", href: `/pricing?country=${selectedCountry}` },
    { name: "ContactUs", href: "/contact-us" },
  ];

  // mobile responsive menu

  const submenu1 = [
    { name: "E-COMMERCE", href: "/ecommerce" },
    { name: "AGENCIES", href: "/agencies" },
    { name: "ENTERPRISES", href: "/eNTERPRISE" },
  ];

  const submenu2 = [
    { name: "Search & Analyze Creators", href: "/search-analyze" },
    { name: "Track & Measure Sales", href: "/sales-tracking" },
    { name: "Track Influencer Campaigns", href: "/influencer-campaigns" },
    { name: "Management & Outreach", href: "/brief-outreach" },
    { name: "Find & Hire UGC Creators", href: "/ugc-content" },
    { name: "Client Reporting Dashboard", href: "/User-Dashboard-Page" },
  ];

  const submenu3 = [
    {
      name: "Email Signature Generator",
      href: "/free-influencer-outreach-email-ai-generator/",
    },
    {
      name: "SEO Ranking Checker",
      href: "/seo-ranking-checker",
    },
    {
      name: "Growth Grader",
      href: "/growth-grader",
    },
  ];

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <div className="justify-center">
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {categories.map((page, index) => (
                      <div key={page.name} className="flow-root">
                        <div className="flex justify-center items-center">
                          {" "}
                          {/* Center the content */}
                          <Link
                            href={page.href || "/"}
                            className="-m-2 block p-2 font-medium text-gray-900"
                          >
                            {page.name}
                          </Link>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-4 h-8 top-6"
                            onClick={() => handleSubMenuToggle(index)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </div>
                        {openSubMenu === index && (
                          <div className="submenu-container">
                            {page.name === "Who We Serve" && (
                              <div className="flex flex-col submenu text-center text-gray-500 italic p-2 font-semibold">
                                {submenu1.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href || "/"}
                                    className="mb-5 border-dotted border-2 border-indigo-600"
                                    role="button"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                            {page.name === "Our Platform" && (
                              <div className="flex flex-col submenu text-center text-gray-500 italic p-2 font-semibold">
                                {submenu2.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href || "/"}
                                    className="mb-5 border-dotted border-2 border-indigo-600"
                                    role="button"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                            {page.name === "Free Tools" && (
                              <div className="flex flex-col submenu text-center text-gray-500 italic p-2 font-semibold">
                                {submenu3.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    href={sub.href || "/"}
                                    className="mb-5 border-dotted border-2 border-indigo-600"
                                    role="button"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                    {pages.map((page) => (
                      <div key={page.name} className="flow-root">
                        <Link
                          href={page.href || "/"}
                          className="-m-2 block p-2 font-medium text-gray-900 text-center"
                        >
                          {page.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <ButtonOne title={"SIGN UP"} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <div className="shadow-xl ...">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div className="border-b border-gray-200">
              <div className="flex h-20 items-center">
                <button
                  type="button"
                  className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>

                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Image
                      className="h-8 w-auto"
                      src={"/common/logo.png"}
                      alt="footprynt"
                      width={200}
                      height={100}
                    />
                  </Link>
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="flex h-full space-x-8">
                    {categories.map((category) => (
                      <Popover key={category.name} className="flex">
                        {({ open }) => (
                          <>
                            <div className="relative flex">
                              <Popover.Button
                                className={classNames(
                                  open
                                    ? "border-indigo-600 text-indigo-600"
                                    : "border-transparent text-gray-700 hover:text-gray-800",
                                  "relative z-10 -mb-px flex items-center pt-px text-sm font-medium transition-colors duration-200 ease-out"
                                )}
                              >
                                <div className="w-full flex items-center">
                                  {category.name}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-8 top-6"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </div>
                              </Popover.Button>
                            </div>

                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0"
                              enterTo="opacity-100"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100"
                              leaveTo="opacity-0"
                            >
                              <Popover.Panel className="absolute inset-x-0 top-full text-sm text-gray-500">
                                <div className="relative backdrop-blur-xl shadow-lg">
                                  <div className="mx-auto max-w-7xl px-8 py-10">
                                    <div className="flex justify-center items-center">
                                      <div className="flex space-x-10">
                                        {category.serve.map((item) => (
                                          <div
                                            key={item.name}
                                            className="relative"
                                          >
                                            <div className="absolute -inset-5">
                                              <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg" />
                                            </div>
                                            {category.id === "whoweserve" && (
                                              <Link
                                                href={item.href || "/"}
                                                className={`relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-black font-semibold transition-all duration-200 ${item.bg} border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]`}
                                                role="button"
                                              >
                                                {item.name}
                                              </Link>
                                            )}
                                            {category.id === "platform" && (
                                              <div
                                                className={`relative z-10 flex flex-col w-full px-8 py-8 text-lg text-black font-semibold transition-all duration-200 ${item.bg} border-2 border-black sm:w-auto rounded-xl font-pj focus:outline-none shadow-lg`}
                                              >
                                                <Link
                                                  href={item.href1 || "/"}
                                                  className="text-slate-600 hover:text-emerald-400 cursor-pointer flex flex-row gap-4"
                                                >
                                                  {item.icon1} {item.subtitle1}
                                                </Link>
                                                <Link
                                                  href={item.href2 || "/"}
                                                  className="text-slate-600 hover:text-emerald-400 cursor-pointer flex flex-row gap-4"
                                                >
                                                  {item.icon2} {item.subtitle2}
                                                </Link>
                                                <Link
                                                  href={item.href3 || "/"}
                                                  className="text-slate-600 hover:text-emerald-400 cursor-pointer flex flex-row gap-4"
                                                >
                                                  {item.icon3} {item.subtitle3}
                                                </Link>
                                              </div>
                                            )}
                                            {category.id === "free" && (
                                              <Link
                                                href={item.href || "/"}
                                                className={`relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-black font-semibold transition-all duration-200 ${item.bg} border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]`}
                                                role="button"
                                              >
                                                {item.name}
                                              </Link>
                                            )}
                                            {category.id === "influencer" && (
                                              <Link
                                                href={`${
                                                  item.href || "/"
                                                }?country=${selectedCountry}`}
                                                className={`relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-black font-semibold transition-all duration-200 ${item.bg} border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]`}
                                                role="button"
                                              >
                                                <Image
                                                  src={item.icon}
                                                  className="w-5 mr-2"
                                                  alt="icon"
                                                  width={80}
                                                  height={80}
                                                  loading="lazy"
                                                />{" "}
                                                {item.name}
                                              </Link>
                                            )}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Popover.Panel>
                            </Transition>
                          </>
                        )}
                      </Popover>
                    ))}
                    {pages.map((page) => (
                      <Link
                        key={page.name}
                        href={page.href || "/"}
                        className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                </Popover.Group>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <ButtonOne
                      title={"SIGN UP"}
                      url={"https://pride.footprynt.in/login"}
                    />
                  </div>

                  <div className="hidden lg:ml-8 lg:flex">
                    {/* <CountryDropdown
                  selectedCountry={selectedCountry}
                  handleCountryChange={handleCountryChange}
                /> */}
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
