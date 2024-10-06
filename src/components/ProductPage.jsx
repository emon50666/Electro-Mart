import Magnifier from 'react-magnifier';

const ProductPage = () => {
  return (
<div className="p-6">
      {/* Image with hover zoom and square magnifier */}
      <Magnifier
        src={'https://i.ibb.co.com/mTY3RbC/desk-arrangement-with-laptop-top-view.jpg'}  // Normal resolution image
        largeImageSrc={'https://i.ibb.co.com/mTY3RbC/desk-arrangement-with-laptop-top-view.jpg'}  // High resolution image for zoom
        width={700}  // Width of the image
        mgWidth={500}  // Width of the magnified area (square shape)
        mgHeight={400}  // Height of the magnified area (square shape)
        mgShape={'square'}  // Shape of the magnifier lens
      />
    </div>
  );
};

export default ProductPage;
