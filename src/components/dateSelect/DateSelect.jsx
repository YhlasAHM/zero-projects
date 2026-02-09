import { Box, TextField, Typography } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function GlobalDateSelect({
  value,
  onChange,
  placeholder,
  disabled,
  ...props
}) {
  return (
    <Box>
      <DatePicker
        value={value}
        onChange={onChange}
        {...props}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
            placeholder,
            disabled,
          },
        }}
      />
    </Box>
  );
}
