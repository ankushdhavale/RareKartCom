import react from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineFavoriteBorder } from "react-icons/md";

export const NavBar = () => {
	return (
		<>
			<div className='border shadow-stone-800'>
				<header className='flex justify-between px-20 py-5 align-center'>
					<div className='text-lg cursor-pointer'>Shop it</div>
					<nav className='flex gap-10 text-2xl'>
						<span className=" cursor-pointer">
							<MdOutlineFavoriteBorder />
						</span>
						<span className=" cursor-pointer">
							<PiShoppingCartThin />
						</span>
						<span className=" cursor-pointer">
							<CgProfile/>
						</span>
					</nav>
				</header>
			</div>
		</>
	);
};
