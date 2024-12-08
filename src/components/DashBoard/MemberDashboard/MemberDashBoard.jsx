import TopOfDashboard from "./Shared/TopOfDashboard";
import TopSaleProduct from "./Shared/TopSaleProduct";

const MemberDashboard = () => {
  return (
    <div>
      <section>
        <TopOfDashboard />
      </section>
      <section className="px-5 mt-10">
        <TopSaleProduct />
      </section>
    </div>
  );
};

export default MemberDashboard;
