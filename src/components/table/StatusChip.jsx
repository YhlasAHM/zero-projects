import { Chip } from "@mui/material";

export default function StatusChip({ status = "default" }) {
  const statusStyles = {
    present: { bg: "#e6f4ea", text: "#237b4b" },
    absent: { bg: "#fde8e8", text: "#b02a37" },  
    late: { bg: "#fff8e6", text: "#a87d00" },    
  };

  const { bg, text } = statusStyles[status?.toLowerCase()] || {
    bg: "#e2e3e5",
    text: "#6c757d",
  };

  return (
    <Chip
      label={status}
      size="small"
      sx={{
        fontWeight: 500,
        backgroundColor: bg,
        color: text,
        textTransform: "capitalize",
      }}
    />
  );
}