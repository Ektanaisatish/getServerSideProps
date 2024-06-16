// import 'bootstrap/dist/css/bootstrap.min.css'

import Link from 'next/link'
function Home(){
 return <>  
 <h1>NextJs pre rendering</h1>
<Link href="/users"> Users</Link>
<Link href="/posts"> Users post</Link>
</>

}
export default Home