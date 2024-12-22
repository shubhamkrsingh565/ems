/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import Login from "./components/Auth/Login"
import AdminDashboard from "./components/Dashboard/AdminDashboard"
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard"
import { getLocalStorage } from "./utils/localStorage"
import { AuthContext } from "./context/AuthProvider"


const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // console.log(authData.employees)

  // useEffect(() => {
  //   if(authData) {
  //     const loggedInUser = localStorage.getItem("loggedInUser");
  //     if(loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }    
  // }, [authData])

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if(loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])
  

  const handleLogin = (email, password) => {
    if(email == "admin@example.com" && password == "123") {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({role: 'admin'}))
      // console.log(user)
    } else if(authData) {
      const employee = authData.employees.find((employee) => employee.email === email && employee.password === password)
      if(employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({role: 'employee', data: employee })) 
        // console.log(user)
      }
    } else {
      alert("Invalid Credentials")
      // console.log("Invalid user")   
    }
  }


  return (
    <>
      { !user ? <Login handleLogin={handleLogin} /> : "" }

      { user == 'admin' ? <AdminDashboard /> : (user == 'employee' ? <EmployeeDashboard data={loggedInUserData} /> : null ) }

      {/* { ! user ? <Login /> : user.role === 'admin' ? <AdminDashboard /> : <EmployeeDashboard /> } */}
      
    </>
  )
}

export default App