/**
=========================================================
* Soft UI Dashboard React - v4.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Button from "@mui/material/Button";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// Soft UI Dashboard React components
import SoftInput from "components/SoftInput";
import InputBases from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Dashboard layout components
import Board5 from "layouts/dashboard/components/board5";
import Board6 from "layouts/dashboard/components/board6";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";
import { useNavigate } from "react-router-dom";

function Test() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const navigate = useNavigate();
  const [heart, setHeart] = useState(false);
  const [expand, setExpand] = useState(false);
  const [active, setActive] = useState(1);
  const [search, setSearch] = useState("");
  const [filterOn, setFilterOn] = useState(false);
  const trending = [
    {
      time: "12h : 30min : 12s",
      name: "@Cameron",
      like: 1,
      ETH: "5.4 ETH",
      img: "assets/images/team-3.jpg",
      heart: false,
      trending: "up",
    },
    {
      time: "10h : 30min : 12s",
      name: "@Cameron",
      like: 1,
      ETH: "5.4 ETH",
      img: "assets/images/team-3.jpg",
      heart: false,
      trending: "down",
    },
    {
      time: "6h : 30min : 12s",
      name: "@Cameron",
      like: 1,
      ETH: "5.4 ETH",
      img: "assets/images/team-3.jpg",
      heart: false,
      trending: "up",
    },
  ];

  const menu = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Trending",
    },
    {
      id: 3,
      name: "Lands",
    },
    {
      id: 4,
      name: "Building",
    },
    {
      id: 5,
      name: "Wareables",
    },
    {
      id: 6,
      name: "Occupations",
    },
    {
      id: 7,
      name: "Utilities",
    },
  ];

  return (
    <DashboardLayout>
      <DashboardNavbar />

    </DashboardLayout>
  );
}

const styles = {
  boxMain: {
    flex: 1,
    display: "flex",
    // backgroundColor: "red",
    flexDirection: "column",
  },
  buyNow: {
    width: "auto",
    flexDirection: "row",
    display: "flex",
    flex: 0.3,
    alignItems: "center",
  },
  boxBorder: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: "#1E293B",
    borderRadius: 10,
    marginRight: 20,
  },
  search: {
    border: "none",
    color: "#fff",
    borderRadius: 50,
    backgroundColor: "transparent",
    "& .MuiInputBase-input": {
      padding: 10,
      fontSize: 12,
      color: "#fff",
      border: "none",
      borderRadius: 50,
      backgroundColor: "transparent",
      width: "100%",
      height: "auto",
    },
  },
  divInput: {
    width: "60%",
    backgroundColor: "transparent",
    borderRadius: 40,
    border: "1px solid #fff",
    color: "#fff",
    height: "auto",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: 5,
    height: 30,
  },
  divSort: {
    width: "auto",
    backgroundColor: "transparent",
    borderRadius: 40,
    border: "1px solid #fff",
    color: "#fff",
    height: "auto",
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    marginRight: 1,
    color: "rgba(255,255,255,0.7)",
    height: 30,
  },
  divImg: {
    color: "rgba(255,255,255,1)",
    padding: 5,
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    alignItems: "center",
    flexDirection: "row",
    display: "flex",
  },
  divBid: {
    marginLeft: 10,
    marginRight: 10,
    justifyContent: "space-between",
    display: "flex",
    alignItems: "center",
  },
  divCollect: {
    width: "auto",
    height: "auto",
    zIndex: 1,
    backgroundColor: "rgba(22, 38, 45, 0.72)",
    borderRadius: 15,
    flexDirection: "column",
    display: "flex",
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  divSearch: {
    marginRight: "15px",
    color: "rgba(255,255,255,0.7)",
    alignItems: "center",
    display: "flex",
  },
  mainSort: {
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  mainMenu: {
    padding: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },
  fontBuy: {
    flex: 1,
    display: "flex",
    fontSize: 15,
  },
  fontStatus: {
    fontSize: 17,
    marginBottom: 5,
  },
  divLine: {
    backgroundColor: "rgba(255,255,255,0.7)",
    width: "1px",
    height: "85px",
    display: "flex",
    marginLeft: "3%",
    marginRight: "3%",
    marginTop: "3%",
  },
};

export default Test;
