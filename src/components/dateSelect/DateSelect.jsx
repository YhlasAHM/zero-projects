import { Box } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function GlobalDateSelect({
  value,
  onChange,
  placeholder,
  disabled,
  ...props
}) {
  const [open, setOpen] = useState(false);
  const [tempDate, setTempDate] = useState(value);

  const handleAccept = () => {
    onChange?.(tempDate);
    setOpen(false);
  };

  const handleCancel = () => {
    setTempDate(value);
    setOpen(false);
  };

  return (
    <Box>
      <DatePicker
        value={tempDate}
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        onChange={(newValue) => setTempDate(newValue)}
        disabled={disabled}
        slotProps={{
          textField: {
            fullWidth: true,
            size: "small",
            placeholder,
            onClick: () => setOpen(true),
          },
          actionBar: {
            actions: ["cancel", "accept"], // 🔥 OK & Cancel
          },
        }}
        onAccept={handleAccept}
        onCancel={handleCancel}
        {...props}
      />
    </Box>
  );
}