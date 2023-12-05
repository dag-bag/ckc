"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Textinput from "../TextInput";
import Link from "next/link";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useAuth from "@/hooks/useAuth";
import { PasswordInput, TextInput } from "@mantine/core";

const schema = yup.object().shape({
  identifier: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must have at least 6 characters"),
});
const resolver = yupResolver(schema);
const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver });
  const { login } = useAuth();
  const onSubmit: SubmitHandler<any> = (data) => {
    login({ type: "CRED", ...data });
  };
  return (
    <form className="space-y-4 font-heading" onSubmit={handleSubmit(onSubmit)}>
      {/* <Textinput
        register={register}
        name="identifier"
        classLabel="font-medium text-gray-500 font-heading"
        label="Email"
        type="text"
        placeholder="astronaut@gmail.com"
        className="px-5 w-full bg-gray-100 rounded-md mt-1 py-3.5"
        error={errors.identifier}
      />
      <Textinput
        register={register}
        name="password"
        classLabel="font-medium text-gray-500 font-heading"
        label="Password"
        type="password"
        placeholder="******"
        className="px-5 w-full bg-gray-100 rounded-md mt-1 py-3.5"
        error={errors.password}
      /> */}

      <TextInput
        size="lg"
        type="email"
        {...register("identifier")}
        placeholder="astronaut@gmail.com"
        error={(errors as any).identifier?.message}
      />

      <PasswordInput
        size="lg"
        placeholder="password"
        {...register("password")}
        classNames={{
          input: "py-3 bg-blue-500",
        }}
        error={(errors as any).identifier?.message}
      />

      <div className="flex items-center justify-between">
        <div>
          <Link href="#" className="capitalize text-slate-800 hover:underline">
            Forget password?
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 items-center gap-5">
        <button className="bg-blue-500 py-2.5 font-medium rounded-lg text-lg text-white">
          Login
        </button>
        <div>
          <p>
            Not registered yet? <br className="hidden md:block" />
            <Link href="#" className="underline font-medium">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};

export default Form;
