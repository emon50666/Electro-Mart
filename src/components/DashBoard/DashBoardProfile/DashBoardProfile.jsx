import Chart from "./Chart";
import MainLayout from "./MainLayout";
import ReviewChart from "./ReviewChart";


const DashBoardProfile = () => {
    return (
        <div className="mt-10">
            <MainLayout/>
           
           <div>
             <Chart/>
            <ReviewChart/>
           </div>
        </div>
    );
};

export default DashBoardProfile;