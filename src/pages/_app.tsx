import type { AppProps } from "next/app";
import '../styles/globals.scss'
import Layout from "@/components/layouts";
import React from "react";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};
