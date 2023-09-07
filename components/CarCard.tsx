"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/types";
import { calculateCarRent, generateCArImageUrl } from "@/utils";
import { CarDetails, CustomButton } from ".";
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
    const { city_mpg, make, model, year, transmission, drive } = car;
    const [isOpen , setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h1 className="car-card__content-title">
          {make} {model}
        </h1>
      </div>
      <p className="flex mt-6 text-[32px]">
        <span className="font-semibold self-start text-[14px]">$</span>
        {carRent}
        <span className="font-semibold self-end text-[14px]">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCArImageUrl(car)}
          alt="car-image"
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className=" relative w-full flex mt-2">
        <div className="flex group-hover:invisible justify-between text-gray w-full">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering-wheel.svg"
              height={20}
              width={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/tire.svg" alt="tire" height={20} width={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src="/gas.svg" alt="gas" height={20} width={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>

        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails
        isOpen={isOpen}
        car={car}
       closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
