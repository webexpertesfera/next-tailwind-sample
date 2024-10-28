import Image from "next/image";
import banner from "../../public/assets/banner.png";
import "./globals.css";
import { InhouseFlight } from "./_homeComponents/InhouseFlight";
import { PrivateFlight } from "./_homeComponents/PrivateFilght";
import { Header } from "./_homeComponents/Header";
import { WhyEvojets } from "./_homeComponents/WhyEvojets";
import { AboveFooterCta } from "./_homeComponents/AboveFooterCta";
import { Footer } from "./_homeComponents/Footer";

export default function Home() {
  return (
    <main className="">
      <Header />
      <section className="pt-32 lg:pt-36  px-4 bg-banner-bg bg-bottom bg-no-repeat bg-lightbg bg-cover">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
            <div className="text-white">
              <h2 className="text-4xl lg:text-5xl 2xl:text-6xl font-semibold mb-8">
                Instant aviation infrastructure
              </h2>
              <p className="text-base leading-normal">
                Flight Deck helps organizations offer private flight booking
                directly to customers. Convert your private flight demand with
                our suite of software services and operational resources - no
                aviation experience required.
              </p>
              <div className="banenr-btns pt-10 flex gap-5">
                <button className="text-white text-sm 2xl:text-base rounded-3xl bg-primary-color px-10 py-2">
                  Get Started
                </button>
                <button className="text-white  text-sm 2xl:text-base px-1 py-2 border-b border-border-color">
                  Learn More
                </button>
              </div>
            </div>
            <div className="xl:col-span-2 text-end">
              <Image
                className="w-full lg:w-4/5 lg:ml-auto"
                src={banner}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
      <InhouseFlight />
      <PrivateFlight />
      <WhyEvojets />
      <div className="-mt-36">
        <AboveFooterCta />
      </div>
      <Footer />
    </main>
  );
}
