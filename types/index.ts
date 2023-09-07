import { CarCard } from "@/components";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    btnType?: "submit" | "button",
    textStyles?: string,
    rightIcon?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    isDisabled?: boolean
}
export interface SearchManufacturer {
    manufacturer: string,
    setmanufacturer: (manufacturer: string) => void
}
export interface CarProps {

    city_mpg: number
    class: string
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface filterProps {
    manufacturer: string,
    year: number,
    fuel: string,
    limit: number,
    model: string,
}
export interface OptionProps {
    title: string,
    value: string
}
export interface CustomFilterProps {
    title:string,
    options:OptionProps[]
}

export interface ShowMoreProps {
    pageNumber : number,
    isNext: boolean
}