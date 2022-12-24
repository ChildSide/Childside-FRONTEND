import "./navbar.scss";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LogoutIcon from '@mui/icons-material/Logout';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PostAddIcon from '@mui/icons-material/PostAdd';
import InfoIcon from '@mui/icons-material/Info';
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";
import axios from "axios";
import SideBar from "../sidebar/Sidebar";

const Navbar = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/api/auth/logout")
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  }
  console.log(currentUser);
  return (
    <div className="navbar">
      <div className="left">
      <SideBar style={{ color: 'inherit', textDecoration: 'inherit'}}/>
        <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <span>ChildSide</span>
        </Link>
        {darkMode ? (
          <WbSunnyOutlinedIcon onClick={toggle} data-toggle="tooltip" data-placement="bottom" title="Click for Dark Mode" />
        ) : (
          <DarkModeOutlinedIcon onClick={toggle} data-toggle="tooltip" data-placement="bottom" title="Click for Light Mode" />
        )}
        <Link to="/donate" style={{ color: 'inherit', textDecoration: 'inherit'}} data-toggle="tooltip" data-placement="bottom" title="Click to Donate">
          <VolunteerActivismIcon style={{ textDecoration: 'none' }} />
        </Link>
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="right">
        <Link to="/complaint" style={{ color: 'inherit', textDecoration: 'inherit'}} data-toggle="tooltip" data-placement="bottom" title="File Complaint">
          < PostAddIcon />
        </Link>
        <Link to="/community" style={{ color: 'inherit', textDecoration: 'inherit'}} data-toggle="tooltip" data-placement="bottom" title="Commnunity">
        <Diversity1Icon />
        </Link>
        <a href="https://pencil.gov.in/Users/nclp_district" data-toggle="tooltip" data-placement="bottom" title="Commnunity" target=' ' style={{ color: 'inherit', textDecoration: 'inherit'}}>
          <InfoIcon  />
        </a>
        <NotificationsOutlinedIcon />
        <div className="user">
          <img
            src={currentUser.profilePic}
            alt=""
          />
          {/* <Link to={`/profile/${currentUser.userId}`}>
          </Link> */}
            <span>{currentUser.name}</span>
          <a onClick={handleLogout}>
            <LogoutIcon />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;