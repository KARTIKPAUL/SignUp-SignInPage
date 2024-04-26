function SignUpPage({onClickSignIn}){
    return(
        <>
        <input
            type="text" 
            placeholder="Mobile Number Or Email"
            className="px-5 py-2 rounded my-1"
         />
         <br />
         <input 
            type="text" 
            placeholder="Full Name"
            className="px-5 py-2 rounded my-1"
         />
         <br />
         <input 
            type="text" 
            placeholder="PhoneNumber,UserName or Email"
            className="px-5 py-2 rounded my-1"
         />
         <br />
         <input 
            type="Password"
            placeholder="Password" 
            className="px-5 py-2 rounded my-1"
        />
        <br />
        <button className="bg-blue-400 w-full py-2 rounded mt-2 hover:bg-blue-700 hover:text-white duration-300 font-sm" onClick={onClickSignIn}>Register/SignUp</button>
        </>

        
        
    )
}
export default SignUpPage;