import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "How do I get started with the daily-staffing platform?",
    answer:
      "Getting started is easy! Simply sign up for an account, customize your settings, and start posting shifts.",
  },
  {
    question: "What types of businesses can benefit from this platform?",
    answer:
      "Our platform is designed to help a variety of businesses, including restaurants, retail stores, healthcare facilities, and more.",
  },
  {
    question: "Can I integrate this platform with my existing systems?",
    answer:
      "Yes, our platform offers seamless integration with popular HR and scheduling software.",
  },
  {
    question: "Is technical support available for users?",
    answer:
      "Absolutely! Our team provides dedicated technical support to help you get the most out of our platform.",
  },
];

export default Faq;