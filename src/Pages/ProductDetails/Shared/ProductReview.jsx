
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from './Reviews';
import useReview from '../../../Hooks/useReview';


const ProductReview = () => {
const {review} = useReview()
  



  return (
  

    <>
    <div className='px-3 md:px-10 lg:px-10 xl:px-10 pt-10 pb-10  bg-gray-100'>
    <Tabs>
    <TabList >
      <Tab>Description</Tab>
      <Tab>Reviews ({review.length}) </Tab>
    </TabList>

    <TabPanel>
     descriptions
    </TabPanel>
    <TabPanel>
    <Reviews/>
    </TabPanel>
  </Tabs>
    </div>
    </>
  );
};

export default ProductReview;
