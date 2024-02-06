
import './globas.css'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './_auth/AuthLayout'
import SignIn from "./_auth/forms/SignIn"
import SignUp from "./_auth/forms/SignUp"
import RootLayout from './_home/RootLayout'
import {Home} from './_home/pages'
import { ThemeProvider } from './components/theme-provider'
import UserProfile from './_home/pages/UserProfile'
import { Toaster } from './components/ui/toaster'
import UploadEvent from './_home/pages/UploadEvent'



function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className='flex h-screen font-inter'>
      <Toaster />
      <Routes>
        <Route element={<AuthLayout/>}>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/sign-in' element={<SignIn/>}/>
        </Route>
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/user/profile' element={<UserProfile/>}/>
          <Route path='/uploadEvent' element={<UploadEvent/>}/>
        </Route>
      </Routes>
    </main>
    </ThemeProvider>
  )
}

export default App
