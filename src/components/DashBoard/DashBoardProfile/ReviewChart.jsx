import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import useReview from '../../../Hooks/useReview';
import PropTypes from 'prop-types';

const ReviewChart = () => {
    const { reviews } = useReview();

    // Transform reviews into chart data
    const reviewData = reviews.reduce((acc, review) => {
        const existing = acc.find(item => item.name === `Rating ${review.rating}`);
        if (existing) {
            existing.value += 1;
        } else {
            acc.push({ name: `Rating ${review.rating}`, value: 1 });
        }
        return acc;
    }, []);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF5733', '#C70039', '#900C3F'];

    // Custom Shape
    const CustomBarShape = (props) => {
        const { x, y, width, height, fill } = props;
        return (
            <path d={`M${x + width / 2},${y} L${x},${y + height} L${x + width},${y + height} Z`} fill={fill} />
        );
    };

    return (
        <div className=''>
            <h2 className="text-md px-2 font-medium mt-2 mb-3 text-center bg-gray-50">All Reviews</h2>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={reviewData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="value" shape={<CustomBarShape />} label={{ position: 'top', fill: '#000' }}>
                        {reviewData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

// Define prop types
ReviewChart.propTypes = {
    height: PropTypes.number, 
    width: PropTypes.number, 
    fill: PropTypes.number, 
    x: PropTypes.number, 
    y: PropTypes.number, 


};

export default ReviewChart;
