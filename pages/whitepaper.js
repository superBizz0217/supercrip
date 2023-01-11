import Header from "../components/header"
import Footer from "../components/footer"
import Image from "next/image"
import dash from "../public/images/dash.png"
import forrest from "../public/gifs/forrest.gif"
import Driver from "../components/driver"

export default function Whitepaper() {
    return (
        <>
            <Header />
            <main className="pt-10 relative">
                <div className="container">
                    <section>
                        <h1 className="font-heading text-primary whitepaper inline-block mb-6 lg:mb-12">
                            <span className="inline-block">WHITEPAPER</span>
                            <span className="inline-block align-middle">
                                <Image src={dash} alt="dash" width={21} height={26} className="dash mr-2" />
                            </span>
                            <span className="inline-block">MANIA</span>
                            <span className="block" >Supercrip</span>
                        </h1>
                        <div className="flex whitepaper driver-section">
                            <Driver src="/gifs/white_paper.gif" class="white-paper-driver left" />
                            <Driver src="/gifs/driver4.gif" class="white-paper-driver right" />
                        </div>
                        <p className="text-xl text-black mb-5 lg:mb-8 lg:w-11/12">
                            You wanna know about “NFT utility” right? You have the right to ask. I would if I were you...
                            The main purpose here: To create a movie starring a disabled guy played by a disabled guy
                            produced by that same disabled guy… the guy from the NFT’s, yeah him.
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8 lg:w-11/12">
                            We realize leading characters with disabilities are historically played by people without any disability at all.
                            26% of the population has some form a disability yet less than 1% of all performers
                            in movies and TV have a disability. Mind blowing, isn’t it? So, we are flipping the script.
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8 lg:w-11/12">
                            What's that? Yes, you can totally help us make this movie a success so we can make more movies and
                            create more opportunities for performers with disabilities… maybe even go so far as to cast “disabled folks” in
                            non-disabled parts! What a concept!
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8">
                            We’re aware that most people will want to know that a chunk of the cash being raised is going to the
                            organizations below. Not only is it the right thing to do, but it is a good strategic move on our part.
                            We need their support just much as we need yours!  So, yes we are!
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8">
                            In addition to a part of every sale going to supporting these Non-Profits and causes, we are creating
                            the Supercrip Derby game for racing our Supercrip NFTs. Each character will have various levels and powers
                            when pitted against one another to win Supercrip Coins. The Supercrip Coin will be a blockchain currency
                            used to raise funds for future projects (including Supercrip The Movie) that include people
                            with disabilities.
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8">
                            The long term goal is to create a self-sufficient financing source for quality independently financed
                            and produced films that are both socially conscious and have people with disabilities in front of or
                            behind the camera.
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8">
                            You might say: “Those are some lofty goals!” We agree, they are. And we also realize that
                            people can be politely selfish. They say: “Oh great, helping a bunch of disabled people.”
                            But what they really mean is: “Big freaking deal. How does helping them help me?”
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8">
                            Well, we can't give you a disabled parking spot at the mall, but we are going to give you some other cool stuff,
                            just because it's the right thing to do.
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8">
                            We are giving away one big prize and a couple of smaller ones…
                            Our way of thanking you for taking the adventure with us and supporting Supercrip!
                        </p>
                        <p className="text-xl text-black mb-5 lg:mb-8">
                            THE SWAG (**After the first 2000 are sold):
                        </p>
                        <p className="text-xl text-primary mb-5 lg:mb-8">
                            A four days/three nights trip to Hawaii, airfare for two, and a swanky hotel room to kick off your shoes or park
                            your wheelchair if you roll. Plus, a set of snorkel gear Aquaman would be jealous of! (Or $2500 USD)
                        </p>
                        <p className="text-xl text-primary mb-5 lg:mb-8">
                            Two nights at either Disneyland or Disneyworld, two day passes to the park where you ride Indiana Jones Adventure,
                            and bask in all the cliches. Yep, you can ride Indiana Jones all day long if you want! (Or $1000 USD)
                        </p>
                        <p className="text-xl text-primary mb-5 lg:mb-8">
                            A bowling party at your nearest lane. Drinks and bowling shoes on us. The Dude would approve. (Or $500 USD)
                        </p>
                    </section>
                    <section className="mt-6 lg:mt-12">
                        <h1 className="font-heading text-primary inline-block mb-6 lg:mb-12">
                            The Roadmap
                        </h1>
                        <div className="lg:grid lg:grid-cols-12 gap-5">
                            <div className="col-span-6">
                                <p className="text-xl text-primary mb-5 lg:mb-8">
                                    Season One:
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Hire a casting director, then cast a few big name actors to support Toby.
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Hire a seasoned sales team.
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Promote, promote, promote.
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Budget the film, scout the locations, hire key crew members.
                                </p>
                                <p className="text-xl text-primary mb-5 lg:mb-8">
                                    Season Two:
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Raise the rest of the production funds.
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Make the film.
                                </p>
                                <p className="text-xl text-primary mb-5 lg:mb-8">
                                    Season Three:
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Promote the film’s release to the public.
                                </p>
                                <p className="text-xl text-black mb-5 lg:mb-8">
                                    Badda bing, badda boom!
                                </p>
                            </div>
                            <div className="col-span-6">
                                <Image src={forrest} alt="forrest" className="w-full" />
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    )
}