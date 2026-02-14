import { Box, Typography } from "@mui/material";
import { getBorderColor, getStatusConfig, DEMO_TASKS } from "./TaskViewUtils";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const getWeekDates = () => {
  const today = new Date();
  const day = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - (day === 0 ? 6 : day - 1));
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
};

const isSameDay = (d1, d2) =>
  d1.getFullYear() === d2.getFullYear() &&
  d1.getMonth() === d2.getMonth() &&
  d1.getDate() === d2.getDate();

const WeekView = ({ tasks = [] }) => {
  const displayTasks = tasks.length > 0 ? tasks : DEMO_TASKS;
  const weekDates = getWeekDates();
  const today = new Date();

  return (
    <Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1, mb: 1 }}>
        {weekDates.map((date, i) => {
          const isToday = isSameDay(date, today);
          return (
            <Box key={i} sx={{ textAlign: "center" }}>
              <Typography sx={{ fontSize: "11px",  fontWeight: 500 }}>
                {DAYS[i]}
              </Typography>
              <Box
                sx={{
                  width: 28, height: 28, borderRadius: "50%",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  mx: "auto", mt: 0.3, fontSize: "13px", fontWeight: isToday ? 700 : 500,
                }}
              >
                {date.getDate()}
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1, minHeight: 300 }}>
        {weekDates.map((date, i) => {
          const dayTasks = displayTasks.filter((t) => isSameDay(new Date(t.date), date));
          const isToday = isSameDay(date, today);
          return (
            <Box
              key={i}
              sx={{
                borderRadius: 2, border: "1px solid",
                borderColor: isToday ? "#1a2b4a33" : "#f0f0f0",
                p: 0.8, minHeight: 200,
              }}
            >
              {dayTasks.map((task) => {
                const cfg = getStatusConfig(task.status);
                const bc = getBorderColor(task.status);
                return (
                  <Box
                    key={task.id}
                    sx={{ borderLeft: `3px solid ${bc}`, borderRadius: "0 6px 6px 0", p: 0.8, mb: 0.8 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "10px", fontWeight: 600, color: cfg.color, lineHeight: 1.3,
                        display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                      }}
                    >
                      {task.title}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default WeekView;