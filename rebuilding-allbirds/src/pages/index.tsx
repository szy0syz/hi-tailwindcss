// import clsx from "clsx";
import Head from "next/head";

export default function Page() {
	return (
		<div>
			<Head>
				<title>Rebuilding Allbirds</title>
			</Head>

			<div className="px-4 py-1 bg-lime-800 text-white">
				<p className="text-xs font-medium text-center">
					We are rasing prices on all products by $1 today in support of the
					plant.{" "}
					<a href="#" className="underline">
						Learn More.
					</a>
				</p>
			</div>
			<header className="px-4 py-3 flex justify-between items-center bg-white relative">
				<div className="absolute inset-0 shadow-lg opacity-50" />
				<div className="flex">
					<button type="button" className="h-8 w-8">
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="1.5"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>
				<div>
					<svg
						className="h-6"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 694.3 220.7"
					>
						<g>
							<path d="M393.3,60.4c0.4,0,0.9,0,1.3-0.1c6.6-0.7,12.5-6.1,13.5-12.8c1-6.6-3.2-12.1-9.6-12.8c-0.4,0-0.9-0.1-1.3-0.1 c-0.4,0-0.9,0-1.3,0.1c-6.6,0.7-12.5,6.1-13.5,12.8c-0.5,3.5,0.4,6.6,2.3,9C386.7,58.9,389.7,60.4,393.3,60.4z" />
							<path d="M694.3,167.8c0-17.6-8.6-33.7-16.2-47.9c-6.5-12.1-12.3-23.1-10.8-31.3c1.1-5.9,5.3-9.3,11.8-9.7c0,0,0,0,0,0 c0.2,0,0.4-0.1,0.6-0.1c0.3-0.1,0.6-0.3,0.9-0.5c0.3-0.2,0.5-0.5,0.6-0.8c0-0.1,0.1-0.1,0.1-0.2l3.2-8.3c0.3-0.9,0.4-1.5,0.1-2.1 c-0.2-0.4-0.5-0.8-1-1.2c-0.6-0.5-1.6-0.9-2.9-1.3c-1.8-0.6-4.1-1-6.2-1c-9.4,0-20.9,3.1-30.9,28c-0.4,1-19.7,51-20.3,52.6 c-2.4,5.9-7.5,13-18.3,13c-4.7,0-8.5-1.8-10.6-4.8c-0.4-0.6-0.7-1.2-1-1.8c-0.8-2-1.1-4.4-0.6-7c0.2-0.9,0.4-1.9,0.7-2.9 c0.5-1.7,1.2-3.6,2-5.5c7.4-18.9,33.7-86.2,41.8-106.9c1-2.6-0.4-4.7-3.2-4.7h-9.3c-1,0-2.1,0.3-3,0.8c-1.7,0.8-3.1,2.3-3.8,3.9 c-3.6,9.1-8.7,22.3-14.1,36.2c-4.2,10.7-8.5,21.8-12.5,31.9c-1.2-2-2.6-3.9-4.1-5.7c-1.6-1.8-3.3-3.5-5.1-5 c-7.8-6.4-17.7-9.9-28.6-9.9c-13.4,0-26.3,5.4-36.4,14.2c-0.4,0.3-0.7,0.7-1.1,1c-0.3,0.2-0.5,0.5-0.8,0.7 c-6.6,6.2-11.8,13.9-15,22.4c0,0.1-0.1,0.2-0.1,0.4c-0.4,1.1-0.7,2.2-1.1,3.4c-0.6,2.1-1.1,4.2-1.4,6.4c-0.3,2-0.5,4-0.6,6 c-0.2,5.8,0.7,11.5,2.5,16.7c-0.9,1.5-2.1,2.9-3.4,4.2c-3.7,3.5-8.6,5.8-13.7,6.2c-0.5,0-0.9,0-1.4,0c-2,0-3.9-0.4-5.6-1 c-2.1-0.8-3.9-2.1-5.1-3.8c-2.3-3.3-2.3-8.1-0.2-13.6c0.5-1.4,3.7-9.9,6.6-17.5c2.2-5.9,4.2-11.4,4.6-12.5c0.2-0.6,0.6-1.5,0.9-2.6 c0.5-2.1,0.8-5-0.6-8c-0.6-1.2-1.3-2.2-2.1-3.1c-1.6-1.7-3.7-2.7-5.7-3.5c-0.8-0.3-1.6-0.6-2.4-0.8c-1.4-0.4-2.9-1-4.6-1.7 c-0.1,0-0.1-0.1-0.2-0.1c-2.8-1.2-16.3-7.5-16.3-19.5c0-0.3,0-0.6,0-0.8c0-0.1,0-0.2,0-0.3c0-0.1,0-0.3,0-0.4 c-0.2-1.8-0.8-2.9-1.6-3.5c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0-0.1,0c-0.1-0.1-0.2-0.1-0.3-0.2c0,0,0,0-0.1,0c0,0,0,0,0,0 c0,0,0,0-0.1,0c-0.1,0-0.1-0.1-0.2-0.1c0,0,0,0,0,0c-0.5-0.2-1-0.3-1.6-0.3H437c-1.9,0-4,1-5.4,2.5c-0.6,0.6-1.1,1.4-1.4,2.2 c-2,5.1-4.4,11.2-6.9,17.7c-8.8,22.6-19.3,49.7-22.3,57.4c-0.1,0.3-0.2,0.6-0.3,0.9c-2.4,5.9-7.5,13-18.4,13 c-4.7,0-8.6-1.8-10.6-4.8c-1.2-1.8-1.8-4.1-1.7-6.8c0.1-2.1,0.6-4.4,1.5-6.8c1.9-5,6-15.4,10.3-26.4c4.1-10.5,8.4-21.7,11.4-29.3 c1-2.6-0.4-4.7-3.2-4.7h0h-9.3h-0.9h0c-0.6,0-1.3,0.1-2,0.3c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-2.2,0.6-4.4,2.1-5.7,3.7 c-4.8,5.8-11,10.5-17.8,13.9c-6.8,3.4-14.1,5.6-21.1,6.4c-1-2.6-2.3-5.2-3.9-7.6c-0.1-0.1-0.1-0.2-0.2-0.3c-1-1.5-2-2.9-3.2-4.3 c-8.3-9.6-20.2-14.9-33.7-14.9c-7.2,0-14.2,1.6-20.8,4.4c3.3-8.5,6.6-17.1,9.7-25.2c3.8-9.9,7.4-19.1,10.3-26.7 c0.5-1.2,0.4-2.2,0-3.1c-0.5-1-1.6-1.6-3.1-1.6H288h-9.2h-0.1c-1.1,0-2.3,0.4-3.4,1c-1.3,0.7-2.4,1.7-3,2.9 c-0.1,0.3-0.3,0.5-0.4,0.8C260,58.7,241,107.8,232,131.3c-2.5,6.4-4.2,11-4.9,12.7c-2.4,5.9-7.5,13-18.3,13c-1,0-1.9-0.1-2.7-0.2 c-3.4-0.6-6.3-2.1-7.9-4.6c-0.3-0.5-0.6-1-0.9-1.6c-0.9-2-1.2-4.5-0.7-7.2c0.2-1.3,0.9-3.4,1.7-5.5c1.1-3,2.2-5.9,2.2-5.9 c0,0,4-10.2,9.7-25c0.6-1.6,1.3-3.3,2-5.1c0.1-0.2,0.2-0.4,0.2-0.6c8.8-22.6,20.6-53.1,29.1-75.1c3.4-8.9,6.3-16.4,8.3-21.4 c1-2.6-0.4-4.7-3.2-4.7h-9.3c-2.8,0-5.8,2.1-6.8,4.7c-1.1,2.8-10.9,28.2-21.9,56.6c-14.2,36.6-30.3,78.2-32,82.7 c-0.4,0.9-0.8,1.8-1.3,2.7c-1.5,2.9-3.8,5.7-7,7.7c-2.6,1.6-6,2.6-10.1,2.7c-3.8,0-7-1.1-9.2-3.2c-0.5-0.5-1-1-1.5-1.6 c-1.5-2.3-2.1-5.2-1.5-8.6c0,0,0-0.1,0-0.1c0.5-2.9,4.4-13.1,4.4-13.3c2.5-6.4,5.4-14,8.5-22.1c10.3-26.5,22.9-59.3,31-80 c0.2-0.6,0.3-1.2,0.3-1.8c-0.1-0.8-0.4-1.6-1-2.1c-0.6-0.5-1.4-0.8-2.5-0.8h-9.3c-1,0-2.1,0.3-3.1,0.8c-1.4,0.7-2.6,1.8-3.3,3.1 c-0.1,0.2-0.3,0.5-0.4,0.7c-2.4,6.1-5,12.9-7.8,20.1c-3,7.8-6.2,16.1-9.5,24.4c-12.8,33-25.5,66.1-27.6,71.4 c-0.7,1.7-1.6,3.4-2.7,5.1c-3,4.3-7.8,7.9-15.7,7.9c-2.9,0-5.5-0.7-7.6-1.9c-1.2-0.8-2.3-1.7-3-2.9c-0.5-0.8-0.9-1.6-1.2-2.5 c-0.6-1.8-0.7-3.9-0.3-6.2c0.5-2.8,3.3-10.1,3.8-11.2c0-0.1,0.1-0.2,0.1-0.2l19.1-49.2c1-2.6-0.4-4.7-3.2-4.7h-9.3h0 c-1.7,0-3.5,0.8-4.9,2c0,0,0,0,0,0c-0.1,0-0.1,0.1-0.1,0.1c-0.8,0.7-1.4,1.6-1.7,2.5l-1.9,5l-3,7.8c-0.6-0.9-1.2-1.8-1.8-2.7 c0,0,0,0,0,0c-0.6-0.9-1.3-1.7-2-2.5c0,0,0,0,0,0c-3-3.5-6.6-6.5-10.5-8.8c-6.7-4-14.6-6.1-23.1-6.1c-20.9,0-40.7,13.2-50.4,31.8 c-2.7,5.2-4.6,10.8-5.5,16.6c-2.1,13.6,1.4,26.5,9.8,36.2c2.6,3,5.5,5.6,8.8,7.7c0.6,0.4,1.3,0.8,2,1.2c6.7,3.9,14.5,6,22.9,6h0 c0,0,0,0,0,0c13.5,0,26.6-5.6,36.8-14.5c0,0,0,0,0,0c0.3,0.6,0.7,1.2,1.1,1.8c0.2,0.3,0.5,0.7,0.7,1c0,0.1,0.1,0.1,0.1,0.2 c0.2,0.3,0.5,0.6,0.7,0.9c0.2,0.2,0.4,0.4,0.5,0.6c0.1,0.2,0.3,0.3,0.5,0.5c0.3,0.3,0.6,0.6,0.8,0.9c0.1,0.1,0.2,0.2,0.3,0.3 c0.4,0.3,0.7,0.7,1.1,1c0,0,0,0,0.1,0.1c3.4,2.9,7.7,5.2,12.7,6.4c0.1,0,0.2,0.1,0.3,0.1c0.5,0.1,1,0.2,1.5,0.3 c0.2,0,0.4,0.1,0.7,0.1c0.4,0.1,0.8,0.1,1.3,0.2c0.4,0,0.7,0.1,1.1,0.1c0.3,0,0.6,0.1,1,0.1c0.7,0,1.4,0.1,2.2,0.1c0,0,0,0,0,0h0 c0,0,0,0,0,0c5.2,0,10.1-1,14.6-2.9c1.7-0.7,3.3-1.5,4.8-2.5c0.5-0.3,1-0.6,1.5-1c2-1.4,3.9-2.9,5.6-4.7c0.6,0.8,1.3,1.5,2,2.2 c4.6,4.7,10.8,7.6,17.9,8.5c0.2,0,0.5,0.1,0.7,0.1c0.2,0,0.4,0,0.6,0c0.4,0,0.8,0.1,1.2,0.1c0.2,0,0.4,0,0.5,0c0.4,0,0.9,0,1.3,0 c0,0,0,0,0,0c0,0,0,0,0,0h0c0,0,0,0,0,0h0c10.4,0,19.6-3.9,26.4-10.9c2.6,3.2,5.9,5.8,9.7,7.7c4.3,2.1,9.2,3.2,14.4,3.2 c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0h0h0c2.7,0,5.3-0.3,7.8-0.8c10.9-2.2,19.9-9.1,25.4-19.5 c0.3,0.5,0.6,0.9,0.9,1.4c0.4,0.6,0.8,1.2,1.2,1.8c0.6,0.8,1.2,1.5,1.8,2.3c8.3,9.6,20.2,14.9,33.7,14.9h0h0 c18.4,0,36-10.3,46.5-25.3c4.8-6.9,8.1-14.7,9.4-23c0.3-2.1,0.5-4.2,0.6-6.3c1.8-0.2,3.6-0.5,5.3-0.9c7.7-1.5,14.9-4,21.3-7.4 c-0.2,0.5-0.4,1.1-0.6,1.6c-3,7.9-5.7,14.7-7.1,18.4c-4.4,11.1-3.7,21.9,2,30.3c2.1,3.1,4.8,5.7,7.9,7.7c5,3.2,11,5,17.6,5h0h0 c15.9,0,29-9.1,35.2-24.5c0.8-2,2.4-6.2,4.5-11.7c4.4-11.3,11-28.3,17-43.7c0.5-1.4,1.1-2.8,1.6-4.1c5.2,6.5,12.2,11.4,19,14.3 c0.4,0.2,0.7,0.3,1.1,0.5c0.8,0.3,1.6,0.6,2.3,0.9c-3.4,9.2-8.8,23.8-9.5,25.4c-2.7,6.9-3.5,13.6-2.3,19.7 c0.7,3.8,2.2,7.4,4.3,10.6c1.4,2,3,3.8,4.8,5.4c5,4.3,11.5,6.9,18.7,7.3c0.7,0,1.3,0.1,2,0.1c1.1,0,2.2-0.1,3.3-0.2 c0.2,0,0.5,0,0.7-0.1c0.1,0,0.2,0,0.3,0c4.6-0.5,9-1.9,13.1-3.9c4.2-2.1,8-4.9,11.2-8.2c6.3,6.2,14.4,10.2,23.5,11.7 c2.5,0.4,5.1,0.6,7.8,0.6h0h0c3.4,0,6.8-0.4,10.1-1c9.1-1.8,17.7-6.1,24.9-12c0.7-0.5,1.3-1.1,1.9-1.7c0.4,0.7,0.8,1.4,1.2,2 c3.5,5.1,8.5,8.8,14.4,10.9c0.3,0.1,0.6,0.2,0.8,0.3c0.3,0.1,0.7,0.2,1,0.3c0.4,0.1,0.7,0.2,1.1,0.3c0.3,0.1,0.6,0.1,0.9,0.2 c0.4,0.1,0.7,0.2,1.1,0.2c0.3,0.1,0.6,0.1,0.9,0.2c0.4,0.1,0.7,0.1,1.1,0.1c0.4,0,0.8,0.1,1.2,0.1c0.3,0,0.6,0.1,0.9,0.1 c0.7,0,1.4,0.1,2.2,0.1c0,0,0,0,0,0c0,0,0,0,0,0h0c0,0,0,0,0,0c0,0,0,0,0,0h0h0c15.9,0,29-9.1,35.2-24.5 c0.3-0.9,6.1-15.4,10.8-27.4c1.4-3.6,2.7-7,3.7-9.7c0.5,1.1,1.1,2.3,1.6,3.4c1.9,3.8,3.9,7.7,6,11.7c1.7,3.2,3.5,6.5,5.1,9.8 c4.9,9.8,9,19.8,9,29.6c0,28.9-19.6,34-25.6,34.9c-4,0.6-7,3.7-7.6,7.5c-0.1,0.9-0.2,1.8,0,2.7c0,0.3,0.1,0.6,0.2,0.8 c1,4,4.6,6.9,8.7,6.9c0.2,0,0.4,0,0.7,0c0.2,0,0.4,0,0.7,0c4.7-0.7,9.7-2.2,14.4-4.5C681.8,208.9,694.3,193.7,694.3,167.8 L694.3,167.8L694.3,167.8z M579.1,123.9c-1.7,11.8-9.2,22.2-19,28.1c-0.1,0.1-0.3,0.2-0.4,0.2c0,0-0.1,0-0.1,0.1 c-5.2,3-11,4.7-17,4.7c-2.8,0-5.5-0.4-8-1.2c-4.4-1.4-8.3-3.9-11.2-7.4c-2.9-3.5-4.7-7.8-5.4-12.6c0,0,0-0.1,0-0.1c0,0,0,0,0,0 c-0.4-2.9-0.4-5.9,0.1-9c0.7-4.6,2.2-9,4.5-13c3-5.4,7.2-10,12.1-13.5c5.9-4.1,12.8-6.6,19.9-6.6c4.8,0,9.2,1.1,12.9,3.3 c2.4,1.4,4.5,3.2,6.3,5.3c0.9,1.1,1.7,2.2,2.3,3.4c2.3,4,3.4,8.7,3.4,13.7C579.5,120.8,579.4,122.3,579.1,123.9z M271.6,156.1 c-4.9-1.3-9.1-3.9-12.2-7.8c-4.7-5.7-6.6-13.4-5.4-21.7c0,0,0-0.1,0-0.1c0.3-2.1,0.8-3.9,1.3-5.4c0.7-1.8,1.4-3.7,2.2-5.6 c0,0,0,0,0,0c0.1-0.3,0.3-0.5,0.4-0.8c0.3-0.5,0.5-1,0.8-1.5c0.1-0.2,0.2-0.3,0.3-0.5c2.2-3.7,4.9-7,8-9.8 c6.6-5.8,14.9-9.4,23.5-9.4c3.9,0,7.6,0.8,10.8,2.2c3.3,1.5,6.1,3.6,8.4,6.4c4.7,5.7,6.6,13.4,5.4,21.8 c-2.7,18.2-19.1,33.1-36.6,33.1C276.1,157,273.8,156.7,271.6,156.1z M45.3,157c-7.9,0-14.7-3.1-19.3-8.6c-0.5-0.6-0.9-1.2-1.3-1.8 c-3.8-5.5-5.2-12.5-4.1-20c2.7-18.2,19.2-33.1,36.8-33.1c7.9,0,14.7,3.1,19.3,8.6c4.7,5.7,6.7,13.4,5.4,21.8 c-0.2,1.4-0.5,2.8-0.9,4.2C76.8,144.3,61.5,157,45.3,157z" />
						</g>
					</svg>
				</div>
				<div className="flex">
					<button type="button" className="h-8 w-8">
						<svg
							className="h-6 w-6"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={1.5}
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</button>
				</div>
			</header>
			<main />
		</div>
	);
}
