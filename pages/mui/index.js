import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  IconButton,
  ImageList,
  ImageListItem,
  Link,
  MenuItem,
  Menu,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Breadcrumbs,
  Drawer,
  SpeedDial,
  SpeedDialAction,
  Icon,
  SpeedDialIcon,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import ShareIcon from "@mui/icons-material/Share";
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
export default function Demo() {
  const [con, setCon] = useState([]);
  const [values, setvalues] = useState([]);
  const [checkt, setCheckt] = useState([false]);
  const [skill, setSkill] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [anchorE1, setAnchorE1] = useState(null);
  const [menuopen, setMenuopen] = useState(false);
  const [navvalue, setNavvalue] = useState();
  const open = Boolean(anchorE1);
  console.log(values);
  console.log(checkt);

  const handleAppBarClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };

  const handleChanges = (event) => {
    setvalues(event.target.value);
  };

  const handleChange = (event) => {
    setCon(event.target.value);
  };
  const handleChangess = (event) => {
    setCheckt(event.target.checked);
  };

  const handleskillChange = (event) => {
    const index = skill.indexOf(event.target.value);
    if (index === -1) {
      setSkill([...skill, event.target.value]);
    } else {
      setSkill(skill.filter((skill) => skill !== event.target.value));
    }
  };
  const handleAccChange = (isExpanded, panal) => {
    setExpanded(isExpanded ? panal : false);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: "1" }}>
            MyApp
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Login</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">ContactUS</Button>
            <Button color="inherit">Profile</Button>
            <Button
              color="inherit"
              id="resources-button"
              onClick={handleAppBarClick}
              aria-controls={open ? "resources-menu" : undefined}
              aria-haspopup={true}
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              {" "}
              Resources
            </Button>
          </Stack>
          <Menu
            id="resources-menu"
            anchorE1={anchorE1}
            open={open}
            MenuListProps={{
              "aria-labelledby": "resourse-button",
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>BLog</MenuItem>
            <MenuItem onClick={handleClose}>PodCast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <BottomNavigation
        sx={{ bottom: 0, width: "100%", position: "absolute" }}
        value={navvalue}
        onChange={(event, newvalue) => {
          setNavvalue(newvalue);
        }}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favourite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>

      <>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          onClick={() => setMenuopen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="left"
          open={menuopen}
          onClose={() => setMenuopen(false)}
        >
          <Box p={2} width={250} textAlign={"center"} role={"presentation"}>
            <Typography variant="h6" component="div">
              Side Panel
            </Typography>
          </Box>
        </Drawer>
      </>

      <Box m={2}>
        <Breadcrumbs
          aria-label="breadcrumb"
          separator={<NavigateNextIcon fontSize="small" />}
          maxItems={3}
          itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="#">
            home
          </Link>
          <Link underline="hover" href="#">
            accessories
          </Link>
          <Link underline="hover" href="#">
            catelog
          </Link>
          <Link underline="hover" href="#">
            accessories
          </Link>
          <Typography color="text.primary">items </Typography>
        </Breadcrumbs>
      </Box>

      <SpeedDial
        ariaLabel="speed dial"
        sx={{ position: "absolute", bottom: 16, right: 50 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle="Copy" tooltipOpen />
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle="Print"
          tooltipOpen
        />
        <SpeedDialAction
          icon={<ShareIcon />}
          tooltipTitle="Share"
          tooltipOpen
        />
      </SpeedDial>

      <Box width={250}>
        <TextField
          label="Select Country"
          select
          value={con}
          onChange={handleChange}
          SelectProps={{
            multiple: true,
          }}
          size="small"
          color="secondary"
          helperText="Write your country"
          error
        >
          <MenuItem value="In">India</MenuItem>
          <MenuItem value="Us">USA</MenuItem>
          <MenuItem value="Ca">Canada</MenuItem>
        </TextField>

        <FormControl error>
          <FormLabel id="job-experience-group-label">
            Your job experience
          </FormLabel>
          <RadioGroup
            name="experience-group-label"
            aria-labelledby="job-experience-group-label"
            value={values}
            onChange={handleChanges}
            row
          >
            <FormControlLabel
              control={<Radio size="medium" color="secondary" />}
              label="{0 - 2}"
              value="{0 - 2}"
            />
            <FormControlLabel
              control={<Radio />}
              label="{3 - 4}"
              value="{3 - 4}"
            />
            <FormControlLabel
              control={<Radio />}
              label="{5 - 6}"
              value="{5 - 6}"
            />
          </RadioGroup>
          <FormHelperText>Invalid seletion</FormHelperText>
        </FormControl>
        <Box>
          <Box>
            <FormControlLabel
              label="accept terms and condition"
              control={<Checkbox checked={checkt} onClick={handleChangess} />}
            />
          </Box>
          <Box>
            <Checkbox
              icon={<BookmarkBorderIcon />}
              checkedIcon={<BookmarkIcon />}
              onChange={handleChangess}
              checked={checkt}
            />
          </Box>
          <FormControl error>
            <FormLabel>Skill</FormLabel>
            <FormGroup>
              <FormControlLabel
                label="HTML"
                control={
                  <Checkbox
                    onChange={handleskillChange}
                    checked={skill.includes("HTML")}
                  />
                }
              />

              <FormControlLabel
                label="CSS"
                control={
                  <Checkbox
                    onChange={handleskillChange}
                    checked={skill.includes("CSS")}
                  />
                }
              />

              <FormControlLabel
                label="Js"
                control={
                  <Checkbox
                    onChange={handleskillChange}
                    checked={skill.includes("JS")}
                  />
                }
              />
            </FormGroup>
            <FormHelperText>Invalid selection</FormHelperText>
          </FormControl>
        </Box>
      </Box>
      <div>
        <Accordion
          expanded={expanded === "panal 1"}
          onChange={(event, isExpanded) =>
            handleAccChange(isExpanded, "panal 1")
          }
        >
          <AccordionSummary
            id="panel1-header"
            aria="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordian 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, rerum beatae assumenda facere doloribus earum itaque?
            Ipsam eveniet at aliquid id consectetur hic? Molestias pariatur
            maxime quia at a est?
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panal 2"}
          onChange={(event, isExpanded) =>
            handleAccChange(isExpanded, "panal 2")
          }
        >
          <AccordionSummary
            id="panel1-header"
            aria="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordian 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, rerum beatae assumenda facere doloribus earum itaque?
            Ipsam eveniet at aliquid id consectetur hic? Molestias pariatur
            maxime quia at a est?
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panal 3"}
          onChange={(event, isExpanded) =>
            handleAccChange(isExpanded, "panal 3")
          }
        >
          <AccordionSummary
            id="panel1-header"
            aria="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>Accordian 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, rerum beatae assumenda facere doloribus earum itaque?
            Ipsam eveniet at aliquid id consectetur hic? Molestias pariatur
            maxime quia at a est?
          </AccordionDetails>
        </Accordion>
      </div>
      <Stack spacing={4}>
        <Box sx={{ width: 500, height: 450, overflowY: "scroll" }}>
          <ImageList
            // sx={{ width: 500, height: 450 }}
            cols={3}
            // variant="woven"
            variant="masonry"
            // rowHeight={'auto'}
            gap={8}
          >
            {itemList.map((item) => (
              <ImageListItem key={item.image}>
                <img src={`${item.image}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </Stack>
    </div>
  );
}
const itemList = [
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
  { image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg" },
];
