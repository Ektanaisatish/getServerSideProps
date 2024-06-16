import Link from "next/link";
import { signIn, signOut } from 'next-auth/react';

function Navbar() {
  return (
    <nav className="header">
      <h1 className="logo">
        <Link href="/">
          Next-Auth
        </Link>
        <ul className={`main-nav`}>
          <li >
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="api/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link href="api/auth/signin"
             onClick={e=>
             {e.preventDefault() 
             signIn('github')}}>
              signin
            </Link>
          </li>
          <li>
            <Link href="api/auth/signout"
            onClick={e=>{
              e.preventDefault()
              signOut()
            }}
            >
              Signout
            </Link>
          </li>
        </ul>
      </h1>
    </nav>
  );
}

export default Navbar;
