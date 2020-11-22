import React from 'react';
import logo from '../assets/itesm-logo.png'


const RoomFooter = () => {
    return (
        <>
          <footer className="page-footer font-small">

            <div className="container mt-3">

              <div className="row">

                <div className="col-md-12">
                  <div className="flex-center text-center">

                    <img className="logo " src={logo}></img>
                  </div>
                </div>

              </div>

            </div>

            <div className="footer-copyright text-center mb-5">© 2020 Copyright:
              <a> ITESM </a>
            </div>


          </footer>

        </>
    )
}

export default RoomFooter;