import Image from "next/image"
import Header from "../components/header"
import Footer from "../components/footer"
import SeasonOne from "../components/seasonOne"
import seasonOnes from "../assets/seasonOne"
import { supers, alones, franchises } from "../assets/items"
import MintItem from "../components/mintItem"
import Driver from "../components/driver"
import firstGif from "../public/gifs/first.gif"

export default function Home() {
    const superPowered = 'super powered';
    const standAlone = 'stand alone';
    const franchise = 'franchise';

    return (
        <>
            <Header />
            <main className="mt-10">
                <div className="container">

                    <section>
                        <h1 className="font-heading text-primary inline-block lg:mb-0 ">
                            <span className="block">Meet the</span>
                            <span className="block">SuperCrips</span>
                        </h1>
                        <p className="text-primary text-2xl mt-3">A place where people with disabilities are the stars of the films we love.</p>
                        <div className="first-gif">
                            <Image src={firstGif} sizes="650px auto" alt="first gif" loading="lazy" />
                        </div>
                    </section>
                    
                    <section id="charaters" className="mt-14">
                        <h2 className="uppercase text-center text-primary-dark text-6xl font-heading leading-[5rem]">season one</h2>
                        <p className="font-bold text-secondary text-center text-4xl font-myriad mb-1">Rarity Levels</p>
                        <p className="text-secondary text-center text-xl">Supercrips have three rarity levels.</p>
                        
                        <div className="lg:grid lg:grid-cols-3 gap-16 mt-6 lg:mt-10">
                            {seasonOnes.map((e, i) => (
                                <div key={i} className="col-span-1">
                                    <SeasonOne {...e}/>
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="flex driver-section">
                        <Driver src="/gifs/driver1.gif" class="left" />
                        <Driver src="/gifs/driver2.gif" class="right" />
                    </div>

                    <section className="mt-8">
                        <h1 className="font-heading text-primary inline-block lg:mb-0">
                            Super Powered
                        </h1>
                        <p className="text-primary font-bold text-2xl mt-3">Edition of 5 (495 Total)</p>

                        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-[5rem] lg:mt-16">
                            {supers.map((e, i) => (
                                <div key={i} className="col-span-1">
                                    <MintItem {...e } index={i} start={0} block={99} type={superPowered}  />
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="flex driver-section">
                        <Driver src="/gifs/driver3.gif" class="left" />
                        <Driver src="/gifs/driver4.gif" class="right" />
                    </div>

                    <section className="mt-8">
                        <h1 className="font-heading text-primary inline-block lg:mb-0">
                            Stand Alone
                        </h1>
                        <p className="text-primary font-bold text-2xl mt-3">Edition of 7 (1400 Total)</p>
                        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-[5rem] lg:mt-16">
                            {alones.map((e, i) => (
                                <div key={i} className="col-span-1">
                                    <MintItem {...e} index={i} start={495} block={200} type={standAlone}  />
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    <div className="flex driver-section">
                        <Driver src="/gifs/driver8.gif" class="left" />
                        <Driver src="/gifs/driver5.gif" class="right" />
                    </div>

                    <section className="mt-8">
                        <h1 className="font-heading text-primary inline-block lg:mb-0">
                            Franchise
                        </h1>
                        <p className="text-primary font-bold text-2xl mt-3">Edition of 12 (3600 Total)</p>
                        <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 grid-rows-2 gap-[5rem] lg:mt-16">
                            {franchises.map((e, i) => (
                                <div key={i} className="col-span-1">
                                    <MintItem {...e} index={i} start={1896} block={300} type={franchise}  />
                                </div>
                            ))}
                        </div>
                    </section>
                    <div className="flex driver-section">
                        <Driver src="/gifs/driver6.gif" class="left" />
                        <Driver src="/gifs/driver7.gif" class="right" />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}