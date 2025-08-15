import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

type PriceInputProps = {
  defaultValue?: number;
};
const PriceInput = ({ defaultValue }: PriceInputProps) => {
  const name = "price";
  return (
    <div className="mb-2 w-full">
      <Label htmlFor="price" className="text-md font-semibold">
        Price($)
      </Label>
      <Input
        type="number"
        name={name}
        id={name}
        placeholder="Enter price in USD"
        className="mt-1"
        defaultValue={defaultValue}
        min={0}
        step={1}
        required
      />
    </div>
  );
};

export default PriceInput;
