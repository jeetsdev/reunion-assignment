import { MdRealEstateAgent } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
	// Styling active route
	const activeStyle = ({ isActive }) => {
		return {
			color: isActive ? "#8600f4" : "#000000",
			backgroundColor: isActive ? "#eae0fa" : "#ffffff",
		};
	};

	// Header link component
	const HeaderLink = ({ route, name, icon }) => {
		return (
			<NavLink to={route} className="header-link" style={activeStyle}>
				{name}
				{icon && <span>{icon}</span>}
			</NavLink>
		);
	};

	return (
		<header>
			<section className="header-left">
				<div className="header-icon">
					<MdRealEstateAgent /> <span>Estatery</span>
				</div>
				<ul>
					<li>
						<HeaderLink route="/" name="Rent" />
					</li>
					<li>
						<HeaderLink route="/buy" name="Buy" />
					</li>
					<li>
						<HeaderLink route="/sell" name="Sell" />
					</li>
					<li>
						<HeaderLink
							route="/property"
							name="Manage Property"
							icon={<IoIosArrowDown />}
						></HeaderLink>
					</li>
					<li>
						<HeaderLink route="/favorite" name="Favorite" />
					</li>
				</ul>
			</section>
			<section className="header-right">
				<button>Login</button>
				<button>Sign up</button>
			</section>
		</header>
	);
};
