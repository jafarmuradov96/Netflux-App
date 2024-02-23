import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import MobileMenu from "../../components/mobile-menu/MobileMenu";

const MainLayout = ({
  handleClickSearch,
  setIsShowMenu,
  isShowMenu,
  
}) => {

  const handleClickHamburger = () => {
    setIsShowMenu(true);
  };

  const handleCloseHamburger = () => {
    setIsShowMenu(false);
  };
  return (
    <>
      <MobileMenu
        isShowMenu={isShowMenu}
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
