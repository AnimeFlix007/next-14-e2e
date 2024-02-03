interface IProps {
  title: string;
  url: string;
}

export const ButtonOne = ({ title, url } : IProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener"
    className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg text-white font-bold transition-all duration-200 bg-rose-500 border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
  >
    {title}
  </a>
);

export const ButtonTwo = ({ title, url }: IProps) => (
  <a
    href={url}
    target="_blank"
    rel="noopener"
    className="relative z-10 inline-flex items-center justify-center w-full px-6 py-2 text-lg  text-white font-bold transition-all duration-200 bg-teal-500 border-2 border-black sm:w-auto rounded-xl font-pj hover:bg-white hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 shadow-[1px_1px_10px_4px_#e2e8f0]"
  >
    {title}
  </a>
);
