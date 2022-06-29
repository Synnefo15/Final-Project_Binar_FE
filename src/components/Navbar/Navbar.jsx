import React from 'react';
import { Link } from 'react-router-dom';
// import '../../assets/styles/Navbar.css';
// import '../../assets/styles/style.css';
import cssModule from '../../assets/styles/Navbar.module.css';

const Navbar = () => {
	return (
		<div>
			<nav className={`navbar navbar-expand-lg bg-white shadow-sm ${cssModule.navbarC}`}>
				<div className="container">
					<a className={`navbar-brand d-none d-sm-block ${cssModule.navbarBrand}`} href="/"></a>
					{/* <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
					<form className="d-flex" role="search">
						<input
							className={`form-control ${cssModule.pencarian} `}
							type="search"
							placeholder="Cari di sini ..."
							aria-label="Search"
						/>
						<button className={` ${cssModule.tombol}`} type="submit">
							<i className="fa-solid fa-magnifying-glass"></i>
						</button>
					</form>
					<button
						className={`${cssModule.btnMasuk} btn-masuk btn text-white ms-auto`}
						type="submit"
					>
						<i className="fa-solid fa-arrow-right-to-bracket"></i> Masuk
					</button>
					{/* <div className="collapse navbar-collapse" id="navbarSupportedContent"></div> */}
				</div>
			</nav>
			<p className="tulisan">tes aja</p>
		</div>
	);
};

export default Navbar;
