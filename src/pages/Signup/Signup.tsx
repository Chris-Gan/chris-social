import React from "react";
import "./signup.scss";
import {
  Modal,
  IconButton,
  Button,
  Divider,
  CardHeader,
  CardContent,
  Card,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Formik } from "formik";
import * as yup from "yup";
import SignupForm from "../../components/signupForm/SignupForm";
interface SignupProps {
  open: boolean;
  handleClose: () => void;
}
const Signup: React.FC<SignupProps> = ({ open, handleClose }) => {
  const currentDate = new Date();
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const intialValues = {
    firstName: "",
    surname: "",
    mobileOrEmail: "",
    newPassword: "",
    dateOfBirth: {
      day: currentDate.getDate(),
      month: months[currentDate.getMonth()],
      year: currentDate.getFullYear(),
    },
    gender: "",
    pronoun: " ",
    optionalGender: "",
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("What's your name?"),
    surname: yup.string().required("What is your name?"),
    mobileOrEmail: yup
      .string()
      .required(
        "You'll use this when you log in and if you ever need to reset your password."
      ),
    newPassword: yup
      .string()
      .required(
        "Enter a combination of at least six numbers, letters and punctuation marks (such as ! and &)."
      ),
    dateOfBirth: yup.object({
      day: yup.number().required(),
      month: yup.string().required(),
      year: yup
        .number()
        .max(
          2020,
          "It looks like you have entered the wrong info. Please make sure that you use your real date of birth."
        )
        .required(),
    }),
    gender: yup.string().required(),
    pronoun: yup.string(),
    optionalGender: yup.string(),
  });

  const onSubmit = () => {
    console.log("submit the form");
  };
  return (
    <>
      <Modal
        hideBackdrop={true}
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Card className="modalContainer">
          <CardHeader
            title="Sign Up"
            titleTypographyProps={{
              color: "#1c1e21",
              fontSize: "32px",
              lineHeight: "38px",
              fontFamily: "SFProDisplay-Bold, Helvetica, Arial, sans-serif",
              fontWeight: "600",
            }}
            subheader="It's quick and easy"
            subheaderTypographyProps={{
              fontFamily: "SFProText-Regular, Helvetica, Arial, sans-serif",
              fontSize: "15px",
              lineHeight: "24px",
              color: "#606770",
            }}
            action={
              <IconButton className="closeButton" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            }
          />
          <Divider />
          <CardContent>
            <Formik
              initialValues={intialValues}
              onSubmit={onSubmit}
              validationSchema={schema}
            >
              <SignupForm />
            </Formik>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default Signup;
