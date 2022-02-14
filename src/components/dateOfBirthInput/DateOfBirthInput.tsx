import React, { useEffect, useState } from "react";
import {
  Select,
  IconButton,
  Popover,
  Typography,
  Tooltip,
  InputAdornment,
  MenuItem,
} from "@mui/material";
import { Error, Help } from "@mui/icons-material";
import "./dateOfBirthInput.scss";

interface DOBProps {
  meta: any;
  form: any;
  field: any;
}
const DateOfBirthInput: React.FC<DOBProps> = ({ meta, form, field }) => {
  const today = new Date();
  const days = [...Array(31).keys()].map((i) => i + 1);
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
  const years = [...Array(Number(today.getFullYear())).keys()]
    .map((i) => i + 1)
    .filter((i) => i > 1920);

  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  const handleOnClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
    setIsPopoverOpen(true);
  };

  const handleOnClose = () => {
    setIsPopoverOpen(false);
    setAnchorEl(null);
  };

  return (
    <div className="dobContainer">
      <Popover
        sx={{
          "& .MuiPaper-root": {
            p: 2,

            width: "300px",
            fontSize: "13px",
            lineHeight: "16px",
            left: "490px !important",
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
        <b>Providing your date of birth</b> helps make sure that you get the
        right Facebook experience for your age. If you want to change who sees
        this, go to the About section of your Profile. For more details, please
        visit our{" "}
        <a style={{ color: "#1877f2" }} href="">
          Data Policy
        </a>
        .
      </Popover>
      <div className="labelContainer">
        <div className="headerContainer">
          <Typography variant="subtitle2">Date of Birth</Typography>
          <IconButton onClick={handleOnClick} sx={{ padding: 0.5 }}>
            <Help sx={{ fontSize: "12px" }} />
          </IconButton>
        </div>
        {form.touched?.dateOfBirth?.year && meta.error?.year && (
          <Tooltip
            arrow
            title={meta.error.year}
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
        )}
      </div>
      <div className="selectContainer">
        <Select
          error={form.touched?.dateOfBirth?.year && meta.error?.year}
          className="selectTab"
          variant="outlined"
          inputProps={{
            name: "dateOfBirth.day",
            id: "dateOfBirth",
          }}
          {...field}
          value={field.value.day}
        >
          {days.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Select
          error={form.touched?.dateOfBirth?.year && meta.error?.year}
          className="selectTab"
          inputProps={{
            name: "dateOfBirth.month",
            id: "dateOfBirth.month",
          }}
          {...field}
          value={field.value.month}
        >
          {months.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
        <Select
          error={form.touched?.dateOfBirth?.year && meta.error?.year}
          className="selectTab"
          inputProps={{
            name: "dateOfBirth.year",
            id: "dateOfBirth.year",
          }}
          {...field}
          value={field.value.year}
        >
          {years.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default DateOfBirthInput;
