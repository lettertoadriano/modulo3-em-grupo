import { Outlet, Link } from "react-router-dom";
import './Layout.css'

const Layout = () => {
  return (
    <>
      <nav id = 'nav'>
      <div className='wrapper'>
            <div className='logo'><img src="https://i.postimg.cc/3wVHDPnf/C-pia-de-favicon-ico-700-400-px.png"></img></div>
                <ul className='nav-area'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Produtos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/Adm">Administrador</Link>
                    </li>
                </ul>  
            </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;