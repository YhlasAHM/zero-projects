import { useState } from "react";
import { Box, Button, Grid, Typography, Avatar, MenuItem, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomForm } from "../../../components/form/CustomForm";
import CustomFormTextField from '../../../components/textField/CustomTextField';
import { useValidSchema } from "../../../hooks/useValidShema";
import { updateAttendance } from "../../../api/queries/put";

const EditAttendance = ({ data, onClose }) => {
  const queryClient = useQueryClient();
  const { AttendanceValid } = useValidSchema();

  const [avatar] = useState(data.avatar);

  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      attendance_id: data.id,
      check_in: data.checkIn,
      check_out: data.checkOut,
      status: data.status,
      reason: data.reason || "",
    },
    resolver: yupResolver(AttendanceValid),
    mode: 'onSubmit',
  });

  // const getEmployeeImage = async (attendance_id) => {
  //   try {
  //     const response = await axios.get(`http://194.156.117.223:8004/yerinde/storage-service/attendances/${attendance_id}`);
  //     // response.data.image veya response.data.imageUrl API response'una göre ayarla
  //     return response.data.image || response.data.imageUrl || data.avatar;
  //   } catch (err) {
  //     console.error("Employee image fetch error:", err);
  //     return data.avatar; // hata olursa default avatar kullan
  //   }
  // };

  // useEffect(() => {
  //   getEmployeeImage(data.id).then(setAvatar);
  // }, [data.id]);


  const mutation = useMutation({
    mutationFn: updateAttendance,
    onSuccess: () => {
      queryClient.invalidateQueries(["attendances"]);
      onClose();
    },
  });

  const submitHandler = async (formData) => {
    try {
      await mutation.mutateAsync({
        attendance_id: formData.attendance_id,
        check_in: formData.check_in,
        check_out: formData.check_out,
        status: formData.status,
        reason: formData.reason,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box p={3}>
      <CustomForm handleSubmit={handleSubmit(submitHandler)}>
        {/* Header */}
        <Box sx={{ px: 0, pb: 2, borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>Edit Attendance Record</Typography>
          <IconButton onClick={onClose}><CloseIcon /></IconButton>
        </Box>

        {/* Employee Info */}
        <Box display="flex" alignItems="center" sx={{ backgroundColor: "#dee1ec", borderRadius: 1, padding: 2, my: 2 }} gap={2}>
          <Avatar src={avatar} />
          <Box>
            <Typography fontWeight={600}>{data.name}</Typography>
            <Typography fontSize={13} color="text.secondary">{data.position}</Typography>
          </Box>
        </Box>

        {/* Form Fields */}
        <Grid container spacing={2}>
          <Grid size={6}>
            <CustomFormTextField
              control={control}
              errors={errors}
              name='check_in'
              label='Check In time'
              className="w-full"
            />
          </Grid>
          <Grid size={6}>
            <CustomFormTextField
              control={control}
              errors={errors}
              name='check_out'
              label='Check Out time'
              className="w-full"
            />
          </Grid>
          <Grid size={12}>
            <Typography fontSize={13} mb={0.5}>Status</Typography>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <TextField select fullWidth size="small" {...field}>
                  <MenuItem value="present">Present</MenuItem>
                  <MenuItem value="absent">Absent</MenuItem>
                  <MenuItem value="late">Late</MenuItem>
                </TextField>
              )}
            />
          </Grid>
          <Grid size={12}>
            <Typography fontSize={13} mb={0.5}>Reason</Typography>
            <CustomFormTextField
              control={control}
              errors={errors}
              name='reason'
              rowNum={3}
              className="w-full"
            />
          </Grid>
        </Grid>

        {/* Buttons */}
        <Box display="flex" justifyContent="flex-end" gap={1.5} mt={3}>
          <Button variant="outlined" onClick={onClose}>Cancel</Button>
          <Button variant="contained" type="submit" disabled={mutation.isLoading}>
            {mutation.isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </Box>
      </CustomForm>
    </Box>
  );
};

export default EditAttendance;