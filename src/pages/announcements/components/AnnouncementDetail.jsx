import {
  Box,
  Typography,
  Divider,
  IconButton,
  CircularProgress,
  Grid,
  Chip,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useQuery } from "@tanstack/react-query";
import { formatTimeYear } from "../../../utils/formatTime";
import { getAnnouncementById } from "../../../api/queries/getters";
import { CalendarIcon } from "@mui/x-date-pickers";
import StatusChip from "../../../components/table/StatusChip";
import GlobalLoader from "../../../components/Loading";

const AnnouncementDetail = ({ onClose, id }) => {
  const {
    data: announcement,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["announcement", id],
    queryFn: () => getAnnouncementById(id),
    enabled: !!id,
  });

  const val = announcement?.data?.data;

  return (
    <Box p={3}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography fontSize={20} fontWeight={700} color="primary">
          Announcement Details
        </Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 3 }} />
      {isLoading ? (
        <GlobalLoader />
      ) : isError ? (
        <Box>Some problems</Box>
      ) : (
        <Box>
          <Typography>Office Renovation Notice</Typography>
          <Box display={"flex"} py={4} gap={4}>
            <Box>
              <CalendarIcon />
              {formatTimeYear(val?.CreatedAt)}
            </Box>
            <StatusChip status={val?.Status} />
          </Box>

          <Typography sx={{ bgcolor: "#ececec", p: 2, borderRadius: 1 }}>
            {val?.Text}
          </Typography>

          <Grid container py={4}>
            <Grid size={6}>
              <Typography>Target Audience</Typography>
              <Typography>{val?.TargetAudience}</Typography>
            </Grid>
            <Grid size={6}>
              <Typography>Read statistic</Typography>
              <Typography>
                {val?.ReadCount} / {val?.SendCount}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default AnnouncementDetail;
