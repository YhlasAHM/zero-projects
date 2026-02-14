import { Box, Typography } from "@mui/material";
import { getStatusConfig, getBorderColor, DEMO_TASKS } from "./TaskViewUtils";
import { StatusChip, AssigneeAvatar, TeamAvatars, DateRange, DateBlock } from "./TaskViewComponent";

const TaskRow = ({ task }) => {
  const cfg = getStatusConfig(task.status);
  const isActive = task.status?.toUpperCase() !== "TO DO";
  const borderColor = getBorderColor(task.status);

  return (
    <Box sx={{ display: "flex", alignItems: "stretch", gap: 2, mb: 2 }}>
      <DateBlock date={task.date || "2026-01-11"} isActive={isActive} statusDot={cfg.dot} />
      <Box
        sx={{
          flex: 1,
          border: "1px solid #f0f0f0",
          borderLeft: `13px solid ${borderColor}`,
          borderRadius: "10px",
          p: 2,
          bgcolor: "background.paper",
          boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
          <StatusChip status={task.status} />
          <AssigneeAvatar assignee={task.assignee} />
        </Box>
        <Typography sx={{ fontWeight: 600, fontSize: "14px", mb: 0.5 }}>
          {task.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "12px",
            color: "text.secondary",
            mb: 1.5,
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {task.description}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <DateRange startDate={task.startDate} endDate={task.endDate} />
          <TeamAvatars team={task.team} />
        </Box>
      </Box>
    </Box>
  );
};

const ListView = ({ tasks = [] }) => {
  const displayTasks = tasks.length > 0 ? tasks : DEMO_TASKS;
  return (
    <Box>
      {displayTasks.map((task) => (
        <TaskRow key={task.id} task={task} />
      ))}
    </Box>
  );
};

export default ListView;