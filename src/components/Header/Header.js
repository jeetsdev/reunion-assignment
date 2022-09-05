import { MdRealEstateAgent } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
	// Styling active route
	const activeStyle = ({ isActive }) => {
		return {
			color: isActive ? "#8600f4" : "inherit",
			backgroundColor: isActive ? "#eae0fa" : "inherit",
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
						<span>
							<HeaderLink route="/" name="Rent" />
						</span>
					</li>
					<li>
						<span>
							<HeaderLink route="/buy" name="Buy" />
						</span>
					</li>
					<li>
						<span>
							<HeaderLink route="/sell" name="Sell" />
						</span>
					</li>
					<li>
						<span>
							<HeaderLink
								route="/property"
								name="Manage Property"
								icon={<IoIosArrowDown />}
							/>
						</span>
					</li>
					<li>
						<span>
							<HeaderLink route="/favorite" name="Favorite" />
						</span>
					</li>
				</ul>
			</section>
			<section className="header-right">
				<button className="btn btn-secondary">Login</button>
				<button className="btn btn-primary">Sign up</button>
			</section>
		</header>
	);
};
