import Router from "next/router";
import { useMe } from "lib/hooks";
import { getSavedToken } from "lib/api";
import { useState, useEffect } from "react";
import { SubtitleStyle, BodyStyle } from "ui/typhography/index";
import { MySecondaryButton, MyTertiaryButton } from "ui/buttons/index";
import {
	BurgerMenu,
	CloseXMenu,
	ApxMobileLogo,
	ApxDesktopLogo,
} from "ui/icons/index";

export function SearchHeader({ className, queryValue }) {
	const userData = useMe();
	const [token, setToken] = useState(null);
	const [toggle, setToggle] = useState(false);
	const [userDataSaved, setUserDataSaved] = useState(userData);

	function handleSearch(e) {
		e.preventDefault();
		const target = e.target;
		queryValue(target.search.value);
		target.search.value = "";
	}

	useEffect(() => {
		const tokenFromLocal: any = getSavedToken();
		if (tokenFromLocal) {
			setToken(tokenFromLocal);
		}
		userData ? setUserDataSaved(userData) : null;
	}, [userData]);

	function openMenu(e) {
		e.preventDefault();
		setToggle(true);
	}
	function closeMenu(e) {
		e.preventDefault();
		setToggle(false);
	}

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
		setToggle(false);
		setToken(null);
		localStorage.clear();
		Router.push("/");
	}

	return (
		<div className={className}>
			{toggle && token ? (
				<div className='menu-mobile'>
					<a href='false' onClick={closeMenu}>
						<CloseXMenu
							className='close-menu'
							width={30}
							height={30}
						/>
					</a>

					<div onClick={goToIngresar} style={{ cursor: "pointer" }}>
						{" "}
						<SubtitleStyle className='options' color='#FEFEFE'>
							{" "}
							Ingresar{" "}
						</SubtitleStyle>{" "}
					</div>
					<div onClick={goToPerfil} style={{ cursor: "pointer" }}>
						{" "}
						<SubtitleStyle className='options' color='#FEFEFE'>
							{" "}
							Mi perfil{" "}
						</SubtitleStyle>{" "}
					</div>
					<div onClick={goToBuscar} style={{ cursor: "pointer" }}>
						{" "}
						<SubtitleStyle className='options' color='#FEFEFE'>
							{" "}
							Buscar{" "}
						</SubtitleStyle>{" "}
					</div>
					<div onClick={goToFavs} style={{ cursor: "pointer" }}>
						{" "}
						<SubtitleStyle className='options' color='#FEFEFE'>
							{" "}
							Mis favoritos{" "}
						</SubtitleStyle>{" "}
					</div>

					<p className='email'> {userDataSaved?.email} </p>
					<BodyStyle onClick={logout} color='#E75A7C'>
						{" "}
						Cerrar sesión{" "}
					</BodyStyle>
				</div>
			) : toggle && !token ? (
				<div className='menu-mobile'>
					<a href='false' onClick={closeMenu}>
						<CloseXMenu className='close-menu' />
					</a>

					<div onClick={goToIngresar} style={{ cursor: "pointer" }}>
						{" "}
						<SubtitleStyle className='options' color='#FEFEFE'>
							{" "}
							Ingresar{" "}
						</SubtitleStyle>{" "}
					</div>
					<div onClick={goToPerfil} style={{ cursor: "pointer" }}>
						{" "}
						<SubtitleStyle className='options' color='#FEFEFE'>
							{" "}
							Mi perfil{" "}
						</SubtitleStyle>
					</div>
					<div onClick={goToBuscar} style={{ cursor: "pointer" }}>
						{" "}
						<SubtitleStyle className='options' color='#FEFEFE'>
							{" "}
							Buscar{" "}
						</SubtitleStyle>{" "}
					</div>

					<p className='email'> {userDataSaved?.email} </p>
					<div onClick={logout} style={{ cursor: "pointer" }}>
						{" "}
						<BodyStyle color='#E75A7C'>Cerrar sesión </BodyStyle>
					</div>
				</div>
			) : !toggle && !token ? (
				<div>
					<div className='container'>
						<div className='mobile-menu'>
							<div className='logo-menu-container'>
								<ApxMobileLogo />
								<div
									onClick={openMenu}
									style={{ cursor: "pointer" }}>
									<BurgerMenu width={40} height={30} />
								</div>
							</div>
							<form className='buscador' onSubmit={handleSearch}>
								<input
									style={{ color: "#FEFEFE" }}
									placeholder='Buscar...'
									name='search'
									className='search'
								/>
								<MySecondaryButton> Buscar </MySecondaryButton>
							</form>
						</div>

						<div className='desktop-menu'>
							<ApxDesktopLogo />
							<form
								className='buscador-desktop'
								onSubmit={handleSearch}>
								<input
									style={{ color: "#FEFEFE" }}
									placeholder='Buscar...'
									name='search'
									className='search'
								/>
								<MySecondaryButton> Buscar </MySecondaryButton>
							</form>
							<div
								onClick={goToIngresar}
								style={{ cursor: "pointer" }}>
								<MyTertiaryButton> Ingresar </MyTertiaryButton>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div>
					<div className='container'>
						<div className='mobile-menu'>
							<div className='logo-menu-container'>
								<ApxMobileLogo />
								<div
									onClick={openMenu}
									style={{ cursor: "pointer" }}>
									<BurgerMenu width={40} height={30} />
								</div>
							</div>
							<form className='buscador' onSubmit={handleSearch}>
								<input
									style={{ color: "#FEFEFE" }}
									placeholder='Buscar...'
									name='search'
									className='search'
								/>
								<MySecondaryButton
									margin={10 + "px"}
									width={80 + "%"}
									height={30 + "px"}>
									{" "}
									Buscar{" "}
								</MySecondaryButton>
							</form>
						</div>

						<div className='desktop-menu'>
							<ApxDesktopLogo />
							<form
								className='buscador-desktop'
								onSubmit={handleSearch}>
								<input
									style={{ color: "#FEFEFE" }}
									placeholder='Buscar...'
									name='search'
									className='search'
								/>
								<MySecondaryButton
									margin={20 + "px"}
									width={180 + "px"}
									height={50 + "px"}>
									{" "}
									Buscar{" "}
								</MySecondaryButton>
							</form>

							<div className='contains-session'>
								<p
									style={{ color: "#FEFEFE" }}
									className='email-header'>
									{" "}
									{userDataSaved?.email}{" "}
								</p>
								<p
									onClick={logout}
									style={{
										color: "violet",
										textDecoration: "underline",
										cursor: "pointer",
									}}
									className='logout'>
									{" "}
									cerrar sesión{" "}
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
