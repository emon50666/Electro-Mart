import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AddToPromotion from "../../../Pages/AddToPromotion/AddToPromotion";
import ManagePromotion from "./Shared/ManagePromotion/ManagePromotion";
import { useState } from "react";
const PromotionControl = () => {
    const [index,setIndex] = useState(0)
    return (
        <div className="pt-12 pb-4 px-2 sm:px-6 font_open_sense">
            <div className="px-5 py-10 md:p-10 bg-gray-300 rounded-lg text-teal-600">
                <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold">Control All Promotion</h2>
            </div>
            <div className="mt-10">
                <Tabs defaultIndex={index} onSelect={() => { }}>
                    <TabList>
                        <Tab>Add New Promotion</Tab>
                        <Tab>Manage Added Promotion</Tab>
                    </TabList>
                    <TabPanel>
                        <AddToPromotion setIndex={setIndex}/>
                    </TabPanel>
                    <TabPanel>
                        <ManagePromotion />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default PromotionControl;