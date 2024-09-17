import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const MobileNavBar = () => {
    return (
<div className="relative">
  <div className="sticky top-0 z-40 bg-white">
    <Tabs>
      <TabList
        style={{
          borderBottom: '2px solid orange',
        }}
      >
        <Tab
          selectedClassName="selected-tab"
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '10px',
            
          }}
        >
          Menu
        </Tab>
        <Tab
          selectedClassName="selected-tab"
          style={{
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '10px',
            borderBottom: '2px solid transparent',
          }}
        >
          Category
        </Tab>
      </TabList>

      <div className="overflow-y-auto h-[calc(100vh-100px)]">
        <TabPanel>
          <h2>Menu-1</h2>
          {/* Add your content here */}
          <p>This is the content for the Menu tab. You can add more content to make the panel scrollable.</p>
        </TabPanel>
        <TabPanel>
          <h2>Category 1</h2>
          {/* Add your content here */}
          <p>This is the content for the Category tab. You can add more content to make the panel scrollable.</p>
          <p>This is the content for the Category tab. You can add more content to make the panel scrollable.</p>
          <p>This is the content for the Category tab. You can add more content to make the panel scrollable.</p>
        </TabPanel>
      </div>
    </Tabs>
  </div>

  <style>{`
    .selected-tab {
      background-color: orange;
      
      color: white;
    }
  `}</style>
</div>

    );
};

export default MobileNavBar;