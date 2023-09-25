import React from "react";
import Header from "../../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme } from "@mui/material";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { mockDataTeam } from "../../data/mockData";
import { tokens } from "../../theme";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.colors);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
        field: "age",
        headerName: "Age",
        type:"number",
        headerAlign:"left",
        align:"left"
      },
     {
        field: "phone",
        headerName: "Phone Number",
        flex: 1,
     },
     {
        field: "email",
        headerName: "Email",
        flex: 1,
     },
     {
        field: "acecss",
        headerName: "Access Level",
        flex: 1,
        renderCell: ({row: {access}}) =>{
        return(
            <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
                access === "admin"
                ? colors.greenAccent[600]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
            >
            { access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            { access === "manager" && <SecurityOutlinedIcon />}
            { access === "user" && <LockOpenOutlinedIcon />}
        <Typography color={colors.grey[100]} sx={{ ml :"5px"}}>
           {access}
        </Typography>
            </Box>
        )
        }
     },
       
  ];

  return (
    <Box m = "20px">
      <Header title="TEAM" subtitle="Managing the team member" />
      <Box 
       m = "40px 0 0 0"
       height = "75vh"
       sx={{
        "& .MuiDataGrid-root":{
            border:"none",
        },
        "& .MuiDataGrid-cell":{
            borderBottom:"none",
        },
        "& .name-column--cell":{
            border:colors.greenAccent[300]
        },
        "& .MuiDataGrid-columnHeaders":{
            backgroundColor:colors.blueAccent[300],
            borderBottom:"none"
        },
        "& .MuiDataGrid-virtualScroller":{
          backgroundColor:colors.primary[600],
        },
        "& .MuiDataGrid-footerContainer":{
          borderTop:"none",
          backgroundColor:colors.blueAccent[300],
        },
       }}
      >
      <DataGrid rows={mockDataTeam} columns={columns} />
    </Box>
    </Box>

  );
};

export default Team;
