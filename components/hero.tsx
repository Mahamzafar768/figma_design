import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row justify-between items-center px-4 lg:px-8 py-16 lg:py-[150px] bg-blue-500">
        <div className="text-center lg:text-left lg:w-1/2">
          <h1 className="text-2xl lg:text-3xl text-white mb-4">Welcome To Our Website</h1>
          <p className="text-justify text-sm lg:text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia neque
            atque ipsum eligendi impedit necessitatibus, obcaecati provident,
            reprehenderit numquam quos ad sit omnis perspiciatis facilis quidem
            minima accusamus labore molestias dolor! Totam distinctio architecto
            repellat.
          </p>
          <div className="my-6 lg:my-4 flex justify-center lg:justify-start">
            <button type="button" className="bg-black px-6 py-2 text-lg lg:text-2xl rounded-md text-white">
              Contact Us
            </button>
          </div>
        </div>

        <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center">
          <Image src={'/bg.png'} width={400} height={400} alt="bg" className="w-64 h-64 lg:w-[450px] lg:h-[450px]" />
        </div>
      </section>
    </>
  );
};

export default Hero;
