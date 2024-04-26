import { useState } from 'react'
import './App.css'
import LogInPage from './Components/LogInPage'
import SignUpPage from './Components/SignUpPage'

function App() {

  const[currentPage , setCurrentPage] = useState('signin');

  const signUp = () =>{
    setCurrentPage('signup')
  }

  const signIn = () =>{
    setCurrentPage('signin') 
  }

  return (
    <div className="flex justify-center items-center h-screen flex-col">
        <div className="bg-gray-100 p-12 rounded-lg shadow-lg border-solid border-2 border-gray-400">

        <h1 className='font-lugrasimo tracking-widest text-3xl font-sm text-center mb-10 mt-15'>Instagram</h1>
        {(currentPage === 'signin') ? (
          <LogInPage  onClickSignUp={signUp}/>
        ):(
          <SignUpPage onClickSignIn ={signIn}/>
        )}
      </div>
      <div className='mt-10'>
      {(currentPage === 'signin') ? (
          <p className='text-center'>Don't Have an Account? <span className='text-blue-400 cursor-pointer hover:text-blue-700 duration-200' onClick={signUp}>SignUp</span></p>
        ):(
          <p className='text-center'>Already Have an Account? <span className='text-blue-400 cursor-pointer hover:text-blue-700 duration-200' onClick={signIn}>SignIn</span></p>
        )}
      </div>
    </div>
  )
}

export default App
