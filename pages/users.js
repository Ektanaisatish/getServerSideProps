import User from '../components/user'
function userlist({users}){
    return <> <h1> User</h1>
    {
       users.map((user)=>{
       return(
        <div key={user.id}>
      <User user={user} />
        </div>
       )
        })
    }
    </>
}
export default userlist;

export async function getStaticProps(){
const response = await fetch('https://fakestoreapi.com/products')
const data = await response.json()
console.log(data);
return{
    props:{
        users:data,
    },
}
}