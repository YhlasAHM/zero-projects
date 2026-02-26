import {
  FormControl,
  Select,
  IconButton,
  InputAdornment,
  InputLabel
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";

export default function DebounceSelect({
  children,
  value,
  onChange,
  onClear,
  placeholder,
  ...props
}) {
  const label = placeholder || "Department";
  const hasValue = value !== "" && value !== null && value !== undefined;
  return (
    <FormControl size="small" sx={{ width: "100%" }} variant="outlined">
      <InputLabel id="select-label">
        {label}
      </InputLabel>

      <Select
        labelId="select-label"
        value={value}
        onChange={onChange}
        label={label}
        endAdornment={
          hasValue ? (
            <InputAdornment position="end" sx={{ mr: 2 }}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear?.();
                }}
              >
                <ClearIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          ) : null
        }
        {...props}
      >
        {children}
      </Select>
    </FormControl>
  );
}