import ComingSoon from "../components/comingSoon";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import PopupWidget from "../components/popupWidget";
import Head from "next/head";

export default function ComingSoonPage() {
    return (
        <>
            <Head>
                <title>DailyStaffing - Register</title>
                <meta
                    name="description"
                    content="A platform for workers to offer availability and businesses to create jobs/shifts and choose from job matching from a pool of workers."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <ComingSoon />
            <Footer />
            <PopupWidget />
        </>
    );
}
