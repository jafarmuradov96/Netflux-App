import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import MobileMenu from "../../components/mobile-menu/MobileMenu";

const MainLayout = ({ searchValue, handleChangeSearchValue, handleClickSearch, setIsShowMenu, isShowMenu }) => {
  // const [isShowMenu, setIsShowMenu] = useState(false);

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
        searchValue={searchValue}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearch = {handleClickSearch}
      />
      <Header
        searchValue={searchValue}
        handleClickHamburger={handleClickHamburger}
        handleChangeSearchValue={handleChangeSearchValue}
        handleClickSearch = {handleClickSearch}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
