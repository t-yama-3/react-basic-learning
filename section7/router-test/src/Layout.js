import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/information">Information</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        フッター
      </footer>
    </>
  )
}

export default Layout