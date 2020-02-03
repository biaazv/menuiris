import React from "react";
/* import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./Main/Sidebar"; */
import Cabecalho from "./Main/Cabecalho"
import Routes from "./Main/Routes"
import Rodape from "./Main/Rodape.js";
import { BrowserRouter } from "react-router-dom";




export default function App() {
  return (
    <BrowserRouter>
      
     <Cabecalho />
     <Routes />
     <Rodape />

    </BrowserRouter>
  );
}

