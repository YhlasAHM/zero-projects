import { Chip } from "@mui/material";

export default function StatusChip({ status = "default" }) {
  return (
    <Chip
      label={status}
      color={status === "Active" ? "success" : status}
      size="small"
      sx={{ fontWeight: 500 }}
    />
  );
}
