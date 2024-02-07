import { blogs } from "@/app/mock/BlogsData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Blogs({}: Props) {
  return (
    <div className="container items-center justify-center mx-auto p-10">
      <h2 className="text-center text-4xl font-bold text-black">
        Influencer Marketing{" "}
        <span className="text-violet-500 font-bold">#Blog</span>
      </h2>
      <p className="text-center text-2xl mt-5">
        All about influencer marketing.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-1 justify-items-center mt-20">
        {blogs.map((blog, i) => (
          <div className="min-w-full" data-aos="zoom-out" key={i}>
            <Link href={`/blog-detail/${blog.id}`}>
              <div
                className="bg-white shadow-md border border-black rounded-lg max-w-sm mb-5"
                style={{ height: "550px", overflow: "hidden", width: "100%" }}
              >
                  <img
                    className="rounded-t-lg"
                    src={blog.actualImg}
                    alt={"blog-img"}
                    style={{ height: "300px" }}
                    // width={300}
                    // height={300}
                  />
                <div className="p-5">
                  <p>
                    <h5 className="text-gray-400 font-bold text-sm tracking-tight mb-2">
                      {blog.date}
                    </h5>
                  </p>
                  <a href="#">
                    <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                      {blog.title.length > 40 ? ` ${blog.title.substring(0, 40)}...` : blog.title}
                    </h5>
                  </a>
                  <p className="font-normal text-gray-700 mb-3">
                    {blog.summary
                      ? blog.summary.length < 100
                        ? blog.summary
                        : ` ${blog.summary.substring(0, 100)}...`
                      : "Description Not available"}
                  </p>
                  <a
                    href={`/blog-detail/${blog.id}`}
                    className="text-rose-500 font-bold underline underline-offset-4 float-right"
                  >
                    Read more
                  </a>
                  <br />
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
