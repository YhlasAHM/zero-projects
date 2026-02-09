import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function HeaderSearch({ value, onChange }) {
  return (
    <TextField
      size="small"
      value={value}
      onChange={onChange}
      //   placeholder={placeholder || ""}
      slotProps={{
        input: {
          startAdornment: <SearchIcon position="start" />,
        },
      }}
      sx={{ width: "100%" }}
    />
  );
}
