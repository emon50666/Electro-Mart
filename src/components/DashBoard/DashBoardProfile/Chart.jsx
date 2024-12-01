import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import useProduct from '../../../Hooks/useProduct';
import useOrder from '../../../Hooks/useOrder';


const Chart = () => {
  const { products } = useProduct();
  const { payments } = useOrder();

 
  
  // Combine products and payments data
  const combinedData = products.map((product, index) => ({
    name: product.title,
    price: product.price,
    orderPrice: payments[index]?.totalAmount
    || 0 // Assuming `payments` has `amount`
  }));

  return (
    <div className='px-2 bg-[#1E293B]  py-7 '>
      <h2 className="text-md  font-medium text-gray-300 mb-4">Product & Order Prices</h2>
      <ResponsiveContainer width="95%"   height={350}>
        <AreaChart
          data={combinedData}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
           
          }}
        >
          <CartesianGrid strokeDasharray="1 3" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Price (৳)', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => `৳${value}`} />
          <Legend />
          
          {/* Product Price Area */}
          <Area
            type="bump"
            dataKey="price"
            stroke="#F97316"
            fill="#F97316"
            name="Product Price"
          />

          {/* Order Price Area */}
          <Area
            type="monotone"
            dataKey="orderPrice"
            stroke="#8884d8"
            fill="#8884d8"
            name="Order Price"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
