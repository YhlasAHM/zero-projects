import { useState } from "react";
import {
  Box,
  Divider,
  Grid,
} from "@mui/material";

import { PageTitle } from "../../components/pageTitle/pageTitle";
import { CustomDivider } from "../../components/customDivider";

import HeaderButton from "../../components/buttons/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import HeaderAppBar from "../../components/appBar/AppBar";
import HeaderSearch from "../../components/textField/HeaderSearch";
import DebounceSelect from "../../components/select/DebounceSelect";

import { Wrapper } from "../../components/wrapper";
import { DocumentCard } from "./components/documentCard";
import GlobalModal from "../../components/modal/GlobalModal";
import { useOpenCloseDrawer } from "../../hooks/useOpenCloseDrawer";
import { useInfiniteGet } from "../../hooks/useInfiniteList";
import { getAllDocuments } from "../../api/queries/getters";
import UploadContent from "./components/UploadContent";

const DocumentsPage = () => {
  const { open, openSet, closeSet } = useOpenCloseDrawer();
  const [filters, setFilter] = useState({
    search: "",
  });

  const { data } = useInfiniteGet({
    key: "documents",
    apiFn: getAllDocuments,
    limit: 30,
    filters,
    dataKey: "documents",
  });

  console.log(data, "data");

  const documents = [
    {
      id: 1,
      title: "Employee Handbook 2024",
      size: "2.4 MB",
      description:
        "Complete guide to company policies, procedures and employee benefits.",
      date: "2024-01-10",
      author: "Amanda White",
      type: "pdf",
    },
    {
      id: 2,
      title: "Code of Conduct",
      size: "1.8 MB",
      description:
        "Professional standards and ethical guidelines for all employees.",
      date: "2024-01-05",
      author: "Amanda White",
      type: "doc",
    },
    {
      id: 3,
      title: "IT Security Policy",
      size: "1.2 MB",
      description:
        "Guidelines for data protection, password management and cybersecurity.",
      date: "2024-01-15",
      author: "David Wilson",
      type: "pdf",
    },
  ];

  return (
    <>
      <GlobalModal open={open} onClose={closeSet} maxWidth="sm" fullWidth>
        <UploadContent closeSet={closeSet} />
      </GlobalModal>

      <Box className="Documents">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <PageTitle
            title={"Company Documents"}
            subTitle={"Manage and share company documents"}
          />
          <HeaderButton
            icon={<FileUploadIcon />}
            className="whitespace-nowrap h-10"
            onClick={openSet}
          >
            Upload Document
          </HeaderButton>
        </Box>

        <CustomDivider sx={{ mb: 5 }} />

        <HeaderAppBar>
          <form className="flex gap-3 w-1/2">
            <HeaderSearch onSearch={setFilter} />
            <DebounceSelect />
          </form>
        </HeaderAppBar>

        <Divider />

        <Wrapper
          sx={{
            p: 3,
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <Grid container spacing={3}>
            {documents.map((doc) => (
              <Grid item xs={12} sm={6} md={4} key={doc.id}>
                <DocumentCard
                  title={doc.title}
                  size={doc.size}
                  description={doc.description}
                  date={doc.date}
                  author={doc.author}
                  type={doc.type}
                  onDownload={() => console.log("Download", doc.id)}
                  onEdit={() => console.log("Edit", doc.id)}
                  onDelete={() => console.log("Delete", doc.id)}
                />
              </Grid>
            ))}
          </Grid>
        </Wrapper>
      </Box>
    </>
  );
};

export default DocumentsPage;
