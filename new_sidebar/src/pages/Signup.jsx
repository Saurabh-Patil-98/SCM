import React from "react";

const Signup = (onLogOut) => {
  const handleOneSubmit = (event) => {
    event.preventDefault();
    // Handle authentication logic here
    onLogOut();
  };
  return (
    <>
      <section className="py-6  w-full mr-[1000px]  text-gray-800">
        <section class="relative flex flex-wrap mb-10 shadow-slate-700 drop-shadow-2xl bg-white mt-20 rounded-3xl border-gray-900 lg:h-screen lg:items-center pt-10 mx-8">
          <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 mt-[-130px] ">
            <div class="mx-auto max-w-lg text-center">
              <h1 class="text-2xl font-bold sm:text-3xl">
                SignUp your account
              </h1>
            </div>

            <form
              onSubmit={handleOneSubmit}
              action="#"
              class="mx-auto mb-0 mt-8 max-w-md space-y-4"
            >
              <div className="grid xl:grid-cols-2 xl:gap-6">
                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    name="name"
                    className="peer  h-10 w-full pr-[440px] rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="date"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 rounded-lg bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Full Name
                  </label>
                </div>
                <br />
                <div className="relative z-0 mb-6 w-full group mt-[-30px]">
                  <input
                    type="text"
                    name="email"
                    className="peer  h-10 w-full pr-[440px] rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder=""
                    required
                  />
                  <label
                    htmlFor="date"
                    className="absolute cursor-text left-0 -top-3 text-sm text-gray-900 rounded-lg bg-white mx-1 px-1 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sky-600 peer-focus:text-sm transition-all"
                  >
                    Email
                  </label>
                </div>
                <br />
                <div className="relative z-0 mb-6 w-full group mt-[-30px]">
                  <input
                    type="text"
                    name="password"
                    className="peer pr-[440px] h-10 w-full rounded-lg text-gray-900 placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600"
                    placeholder=""
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

              <div class="flex items-center justify-between">
                <p class="text-sm text-gray-900">
                  No account?
                  <a class="underline text-blue-600" href="Login">
                    {" "}
                    Login
                  </a>
                </p>
              </div>
              <button
                type="submit"
                class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium w-full text-white"
              >
                Sign Up{" "}
              </button>
            </form>
          </div>

          <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
              alt=""
              src="https://img.freepik.com/premium-vector/businessman-working-laptop-office-vector-flat-cartoon-character-illustration_1142-87848.jpg?w=740"
              className="absolute inset-0 h-[600px] w-[700px] object-cover"
            />
          </div>
        </section>
      </section>
    </>
  );
};

export default Signup;
