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
            <div class="col">
                <img class="img-header" src="img/gfubuld3cs96.png"/>
            </div>
            <div class="topbar">
                Home
            </div>
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