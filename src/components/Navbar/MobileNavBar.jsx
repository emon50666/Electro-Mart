import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useCategories from "../../Hooks/useCategories";

const MobileNavBar = () => {
  const { categories } = useCategories();
  return (
    <div className="relative">
      <div className="sticky top-0 z-40 pt-10 bg-white">
        <Tabs>
          <TabList
            style={{
              borderBottom: "2px solid blue",
            }}
          >
            <Tab
              selectedClassName="selected-tab"
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "10px",
              }}
            >
              Menu
            </Tab>
            <Tab
              selectedClassName="selected-tab"
              style={{
                padding: "10px 20px",
                cursor: "pointer",
                borderRadius: "10px",
                borderBottom: "2px solid transparent",
              }}
            >
              Category
            </Tab>
          </TabList>

          <div className="overflow-y-auto h-[calc(100vh-100px)]">
            <TabPanel>
              <h2>Menu-1</h2>
              {/* Add your content here */}
              <p>
                This is the content for the Menu tab. You can add more content
                to make the panel scrollable.
              </p>
              <p>
                This is the content for the Menu tab. You can add more content
                to make the panel scrollable.
              </p>
              <p>
                This is the content for the Menu tab. You can add more content
                to make the panel scrollable.
              </p>
              <p>
                This is the content for the Menu tab. You can add more content
                to make the panel scrollable.
              </p>
            </TabPanel>
            <TabPanel>
              <ul className="menu menu-vertical space-y-2  ">
                {categories.map(
                  (cat, idx) =>
                    cat?.newCategory && (
                      <li key={idx}>
                        <a className="text-md font-medium  text-black   px-2 py-1 hover:bg-white hover:text-blue-500 ">
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

      <style>{`
    .selected-tab {
      background-color: blue;
      
      color: white;
    }
  `}</style>
    </div>
  );
};

export default MobileNavBar;
