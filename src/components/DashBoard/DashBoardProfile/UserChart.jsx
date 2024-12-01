import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Sector } from 'recharts';
import useUsers from '../../../Hooks/useUsers';
import PropTypes from 'prop-types';
const UserChart = () => {
  const { users } = useUsers(); // Fetch user data using your custom hook
  const [chartData, setChartData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0); // To track the active sector
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733', '#C70039', '#900C3F'];

  useEffect(() => {
    const processedData = users.map((user) => ({
      name: user.name || 'User',
      value: user.score || 1,
    }));
    setChartData(processedData);
  }, [users]);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  const renderActiveShape = (props) => {
    const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} className="font-bold">
          {payload?.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius + 10}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    );
  };

  return (
    <div className=" ">
        <h2 className="text-md px-2 md-4 font-medium mt-2 text-center bg-gray-50 "> All Users</h2>
      <ResponsiveContainer width="90%"   height={260}>
        <PieChart>
          <Pie
            activeIndex={activeIndex}
            activeShape={renderActiveShape}
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            fill="#8884d8"
            dataKey="value"
            onMouseEnter={onPieEnter}
            paddingAngle={2}
            className='bg-red-100 animate-pulse duration-500'
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value, name) => [`${value} `, `${name}`]} />
        </PieChart>
      </ResponsiveContainer>
     
    </div>
  );
};

// Define prop types
UserChart.propTypes = {
  innerRadius: PropTypes.number, 
  outerRadius: PropTypes.number, 
  startAngle: PropTypes.number, 
  endAngle: PropTypes.number, 
  payload: PropTypes.string, 
  fill: PropTypes.string, 
  cy: PropTypes.string, 
  cx: PropTypes.string, 

};

export default UserChart;
