import { Box, Typography, Chip, Avatar, AvatarGroup } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { getStatusConfig } from "./TaskViewUtils";

// ── StatusChip ───────────────────────────────────────────────────────────────
export const StatusChip = ({ status }) => {
  const cfg = getStatusConfig(status);
  return (
    <Chip
      label={status?.toUpperCase() || "TO DO"}
      size="small"
      sx={{
        bgcolor: cfg.bg,
        color: cfg.color,
        fontWeight: 600,
        fontSize: "10px",
        height: 22,
        borderRadius: "6px",
        "& .MuiChip-label": { px: 1 },
      }}
      icon={
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            bgcolor: cfg.dot,
            ml: "6px !important",
            mr: "-2px !important",
          }}
        />
      }
    />
  );
};

// ── AssigneeAvatar ───────────────────────────────────────────────────────────
export const AssigneeAvatar = ({ assignee }) => (
  <Avatar
    sx={{ width: 28, height: 28, bgcolor: "#1a2b4a", fontSize: "11px", fontWeight: 700 }}
  >
    {assignee
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)}
  </Avatar>
);

// ── TeamAvatars ──────────────────────────────────────────────────────────────
export const TeamAvatars = ({ team = [] }) => (
  <AvatarGroup
    max={4}
    sx={{
      "& .MuiAvatar-root": {
        width: 22,
        height: 22,
        fontSize: "9px",
        border: "1.5px solid white",
      },
    }}
  >
    {team.map((member, i) => (
      <Avatar
        key={i}
        sx={{
          bgcolor: ["#5C6BC0", "#26A69A", "#EF5350", "#FFA726"][i % 4],
          fontSize: "9px",
        }}
      >
        {typeof member === "string" ? member : member.initials}
      </Avatar>
    ))}
  </AvatarGroup>
);

// ── DateRange ────────────────────────────────────────────────────────────────
export const DateRange = ({ startDate, endDate }) => (
  <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
    <CalendarTodayIcon sx={{ fontSize: 12, color: "text.secondary" }} />
    <Typography sx={{ fontSize: "11px", color: "text.secondary" }}>
      {startDate || "11.01.2026"} – {endDate || "20.01.2026"}
    </Typography>
  </Box>
);

// ── DateBlock (timeline left column) ────────────────────────────────────────
export const DateBlock = ({ date, isActive, statusDot }) => {
  const d = new Date(date);
  const day = d.getDate();
  const month = d.toLocaleString("en", { month: "short" }).toUpperCase();
  const year = d.getFullYear();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minWidth: 44,
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: 1,
          color: isActive ? "#1a2b4a" : "#bdbdbd",
        }}
      >
        {day}
      </Typography>
      <Typography sx={{ fontSize: "10px", color: "#9e9e9e", lineHeight: 1.2 }}>
        {month}
      </Typography>
      <Typography sx={{ fontSize: "10px", color: "#9e9e9e", lineHeight: 1.2 }}>
        {year}
      </Typography>
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: "50%",
          bgcolor: statusDot,
          border: "2px solid white",
          boxShadow: `0 0 0 2px ${statusDot}33`,
          mt: 0.8,
        }}
      />
    </Box>
  );
};