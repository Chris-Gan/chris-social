import {
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Tooltip,
} from "@mui/material";
import { Error } from "@mui/icons-material";
import React, { useEffect, useState } from "react";

interface SignupFormInputProps {
  id: string;
  label: string;
  type?: string;
  width: string;
  field: any;
  meta: any;
}
const SignupFormInput: React.FC<SignupFormInputProps> = ({
  id,
  label,
  type,
  width,
  field,
  meta,
}) => {
  return (
    <FormControl
      sx={{ my: 1, mx: 0.5, width: { width } }}
      variant="outlined"
      size="small"
      error={meta.touched && meta.error}
      // color={ ? "error" : "primary"}meta.touched && meta.error
    >
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <OutlinedInput
        id={id}
        type={type}
        {...field}
        endAdornment={
          meta.touched &&
          meta.error && (
            <Tooltip
              arrow
              title={meta.error}
              componentsProps={{
                tooltip: {
                  sx: {
                    backgroundColor: "#be4b49",
                    fontSize: "13px",
                    padding: "13px",
                  },
                },
                arrow: {
                  sx: {
                    color: "#be4b49",
                  },
                },
              }}
            >
              <InputAdornment position="end">
                <Error fontSize="small" color="error" />
              </InputAdornment>
            </Tooltip>
          )
        }
      />
    </FormControl>
  );
};

export default SignupFormInput;
