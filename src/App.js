import './App.css';
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AnnualReport from "./pages/AnnualReport";
import Overview from "./pages/Overview";
import EducationThePublic from "./pages/EducationThePublic";
import EducationHealtcareProfesional from "./pages/EducationHealtcareProfesional";
import RecognizingLeaders from "./pages/RecognizingLeaders";
import Collaboration from "./pages/Collaboration";
import Supporters from "./pages/Supporters";
import BoardOfDirectors from "./pages/BoardOfDirectors";
import FinancialHighLights from "./pages/FinancialHighLights";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/annualreport" element={<AnnualReport />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/educationthepublic" element={<EducationThePublic />} />
          <Route path="/educationhealtcareprofesional" element={<EducationHealtcareProfesional />} />
          <Route path="/recognizingleaders" element={<RecognizingLeaders />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/supporters" element={<Supporters />} />
          <Route path="/boardofdirectors" element={<BoardOfDirectors />} />
          <Route path="financialhighlights" element={< FinancialHighLights/>} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </SideBar>
    </Router>
  );
}


export default App;
