

const AllUser = () => {
    return (
        <div className="pt-10 bg-white shadow-md">
                   <h1 className="font-semibold text-2xl mt-4 mb-4 ml-5"> User List</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    <tr className="bg-orange-50">
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
      </tr>
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;