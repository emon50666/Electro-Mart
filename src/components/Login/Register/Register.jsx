import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../../../Firebase/Firebase";
import { FaHome, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
const Register = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const location = useLocation();

  const navigate = useNavigate();

  const {
    createUser,
    signIn,
    setUser,
    updateUserProfile,
    setLoading,
    error,
    setError,
    showPassword,

    setShowPassword,
    signInWithGoogle,
  } = useAuth();

  // register form
  const handelRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.files[0];
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    // }
    const formData = new FormData();
    formData.append("image", image);

    try {
      // Validate password
      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        setLoading(false); // Stop loading spinner if validation fails
        return;
      }
      if (!/[A-Z]/.test(password)) {
        setError("Password must contain at least one uppercase letter.");
        setLoading(false); // Stop loading spinner if validation fails
        return;
      }
      if (!/[a-z]/.test(password)) {
        setError("Password must contain at least one lowercase letter.");
        setLoading(false); // Stop loading spinner if validation fails
        return;
      }
      if (!/[0-9]/.test(password)) {
        setError("Password must contain at least one number.");
        setLoading(false); // Stop loading spinner if validation fails
        return;
      }

      setLoading(true);

      //  upload image and get api
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );
      // console.log(data.data.display_url);

      // user register
      const result = await createUser(email, password);
      const user = result.user;
      // console.log(user);
      toast.success("Account created successfully");

      navigate(location?.state ? location?.state : '/')

      navigate(location?.state ? location?.state : "/");


      // Update the user state with the new profile information
      setUser({ ...user, displayName: name, photoURL: data.data.display_url });
      // Update user profile with name and photo URL
      await updateUserProfile(name, data.data.display_url);
    } catch (error) {
      console.error(error);
      toast.error("Already Use This Email ");
      setError("Registration failed. Please try again.");
      setLoading(false); // Stop loading spinner on error
    }
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      // Login user
      const result = await signIn(email, password);
      toast.success("Login successfully");
      // console.log(result);
      navigate(location?.state ? location?.state : "/");
    } catch (error) {
      toast.error("Email Don't Matched ");
      // console.log(error);
    }
  };

  const handleForgotPassword = async (email) => {
    if (!email) {
      toast.error("Please enter your email to reset the password");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  // handel google register
  const handelGoogle = async () => {
    const { data } = await signInWithGoogle();
    // console.log(data);
    toast.success("Register Successfully");
    navigate("/");
  };

  return (
    <section className="min-h-screen bg-blue-50">
      <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <div className="w-full max-w-md shadow-md bg-white rounded-md p-4 border border-dashed border-blue-300  pt-10 pb-10">
          <div className="flex items-center justify-center mt-6 gap-2  ">
            <button
              type="button"
              onClick={() => setIsSignUp(false)}
              className={`w-1/3 p-2 rounded-md font-medium text-center capitalize  ${
                !isSignUp
                  ? " border-b-2 border-blue-500 text-white font-bold  bg-blue-500 "
                  : " border-b border-blue-600 dark:text-gray-300 text-blue-500 border "
              }`}
            >
              LogIn
            </button>

            <button
              type="button"
              onClick={() => setIsSignUp(true)}
              className={`w-1/3 p-2 rounded-md font-medium text-center capitalize ${
                isSignUp
                  ? " border-b-2 border-blue-500 text-white font-bold  bg-blue-500  "
                  : " border-b border-blue-600 text-blue-500 border  "
              }`}
            >
              Register
            </button>
          </div>
          <form onClick={() => handelGoogle()} className="mt-7">
            <button
              aria-label="Login with Google"
              type="button"
              className="flex items-center justify-center w-full  space-x-4 border rounded-md "
            >
              <img
                src="https://res.cloudinary.com/dpsgtszzi/image/upload/v1735646563/download_1_swgqpp.png"
                alt=""
                className="w-14 h-10"
              />
              <p>Login with Google</p>
            </button>
          </form>
          {/* Sign Up Form */}
          {isSignUp && (
            <form onSubmit={handelRegister}>
              <div className="relative flex items-center mt-8">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 "
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
                  required
                  className="block w-full py-3   bg-gray-50 border  outline-none text-blue-500 rounded-lg px-11   focus:border-blue-500 "
                  placeholder="Full Name"
                />
              </div>

              <label
                htmlFor="dropzone-file"
                className="flex items-center bg-gray-50 px-3 py-3 mx-auto mt-6 text-center border border-dashed rounded-lg cursor-pointer  border-gray-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 "
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

                <h2 className="mx-3 ">Profile Photo</h2>

                <input
                  name="image"
                  id="dropzone-file"
                  type="file"
                  className="hidden  "
                />
              </label>

              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 "
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
                  required
                  className="block w-full py-3   bg-gray-50 border  outline-none text-blue-500 rounded-lg px-11   focus:border-blue-500 "
                  placeholder="Email address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 "
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
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="block w-full py-3   bg-gray-50 border  outline-none text-blue-500 rounded-lg px-11   focus:border-blue-500 "
                  placeholder="Password"
                />
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="items-center text-base -ml-12"
                >
                  {" "}
                  {showPassword ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}{" "}
                </p>
              </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md font-bold text-base focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 ">
                  Register
                </button>
              </div>
            </form>
          )}
          {error && (
            <p className="text-red-500  font-sm mt-2 mb-5 text-center ">
              {error}
            </p>
          )}

          {/* Sign In Form */}
          {!isSignUp && (
            <form onSubmit={handelLogin}>
              <div className="relative flex items-center mt-6">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3"
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
                  required
                  className="block w-full py-3 bg-gray-50 border outline-none text-blue-500 rounded-lg px-11 focus:border-blue-500"
                  placeholder="Email address"
                />
              </div>

              <div className="relative flex items-center mt-4">
                <span className="absolute">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mx-3 "
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
                  required
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="block w-full py-3   bg-gray-50 border  outline-none text-blue-500 rounded-lg px-11   focus:border-blue-500 "
                  placeholder="Password"
                />
                <p
                  onClick={() => setShowPassword(!showPassword)}
                  className="items-center text-base -ml-12"
                >
                  {" "}
                  {showPassword ? (
                    <FaRegEyeSlash></FaRegEyeSlash>
                  ) : (
                    <FaRegEye></FaRegEye>
                  )}{" "}
                </p>
              </div>

              <p
                onClick={() =>
                  handleForgotPassword(
                    document.querySelector('input[name="email"]').value
                  )
                }
                className="text-sm underline text-end cursor-pointer text-gray-600"
              >
                Forget Password
              </p>

              <div className="mt-6">
                <button className="w-full px-6 py-3 tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md font-bold text-base focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Login
                </button>
              </div>
            </form>
          )}
          <div className="flex justify-center items-center mt-6">
            <Link
              to="/"
              className="flex items-center gap-2 px-4 py-2 font-bold text-blue-500 border border-blue-500 rounded-md transition duration-300 ease-in-out transform hover:bg-blue-500 hover:text-white hover:scale-105"
            >
              <FaHome className="text-lg" />
              Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
