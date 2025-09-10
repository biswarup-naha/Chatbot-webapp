import { Field, Form, Formik, FormikHelpers, FormikValues } from "formik";
import Image from "next/image";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState(
    JSON.parse(localStorage.getItem("email") || ""),
  );
  const [password, setPassword] = useState(
    JSON.parse(localStorage.getItem("password") || ""),
  );

  return (
    <div className="py-8 px-16 h-full w-screen">
      <div>
        <h1>PlatyChat</h1>
        <div>
          <div>
            <h1>Login</h1>
            <p>Add your credentials to log in</p>
          </div>
          <Formik
            // children={undefined}
            initialValues={undefined}
            onSubmit={function (
              values: FormikValues,
              formikHelpers: FormikHelpers<FormikValues>,
            ): void | Promise<any> {
              throw new Error("Function not implemented.");
            }}
          >
            <Form>
              <div>
                <label htmlFor="email">
                  Your email<sup>*</sup>
                </label>
                <Field type="text" id="email" />
              </div>
              <div>
                <label htmlFor="password">
                  Password<sup>*</sup>
                </label>
                <Field type="text" id="password" />
              </div>
              <Field type="checkbox" name="tnc" id="tnc" />{" "}
              <span>I agree to terms & conditions.</span>
              <div role="button">Log in</div>
            </Form>
          </Formik>
        </div>
      </div>
      <Image
        src="/authbg.svg"
        height={960}
        width={764}
        alt="auth page image"
      ></Image>
    </div>
  );
};

export default Login;
