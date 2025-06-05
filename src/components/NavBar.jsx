import { Home } from 'lucide-react'
import { NavLink } from 'react-router'

function NavBar() {
  return (
    <nav className="bg-pri-1 h-18 text-text-1 font-bold flex items-center gap-8 mx-auto">
      <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/register'}>Register</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
      <NavLink to={'/create'}>Create Todo</NavLink>


    </nav>
  )
}

export default NavBar