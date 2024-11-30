import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';
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
        <div className=''>
            <h2 className="text-md px-2 font-medium mt-2 mb-3 text-center bg-orange-50">All Reviews</h2>
            <ResponsiveContainer width="100%"  height={335} >
                <PieChart>
                    <Pie
                        data={reviewData}
                        dataKey="value"
                        cx="45%"
                        cy="30%"
                        outerRadius={70}
                        fill="#8884d8"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        className='px-6'
                    >
                        {reviewData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
               
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ReviewChart;
