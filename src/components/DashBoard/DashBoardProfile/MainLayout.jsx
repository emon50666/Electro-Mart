import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { TbCurrencyTaka } from "react-icons/tb";
import useOrder from '../../../Hooks/useOrder';
import { FaShoppingBag, FaUsers } from 'react-icons/fa';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import useUsers from '../../../Hooks/useUsers';
import useProduct from '../../../Hooks/useProduct';

import 'react-loading-skeleton/dist/skeleton.css'
import Loader from '../../Loader/Loader';


const MainLayout = () => {
  const { payments,isLoading } = useOrder(); // Use the hook
const {users} = useUsers();
const {products} = useProduct();
console.log(payments);

  // Calculate total payment amount
  const totalAmount = payments?.reduce((total, pay) => total + (pay?.totalAmount || 0), 0);


  const data = [
    { name: '', uv: 4000 },
    { name: '', uv: 3000 },
    { name: '', uv: 2000 },
    { name: '', uv: 2780 },
    { name: '', uv: 1890 },
    { name: '', uv: 2390 },
    { name: '', uv: 3490 },
  ];

  if (isLoading) return <Loader />;
  return (
    <div className="grid grid-cols-1 px-3 py-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
    
      <div className="rounded-lg shadow-md bg-white hover:shadow-lg">
        {/* Icon and Title Section */}
        <div className="flex items-center px-2 py-2 gap-2">
          <TbCurrencyTaka className="text-green-500 text-[40px] rounded-full p-2 bg-[#34D399]/30" />
          <div className="flex flex-col">
            <h3 className="text-md font-semibold text-gray-700">Total Balance</h3>
            <p className="text-lg font-bold text-gray-800">
               
              <h1> {totalAmount } ৳ </h1>
            </p>
          </div>
        </div>

        {/* Responsive Chart */}
        <ResponsiveContainer width="100%" height={90}>
          <AreaChart data={data} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
            <CartesianGrid vertical={false} horizontal={false} />
            <XAxis dataKey="name" hide />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke={'#34D399'}
              fill={'#34D399'}
              fillOpacity={0.2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>


      

 <div className="  rounded-lg shadow-md bg-white hover:shadow-lg"  >
          {/* Icon and Title Section */}
          <div className="flex items-center  px-2 py-2 gap-2">

          <FaShoppingBag className="text-[#FF5200] text-[40px]  rounded-full p-2 bg-[#FB923C]/30 " />

          <FaShoppingBag className="text-[#FF5200] text-[40px]  rounded-full p-2 bg-[#FB923C]/30"/>

            <div className="flex flex-col">
              <h3 className="text-md font-semibold text-gray-700">Total Orders</h3>
              <p className="text-lg font-bold text-gray-800">{payments.length } </p>
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
               stroke={'#FB923C'}
                fill={'#FB923C'}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>


        <div className="  rounded-lg shadow-md bg-white hover:shadow-lg"  >
          {/* Icon and Title Section */}
          <div className="flex items-center  px-2 py-2 gap-2">
          <FaUsers className="text-purple-500 text-[40px] rounded-full p-2 bg-[#A78BFA]/30 " />
            <div className="flex flex-col">
              <h3 className="text-md font-semibold text-gray-700">Customers</h3>
              <p className="text-lg font-bold text-gray-800"> {users?.length} </p>
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
                 stroke={'#A78BFA'}
               fill={'#A78BFA'}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>


        <div className="  rounded-lg shadow-md bg-white hover:shadow-lg"  >
          {/* Icon and Title Section */}
          <div className="flex items-center  px-2 py-2 gap-2">
          <MdOutlineProductionQuantityLimits className="text-blue-500 text-[40px] rounded-full p-2 bg-[#60A5FA]/30 " />
            <div className="flex flex-col">
              <h3 className="text-md font-semibold text-gray-700">Total Products</h3>
              <p className="text-lg font-bold text-gray-800">{products?.length } </p>
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
                stroke={'#60A5FA'}
                fill={'#60A5FA'}
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
       
    </div>
  );
};

export default MainLayout;
