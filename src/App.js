import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import TopBar from "./scenes/global/Topbar";
import SideBar from "./scenes/global/SideBar";
import { Routes,Route } from "react-router-dom"
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/Team/Team";
import Contacts from "./scenes/Contacts/Contacts";
import Invoices from "./scenes/Invoices/Invoices";
import Form from "./scenes/Form/Form";
import Calendar from "./scenes/Calendar/Calendar";
import FAQ from "./scenes/FAQ/FAQ";
import Bar from "./scenes/Bar/Bar";
import Pie from "./scenes/Pie/Pie";
import Line from "./scenes/Line/Line";
import Geography from "./scenes/Geography/Geography";



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <SideBar />
             <main className="content">
                <TopBar /> 
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/calendar" element={<Calendar />} />
            
                </Routes>
             </main>
           </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
