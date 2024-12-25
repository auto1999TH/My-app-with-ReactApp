import React from 'react';

function Navbar(){
    return(
        <div class="row">
            {/* <nav class="navbar sticky-top bg-dark" data-bs-theme="dark">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col">
                            auto
                        </div>
                    </div>
                </div>
                </nav> */}
            {/* <div class="col">
                <img class="img-header" src="img/gfubuld3cs96.png"/>
            </div>
            <div class="topbar">
                Home
            </div> */}

        <nav class="navbar navbar-expand-md bg-dark sticky-top border-bottom" data-bs-theme="dark">
            
            <div class="container">
            <a class="navbar-brand d-md-none" href="#"/>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasLabel">Aperture</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav flex-grow-1 justify-content-between">
                <li class="nav-item"><a class="nav-link" href="#">
                </a></li>
                <li class="nav-item"><a class="nav-link" href="#">หน้าหลัก</a></li>
                <li class="nav-item"><a class="nav-link" href="#">list</a></li>
                <li class="nav-item"><img class="img-header" src="img/gfubuld3cs96.png"/></li>
                <li class="nav-item"><a class="nav-link" href="#">Room</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Login</a></li>
                <li class="nav-item"><a class="nav-link" href="#">
                </a></li>
                </ul>
            </div>
            </div>
        </div>
        </nav>

            {/* <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">หน้าแรก</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">หน้าแรก</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">เกี่ยวกับ</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">ติดต่อ</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">ไม่มีอะไร</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav> */}
            
        </div>
    );
}

export default Navbar;