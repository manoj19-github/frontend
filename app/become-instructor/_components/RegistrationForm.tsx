"use client";
import TextBox, { InputTypeEnum } from "@/components/TextBox";
import React from "react";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
interface RegistrationFormProps {}
const RegistrationForm = () => {
  const formControl = useForm();
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-5">
        <TextBox
          control={formControl.control}
          rules={{ required: true }}
          errors={formControl.formState.errors}
          name={"name"}
          label={`Your Name`}
          isRequired
        />
        <TextBox
          control={formControl.control}
          rules={{ required: true }}
          errors={formControl.formState.errors}
          name={"user_name"}
          label={`User Name`}
          maxLength={80}
          isRequired
        />
        <TextBox
          control={formControl.control}
          rules={{ required: true }}
          errors={formControl.formState.errors}
          name={"email_id"}
          label={`Email Id`}
          isRequired
          maxLength={50}
        />
        <TextBox
          control={formControl.control}
          errors={formControl.formState.errors}
          name={"mobile"}
          maxLength={10}
          label={`Mobile No (optional)`}
        />
        <TextBox
          control={formControl.control}
          rules={{
            required: true,
            maxLength: {
              value: 8,
              message: "password must contain 8 character only",
            },
          }}
          errors={formControl.formState.errors}
          name={"password"}
          label={`Password`}
          inputType={InputTypeEnum.PASSWORD}
          maxLength={8}
          isRequired
        />
        <TextBox
          control={formControl.control}
          rules={{
            required: true,
            maxLength: {
              value: 8,
              message: "password must contain 8 character only",
            },
          }}
          errors={formControl.formState.errors}
          name={"password_confirm"}
          label={`Confirm Password`}
          isRequired
          inputType={InputTypeEnum.PASSWORD}
          maxLength={8}
        />
      </div>
      <div className="text-center w-full flex mt-5 gap-x-4 ">
        <Checkbox id="terms1_gurukul" />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1_gurukul"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </div>
      <div className="mt-8 w-full flex items-center justify-center">
        <button className="bg-banner text-white rounded-md py-2 px-10 hover:bg-white hover:text-banner border border-transparent hover:border-banner transition-all duration-500">
          Register As Instructor
        </button>
      </div>
      <div className="mt-4 flex items-center justify-center">
        Already have an account!{"   "}
        <span className="cursor-pointer ml-3 text-banner">Login in</span>
      </div>
    </div>
  );
};

export default RegistrationForm;
