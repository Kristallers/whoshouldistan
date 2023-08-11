import "./styles/globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import styles from "./styles/layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Who should I stan?",
	description: "Your place to discover new k-pop.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main className="mainDiv">{children}</main>
				<footer>
					©{" "}
					<Link
						className={styles.linkColor}
						href="https://github.com/Kristallers"
					>
						Kristallers
					</Link>{" "}
					2023 ★ buy me a ko-fi
				</footer>
			</body>
		</html>
	);
}
