import { Box, Container } from "@mui/material";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/NavBar";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Navbar />
        <Container sx={{ mt: 4 }}>{children}</Container>
      </Box>
    </Box>
  );
}
