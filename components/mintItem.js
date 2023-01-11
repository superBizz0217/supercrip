import Image from "next/image";

export default function MintItem(props) {
    const superPowered = 'super powered';
    const standAlone = 'stand alone';
    const franchise = 'franchise';

    return (
        <div className="mt-6 lg:mt-0 mint-item">
            {/* <video autoPlay loop muted playsInline controls >
                <source src={props.image} type='video/webm;codecs="vp8, vorbis"' />
            </video> */}
            <Image 
                src={props.image} 
                alt="mint item" 
                sizes="340px 340px" 
                width={340} 
                height={340} 
                className="w-full" 
                placeholder="blur" 
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=" />
            <div className="lg:min-h-[10rem]">
                <div className="text-xl capitalize font-typewriter font-bold mt-6">
                    <span className="text-dark">{props.character} #{props.start+1 + props.block * props.index}</span>
                </div>
                <div className="text-base font-typewriter">
                    <span className="text-primary capitalize">power: </span>
                    <span className="text-dark">{props.power}</span>
                </div>
                <div className="text-base font-typewriter">
                    <span className="text-primary capitalize">criptonite: </span>
                    <span className="text-dark">{props.criptonite}</span>
                </div>
            </div>
            <h2 className="text-2xl font-typewriter font-bold text-primary mb-1">({props.quantity} Total)</h2>
            <div className="text-center mt-6">
                <a href="https://app.supercrip.io/" target="_blank" className="uppercase bg-pink-500 text-base font-acier text-white px-6 py-4 rounded-md">Mint {props.type}</a>
            </div>
        </div>
    )
}