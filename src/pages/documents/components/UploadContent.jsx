import CloseIcon from "@mui/icons-material/Close";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { useRef } from "react";
import { documentAdd } from "../../../api/queries/post";
import { useAppMutation } from "../../../hooks/useMutation";

const UploadContent = ({ closeSet }) => {
  const { control, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      description: "",
      file: "",
      file_type: "",
      title: "",
    },
    mode: "onSubmit",
  });

  const fileInputRef = useRef(null);
  const selectedFile = watch("file");

  const mutation = useAppMutation({
    mutationFn: documentAdd,
    queryKey: ["documents"],
    onSuccess: () => {
      closeSet();
    },
  });

  const handleFileChange = (file) => {
    if (!file) return;

    const allowedTypes = [
      "image/jpeg", // jpg, jpeg
      "image/png",
      "text/plain", // txt
      "application/pdf",
      "application/msword", // doc
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document", // docx
      "application/vnd.ms-excel", // xls
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", // xlsx (isteğe bağlı)
    ];

    const allowedExtensions = [
      "jpg",
      "jpeg",
      "png",
      "txt",
      "pdf",
      "xls",
      "doc",
      "docx",
    ];

    const fileExtension = file.name.split(".").pop().toLowerCase();

    if (
      !allowedTypes.includes(file.type) &&
      !allowedExtensions.includes(fileExtension)
    ) {
      alert("Unsupported file format");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert("Max file size is 10MB");
      return;
    }

    setValue("file", file);
    setValue("file_type", file.type);
  };

  const submitHandler = async (data) => {
    console.log(data, "data");
    mutation.mutate(data);
  };

  return (
    <Box p={3}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6">Upload Document</Typography>
        <IconButton onClick={closeSet}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <form onSubmit={handleSubmit(submitHandler)}>
        {/* TITLE */}
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Box mb={2}>
              <Typography mb={1}>Document Title</Typography>
              <input
                {...field}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                }}
              />
            </Box>
          )}
        />

        {/* DESCRIPTION */}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Box mb={2}>
              <Typography mb={1}>Description</Typography>
              <textarea
                {...field}
                rows={3}
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: 6,
                  border: "1px solid #ccc",
                }}
              />
            </Box>
          )}
        />

        {/* FILE UPLOAD AREA */}
        <Box
          onClick={() => fileInputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => {
            e.preventDefault();
            handleFileChange(e.dataTransfer.files[0]);
          }}
          sx={{
            border: "2px dashed #d0d5dd",
            borderRadius: 3,
            p: 4,
            textAlign: "center",
            cursor: "pointer",
            backgroundColor: "#fafafa",
            mb: 3,
            "&:hover": {
              backgroundColor: "#f0f4f8",
            },
          }}
        >
          <CloudUploadIcon sx={{ fontSize: 40, color: "#98a2b3" }} />
          <Typography mt={1} fontWeight={500}>
            {selectedFile
              ? selectedFile.name
              : "Click to upload or drag and drop"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            JPG, JPEG, PNG, TXT, PDF, XLS, DOC, DOCX (max. 10MB)
          </Typography>

          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={(e) => handleFileChange(e.target.files[0])}
          />
        </Box>

        {/* BUTTONS */}
        <Box display="flex" justifyContent="end" gap={2}>
          <Button variant="outlined" onClick={closeSet}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={mutation.isPending}
          >
            Upload Document
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default UploadContent;
