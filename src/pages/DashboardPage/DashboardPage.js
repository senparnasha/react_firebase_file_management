import React from 'react'
import { UseSelector, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/HomepageComponents/DashboardComponents/Navbar/Navbar'
import SubBar from '../../components/HomepageComponents/DashboardComponents/Navbar/SubBar/SubBar'
import HomeComponent from '../../components/HomepageComponents/DashboardComponents/HomeComponent/HomeComponent'


const DashboardPage = () => {
const isLoggedIn=useSelector(state => state.auth.isAuthenticated)
const navigate=useNavigate()

useEffect(()=>{
if(!isLoggedIn){
  navigate("/")
}
},[])

  return (
    <> 
    <Navbar/>
    <SubBar/>
    <HomeComponent/>
    </>
  )
}

export default DashboardPage