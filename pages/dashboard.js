import { useEffect, useState } from "react";
function Dashboard(){
    const[isloading,setloading]=useState(true)
    const[dashboardData,setdashboardData]=useState(null)
    useEffect(()=>{
        async function fetchdata(){
            const response = await fetch('http://localhost:4000/dashboard')
            const data = await response.json()
            setdashboardData(data)
            setloading(false)
        }
        fetchdata()
    },[])
    if(isloading){
        return
            <h1>Loading...</h1>
    }
    return(
<div >
<h1>Dashboard</h1>
<h2>posts-{dashboardData.posts}</h2>
<h2>likes-{dashboardData.likes}</h2>
<h2>followers-{dashboardData.followers}</h2>
<h2>following-{dashboardData.following}</h2>
</div>
    )
}
export default Dashboard