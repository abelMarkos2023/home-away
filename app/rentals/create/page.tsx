import AmenitiesInput from "@/components/form/AmenityInput";
import CategorySelectInput from "@/components/form/CategorySelectInput";
import CounterInput from "@/components/form/CounterInput";
import CountriesSelectInput from "@/components/form/CountriesSelectInput";
import FormContainer from "@/components/form/FormContainer";
import FormInput from "@/components/form/FormInput";
import ImageInput from "@/components/form/ImageInput";
import PriceInput from "@/components/form/PriceInput";
import SubmitButton from "@/components/form/SubmitButton";
import DescriptionInput from "@/components/form/TextAreaInput";
import { createdPropertyAction } from "@/utils/actions";
import React from "react";

const page = () => {
  return (
    <section>
      <h1 className="text-2xl font-bold text-center capitalize my-8">
        Create a new rental property
      </h1>
      <div className="border rounded p-4">
        <FormContainer action={createdPropertyAction}>
          <h2 className="text-lg font-semibold capitalize my-4">General Info</h2>

          <div className="grid md:grid-cols-2 gap-4 my-4">
            <FormInput
              type="text"
              defaultValue="Capin In Latvia"
              name="name"
              label="Name Limit(20) Characters"
            />
            <FormInput
              type="text"
              defaultValue="Capin In Latvia"
              name="tagline"
              label="Tagline Limit(20) Characters"
            />
            {/* Price */}
            <PriceInput />
            {/* CAtegories */}
            <CategorySelectInput />
          </div>
          {/* Textarea Description */}
          <DescriptionInput name="description" labelText="Description (10 - 1000) words" />
          <div className="grid gap-4 sm:grid-cols-2 my-2">
            <CountriesSelectInput />
            <ImageInput />
          </div>
            <h2 className="text-xl  font-semibold capitalize my-6">Accommodation Details</h2>
            <CounterInput text="bedrooms"/>
            <CounterInput text="beds"/>
            <CounterInput text="guests"/>
            <CounterInput text="baths"/>
         
          <h3 className="text-xl font-bold capitalize my-4">Amenities</h3>
          <AmenitiesInput />

           <SubmitButton text="Create Property" />
        </FormContainer>
      </div>
    </section>
  );
};

export default page;
