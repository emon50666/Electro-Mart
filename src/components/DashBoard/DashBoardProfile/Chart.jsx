import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import useProduct from '../../../Hooks/useProduct';

const Chart = () => {
  const { products } = useProduct();

  // Prepare data with only product prices
  const data = products.map(product => ({
    name: product.name,           // Product name
    price: product.price,         // Product price
  }));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Product Prices</h2>
      <ResponsiveContainer width="60%" height={350}>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" />
          <YAxis label={{ value: 'Price (৳)', angle: -90, position: 'insideLeft' }} />
          <Tooltip formatter={(value) => `৳${value}`} />
          <Legend />

          {/* Product Price Area with solid color */}
          <Area
            type="natural"
            dataKey="price"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.5}
            name="Product Price"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
