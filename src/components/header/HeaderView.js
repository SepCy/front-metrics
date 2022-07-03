import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  ABONNEMENT,
  ACCUEIL,
  CONNEXION,
  STATIONS,
  STATIONS_AJOUTER,
} from "../../navigation/CONSTANTS";
import ButtonContainer from "../utils/button/ButtonContainer";
import NothBothPremiumOrOwner from "../utils/ProtectedComponents/NotBothPremiumOrOwner";
import OnlyPremium from "../utils/ProtectedComponents/OnlyPremium";
import Profile from "./components/Profile";
import NotOnlyLoggedIn from "../utils/ProtectedComponents/NotOnlyLoggedIn";
import Search from "./components/Search";
import MenuIcon from "./components/MenuIcon";
import Submenu from "./components/Submenu";
import SearchList from "./components/SearchList";
import { useSelector } from "react-redux";
import SearchResult from "./components/SearchResult";
import OnlyLoggedIn from "../utils/ProtectedComponents/OnlyLoggedIn";
import HideComponentByRoute from "../utils/HideComponents/HideComponentByRoute";
import OnlyOwner from "../utils/ProtectedComponents/OnlyOwner";
import BothPremiumAndOwner from "../utils/ProtectedComponents/BothPremiumAndOwner";

const HeaderView = () => {
  //  Checking location
  const location = useLocation();
  // Toggling the menu

  const [open, setOpen] = useState(false);

  // Getting the searched value on type
  const searchedValueOnType = useSelector(
    (state) => state.search.searchValueOnType
  );
  // Getting the searched toggle and searched id and name

  const search = useSelector((state) => state.search);

  return (
    <nav
      class={`text-gray-600 flex ${
        location.pathname !== "/"
          ? " bg-gray-50 py-2 shadow-sm  px-6 "
          : "py-4  px-6 "
      } justify-between items-center `}
    >
      <section class="flex relative">
        <div
          class={`flex ${
            location.pathname !== "/" ? "shadow-none" : "bg-white"
          } items-center shadow-md rounded-md pl-4`}
        >
          <div class="mr-2 cursor-pointer flex items-center">
            <div class="pl2" onClick={() => setOpen(!open)}>
              <MenuIcon />
            </div>
            <div class="ml-4">
              <Link to={ACCUEIL}>METRICS</Link>
            </div>
          </div>
          <div class="ml-4">
            <HideComponentByRoute>
              <Search />
            </HideComponentByRoute>
          </div>

          {/* Submenus */}

          {open ? <Submenu onClick={setOpen} /> : ""}

          {/* Search list */}

          {searchedValueOnType && !search.toggle ? (
            <SearchList searched={searchedValueOnType} />
          ) : (
            ""
          )}

          {/* Search Result */}

          {search.toggle ? <SearchResult id={search.searchValueId} /> : ""}
        </div>
      </section>
      {location.pathname !== "/" ? (
        <section class="flex  sm:hidden md:flex xl:flex 2xl:flex justify-between">
          {/* Only owner link */}
          {/*<OnlyOwner> */} {/* To be uncommented */}
          {/* <NavLink
            to="/stations"
            activeClassName="selected"
            className="navLink"
          >
            Mes stations
          </NavLink> */}
          {/*</OnlyOwner> */}
          {/* Only Logged in users */}
          <NotOnlyLoggedIn>
            <NavLink
              to="/stations-suivies"
              activeClassName="selected"
              className="navLink"
            >
              Stations suivies
            </NavLink>
          </NotOnlyLoggedIn>
          {/* Both premium and owner */}
          <BothPremiumAndOwner>
            <NavLink
              to="/visualiser"
              activeClassName="selected"
              className="navLink"
            >
              Visualiser
            </NavLink>
          </BothPremiumAndOwner>
        </section>
      ) : (
        ""
      )}
      <section class="flex justify-between items-center  ">
        <div class="ml-16 flex items-center justify-between">
          <NotOnlyLoggedIn>
            <Link class="text-blue-400" to={STATIONS}>
              <ButtonContainer name="Stations" />
            </Link>
          </NotOnlyLoggedIn>

          {/*  <NotOnlyLoggedIn>
            <NothBothPremiumOrOwner>
              <ButtonContainer name="Devenir premium" link={ABONNEMENT} />
            </NothBothPremiumOrOwner>
          </NotOnlyLoggedIn>
          */}
          {/* 
          <OnlyPremium>
           <ButtonContainer name="Devenir Owner" link={ABONNEMENT} />
          </OnlyPremium>
          */}
          <OnlyLoggedIn>
            <ButtonContainer name="Se connecter" link={CONNEXION} />
          </OnlyLoggedIn>
          <NotOnlyLoggedIn>
            <div class="ml-12">
              <Profile name="H" />
            </div>
          </NotOnlyLoggedIn>
        </div>
      </section>
    </nav>
  );
};

export default HeaderView;
