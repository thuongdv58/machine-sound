import { Box, IconButton, Tab, Tabs, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import { Link, matchPath, useLocation } from "react-router-dom";

function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }

  return null;
}
const Topbar = () => {

  const routeMatch = useRouteMatch(['/', '/alerts']);
  const currentTab = routeMatch?.pattern?.path;

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    // setValue(newValue);
  };
  return (
    <Box display="flex" justifyContent="space-between" sx={{ borderBottom: '1px solid #d4d4d4' }}>
      <Box display="flex">
        <a href="/" className="logo">
          <img src="GroundUp.png" alt="logo" className="" />
        </a>
        <Tabs onChange={handleChange} aria-label="tab" value={currentTab}>
          <Tab label="Dashboard" value="/" to="/"  component={Link}/>
          <Tab label="Alerts" value="/alerts" to="/alerts"  component={Link} />
        </Tabs>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <Box display="flex" sx={{ height: '50%', my: 'auto', px: '15px' , borderLeft: '2px solid #d4d4d4' }}>
          <Typography variant="caption">    Welcome Admin!</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
