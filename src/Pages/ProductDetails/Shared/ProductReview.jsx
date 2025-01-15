import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Reviews from './Reviews';
import useReview from '../../../Hooks/useReview';
import PropType from "prop-types";
import ReactHtmlParser from 'react-html-parser';

const ProductReview = ({ product }) => {
  const { reviews } = useReview()
  const allReview = reviews.filter(review => review?.mainId === product?._id )
 
  console.log(ReactHtmlParser(product?.fullDescription));
  return (


    <>
      <div className='px-3 md:px-10 lg:px-10 xl:px-10 pt-10 pb-10'>
        <Tabs>
          <TabList >
            <Tab>Description</Tab>
            <Tab>Reviews ({allReview?.length}) </Tab>
          </TabList>

          <TabPanel>
            <p>
              {/* {product?.fullDescription} */}
              {ReactHtmlParser(product?.fullDescription)}
            </p>
          </TabPanel>
          <TabPanel>
            <Reviews mainId={product?._id} />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};
ProductReview.propTypes = {
  product: PropType.object,
}
export default ProductReview;
