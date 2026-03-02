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
  label, // placeholder yerine label kullanmak MUI standartlarına daha uygun
  ...props
}) {
  const hasValue = value !== "" && value !== null && value !== undefined;
  const labelId = `select-label-${label?.replace(/\s/g, "")}`;

  return (
    <FormControl size="small" sx={{ width: "100%" }} variant="outlined">
      {/* Label'ın border üzerinde boşluk açması için InputLabel şarttır */}
      <InputLabel id={labelId} shrink={hasValue || props.displayEmpty}>
        {label}
      </InputLabel>

      <Select
        labelId={labelId}
        value={value}
        onChange={onChange}
        label={label} // Border'daki boşluğu (notch) bu sağlar
        endAdornment={
          hasValue ? (
            <InputAdornment position="end" sx={{ mr: 2, position: 'absolute', right: '20px' }}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  onClear?.(); // Temizleme fonksiyonunu tetikler
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