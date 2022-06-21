import Router from "next/router";
import { useMe } from "lib/hooks";
import { getSavedToken } from "lib/api";
import { useEffect, useState } from "react";
import { SubtitleStyle, BodyStyle } from "ui/typhography/index";
import { ApxMobileLogo, ApxDesktopLogo, UserIcon } from "ui/icons/index";

export function Footer({ className }) {
	const userData = useMe();
	const [token, setToken] = useState(null);
	const [userDataSaved, setUserDataSaved] = useState(userData);

	useEffect(() => {
		const tokenFromLocal: any = getSavedToken();

		if (tokenFromLocal) {
			setToken(tokenFromLocal);
		}
		userData ? setUserDataSaved(userData) : null;
	}, [userData]);

	function goToIngresar(e) {
		e.preventDefault();
		Router.push("/signin");
	}

	function goToPerfil(e) {
		e.preventDefault();
		token ? Router.push("/profile") : Router.push("/signin");
	}

	function goToBuscar(e) {
		e.preventDefault();
		Router.push("/search");
	}

	function goToFavs(e) {
		e.preventDefault();
		token ? Router.push("/user-favs") : Router.push("/signin");
	}

	function logout(e) {
		e.preventDefault();
		setToken(null);
		localStorage.clear();
		Router.push("/home");
	}

	return (
		<div className={className}>
			{userDataSaved ? (
				<div className='general-div'>
					<div className='mobile-footer'>
						<div>
							<div onClick={goToPerfil}>
								{" "}
								<BodyStyle color='#FEFEFE'>
									{" "}
									Mi perfil{" "}
								</BodyStyle>{" "}
							</div>
							<div onClick={goToBuscar}>
								{" "}
								<BodyStyle color='#FEFEFE'>
									{" "}
									Buscar{" "}
								</BodyStyle>{" "}
							</div>
							<div onClick={goToFavs}>
								{" "}
								<BodyStyle color='#FEFEFE'>
									{" "}
									Mis favoritos{" "}
								</BodyStyle>{" "}
							</div>
							<div onClick={logout}>
								{" "}
								<BodyStyle color='#FEFEFE'>
									{" "}
									Logout{" "}
								</BodyStyle>{" "}
							</div>
						</div>

						<div className='redes'>
							<SubtitleStyle color='#FEFEFE'>
								{" "}
								Redes{" "}
							</SubtitleStyle>
							<a
								href='https://apx.school'
								style={{
									color: "white",
									textDecoration: "none",
								}}>
								<UserIcon
									color='white'
									width={20}
									height={20}
								/>
								APX
							</a>
							<a
								href='https://twitter.com/apxschool'
								style={{
									color: "white",
									textDecoration: "none",
								}}>
								<UserIcon
									color='white'
									width={20}
									height={20}
								/>
								Twitter
							</a>
						</div>
						<div></div>

						<div className='image-container'>
							<p
								className='apx'
								style={{
									color: "#FEFEFE",
									fontSize: 16,
									marginTop: 65,
								}}>
								{" "}
								©2022 apx{" "}
							</p>
							<ApxMobileLogo />
						</div>
					</div>

					<div className='desktop-footer'>
						<div className='container'>
							<div>
								<div
									onClick={goToPerfil}
									style={{ cursor: "pointer" }}>
									{" "}
									<BodyStyle color='#FEFEFE'>
										{" "}
										Mi perfil{" "}
									</BodyStyle>{" "}
								</div>
								<div
									onClick={goToBuscar}
									style={{ cursor: "pointer" }}>
									{" "}
									<BodyStyle color='#FEFEFE'>
										{" "}
										Buscar{" "}
									</BodyStyle>{" "}
								</div>
								<div
									onClick={goToFavs}
									style={{ cursor: "pointer" }}>
									{" "}
									<BodyStyle color='#FEFEFE'>
										{" "}
										Mis favoritos{" "}
									</BodyStyle>{" "}
								</div>
								<div
									onClick={logout}
									style={{ cursor: "pointer" }}>
									{" "}
									<BodyStyle color='#FEFEFE'>
										{" "}
										Logout{" "}
									</BodyStyle>{" "}
								</div>
							</div>

							<div className='redes'>
								<SubtitleStyle color='#FEFEFE'>
									{" "}
									Redes{" "}
								</SubtitleStyle>
								<a
									href='https://apx.school'
									style={{
										color: "white",
										textDecoration: "none",
										cursor: "pointer",
									}}>
									<UserIcon
										color='white'
										width={20}
										height={20}
									/>
									APX
								</a>
								<a
									href='https://twitter.com/apxschool'
									style={{
										color: "white",
										textDecoration: "none",
										cursor: "pointer",
									}}>
									<UserIcon
										color='white'
										width={20}
										height={20}
									/>
									Twitter
								</a>
							</div>
						</div>

						<div className='image-container'>
							<ApxDesktopLogo />
							<p
								className='apx'
								style={{ color: "#FEFEFE", fontSize: 16 }}>
								{" "}
								©2022 apx{" "}
							</p>
						</div>
					</div>
				</div>
			) : (
				<div className='general-div'>
					<div className='mobile-footer'>
						<div>
							<div onClick={goToIngresar}>
								{" "}
								<BodyStyle color='#FEFEFE'>
									{" "}
									Ingresar{" "}
								</BodyStyle>{" "}
							</div>
							<div onClick={goToPerfil}>
								{" "}
								<BodyStyle color='#FEFEFE'>
									{" "}
									Mi perfil{" "}
								</BodyStyle>{" "}
							</div>
							<div onClick={goToBuscar}>
								{" "}
								<BodyStyle color='#FEFEFE'>
									{" "}
									Buscar{" "}
								</BodyStyle>{" "}
							</div>
						</div>

						<div className='redes'>
							<SubtitleStyle color='#FEFEFE'>
								{" "}
								Redes{" "}
							</SubtitleStyle>
							<a
								href='https://apx.school'
								style={{
									color: "white",
									textDecoration: "none",
								}}>
								<UserIcon
									color='white'
									width={20}
									height={20}
								/>
								APX
							</a>
							<a
								href='https://twitter.com/apxschool'
								style={{
									color: "white",
									textDecoration: "none",
								}}>
								<UserIcon
									color='white'
									width={20}
									height={20}
								/>
								Twitter
							</a>
						</div>
						<div></div>

						<div className='image-container'>
							<p
								className='apx'
								style={{
									color: "#FEFEFE",
									fontSize: 16,
									marginTop: 65,
								}}>
								{" "}
								©2022 apx{" "}
							</p>
							<ApxMobileLogo />
						</div>
					</div>

					<div className='desktop-footer'>
						<div className='container'>
							<div>
								<div
									onClick={goToIngresar}
									style={{ cursor: "pointer" }}>
									{" "}
									<BodyStyle color='#FEFEFE'>
										{" "}
										Ingresar{" "}
									</BodyStyle>{" "}
								</div>
								<div
									onClick={goToPerfil}
									style={{ cursor: "pointer" }}>
									{" "}
									<BodyStyle color='#FEFEFE'>
										{" "}
										Mi perfil{" "}
									</BodyStyle>{" "}
								</div>
								<div
									onClick={goToBuscar}
									style={{ cursor: "pointer" }}>
									{" "}
									<BodyStyle color='#FEFEFE'>
										{" "}
										Buscar{" "}
									</BodyStyle>{" "}
								</div>
							</div>

							<div className='redes'>
								<SubtitleStyle color='#FEFEFE'>
									{" "}
									Redes{" "}
								</SubtitleStyle>
								<a
									href='https://apx.school'
									style={{
										color: "white",
										textDecoration: "none",
										cursor: "pointer",
									}}>
									<UserIcon
										color='white'
										width={20}
										height={20}
									/>
									APX
								</a>
								<a
									href='https://twitter.com/apxschool'
									style={{
										color: "white",
										textDecoration: "none",
										cursor: "pointer",
									}}>
									<UserIcon
										color='white'
										width={20}
										height={20}
									/>
									Twitter
								</a>
							</div>
						</div>

						<div className='image-container'>
							<ApxDesktopLogo />
							<p
								className='apx'
								style={{ color: "#FEFEFE", fontSize: 16 }}>
								{" "}
								©2022 apx{" "}
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
