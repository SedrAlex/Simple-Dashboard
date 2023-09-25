import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import ExpandMoreIcons from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.colors);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
     
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                ALexandre the great is a warrior, that does not know the fear, he united Asia under his name, great man.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Your Favourite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                ALexandre the great is a warrior, that does not know the fear, he united Asia under his name, great man.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                ALexandre the great is a warrior, that does not know the fear, he united Asia under his name, great man.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Final Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                ALexandre the great is a warrior, that does not know the fear, he united Asia under his name, great man.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            Why this is the Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
                ALexandre the great is a warrior, that does not know the fear, he united Asia under his name, great man.
            </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcons />}>
          <Typography color={colors.greenAccent[300]} variant="h5">
            What the purpose of this Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat            
            </Typography>
        </AccordionDetails>
      </Accordion>


    </Box>
  );
};

export default FAQ;
