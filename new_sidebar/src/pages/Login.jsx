import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosAPI from "../API/AxiosAPI";

function Login({ onLogin }) {
  // const [username, usernameupdate] = useState("");
  // const [password, passwordupdate] = useState("");

  //validation method
  // const validate = () => {
  //   let result = true;
  //   if (username === "" || username == null) {
  //     result = false;
  //     alert("Please enter Username");
  //   }
  //   if (password === "" || password == null) {
  //     result = false;
  //     alert("Please enter Password");
  //   }
  //   return result;
  // };

  const handleOneSubmit = (event) => {
    event.preventDefault();
    // Handle authentication logic here
  };
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  //  const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     setCredentials((prevState) => ({
  //       ...prevState,
  //       [name]: value,
  //     }));
  //   };
  const handleloginSubmit = (event) => {
    event.preventDefault();
    console.log(credentials);
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCredentials((values) => ({ ...values, [name]: value }));
  };

  const ProceedLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AxiosAPI.post("/auth/login", credentials, {
        headers: { "Content-Type": "application/json" },
      });
      // check if success
      if (response.status === 200 && response.data.Success == true) {
        const accessToken = response?.data?.data?.accessToken;
        const url = response?.data?.data?.url;
        localStorage.setItem("token", accessToken);
        localStorage.setItem("url", url); // here url means companyID
        onLogin();
        navigate("/dashboard");
      } else {
        console.error(response.data.message || "Login Failed");
      }
    } catch (error) {}
  };

  return (
    <>
      <section className="py-6  w-full mr-[1000px]  text-gray-800">
        <section className="relative flex flex-wrap mb-10 shadow-slate-700 drop-shadow-2xl bg-white mt-20 rounded-3xl border-gray-900 lg:h-screen lg:items-center pt-10 mx-8">
          <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mt-[-130px] ">
            <div className="mx-auto max-w-lg text-center">
              <h1 className="text-2xl font-bold sm:text-3xl">
                Login to your account
              </h1>
            </div>

            <form
              onSubmit={ProceedLogin}
              action="#"
              className="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="username"
                    className="peer  h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder=""
                    value={credentials.username || ""}
                    onChange={handleChange}
                    required
                  />
                  <label
                    htmlFor="date"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 rounded-lg bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Username
                  </label>
                </div>

                <br />
                <div className="relative z-0 mb-6 w-full group mt-[-30px]">
                  <input
                    type="password"
                    name="password"
                    className="peer  h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder=""
                    onChange={handleChange}
                    value={credentials.password || ""}
                    required
                  />
                  <label
                    htmlFor="number"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 rounded-lg bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Password
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-900">
                  No account?
                  <a className="underline text-blue-600" href="signup">
                    {" "}
                    Sign up
                  </a>
                </p>
              </div>
              <button
                type="submit"
                className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium w-full text-white"
              >
                Login{" "}
              </button>
            </form>
          </div>

          <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt=""
              src="https://img.freepik.com/premium-vector/young-man-working-laptop-home-vector-illustration-cartoon-style_1142-67199.jpg?w=740"
              className="absolute inset-0 h-[600px] w-[700px] object-cover"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default Login;
