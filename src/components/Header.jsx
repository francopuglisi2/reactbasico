import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg fixed-top bg-menu" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src="logo.png" alt="" /></a>
          <button className="navbar-toggler" 
            type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">Inicio</Link> 
              </li>
              <li className="nav-item">
                <Link to="/Usuarios" className="nav-link" href="#">Usuarios</Link>
              </li>
              <li className="nav-item">
                <Link to="/Productos" className="nav-link" href="#">Productos</Link>
              </li>
              <li className="nav-item">
                <Link to="/Carrito" className="nav-link" href="#">Carrito</Link>
              </li>
              <li className="nav-item">
                <Link to="/Pedidos" className="nav-link" href="#">Pedidos</Link>
              </li> 
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
