import { useState } from "react";
import AdminMenu from "./SideBarMenu/AdminMenu";
import MemberMenu from "./SideBarMenu/MemberMenu";
import useRoll from "../../Hooks/useRoll";

import { Link } from "react-router-dom";

import { AiOutlineLogout } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";

const SideBar = () => {
  const { logOut } = useAuth();
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [role] = useRoll();
  return (
    <>
      {/*  <!-- Component: Basic side navigation menu --> */}
      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed right-2 top-12  z-50 order-10 block h-10 w-10 self-center rounded  shadow-md bg-[#c6c6c6] opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 text-blue-500 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 bg-[#1E293B]  min-h-screen left-0 z-40 flex w-56 flex-col border-r border-r-slate-200 transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <nav
          aria-label="side navigation"
          className="flex-1  divide-y divide-slate-100 overflow-auto"
        >
          {/* admin menu */}

          {role === "admin" && (
            <AdminMenu setIsSideNavOpen={setIsSideNavOpen} />
          )}

          {role === "member" && <MemberMenu setIsSideNavOpen={setIsSideNavOpen}/>}
          {role === "seller" && <AdminMenu />}
        </nav>
        <li onClick={logOut} className=" ">
          <Link
            to={"/register"}
            className="flex mt-1 items-center gap-3 p-3 rounded text-gray-200 transition-colors  "
          >
            <div className="flex   items-center self-center">
              <AiOutlineLogout></AiOutlineLogout>
            </div>
            <p className="flex  text-[16px] font-semibold w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate ">
              LogOut
            </p>
          </Link>
        </li>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 mt-10 bottom-0 left-0  right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Basic side navigation menu --> */}
    </>
  );
};

export default SideBar;
