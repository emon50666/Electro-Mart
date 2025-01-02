
import Chart from "./Chart";
import MainLayout from "./MainLayout";
import ReviewChart from "./ReviewChart";
import TopSellDashboard from "./TopSellDashboard";
import UserChart from "./UserChart";



const DashBoardProfile = () => {
    return (
        <div className="mt-10">
            <MainLayout/>
           

           <div className="flex">
            <div className="flex-1">
            <Chart/>
            </div>
            <div className="h-[450px] overflow-x-scroll">
            <TopSellDashboard/>
            </div>
           </div>
           <div className="lg:flex mt-10  "> 
        <div className="flex-1">
        <ReviewChart/>
        </div>
        <div className="flex-1">
        <UserChart/>
        </div>
           </div>
        </div>
    );
};

export default DashBoardProfile;