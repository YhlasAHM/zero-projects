import { useState } from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { PageTitle } from "../../components/pageTitle/pageTitle";
import HeaderButton from "../../components/buttons/Button";
import HeaderAppBar from "../../components/appBar/AppBar";
import AnnouncementContent from "./components/AnnouncementContent";
import GlobalModal from "../../components/modal/GlobalModal";
import StatusChip from "../../components/table/StatusChip";
import GlobalTable from "../../components/table/Table";
import TableActions from "../../components/table/TableActions";

import { useInfiniteGet } from "../../hooks/useInfiniteList";
import { getAllAnnouncement } from "../../api/queries/getters";
import { formatTimeYear } from "../../utils/formatTime";
import AnnouncementDetail from "./components/AnnouncementDetail";

const AnnouncementsPage = () => {
  const [filters, setFilters] = useState({
    status: "",
  });
  const [tab, setTab] = useState(0);
  const [isModal, setModal] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [selectedId, setSelectedDetail] = useState(null);
  const [isDetailModal, setIsDetailModal] = useState(false);
  const announcementsQuery = useInfiniteGet({
    key: ["announcements"],
    apiFn: getAllAnnouncement,
    filters,
  });

  const handleTabChange = (event, newValue) => {
    setTab(newValue);

    let newStatus = "";
    if (newValue === 1) newStatus = "publish";
    if (newValue === 2) newStatus = "draft";
    setFilters((prev) => ({ ...prev, status: newStatus }));
  };

  const handleOpenModal = (data = null) => {
    setSelectedAnnouncement(data);
    setModal(true);
  };

  const handleCloseModal = () => {
    setModal(false);
    setSelectedAnnouncement(null);
    announcementsQuery.refetch();
  };

  const columns = [
    {
      key: "Text",
      label: "Title",
      render: (row) => (
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {row.Text || "No Title"}
        </Typography>
      ),
    },
    {
      key: "CreatedAt",
      label: "Date",
      render: (row) => <Box>{formatTimeYear(row.CreatedAt)}</Box>,
    },
    {
      key: "TargetAudience",
      label: "Target Audience",
      render: (row) => row.TargetAudience || "General",
    },
    {
      key: "Status",
      label: "Status",
      render: (row) => <StatusChip status={row.Status} />,
    },
    {
      key: "ReadCount",
      label: "Read stats",
      render: (row) => (
        <Box sx={{ fontSize: "0.875rem", color: "text.secondary" }}>
          {row?.ReadCount || 0} / {row?.SendCount || 0}
        </Box>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <TableActions
          onEdit={() => handleOpenModal(row)}
          onView={() => {
            setSelectedDetail(row);
            setIsDetailModal(true);
          }}
          onDelete={() => {
            console.log("Delete ID:", row.ID);
          }}
        />
      ),
    },
  ];

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
        <PageTitle
          title="Announcements"
          subTitle="Manage and track company-wide announcements"
        />
        <HeaderButton
          onClick={() => handleOpenModal(null)}
          width={220}
          icon={<AddIcon />}
        >
          New Announcement
        </HeaderButton>
      </Box>

      <HeaderAppBar>
        <Tabs value={tab} onChange={handleTabChange} sx={{ px: 2 }}>
          <Tab label="All Announcements" />
          <Tab label="Published" />
          <Tab label="Drafts" />
        </Tabs>
      </HeaderAppBar>

      <GlobalTable
        columns={columns}
        rows={announcementsQuery.data}
        onScroll={announcementsQuery.handleScroll}
        isLoading={announcementsQuery.isLoading}
        isFetchingNextPage={announcementsQuery.isFetchingNextPage}
        isError={announcementsQuery.isError}
        emptyMessage="No announcements found for this category."
      />

      <GlobalModal
        open={isModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
      >
        <AnnouncementContent
          data={selectedAnnouncement}
          onClose={handleCloseModal}
        />
      </GlobalModal>

      <GlobalModal
        open={isDetailModal}
        onClose={() => setIsDetailModal(false)}
        maxWidth="md"
        fullWidth
      >
        <AnnouncementDetail
          id={selectedId?.ID}
          onClose={() => setIsDetailModal(false)}
        />
      </GlobalModal>
    </Box>
  );
};

export default AnnouncementsPage;
