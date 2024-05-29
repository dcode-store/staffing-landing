import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo, jobTypes } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import JobTypes from "../components/jobTypes";

const Home = () => {
  return (
    <>
      <Head>
        <title>DailyStaffing | Simplify Your Staffing Process</title>
        <meta
          name="description"
          content="DailyStaffing is a comprehensive platform designed to simplify your staffing process. Connect with available workers, streamline job postings, and manage scheduling efficiently."
        />
        <meta name="keywords" content="staffing, daily staffing, job postings, workforce management, staff scheduling, staffing platform, find workers, staffing solutions" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="DailyStaffing | Simplify Your Staffing Process" />
        <meta property="og:description" content="DailyStaffing is a comprehensive platform designed to simplify your staffing process. Connect with available workers, streamline job postings, and manage scheduling efficiently." />
        <meta property="og:image" content="https://dcode.store/img/logo.png" />
        <meta property="og:url" content="https://dcode.store" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DailyStaffing | Simplify Your Staffing Process" />
        <meta name="twitter:description" content="DailyStaffing is a comprehensive platform designed to simplify your staffing process. Connect with available workers, streamline job postings, and manage scheduling efficiently." />
        <meta name="twitter:image" content="https://dcode.store/img/logo.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="DailyStaffing Benefits"
        title="Why should you use DailyStaffing ?">
        DailyStaffing is a comprehensive staffing solution that connects businesses with a pool of talented and available workers. Our platform is designed to streamline the staffing process and make it easier for businesses to find the right talent for their needs.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Job Types"
        title="Explore Available Job Types">
        Browse through the available job types to find the perfect match for your staffing needs.
      </SectionTitle>
      <JobTypes jobTypesData={jobTypes} />
      {/* <SectionTitle
        pretitle="Watch a video"
        title="Learn how to fullfil your needs">
        This section is to highlight a promo or demo video of your product.
        Analysts says a landing page with video has 3% more conversion rate. So,
        don&apos;t forget to add one. Just like this.
      </SectionTitle>
      <Video /> */}
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Have questions about how DailyStaffing works? Check out our frequently asked questions to learn more.
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;