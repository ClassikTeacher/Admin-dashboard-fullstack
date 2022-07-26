import React, { useEffect, useState } from 'react';
import { IDepartment } from './models/IDepartment';
import { IEmployee } from './models/IEmployee';
import './styles/App.css';
import AdmindashboardService from './API/service/AdmindashboardService';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter'
import {toolkitSlice} from './store/toolkitSlice'
import {useDispatch, useSelector} from 'react-redux'
import {useAppDispatch, useAppSelector} from './store/redux'
 
function App() {
  const [departments, setDepartments] = useState<IDepartment[]>([])
  const [employees, setEmployees] = useState<IEmployee[]>([])
  const {fetchDepartment} = toolkitSlice.actions
  const dispatch = useAppDispatch()
  const dep = useAppSelector(state => state.toolkitReduser)
  

  async function fetchData(){
    const responseDepartment = await AdmindashboardService.fetchDepartment()
    const responseEmployee = await AdmindashboardService.fetchEmployees()
    setDepartments(responseDepartment.data)
    setEmployees(responseEmployee.data)
     dispatch(fetchDepartment(responseDepartment.data))
  }

  useEffect(() => {
    fetchData()
   
    
  },[])
  console.log(dep)
  
  return (
    <BrowserRouter>
    <div className="App">
     
      <Sidebar />
      <div className='content-container'>
        <Navbar />
        <AppRouter />
      </div>
       
    </div>
    </BrowserRouter>
  );
}

export default App;
