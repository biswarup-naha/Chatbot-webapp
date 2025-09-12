"use client";

import { useAuth } from "@/app/context/auth";
import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { notification } from "antd";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="relative flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden max-w-4xl w-full m-4">
        {/* Left Section: Login Form */}
        <div className="md:w-1/2 p-8 bg-white flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">PlatyChat</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Login</h2>
          <p className="text-gray-500 mb-8">Add your credentials to log in</p>

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(
              { email, password }: { email: string; password: string },
              {
                setSubmitting,
              }: FormikHelpers<{ email: string; password: string }>,
            ) => {
              try {
                login(email, password);
                // Handle successful login (e.g., redirect, store token)
              } catch (error) {
                console.error("Login failed:", error);
                // Handle login error (e.g., display error message)
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your email<sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password<sup className="text-red-500">*</sup>
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="••••••••"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      name="rememberMe"
                      id="rememberMe"
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="rememberMe"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      href="/profile/change-password"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Logging in..." : "Log in"}
                  </button>
                </div>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Don't have an account?{" "}
                  <Link
                    href="/profile/register"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Register
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Section: Image */}
        <div className="max-md:hidden max-md:w-1/2 flex items-center justify-center">
          <Image
            src="/authbg.svg"
            height={960}
            width={764}
            priority
            alt="Authentication background"
            className="max-w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
