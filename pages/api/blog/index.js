// export default function handler(req,res){
//     res.status(200).json({name:"index api route"})
// }

import { useState } from "react"
// import {getSession ,signIn} from 'next-auth/client'

function Blog() {
    const [loading,setloading]=useState()
useEffect(()=>{
const securePage =  async () => {
    const session = await getSession()
    if (session){
        signIn()
    }else {
        setloading(false)
    }
}
securePage()

},[])

if (loading){
return(
    <h2>...Loading</h2>
)
}
  return (
    <div>
        <h1>Blog</h1>
    </div>
  )
}

export default Blog