// import '../../assets/styles/Register.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import cssModule from '../../assets/styles/Regis-Login.module.css';

const Register = () => {
	const [inputtext, setinputtext] = useState({
		password: '',
	});

	const [eye, seteye] = useState(true);
	const [password, setpassword] = useState('password');
	const [type, settype] = useState(false);

	const inputEvent = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setinputtext((lastValue) => {
			return {
				...lastValue,
				[name]: value,
			};
		});
	};

	const Eye = () => {
		if (password == 'password') {
			setpassword('text');
			seteye(false);
			settype(true);
		} else {
			setpassword('password');
			seteye(true);
			settype(false);
		}
	};
	return (
		<section className={`${cssModule.register} container-fluid ps-md-0`}>
			<div className="row g-0">
				<div className={`col-md-4 col-lg-6 ${cssModule.bgImage}`}></div>
				<div className="col-md-8 col-lg-6">
					<div className={`${cssModule.register} d-flex align-items-center py-5`}>
						<div className="container">
							<div className="row">
								<div className="col-md-9 col-lg-8 mx-auto">
									<div className={`${cssModule.headerRegister}`}>
										<h1>Daftar</h1>
									</div>
									<form>
										<div className={cssModule.registerForm}>
											<label className={cssModule.formLabel} htmlFor="nama-lengkap">
												Nama
											</label>
											<input
												type="text"
												className="form-control"
												placeholder="Nama Lengkap"
												id="nama-lengkap"
											/>
											<label className={cssModule.formLabel} htmlFor="email">
												Email
											</label>
											<input
												type="email"
												className="form-control"
												placeholder="Contoh: johndoe@gmail.com"
												id="email"
											/>
											<label className={cssModule.formLabel} htmlFor="password">
												Password
											</label>
											<div className="form-group">
												<input
													type={password}
													className="form-control"
													placeholder="Masukkan password"
													value={inputtext.password}
													onChange={inputEvent}
													name="password"
												/>
												<i
													onClick={Eye}
													className={`bi ${eye ? cssModule.biEyeSlash : cssModule.biEye}`}
												></i>
											</div>

											<input
												type="submit"
												className={`form-control ${cssModule.registerButton} btn`}
												value="Daftar"
											/>
											<p className="text-center">
												Sudah punya akun?{' '}
												<Link to="/login" className={cssModule.linkAlreadyRegistered}>
													Masuk di sini
												</Link>
											</p>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Register;
