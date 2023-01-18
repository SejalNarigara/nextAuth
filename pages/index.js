import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css from 'styles/Home.module.css';

// config
import { getAuth, signOut } from 'config/firebase';

// context
import { AuthContext } from 'components/context/AuthContext';
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

export default function Home() {
	const { email, setEmail } = useContext(AuthContext);


	const gf = new GiphyFetch('jNukRbo4dy4UrVTqisYrvudTOYWYcgs9')
	const fetchGifs = () => gf.trending({ limit: 10, offset: 25, rating: 'g' })

	console.log(fetchGifs, "dataa")

	const handleLogout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				setEmail('');
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleChange = () => {
		router.push('/animation');
	};

	return (
		<div className={css.container}>
			<Head>
				<title>Next.js Firebase Auth Template</title>
			</Head>

			<main className={css.main}>
				{email !== '' ? (
					<>
						<div className={css.user}>
							{' '}
							<p>User email: {email}</p>
							<button className={css.button} onClick={handleLogout}>
								Logout
							</button>
							<button className={css.button} onClick={handleChange}>
								Open Gif
							</button>

						</div>

					</>
				) : (
					<>
						<Link href="/login" passHref>
							<button className={css.button}>
								Go To Login Page →{' '}
							</button>
						</Link>
						<Link href="/signup" passHref>
							<button className={css.button}>
								Go To Sign Up Page →{' '}
							</button>
						</Link>
					</>
				)}
			</main>

		</div>
	);
}
