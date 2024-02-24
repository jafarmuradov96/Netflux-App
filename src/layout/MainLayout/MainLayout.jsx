import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import MobileMenu from "../../components/mobile-menu/MobileMenu";
import { useDispatch } from "react-redux";
import { setIsShowMenu } from "../../redux/movieSlice/movieSlice";

const MainLayout = ({ handleClickSearch }) => {
  const dispatch = useDispatch();

  const handleClickHamburger = () => {
    dispatch(setIsShowMenu(true));
  };

  const handleCloseHamburger = () => {
    dispatch(setIsShowMenu(false));
  };
  return (
    <>
      <MobileMenu
        handleCloseHamburger={handleCloseHamburger}
        handleClickSearch={handleClickSearch}
      />
      <Header
        handleClickHamburger={handleClickHamburger}
        handleClickSearch={handleClickSearch}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
