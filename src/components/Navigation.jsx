import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'gatsby';
import cmd from '../images/logo.png';
import emoji from 'react-easy-emoji';
import ThemeContext from '../context/ThemeContext';

export default (props) => {
	const { toggleDark, dark } = useContext(ThemeContext),
		[scroll, setScroll] = useState(false),
		{ menuLinks } = props;

	const handleScroll = () => {
		setScroll(window.scrollY > 20);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<nav className={`nav ${scroll ? 'scroll' : ''}`}>
			<div className="nav-container">
				<div className="logo-banner">
					<Link to="/">
						<img className="logo" src={cmd} alt="Command Line" />
						<span className="text">George Kampitakis</span>
					</Link>
				</div>
				<div className="links">
					{menuLinks.map(({ name, link, icon }) => {
						return (
							<Link key={name} to={link} activeClassName="active">
								<span className="text">{name}</span>
								<span className="linkIcon">{emoji(icon)}</span>
							</Link>
						);
					})}
				</div>
				<div className="darkTheme">
					{dark ? (
						<span role="button" onClick={toggleDark}>
							{emoji('🌞')}
						</span>
					) : (
						<span role="button" onClick={toggleDark}>
							{emoji('🌙')}
						</span>
					)}
				</div>
			</div>
		</nav>
	);
};
