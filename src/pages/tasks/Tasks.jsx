import { Box, IconButton, Tooltip } from "@mui/material";
import { PageTitle } from "../../components/pageTitle/pageTitle";
import HeaderButton from "../../components/buttons/Button";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Header from "./components/Header";
import TaskTable from "./components/TaskTable";
import CreateTask from "./components/CreateTaskContent";
import TaskDetailView from "./components/TaskDetail";
import GlobalModal from "../../components/modal/GlobalModal";
import { useState } from "react";

const TasksPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [eyeClick, setEye] = useState(true);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          {!eyeClick && (
            <Tooltip title="Back to tasks">
              <IconButton
                size="small"
                onClick={() => setEye(true)}
                sx={{ mr: 0.5 }}
              >
                <ArrowBackIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          )}
          <PageTitle title="Task" subTitle="Manage and track employee tasks" />
        </Box>

        <HeaderButton
          width={160}
          onClick={() => setOpenModal(true)}
          icon={<AddIcon />}
        >
          Create task
        </HeaderButton>
      </Box>

      {eyeClick ? (
        <>
          <Header />
          <TaskTable onOpen={() => setEye(false)} />
        </>
      ) : (
        <TaskDetailView />
      )}

      <GlobalModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        maxWidth="sm"
        fullWidth
      >
        <CreateTask onClose={() => setOpenModal(false)} />
      </GlobalModal>
    </Box>
  );
};

export default TasksPage;