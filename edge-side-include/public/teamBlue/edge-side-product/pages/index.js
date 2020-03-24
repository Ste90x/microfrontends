import React from 'react';
import Head from "next/head";
import App from './App';

import "./index.scss";

const Index = () => (
    <div className="root">
        <Head>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
        </Head>
        <App />
    </div>
);

export default Index;