"use client";
import React, { useState } from "react";
import SearchManuFacturer from "./SearchManuFacturer";
import Image from "next/image";
import { useRouter } from "next/navigation";
const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying-glass"
      height={40}
      width={40}
      className=" object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setmanufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(manufacturer.trim() === "" && model.trim() === ""){
      alert("please fill the value");
    }
    updateSearchParams(model.toLowerCase(),manufacturer.toLocaleLowerCase());
  };

  const updateSearchParams = (model:string , manufacturer:string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if(model){
      searchParams.set('model',model);
    }else{
      searchParams.delete('model');
    }

    if(manufacturer){
      searchParams.set('manufacturer',manufacturer);
    }else{
      searchParams.delete('manufacturer');
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManuFacturer
          manufacturer={manufacturer}
          setmanufacturer={setmanufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model-icon"
          height={25}
          width={25}
          className=" absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
