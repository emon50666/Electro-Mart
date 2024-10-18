
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useReview from '../../../Hooks/useReview';

const ProductReview = () => {
  const {products,} = useReview()
  
  console.log(products);


  return (
  

    <>
    <div className='container mx-auto px-3'>
    <Tabs>
    <TabList >
      <Tab>Description</Tab>
      <Tab>Reviews (0)</Tab>
    </TabList>

    <TabPanel>
      <p>
        {products.map(product => <>
             <p>{product.fullDescription} </p>
             
          </>)
        }
      </p>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
    </>
  );
};

export default ProductReview;
