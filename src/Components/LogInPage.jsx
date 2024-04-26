import React from 'react';

function LogInPage({ onClickSignUp }) {
  return (
    <>
      <input 
        type="text"
        placeholder="PhoneNumber, UserName, or Email" 
        className="px-5 py-2 rounded my-1 w-full"
      />
      <br />
      <input 
        type="password"
        placeholder="Password" 
        className="px-5 py-2 rounded my-1 w-full"
      />
      <br />
      <button className="bg-blue-400 w-full py-2 rounded mt-2 hover:bg-blue-700 hover:text-white duration-300 font-sm" onClick={onClickSignUp}>SignIn</button>
    </>
  );
}

export default LogInPage;
