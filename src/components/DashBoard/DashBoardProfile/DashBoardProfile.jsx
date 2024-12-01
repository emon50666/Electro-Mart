import Chart from "./Chart";
import MainLayout from "./MainLayout";
import ReviewChart from "./ReviewChart";
import UserChart from "./UserChart";



const DashBoardProfile = () => {
    return (
        <div className="mt-10">
            <MainLayout/>
           
           <div className="">
             <Chart/>
         
           <div className="lg:flex mt-10  "> 
        <div className="flex-1">
        <ReviewChart/>
        </div>
        <div className="flex-1">
        <UserChart/>
        </div>
           </div>
         
           </div>
        </div>
    );
};

export default DashBoardProfile;