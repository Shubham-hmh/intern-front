import React from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("customer");
    localStorage.removeItem("token");
    toast.info("Logout Successfully");
    navigate("/login");
  }
  return (
    <>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2><Link className='text-white'>Dev Corner</Link></h2>
            </div>


            <div className="col-10 d-flex justify-content-end">
              <div className="header-upper-links d-flex gap-2">
                <div className="btn bg-white text-danger" onClick={handleLogout}>Logout</div>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
}

export default Header