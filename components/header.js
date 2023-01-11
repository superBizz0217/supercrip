import Image from "next/image";
import NextLink from 'next/link'
import { Link } from "react-scroll";
import { Navbar } from "flowbite-react";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();
    return (
        <header className="">
            <Navbar className="px-4 lg:px-6 py-2.5 bg-transparent" fluid={true} rounded={true}>
                <NextLink href="/" style={{zIndex:99}}>
                    <Image
                        src="/logo.png"
                        className="logo-brand mr-3"
                        alt="Logo"
                        sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                        33vw"
                        loading="lazy"
                        width={150}
                        height={180}
                    />
                </NextLink>
                <Navbar.Toggle id="toggle-btn" />
                <Navbar.Collapse className="nav-collaps">
                    <ul className="flex flex-col font-medium md:flex-row md:space-x-8 md::mt-0 text-center md::text-left">
                        <li>
                            <NextLink href="/" className="text-red uppercase font-acier text-lg" aria-current="page">Home</NextLink>
                        </li>
                        <li>
                            <NextLink href="/whitepaper" className="text-red uppercase font-acier text-lg" aria-current="page">White Paper</NextLink>
                        </li>
                        <li>
                            {
                                router.pathname == "/" ? <Link to="charaters" spy={true} smooth={true} offset={-70} duration={500} className="text-red uppercase font-acier text-lg cursor-pointer" aria-current="page">Character</Link>
                                    : <NextLink href="/#charaters" className="text-red uppercase font-acier text-lg" aria-current="page">character</NextLink>
                            }

                        </li>
                        <li>
                            <NextLink href="info" className="text-red uppercase font-acier text-lg" aria-current="page">Info</NextLink>
                        </li>
                        <li>
                            <NextLink href="https://app.supercrip.io/" target="_blank" className="text-red uppercase font-acier text-lg" aria-current="page">Mint</NextLink>
                        </li>
                        <li>
                            <NextLink href="#" className="text-red uppercase font-acier text-lg" aria-current="page">Join our discord</NextLink>
                        </li>
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}