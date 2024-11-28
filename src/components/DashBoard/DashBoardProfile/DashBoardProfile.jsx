import Chart from "./Chart";
import MainLayout from "./MainLayout";
import ReviewChart from "./ReviewChart";


const DashBoardProfile = () => {
    return (
        <div className="mt-10">
            <MainLayout/>
           
            <div className="lg:lex">
  {/* Chart Component (70% Width) */}
  <div className="lg:w-[70%]">
    <Chart />
  </div>

  {/* ReviewChart Component (30% Width) */}
  <div className="lg:w-[30%]">
    <ReviewChart />
  </div>
</div>

        </div>
    );
};

export default DashBoardProfile;