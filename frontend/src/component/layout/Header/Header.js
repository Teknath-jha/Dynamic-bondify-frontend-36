import * as React from "react";
import './CSS/Header.css'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { BsSearch} from "react-icons/bs";
import { useSelector} from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

const Header = () => {

  // const { cartItems } = useSelector((state) => state.cart);
  const {user} = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className="appbar" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            <h1>Bondify</h1>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none"}
              }}
            >
            
            
            
             <MenuItem key="Search" onClick={handleCloseNavMenu}>
             <NavLink  className={'navitem'} to="/search">
              <BsSearch className="facebook1" />
             </NavLink>
            </MenuItem>
            <MenuItem key="Cart" onClick={handleCloseNavMenu}>
              <NavLink  className={'navitem'} to="/cart">
                <NotificationsActiveIcon />
              </NavLink>
            </MenuItem>
            {!user ?(<MenuItem key="LoginSignup" onClick={handleCloseNavMenu}>
             <NavLink  className={'navitem'} to="/login">Login / SignUp</NavLink>
            </MenuItem>):(<></>)
            }
            {user?(<MenuItem key="add" onClick={handleCloseNavMenu}>
              <NavLink  className={'navitem'} to="/create/product">
                <AddIcon style={{color:'tomato'}}className="facebook" />
              </NavLink>
            </MenuItem>):(<></>)
            }
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 1,
              display: { xs: "flex", md: "none" },
              flexGrow: 2,
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none"
            }}
          >
           <h1>Bondify</h1>
          </Typography>
          <Box sx={{flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            
             <NavLink
              key="Search" 
              to="/search"
              className={"navBarLink"}
            >
              <BsSearch style={{height:'20px'}} className="facebook" />
            </NavLink>
            <NavLink
              key="Cart" 
              to="/cart"
              className={"navBarLink"}
            >
             <NotificationsActiveIcon />
            </NavLink>
            { !user ? (
            <NavLink
              key="LoginsignUp"
              to="/login"
              className={"navBarLink"}
            >
              Login / Signup
            </NavLink>):(<></>)
            }
            { user ? (
            <></>):(<></>)
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
