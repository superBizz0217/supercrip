import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"
import Team from "../components/team"
import teams from "../assets/teams"
import american from "../public/gifs/american.gif"
import Driver from "../components/driver"

export default function Info() {
  return (
    <>
      <Header />
      {/* <Image src={aquamnaHeder} alt="Aquaman header" className="info-video" /> */}
      <main className="pt-10">
        <div className="container">
          <section>
            <h1 className="font-heading info text-primary inline-block lg:mb-0 ">
              <span className="inline-block md:block">What is </span>
              <span className="inline-block md:block ml-3">SuperCrip</span>
            </h1>
            <div className="flex whitepaper driver-section info">
              <Driver src="/gifs/driver9.gif" class="white-paper-driver left" />
              <Driver src="/gifs/driver10.gif" class="white-paper-driver right" />
            </div>
            <p className="font-bold text-primary font-sans mx-auto text-[1.2rem] md:text-xl px-3 mt-8">
              Supercrip is a feature film about a disabled
              actor in Hollywood produced and directed by
              the people who made:
              <br />
              <span className="font-heading text-2xl text-shadow">BOTTLE SHOCK, </span>
              <span className="font-heading text-2xl text-shadow">CBGB, </span>
              <span className="font-heading text-2xl text-shadow">NOBEL SON, </span>
              <span className="font-heading text-2xl text-shadow">MARILYN HOTCHKISS, </span>and
              <span className="font-heading text-2xl text-shadow"> COFFEE WARS </span>.
            </p>
          </section>

          <section className="mt-10">

            <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 xl:gap- 2xl:gap-[5rem]">
              {/* {teams.map((e) => (
                <div key={e.name} className="col-span-1">
                  <Team {...e} />
                </div>
              ))} */}
              <div className="col-span-1">
                <Team {...teams[0]} />
              </div>
              <div className="col-span-1">
                <Team {...teams[1]} />
              </div>
              <div className="col-span-1">
                <Team {...teams[2]} />
              </div>

              <div className="col-span-3">
                <iframe
                  src="https://player.vimeo.com/video/271161166"
                  frameBorder="0"
                  className='w-full md:h-[600px] mb-8 lg:mb-0'
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen />
              </div>

              <div className="col-span-1">
                <Team {...teams[3]} />
              </div>

              <div className="col-span-1 flex items-center">
                <Image src={american} className="w-full" />
              </div>

              <div className="col-span-1">
                <Team {...teams[4]} />
              </div>
            </div>

          </section>

        </div>
      </main>

      <Footer />
    </>
  )
}
