"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";

export default function Home() {
	const buttonRef = useRef(null);
	// const comp = useRef();

	const onEnter = ({ currentTarget }) => {
		gsap.to(currentTarget, { y: -20 });
	};

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { y: 0 });
	};

	// useEffect(() => {
	// 	let ctx = gsap.context(() => {
	// 		gsap.to(
	// 			buttonRef.current,
	// 			{
	// 				duration: 0.8,
	// 				opacity: 1,
	// 				y: -20,
	// 				ease: Power3.easeOut,
	// 			},
	// 			comp
	// 		);
	// 	});
	// 	console.log(buttonRef);

	// 	return () => ctx.revert();
	// });

	return (
		<>
			<div className={styles.headerContainer}>
				<h1>WHO SHOULD I STAN</h1>
				<p className={styles.subParagraph}>
					Your website to discover yet another k-pop idol to ruin your life, and
					wallet
				</p>
			</div>
			<div className={styles.getStartedContainer}>
				<h2>GET STARTED</h2>
				<p className={styles.subParagraph}>
					What do you want to discover today?
				</p>
				<div className={styles.buttonContainer}>
					<div className={styles.buttonShadowContainer}>
						<button
							ref={buttonRef}
							className="button"
							onMouseEnter={onEnter}
							onMouseLeave={onLeave}
						>
							song
						</button>
						<div className={styles.buttonShadow}></div>
					</div>
					<div className={styles.buttonShadowContainer}>
						<button
							className="button"
							onMouseEnter={onEnter}
							onMouseLeave={onLeave}
						>
							girl group
						</button>
						<div className={styles.buttonShadow}></div>
					</div>
					<div className={styles.buttonShadowContainer}>
						<button
							className="button"
							onMouseEnter={onEnter}
							onMouseLeave={onLeave}
						>
							solo artist
						</button>
						<div className={styles.buttonShadow}></div>
					</div>
					<div className={styles.buttonShadowContainer}>
						<button
							className="button"
							onMouseEnter={onEnter}
							onMouseLeave={onLeave}
						>
							boy group
						</button>
						<div className={styles.buttonShadow}></div>
					</div>
				</div>
			</div>
		</>
	);
}
