// MainLayout.js

import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { FaShoppingBag, FaUsers } from 'react-icons/fa'; // Icons from react-icons
import { TbCurrencyTaka } from "react-icons/tb";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";


const data = [
  { name: 'Page A', uv: 4000 },
  { name: 'Page B', uv: 3000 },
  { name: 'Page C', uv: 2000 },
  { name: 'Page D', uv: 2780 },
  { name: 'Page E', uv: 1890 },
  { name: 'Page F', uv: 2390 },
  { name: 'Page G', uv: 3490 },
];

const cards = [
  {
    title: 'Total Balance',
    value: '334,945',
    icon: <TbCurrencyTaka className="text-green-500 text-[40px] rounded-full p-2 bg-[#34D399]/30" />,
    chartColor: '#34D399', // Green
  },
  {
    title: 'Total Orders',
    value: '2,802',
    icon: <FaShoppingBag className="text-blue-500 text-[40px] rounded-full p-2 bg-[#FB923C]/30 " />,
    chartColor: '#FB923C', // blue
  },
  {
    title: 'Customers',
    value: '4,945',
    icon: <FaUsers className="text-purple-500 text-[40px] rounded-full p-2 bg-[#A78BFA]/30 " />,
    chartColor: '#A78BFA', // Purple
  },

  {
    title: 'Total Product',
    value: '6,945',
    icon: <MdOutlineProductionQuantityLimits className="text-blue-500 text-[40px] rounded-full p-2 bg-[#60A5FA]/30 " />,
    chartColor: '#60A5FA', // Blue
  },
];

const MainLayout = () => {
  return (
    <div className="grid grid-cols-1 px-3 py-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="  rounded-lg shadow-md bg-white hover:shadow-lg"
        >
          {/* Icon and Title Section */}
          <div className="flex items-center  px-2 py-2 gap-2">
            {card.icon}
            <div className="flex flex-col">
              <h3 className="text-md font-semibold text-gray-700">{card.title}</h3>
              <p className="text-lg font-bold text-gray-800">{card.value}</p>
            </div>
          </div>

          {/* Value Section */}
          

          {/* Responsive Chart */}
          <ResponsiveContainer width="100%" height={90}>
            <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
              {/* Removed horizontal grid lines */}
              <CartesianGrid vertical={false} horizontal={false} />
              <XAxis dataKey="name" hide />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke={card.chartColor}
                fill={card.chartColor}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  );
};

export default MainLayout;
