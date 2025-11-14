
import './App.css'
import Signup from './pages/Signup/Signup'
import Signin from './pages/Signin/Signin'
  
function App() {
return (
    <div>
    <Routes>
            <Route
              path='login'
              element={<Review />}
            {/* <Route
              path='login'
              element={<Signin />}
            /> */}
            {/* <Route
              path='register'
              element={<Signup/>}
            /> */}
            </Routes>
    </div>
  )
}
export default App