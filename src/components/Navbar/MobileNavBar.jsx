import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategories from "../../Hooks/useCategories";
import { NavLink } from "react-router-dom";

const MobileNavBar = () => {
  const { categories } = useCategories();

  const navLinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Shop",
      path: "/shop-page",
    },
    {
      title: "Store",
      path: "/storesPage",
    },
    {
      title: "Promotion",
      path: "/promotion",
    },
    {
      title: "About Us",
      path: "/about",
    },
    {
      title: "Contact Us",
      path: "/contacts",
    },
  ];

  return (
    <div className="relative">
      <div className="sticky top-0 z-40 pt-10 bg-white">
        <Tabs>
          <TabList className="border-b-2 border-blue-500">
            <Tab
              selectedClassName="w-full text-blue-600 underline"
              className="pr-4 py-0 cursor-pointer rounded-lg"
            >
              Menu
            </Tab>
            <Tab
              selectedClassName="w-full text-blue-600 underline"
              className="pr-4 py-0 cursor-pointer rounded-lg"
            >
              Category
            </Tab>
          </TabList>

          <div className="overflow-y-auto h-[calc(100vh-100px)]">
            <TabPanel>
              {/* Add your content here */}
              <ul className="space-y-3 mt-5 text-lg font-medium">
                {navLinks.map((link, idx) => (
                  <li key={idx}>
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-600 font-semibold underline"
                          : "text-black"
                      }
                    >
                      {link.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </TabPanel>
            <TabPanel>
              <ul className="menu menu-vertical space-y-2">
                {categories.map(
                  (cat, idx) =>
                    cat?.newCategory && (
                      <li key={idx}>
                        <a className="text-md font-medium text-black px-2 py-1 hover:bg-white hover:text-blue-500">
                          {cat?.newCategory}
                        </a>
                      </li>
                    )
                )}
              </ul>
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default MobileNavBar;
