import React from 'react'
import Header from "../../components/Header"
import { Box } from '@mui/material'
import PieChart from '../../components/PieChart'

const Pie = () => {
  return (
 <Box m="20px">
    <Header title="Pie Chart" subtitle="Simple Pie chart" />
    <Box height="75vh">
        <PieChart />
    </Box>
 </Box>

    )
}

export default Pie