import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import useReview from '../../../Hooks/useReview';

const ReviewChart = () => {
    const { reviews } = useReview();

    // Example: Dynamic data transformation
    const reviewData = reviews.reduce((acc, review) => {
        const existing = acc.find(item => item.name === review.rating.toString());
        if (existing) {
            existing.value += 1;
        } else {
            acc.push({ name: `Rating ${review.rating}`, value: 1 });
        }
        return acc;
    }, []);

    // Define custom colors to match image style
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className='justify-start'>
            <h2 className="text-md px-2 font-medium mt-2">User Reviews</h2>
            <ResponsiveContainer width="100%" height={350} >
                <PieChart>
                    <Pie
                        data={reviewData}
                        dataKey="value"
                        cx="29%"
                        cy="40%"
                        outerRadius={80}
                        fill="#8884d8"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                        {reviewData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;
