
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const ReviewChart = () => {
    const data01 = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 278 },
        { name: 'Group F', value: 189 },
    ];

    return (
        <div>
              <h2 className="text-md  font-medium  mt-2"> User Reviews </h2>
            <ResponsiveContainer width="50%" height={350}>
                <PieChart>
                    <Pie
                        dataKey="value"
                        isAnimationActive={false}
                        data={data01}
                        cx="50%"
                        cy="40%"
                        outerRadius={60}
                        fill="#8884d8"
                        label
                    />
                    
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;
