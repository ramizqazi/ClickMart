'use client';

const SignIn = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
      <div className="w-96  text-center p-5 bg-gray-100 rounded overflow-hidden mx-4 shadow-xl">
        <h1 className="shrink-0 text-3xl font-bold text-gray-700">
          ClickMart
          <span style={{ color: '#D2203A' }}>.</span>
        </h1>
        <p className="text-red-600 font-bold text-xl">Sign In</p>

        <div className="my-4">
          <label className="block text-left text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter Email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="my-4">
          <label className="block text-left text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          className="bg-red-600 hover:bg-red-500 w-full mt-5 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
