import type { AppProps } from "next/app";
import '../styles/globals.scss'
import Layout from "@/components/layouts";
import { register } from "swiper/element";

register();
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
};