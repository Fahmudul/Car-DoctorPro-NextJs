"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import SocialSignin from "@/Components/Shared/SocialSignin";

const SignUp = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const path = searchParams.get("redirect");
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const resp = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: path ? path : "/",
    });
  };
  return (
    <div className="container px-24 mx-auto py-24">
      <div className="grid grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/assets/images/login/login.svg"
            height="540"
            width="540"
            alt="login image"
          />
        </div>
        <div className="border-2 p-12">
          <h6 className="text-3xl font-semibold text-primary text-center mb-12">
            Sign In
          </h6>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label> <br />
            <input
              type="text"
              name="email"
              placeholder="your email"
              className="mt-3 w-full input input-bordered"
            />
            <br /> <br />
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              name="password"
              placeholder="your password"
              className="w-full mt-3 input input-bordered"
            />
            <br />
            <button
              type="submit"
              className="w-full btn btn-primary mt-12 text-lg"
            >
              Sign In
            </button>
          </form>
          <div>
            <h6 className="my-12 text-center">or sign in with</h6>
            <SocialSignin />
            <h6 className="my-12 text-center">
              not have account ?{" "}
              <Link className="text-primary font-semibold" href={"/signup"}>
                Sign Up
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
