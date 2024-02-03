import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
  GlobeAltIcon,
  PresentationChartLineIcon,
  BriefcaseIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const icons = [
    {
      icon: "/common/Linkedin1.png",
      link: "https://www.linkedin.com/company/padhchin-it-and-marketing/",
    },
    {
      icon: "/common/InstagramCircle.png",
      link: "https://www.instagram.com/footprynt_india/?igshid=YzdkMWQ2MWU%3D",
    },
    { icon: "/common/TwitterCircle.png", link: "https://twitter.com/influencernews4/" },
    { icon: "/common/facebook.png", link: "https://www.facebook.com/footpryntapp" },
  ];

  const platform = [
    { name: "Pricing", href: "/pricing" },
    { name: "Blogs", href: "/blogs" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const quicklinks = [
    {
      name: "Search & Analyze Creators",
      href: "/search-analyze",
      icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    },
    {
      name: "Track & Measure Sales",
      href: "/sales-tracking",
      icon: <Bars3Icon className="h-6 w-6" />,
    },
    {
      name: "Track Influencer Campaigns",
      href: "/influencer-campaigns",
      icon: <UserIcon className="h-6 w-6" />,
    },
    {
      name: "Management & Outreach",
      href: "/brief-outreach",
      icon: <GlobeAltIcon className="h-6 w-6" />,
    },
    {
      name: "Find & Hire UGC Creators",
      href: "/ugc-content",
      icon: <ShoppingBagIcon className="h-6 w-6" />,
    },
    {
      name: "White-Label platform",
      href: "/full-automation",
      icon: <BriefcaseIcon className="h-6 w-6" />,
    },
    {
      name: "Client Reporting Dashboard",
      href: "/User-Dashboard-Page",
      icon: <PresentationChartLineIcon className="h-6 w-6" />,
    },
    {
      name: "Influencer Marketing API",
      href: "/Api-integration",
      icon: <ArrowTrendingUpIcon className="h-6 w-6" />,
    },
    {
      name: "About",
      href: "/About",
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
  ];

  return (
    <footer className="bg-emerald-50 px-4 md:px-12">
      <div className="container mx-auto py-8 md:py-16">
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20 text-left">
          <div className="flex flex-col w-full md:w-1/2 md:p-0 py-4 gap-8 md:gap-0 md:justify-between">
            <Link href="/">
              <Image
                src={"/common/logo.png"}
                alt="footer_logo"
                className="w-[10rem] md:w-[18rem] mx-auto md:mx-0"
                width={200}
                height={100}
              />
            </Link>
            <p className="text-sm md:text-base font-medium text-[#646464] text-center md:text-left">
              <span className="font-bold">Footprynt.ai</span> helps you discover
              and manage influencers, measure campaign success, and deliver
              results to clients via a branded interface.
            </p>
            <div className="flex gap-7 text-[18px] text-[#646464] justify-center md:justify-start">
              {icons.map((icon, index) => (
                <a key={index} href={icon.link} target="_blank">
                  <Image
                    src={icon.icon}
                    alt="icons"
                    className="w-10 h-10 mt-10 mb-10 cursor-pointer"
                    width={80}
                    height={80}
                  />
                </a>
              ))}
            </div>
            <p className="text-[14px] md:text-[16px] font-medium text-[#646464] text-center md:text-left">
              Privacy Policy | © {new Date().getFullYear()} Footprynt.ai. <br />{" "}
              All rights reserved.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:relative">
            <p className="text-[18px] md:text-[22px] font-bold footer-main">
              Our Platforms
            </p>
            <span className="top-[18px] md:top-[33px] absolute w-[7rem] h-[3px] bg-teal-500 md:bg-transparent"></span>
            {quicklinks.map((links, i) => (
              <div className="flex gap-4" key={i}>
                <p className="text-rose-500">{links.icon}</p>
                <a
                  href={links.href}
                  key={i}
                  className="text-[14px] md:text-[16px] hover:text-teal-500 cursor-pointer text-[#646464] font-medium hover:font-bold"
                >
                  {links.name}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 md:relative">
            <p className="text-[18px] md:text-[22px] font-bold footer-main">
              Quick Links
            </p>
            <span className="top-[18px] md:top-[33px] absolute w-[7rem] h-[3px] bg-rose-500 md:bg-transparent"></span>
            {platform.map((platform, i) => (
              <a
                href={platform.href}
                key={i}
                className="text-[14px] md:text-[16px] hover:text-rose-500 cursor-pointer text-[#646464] font-medium hover:font-bold"
              >
                {platform.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
