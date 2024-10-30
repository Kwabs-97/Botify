"use client";
import CustomInput from "@/components/form-elements/CustomInput";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

function Page() {
  const { formState, register, handleSubmit } = useForm();
  const handleFormSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <CustomInput name="example" register={register} />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Page;
