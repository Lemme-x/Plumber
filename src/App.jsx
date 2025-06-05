import React, { Suspense, lazy } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import NeverLookSection from './components/NeverLookSection' // This component is commented out

// Lazy load components
const ToughJobsSection = lazy(() => import("./components/ToughJobsSection"));
const DontWaitSection = lazy(() => import("./components/DontWaitSection"));
const WaterWoesSection = lazy(() => import("./components/WaterWoesSection"));
const CommitmentSection = lazy(() => import("./components/CommitmentSection"));
const HeadstrongSection = lazy(() => import("./components/HeadstrongSection"));
const SpecialOffers = lazy(() => import("./components/SpecialOffers"));
const Services = lazy(() => import("./components/Services"));
const WhyWaitSection = lazy(() => import("./components/WhyWaitSection"));
const AreasServed = lazy(() => import("./components/AreasServed"));
const ContactForm = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() => import("./components/Footer"));

// A simple fallback component for Suspense
const LoadingFallback = () => (
  <div
    style={{ textAlign: "center", padding: "20px", fontSize: "1.2em" }}
    data-oid="0efl60w"
  >
    Loading...
  </div>
);

function App() {
  return (
    <div className="font-poppins" data-oid="yc.4408">
      <Header data-oid="zzlgvxq" />
      <Hero data-oid="bzuvqjo" />
      {/* <NeverLookSection /> */}
      <Suspense
        fallback={<LoadingFallback data-oid="kh:sa-:" />}
        data-oid="6g_uvf1"
      >
        <ToughJobsSection data-oid="wspy8pb" />
        <DontWaitSection data-oid="vlm0k3q" />
        <WaterWoesSection data-oid="__n20_e" />
        <CommitmentSection data-oid="u:vdojs" />
        <HeadstrongSection data-oid=".bf_867" />
        <SpecialOffers data-oid="mmr2a.a" />
        <Services data-oid="5lya9yp" />
        <WhyWaitSection data-oid="7la.d4-" />
        <AreasServed data-oid="duxkdur" />
        <ContactForm data-oid="zs:ap1:" />
        <Footer data-oid="ibi0ew4" />
      </Suspense>
    </div>
  );
}

export default App;
