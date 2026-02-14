import { Box, Typography, Paper } from "@mui/material";
import { getStatusConfig, getBorderColor, DEMO_TASKS } from "./TaskViewUtils";
import { StatusChip, AssigneeAvatar, TeamAvatars, DateRange } from "./TaskViewComponent";

const COLUMNS = ["To Do", "In Progress", "Complete"];

const BoardCard = ({ task }) => {
  const borderColor = getBorderColor(task.status);
  return (
    <Paper
      sx={{
        border: "1px solid #f0f0f0",
        borderLeft: `3px solid ${borderColor}`,
        borderRadius: "10px",
        p: 1.5,
        mb: 1.5,
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
        "&:hover": { boxShadow: "0 3px 10px rgba(0,0,0,0.1)" },
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <StatusChip status={task.status} />
        <AssigneeAvatar assignee={task.assignee} />
      </Box>
      <Typography sx={{ fontWeight: 600, fontSize: "13px", mb: 0.5 }}>{task.title}</Typography>
      <Typography
        sx={{
          fontSize: "11px", color: "text.secondary", mb: 1.5,
          display: "-webkit-box", WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}
      >
        {task.description}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <DateRange startDate={task.startDate} endDate={task.endDate} />
        <TeamAvatars team={task.team} />  {/* removed trailing space */}
      </Box>
    </Paper>
  );
};

const BoardView = ({ tasks = [] }) => {
  const displayTasks = tasks.length > 0 ? tasks : DEMO_TASKS;
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1 }}>
      {COLUMNS.map((col) => {
        const cfg = getStatusConfig(col);
        const colTasks = displayTasks.filter(
          (t) => t.status?.toLowerCase() === col.toLowerCase()
        );
        return (
          <Box key={col} sx={{ minWidth: 260, flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5, px: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: cfg.dot }} />
              <Typography sx={{ fontWeight: 700, fontSize: "13px" }}>{col.toUpperCase()}</Typography>
              <Box
                sx={{
                  ml: "auto",
                  fontSize: "11px", fontWeight: 600, px: 1, py: 0.2, borderRadius: 1,
                }}
              >
                {colTasks.length}
              </Box>
            </Box>
            <Paper variant="outlined" sx={{ borderRadius: 2, p: 1.5, minHeight: 120 }}>
              {colTasks.length === 0 ? (
                <Typography sx={{ fontSize: "12px", textAlign: "center", mt: 2 }}>
                  No tasks
                </Typography>
              ) : (
                colTasks.map((task) => <BoardCard key={task.id} task={task} />)
              )}
            </Paper>
          </Box>
        );
      })}
    </Box>
  );
};

export default BoardView;