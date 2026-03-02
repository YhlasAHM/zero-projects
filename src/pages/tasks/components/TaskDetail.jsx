import { Box, Typography, InputBase } from "@mui/material";
import ListIcon from "@mui/icons-material/FormatListBulleted";
import BoardIcon from "@mui/icons-material/ViewKanban";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import ListView from "./ListView";
import BoardView from "./BoardView";
import CalendarView from "./CalendarView";


const VIEWS = [
  { label: "List", icon: <ListIcon sx={{ fontSize: 15 }} />, component: ListView },
  { label: "Board", icon: <BoardIcon sx={{ fontSize: 15 }} />, component: BoardView },
  // { label: "Week", icon: <WeekIcon sx={{ fontSize: 15 }} />, component: WeekView },
  { label: "Calendar", icon: <CalendarTodayIcon sx={{ fontSize: 15 }} />, component: CalendarView },
];

const TaskDetailView = ({ tasks = [] }) => {
  const [activeTab, setActiveTab] = useState(0);
  const ActiveView = VIEWS[activeTab].component;

  return (
    <Box sx={{ bgcolor: "background.paper", borderRadius: 2, overflow: "hidden" }}>
      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
          py: 1,
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {/* View tabs */}
        <Box sx={{ display: "flex", gap: 0.5 }}>
          {VIEWS.map((v, i) => {
            const isActive = activeTab === i;
            return (
              <Box
                key={v.label}
                onClick={() => setActiveTab(i)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  px: 1.5,
                  py: 0.6,
                  borderRadius: 1.5,
                  cursor: "pointer",
                  border: isActive ? "1.5px solid #1a2b4a" : "1px solid transparent",
                  color: isActive ? "#1a2b4a" : "text.secondary",
                  "&:hover": { bgcolor: "grey.100" },
                  transition: "all 0.15s",
                }}
              >
                {v.icon}
                <Typography sx={{ fontSize: "13px", fontWeight: isActive ? 600 : 400 }}>
                  {v.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Filter + Search */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex", alignItems: "center", gap: 0.5,
              px: 1.5, py: 0.5, border: "1px solid #e0e0e0", borderRadius: 1.5,
              cursor: "pointer", "&:hover": { bgcolor: "grey.50" },
            }}
          >
            <FilterListIcon sx={{ fontSize: 15, color: "text.secondary" }} />
            <Typography sx={{ fontSize: "13px", color: "text.secondary" }}>Filter</Typography>
          </Box>

          <Box
            sx={{
              display: "flex", alignItems: "center", px: 1.5, py: 0.4,
              border: "1px solid #e0e0e0", borderRadius: 1.5, width: 140,
            }}
          >
            <SearchIcon sx={{ fontSize: 15, color: "text.secondary", mr: 0.5 }} />
            <InputBase
              placeholder="Search..."
              sx={{ fontSize: "13px", flex: 1 }}
              inputProps={{ style: { padding: 0 } }}
            />
          </Box>
        </Box>
      </Box>

      {/* Active view */}
      <Box sx={{ p: 2.5, maxHeight: 560, overflowY: "auto" }}>
        <ActiveView tasks={tasks} />
      </Box>
    </Box>
  );
};

export default TaskDetailView;