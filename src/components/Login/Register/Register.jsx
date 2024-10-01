import { useState } from "react";
import animation from '../../../assets/images/animation.svg'
import UserAuth from '../../../Hooks/useAuth';
import toast from "react-hot-toast";
import { ImSpinner3 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const navigate = useNavigate()


  const { createUser, signIn, setUser, updateUserProfile, loading, setLoading, } = UserAuth()

  // register form 
  const handelRegister = async e => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const image = form.image.files[0];
    const email = form.email.value
    const password = form.password.value

    // const formRegister = {
    //   name,
    //   image,
    //   email,
    //   password,

    // }
    const formData = new FormData();
    formData.append('image', image)

    try {
      setLoading(true)
      //  upload image and get api
      const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
        formData
      )
      console.log(data.data.display_url);

      // user register
      const result = await createUser(email, password)
      const user = result.user
      console.log(user)
      toast.success("Account created successfully");
      navigate('/')

      // Update the user state with the new profile information
      setUser({ ...user, displayName: name, photoURL: data.data.display_url });
      // Update user profile with name and photo URL
      await updateUserProfile(name, data.data.display_url);




    } catch (error) {
      console.error(error);
      toast.error(error.message)

    }

  }






  // login form 
  const handelLogin = async e => {
    e.preventDefault()
    const form = e.target

    const email = form.email.value
    const password = form.password.value

    const formData = {
      email,
      password,

    }

    try {

      // create user
      const result = await signIn(email, password)
      console.log(result);
      toast.success("Login successfully");
      navigate('/')

    } catch (error) {
      console.log(error);
      toast.error(error?.message);
    }



    console.log(formData);

  }







  return (
    <section className="bg-cover bg-center min-h-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${animation})` }}>
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-md bg-violet-600/50 rounded-md p-4 ">


          <div className="flex items-center justify-center mt-6 gap-2  ">
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className={`w-1/3 p-2 rounded-md font-medium text-center capitalize  ${!isSignUp
                ? " border-b-2 border-violet-500/50  text-white font-bold  bg-violet-500  "
                : " border-b border-violet-600 dark:text-gray-300 text-white border bg-violet-500/50 "
                }`}
            >
              LogIn
            </button>

            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className={`w-1/3 p-2 rounded-md font-medium text-center capitalize ${isSignUp
                ? " border-b-2 border-violet-500/50  text-white font-bold  bg-violet-500  "
                : " border-b border-violet-600 dark:text-gray-300 text-white border bg-violet-500/50 "
                }`}
            >
              Register

            </button>

          </div>


          {/* Sign Up Form */}
          {isSignUp && (
            <form onSubmit={handelRegister}>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <input
                  name="name"
                  type="text"
                  className="block w-full py-3   bg-gray-700/60 border border-violet-400 outline-none text-white rounded-lg px-11   focus:border-violet-500 "
                  placeholder="Full Name"
                />
              </div>

              <label
                htmlFor="dropzone-file"
                className="flex items-center bg-gray-700/60 px-3 py-3 mx-auto mt-6 text-center border-2 border-dashed rounded-lg cursor-pointer  border-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>

                <h2 className="mx-3 text-gray-400 ">Profile Photo</h2>

                <input name="image" id="dropzone-file" type="file" className="hidden  bg-gray-700 border" />
              </label>

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  className="block w-full py-3   bg-gray-700/60 border border-violet-400 outline-none text-white rounded-lg px-11   focus:border-violet-500"
                  placeholder="Email address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  name="password"
                  type="password"
                  className="block w-full py-3   bg-gray-700/60 border border-violet-400 outline-none text-white rounded-lg px-11   focus:border-violet-500"
                  placeholder="Password"
                />
              </div>



              <div className="mt-6">
                <button className="w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform  bg-violet-500/70 rounded-md font-bold text-base focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  {
                    loading ? <ImSpinner3 className="items-center text-center text-lg animate-spin  m-auto justify-center"></ImSpinner3> : 'Register'
                  }

                </button>
              </div>
            </form>
          )}


          {/* Sign In Form */}
          {!isSignUp && (
            <form onSubmit={handelLogin}>
              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  className="block w-full py-3   bg-gray-700/60 border border-violet-400 outline-none text-white rounded-lg px-11   focus:border-violet-500"
                  placeholder="Email address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </span>
                <input
                  type="password"
                  name="password"
                  className="block w-full py-3   bg-gray-700/60 border border-violet-400 outline-none text-white rounded-lg px-11   focus:border-violet-500"
                  placeholder="Password"
                />
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform  bg-violet-500/70 rounded-md font-bold text-base focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  {
                    loading ? <ImSpinner3 className="items-center text-center text-lg animate-spin  m-auto justify-center"></ImSpinner3> : 'Register'
                  }

                </button>
              </div>
            </form>
          )}


        </div>
      </div>
    </section>
  );
};

export default Register;
