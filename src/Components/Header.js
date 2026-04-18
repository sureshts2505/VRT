import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='container-fluid p-2'>
        <nav className="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <Link className="navbar-brand" to="/"><img src='https://www.vrt9.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.534d717a.png&w=256&q=75'
     alt='' className='w-50 p-4'>
    </img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
    data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
        <li className="nav-item">
          <Link className="nav-link active fw-bold mx-2" aria-current="page" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link  fw-bold mx-2" aria-current="page" to="/" >About</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2 fw-bold" href="#">Solution</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2 fw-bold" href="#">Programs</a>
        </li>
      </ul>
      <span className="navbar-text fw-bold ent">
        Entrepreneur research
      </span>
    </div>
  </div>
</nav>
    </header>
  )
}

export default Header