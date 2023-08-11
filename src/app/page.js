"use client";
import styles from "./styles/page.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

export default function Home() {
	const buttonRef = useRef(null);
	// const comp = useRef();
	let result = null;

	const onEnter = ({ currentTarget }) => {
		console.log(currentTarget.textContent);
		gsap.to(currentTarget, { y: -20 });
		result = currentTarget.textContent;
	};

	const onLeave = ({ currentTarget }) => {
		gsap.to(currentTarget, { y: 0 });
		result = null;
	};

	const onClickButton = (event) => {
		console.log("firing", event);
		console.log("result", result);
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
				<h1>WHO SHOULD I STAN?</h1>
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
						<Link href="/song">
							<button
								ref={buttonRef}
								className="button"
								onMouseEnter={onEnter}
								onMouseLeave={onLeave}
							>
								song
							</button>
							<div className={styles.buttonShadow}></div>
						</Link>
						=
					</div>
					<div className={styles.buttonShadowContainer}>
						<Link href="/girlgroup">
							<button
								className="button"
								onMouseEnter={onEnter}
								onMouseLeave={onLeave}
							>
								girl group
							</button>
							<div className={styles.buttonShadow}></div>
						</Link>
					</div>
					<div className={styles.buttonShadowContainer}>
						<Link onClick={onClickButton} href="/soloartist">
							<button
								className="button"
								onMouseEnter={onEnter}
								onMouseLeave={onLeave}
							>
								solo artist
							</button>
							<div className={styles.buttonShadow}></div>
						</Link>
					</div>
					<div className={styles.buttonShadowContainer}>
						<Link onClick={onClickButton} href="/boygroup">
							<button
								className="button"
								onMouseEnter={onEnter}
								onMouseLeave={onLeave}
								ref={buttonRef}
							>
								boy group
							</button>
							<div className={styles.buttonShadow}></div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
