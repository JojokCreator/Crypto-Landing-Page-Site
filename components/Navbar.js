import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
	return (
		<header>
				<div class="brand">
					<div className="logo">
						<Image src="/logo.png" width={55} height={55} />
						<a href="/">SECU</a>
					</div>
						<input type="text" id="fname" name="fname"></input>
				<nav>
				<ul>
					<li>
						<Link href="/">
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="about">
							<a>About</a>
						</Link>
					</li>
					<li>
						<Link href="/coin/list">
							<a>Coins</a>
						</Link>
					</li>
				</ul>
			</nav>
            </div>
		</header>
	);
};

export default Navbar;
