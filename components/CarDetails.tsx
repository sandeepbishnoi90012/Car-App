"use client";
import { CarProps } from "@/types";
import React, { Fragment } from "react";
import Image from "next/image";
import { Transition, Dialog } from "@headlessui/react";
import { generateCArImageUrl } from "@/utils";
interface CarDetailsProp {
  isOpen: boolean;
  car: CarProps;
  closeModal: () => void;
}
const CarDetails = ({ isOpen, car, closeModal }: CarDetailsProp) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className=" flex min-h-full justify-center items-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl bg-white px-6 py-4 text-left shadow-xl flex flex-col gap-5 transition-all">
                  <button
                    type="button"
                    className=" absolute top-2 right-2 z-20 w-fit rounded-full bg-primary-blue-100"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className=" relative w-full h-40 bg-pattern bg-center bg-cover rounded-lg">
                      <Image
                        src={generateCArImageUrl(car)}
                        alt="car-image"
                        fill
                        priority
                        className="object-contain"
                      />
                    </div>

                    <div className="flex gap-3">
                      <div className="flex-1 bg-primary-blue-100 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCArImageUrl(car,'29')}
                          alt="car-image"
                          fill
                          priority
                          className="object-contain mt-1"
                        />
                      </div>
                      <div className="flex-1 bg-primary-blue-100 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCArImageUrl(car,'33')}
                          alt="car-image"
                          fill
                          priority
                          className="object-contain mt-6"
                        />
                      </div>
                      <div className="flex-1 bg-primary-blue-100 relative w-full h-24 rounded-lg">
                        <Image
                          src={generateCArImageUrl(car,'13')}
                          alt="car-image"
                          fill
                          priority
                          className="object-contain mt-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize">
                      {car.make} {car.model}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {
                        Object.entries(car).map(([key,value]) => (
                          <div className="flex justify-between gap-5 text-right w-full" key={key}>
                            <h2 className="text-grey capitalize">{key.split("_").join(" ")}</h2>
                            <p className="text-black-100 font-semibold">{value}</p>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
