import PropTypes from 'prop-types';
import { useState } from 'react';

import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import UpdateUserModal from '../../Modal/UpdateUserModal';

const UserDataRow = ({ user, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const axiosPublic = useAxiosPublic();
  const { mutateAsync } = useMutation({
    mutationFn: async (role) => {
      const { data } = await axiosPublic.patch(
        `/users/update/${user?.email}`,
        role
      );
      return data;
    },
    onSuccess: (data) => {
      refetch();
      // console.log(data);
      toast.success('User role updated successfully!');
      setIsOpen(false);
    },
  });

  // Modal handler
  const modalHandler = async (selected) => {
    const userRole = {
      role: selected,
      status: 'Verified',
    };

    try {
      await mutateAsync(userRole);
    } catch (err) {
      // console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <>
      <tr>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-gray-900 whitespace-no-wrap'>{user?.email}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <p className='text-green-500 capitalize font-semibold whitespace-no-wrap'>{user?.role}</p>
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          {user?.status ? (
            <p
              className={`${
                user.status === 'Verified'
                  ? 'text-green-500 font-semibold'
                  : user.status === 'Pending'
                  ? 'text-yellow-500'
                  : 'text-red-500'
              } whitespace-no-wrap`}
            >
              {user.status}
            </p>
          ) : (
            <p className='text-red-500 whitespace-no-wrap'>Unavailable</p>
          )}
        </td>
        <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
          <button
            onClick={() => setIsOpen(true)}
            className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'
          >
            <span
              aria-hidden='true'
              className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
            ></span>
            <span className='relative py-2 text-green-800'>Update Role</span>
          </button>
          {/* Update User Modal */}
          <UpdateUserModal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            modalHandler={modalHandler}
            user={user}
          />
        </td>
      </tr>
    </>
  );
};

UserDataRow.propTypes = {
  user: PropTypes.object,
  refetch: PropTypes.func,
};

export default UserDataRow;
