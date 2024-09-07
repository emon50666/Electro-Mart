import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const MobileNavBar = () => {
    return (
<div>
      <Tabs>
        <TabList
          style={{
            borderBottom: '2px solid orange', // Orange border for TabList
         

          }}
        >
          <Tab
            selectedClassName="selected-tab" // Class for selected tab
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius:'10px',
              borderBottom: '2px solid transparent', // Default border
            }}
          >
            Menu
          </Tab>
          <Tab
            selectedClassName="selected-tab"
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              borderRadius:'10px',
              borderBottom: '2px solid transparent', // Default border
            }}
          >
            Category
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Menu-1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Category 1</h2>
        </TabPanel>
      </Tabs>

      <style>{`
        .selected-tab {
          background-color: orange;
          border-bottom: 2px solid orange;
          color: white;
        }
      `}</style>
    </div>
    );
};

export default MobileNavBar;