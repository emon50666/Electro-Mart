
import { useQuery } from '@tanstack/react-query'



import useAxiosPublic from '../../../Hooks/useAxiosPublic'
import { Helmet } from 'react-helmet'
import UserDataRow from './UserDataRow';
import Loader from '../../Loader/Loader';
const AllUsers = () => {
 const axiosPublic = useAxiosPublic();
  //   Fetch users Data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axiosPublic(`/users`)
      return data
    },
  })

  // console.log(users)
  // if (isLoading )
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <span className="loading loading-bars loading-lg"></span>
  //     </div>
  //   );
  if (isLoading) return <Loader />;
  return (
    <>

    <h1 className='mt-14 px-10 font-semibold text-lg'>All User List</h1>


      <div className='container mx-auto px-4 sm:px-8'>
        <Helmet>
          <title>All Users</title>
        </Helmet>

        <div className=''>

        <div className='py-8'>

          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Role
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Status
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <UserDataRow
                      key={user?._id}
                      user={user}
                      refetch={refetch}
                    />
                  ))}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default AllUsers