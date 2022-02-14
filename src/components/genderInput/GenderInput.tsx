import { Help } from "@mui/icons-material";
import {
  TextField,
  IconButton,
  Popover,
  FormHelperText,
  Typography,
  Radio,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Field } from "formik";
import React, { useState } from "react";
import "./genderInput.scss";

interface GenderProps {
  meta: any;
  // form: any;
  field: any;
}
interface RadioButtonProps {
  id: string;
  label: string;
  value: string;
  field: any;
}
const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  label,
  value,
  field,
}) => {
  return (
    <>
      <div className="radioButton">
        <label className="radioButtonLabel" htmlFor={id}>
          {label}
        </label>
        <input
          className="radioButtonInput"
          name="gender"
          type="radio"
          id={id}
          {...field}
          value={value}
        />
      </div>
    </>
  );
};

const ExtendedInput = () => {
  return (
    <>
      <Field name="pronoun">
        {(props: { field: any; meta: any }) => {
          const { field } = props;
          return (
            <FormControl size="small" fullWidth sx={{ width: "98%" }}>
              <Select {...field}>
                <MenuItem disabled value=" ">
                  Select your pronoun
                </MenuItem>
                <MenuItem value="she">
                  She: "Wish her a happy birthday!"
                </MenuItem>
                <MenuItem value="he">He: "Wish him a happy birthday!"</MenuItem>
                <MenuItem value="they">
                  They: "Wish them a happy birthday!"
                </MenuItem>
              </Select>
              <FormHelperText sx={{ marginLeft: 0 }}>
                Your pronoun is visible to everyone.
              </FormHelperText>
            </FormControl>
          );
        }}
      </Field>
      <Field name="optionalGender">
        {(props: { field: any; meta: any }) => {
          const { field } = props;
          return (
            <TextField
              label="Gender (optional)"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ width: "98%" }}
              {...field}
            />
          );
        }}
      </Field>
    </>
  );
};
const GenderInput: React.FC<GenderProps> = ({ meta, field }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
    console.log(event);
  };

  const handleOnClose = () => {
    setIsPopoverOpen(false);
    setAnchorEl(null);
  };
  return (
    <div className="genderContainer">
      <Popover
        sx={{
          "& .MuiPaper-root": {
            p: 2,

            width: "307px",
            fontSize: "13px",
            lineHeight: "16px",
            left: "123px !important",
          },
        }}
        open={isPopoverOpen}
        onClose={handleOnClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        anchorEl={anchorEl}
      >
        You can change who sees your gender on your profile later. Select Custom
        to choose another gender, or if you'd rather not say.
      </Popover>
      <div className="labelContainer">
        <div className="headerContainer">
          <Typography variant="subtitle2">Gender</Typography>
          <IconButton onClick={handleOnClick} sx={{ padding: 0.5 }}>
            <Help sx={{ fontSize: "12px" }} />
          </IconButton>
        </div>
      </div>
      <div className="radioButtonContainer">
        <RadioButton field={field} id="female" label="Female" value="female" />
        <RadioButton field={field} id="male" label="Male" value="male" />
        <RadioButton field={field} id="custom" label="Custom" value="custom" />
        {/* <RadioGroup
          defaultValue="female"
          aria-labelledby="demo-customized-radios"
          name="customized-radios"
          row
          //   sx={{ justifyContent: "space-between !important" }}
          {...field}
        >
          <FormControlLabel
            sx={{
              border: "1px solid #ccd0d5",
              margin: "8px 6px 6px 0px",
              height: "36px",
              borderRadius: "4px",
              width: "110px",

              maxWidth: "110px",
              pl: 1,

              "& .css-ahj2mt-MuiTypography-root": {
                marginRight: "20px",
              },
            }}
            value="female"
            control={<Radio />}
            label="Female"
            labelPlacement="start"
          />
          <FormControlLabel
            sx={{
              border: "1px solid #ccd0d5",
              margin: "8px 6px 6px 0px",
              height: "36px",
              borderRadius: "4px",
              width: "110px",
              maxWidth: "110px",
              pl: 1,

              "& .css-ahj2mt-MuiTypography-root": {
                marginRight: "20px",
              },
            }}
            value="male"
            control={<Radio />}
            label="Male"
            labelPlacement="start"
          />
          <FormControlLabel
            sx={{
              border: "1px solid #ccd0d5",
              margin: "8px 6px 6px 0px",
              height: "36px",
              borderRadius: "4px",
              maxWidth: "110px",
              width: "110px",
              pl: 1,

              "& .css-ahj2mt-MuiTypography-root": {
                marginRight: "20px",
              },
            }}
            value="custom"
            control={<Radio />}
            label="Custom"
            labelPlacement="start"
          />
        </RadioGroup> */}
      </div>
      {field.value === "custom" && <ExtendedInput />}
    </div>
  );
};

export default GenderInput;
