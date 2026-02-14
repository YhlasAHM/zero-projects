import { Box, Typography, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { getBorderColor, getStatusConfig, DEMO_TASKS } from "./TaskViewUtils";

const WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
};

const CalendarView = ({ tasks = [] }) => {
  const today = new Date();
  const [current, setCurrent] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const displayTasks = tasks.length > 0 ? tasks : DEMO_TASKS;
  const { year, month } = current;

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayIdx = getFirstDayOfMonth(year, month);
  const prevDays = getDaysInMonth(year, month - 1);

  const cells = [];
  for (let i = 0; i < firstDayIdx; i++) cells.push({ day: prevDays - firstDayIdx + 1 + i, currentMonth: false });
  for (let d = 1; d <= daysInMonth; d++) cells.push({ day: d, currentMonth: true });
  while (cells.length < 42) cells.push({ day: cells.length - daysInMonth - firstDayIdx + 1, currentMonth: false });

  const getTasksForDay = (cell) => {
    if (!cell.currentMonth) return [];
    return displayTasks.filter((t) => {
      const d = new Date(t.date);
      return d.getFullYear() === year && d.getMonth() === month && d.getDate() === cell.day;
    });
  };

  const isToday = (cell) =>
    cell.currentMonth && today.getDate() === cell.day &&
    today.getMonth() === month && today.getFullYear() === year;

  const prevMonth = () => setCurrent((c) => ({ year: c.month === 0 ? c.year - 1 : c.year, month: c.month === 0 ? 11 : c.month - 1 }));
  const nextMonth = () => setCurrent((c) => ({ year: c.month === 11 ? c.year + 1 : c.year, month: c.month === 11 ? 0 : c.month + 1 }));

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
        <Typography sx={{ fontWeight: 700, fontSize: "15px" }}>{MONTHS[month]} {year}</Typography>
        <Box>
          <IconButton size="small" onClick={prevMonth}><ChevronLeftIcon sx={{ fontSize: 18 }} /></IconButton>
          <IconButton size="small" onClick={nextMonth}><ChevronRightIcon sx={{ fontSize: 18 }} /></IconButton>
        </Box>
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", mb: 0.5 }}>
        {WEEKDAYS.map((d) => (
          <Typography key={d} sx={{ textAlign: "center", fontSize: "11px", color: "text.secondary", fontWeight: 600, py: 0.5 }}>{d}</Typography>
        ))}
      </Box>

      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: "2px" }}>
        {cells.map((cell, i) => {
          const dayTasks = getTasksForDay(cell);
          const todayCell = isToday(cell);
          return (
            <Box
              key={i}
              sx={{
                minHeight: 64, border: "1px solid",
                borderColor: todayCell ? "#1a2b4a" : "#f0f0f0", borderRadius: 1.5, p: 0.5,
              }}
            >
              <Box
                sx={{
                  width: 22, height: 22, borderRadius: "50%",
                  color: todayCell ? "white" : cell.currentMonth ? "text.primary" : "text.disabled",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "11px", fontWeight: todayCell ? 700 : 400, mb: 0.5,
                }}
              >
                {cell.day}
              </Box>
              {dayTasks.slice(0, 2).map((task) => {
                const bc = getBorderColor(task.status);
                const cfg = getStatusConfig(task.status);
                return (
                  <Box key={task.id} sx={{ borderLeft: `2px solid ${bc}`, borderRadius: "0 4px 4px 0", px: 0.5, mb: 0.3, overflow: "hidden" }}>
                    <Typography sx={{ fontSize: "9px", fontWeight: 600, color: cfg.color, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {task.title}
                    </Typography>
                  </Box>
                );
              })}
              {dayTasks.length > 2 && (
                <Typography sx={{ fontSize: "9px", color: "text.secondary", pl: 0.5 }}>+{dayTasks.length - 2} more</Typography>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CalendarView;