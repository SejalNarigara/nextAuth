import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css from 'styles/Home.module.css';

// config
import { getAuth, signOut } from 'config/firebase';

// context

import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

export default function Animation() {



    const gf = new GiphyFetch('jNukRbo4dy4UrVTqisYrvudTOYWYcgs9')
    const fetchGifs = () => gf.trending({ limit: 10, offset: 25, rating: 'g'})


    return (
        <div className={css.container}>
            <Head>
                <title>Next.js Animation Page</title>
            </Head>

            <main className={css.main}>
                <div className={css.user}>
                    <Grid width={400} columns={3} gutter={6} fetchGifs={fetchGifs} />
                    
                </div>
            </main>

        </div>
    );
}
