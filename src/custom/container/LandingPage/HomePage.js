import styles from "./HomePage.module.css";
import { ThemeProvider } from "../../../context/ThemeContext";

import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import AnimatedSection from "./Partials/Section/AnimatedSection";

import WhyUsSection from "./Sections/Why/Why";
import HeroSection from "./Sections/Hero/Hero";
import WorkSection from "./Sections/Work/Work";
import NeedSection from "./Sections/Need/Need";
import TeamSection from "./Sections/Team/Team";
import EventSection from "./Sections/Event/Event";
import AboutSection from "./Sections/About/About";
import GuideSection from "./Sections/Guide/Guide";
import VideoSection from "./Sections/Video/Video";
import SellerSection from "./Sections/Seller/Seller";
import ReviewSection from "./Sections/Review/Review";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.root}>
        <HeroSection />

        <AnimatedSection animationType="fadeUp" delay={0.1}>
          <WorkSection />
        </AnimatedSection>

        <AnimatedSection animationType="fadeLeft" delay={0.2}>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection animationType="scaleUp" delay={0.1}>
          <GuideSection />
        </AnimatedSection>

        <AnimatedSection animationType="fadeRight" delay={0.2}>
          <NeedSection />
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={0.1}>
          <SellerSection />
        </AnimatedSection>

        <AnimatedSection animationType="slideLeft" delay={0.2}>
          <WhyUsSection />
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={0.1}>
          <EventSection />
        </AnimatedSection>

        <AnimatedSection animationType="fadeRight" delay={0.2}>
          <ReviewSection />
        </AnimatedSection>

        <AnimatedSection animationType="scaleUp" delay={0.1}>
          <VideoSection />
        </AnimatedSection>

        <AnimatedSection animationType="fadeUp" delay={0.2}>
          <TeamSection />
        </AnimatedSection>
      </main>
      <Footer />
    </>
  );
}
