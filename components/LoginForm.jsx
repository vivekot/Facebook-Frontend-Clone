import React from 'react';

function LoginForm() {
  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Log In to Facebook</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email or Phone
          </label>
          <input
            type="text"
            className="mt-1 block w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full p-3 border border-gray-300 rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded font-semibold"
        >
          Log In
        </button>
        <div className="text-center mt-4">
          <a href="#" className="text-blue-600">Forgot password?</a>
        </div>
        <hr className="my-6" />
        <div className="text-center">
          <button
            type="button"
            className="w-full bg-green-500 text-white p-3 rounded font-semibold"
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
