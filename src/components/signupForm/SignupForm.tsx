import React from "react";
import { Form, Field } from "formik";
import SignupFormInput from "../signupFormInput/SignupFormInput";
import DateOfBirthInput from "../dateOfBirthInput/DateOfBirthInput";
import GenderInput from "../genderInput/GenderInput";
import { Button, Typography } from "@mui/material";
import "./signupForm.scss";

const SignupForm = () => {
  return (
    <Form>
      <Field name="firstName">
        {(props: { field: any; meta: any }) => {
          const { field, meta } = props;
          return (
            <SignupFormInput
              id="firstName"
              label="First Name"
              meta={meta}
              field={field}
              width="48%"
            />
          );
        }}
      </Field>
      <Field name="surname">
        {(props: { field: any; meta: any }) => {
          const { field, meta } = props;
          return (
            <SignupFormInput
              id="surname"
              label="Surname"
              meta={meta}
              field={field}
              width="48%"
            />
          );
        }}
      </Field>
      <Field name="mobileOrEmail">
        {(props: { field: any; meta: any }) => {
          const { field, meta } = props;
          return (
            <SignupFormInput
              id="mobileOrEmail"
              label="Mobile number or email address"
              width="98%"
              meta={meta}
              field={field}
            />
          );
        }}
      </Field>
      <Field name="newPassword">
        {(props: { field: any; meta: any }) => {
          const { field, meta } = props;
          return (
            <SignupFormInput
              id="newPassword"
              label="New Password"
              type="password"
              width="98%"
              meta={meta}
              field={field}
            />
          );
        }}
      </Field>
      <Field name="dateOfBirth">
        {(props: { field: any; form: any; meta: any }) => {
          const { field, form, meta } = props;
          return <DateOfBirthInput meta={meta} form={form} field={field} />;
        }}
      </Field>
      <Field name="gender">
        {(props: { field: any; meta: any }) => {
          const { field, meta } = props;
          return <GenderInput field={field} meta={meta} />;
        }}
      </Field>
      <p className="terms">
        By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
        Policy. You may receive SMS notifications from us and can opt out at any
        time.
      </p>
      <div className="buttonContainer">
        <Button className="signupButton" variant="contained" size="large">
          Sign Up
        </Button>
      </div>
    </Form>
  );
};

export default SignupForm;
