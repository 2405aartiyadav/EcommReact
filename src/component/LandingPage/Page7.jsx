import React, { useState } from "react";
import data from "../../faq.json";

function Page7() {
  const [toggle, setToggle] = useState(false);
  const [faq, setFaq] = useState(data);
  return (
    <div className="mt-20">
      <div class="font-bold text-2xl mb-2">Frequently Asked Questions</div>
      <div className="flex gap-6 mt-10">
        <div className="flex-col">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            saepe. Voluptatum expedita sapiente sed vel.
          </p>
          <button className="bg-black text-white rounded-full w-40 p-1 m-5">
            Ask a Question+
          </button>
        </div>
        <div className="flex-col">
          <div className="">
            {data.faq.map((Faq,index) => {
              return (
                <div key={index} className="border-2 border-black-200 m-3 p-4">
                  <h5>
                    {Faq.question}
                    <span
                      className="cursor-pointer"
                      onClick={() => {
                        setToggle(!toggle);
                      }}
                    >
                      {toggle ? "-" : "^"}
                    </span>
                  </h5>
                  {toggle && <p>{Faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page7;
