/* eslint-disable react/no-unescaped-entities */
import { FAQ_DATA } from "@/app/mock/FaqData";
import React from "react";
import Accordian from "@/app/css/Accordian.module.css";

type Props = {};

export default function FAQ({}: Props) {
  return (
    <section className="px-6 md:px-16">
      <h3 className="text-center text-2xl md:text-4xl font-extrabold mb-8">
        Frequently Asked Questions
      </h3>
      <div className="accordion accordion--radio">
        {FAQ_DATA.map((faq) => (
          <div key={faq.id} className={Accordian["tab"]}>
            <input type="radio" name={"accordion-2"} id={faq.panel} />
            <label htmlFor={faq.panel} className={Accordian["tab__label"]}>
              {faq.que}
            </label>
            <div className={Accordian["tab__content"]}>
              <p>{faq.ans}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
