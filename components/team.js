import Image from "next/image"

export default function Team(props) {
    return (
        <div className="team mb-8 px-8 lg:px-[3rem]">
            <h2 className="font-heading capitalize text-primary text-center text-[2.85rem]">{props.name}</h2>
            <h2 className="font-acier text-primary text-center text-lg">({props.pos})</h2>
            <Image src={props.image} alt="team" width={275} height={375} className="w-full" />
            <div className="md:min-h-[16rem] lg:min-h-[23rem] xl:min-h-[16rem]">
                <div className="text-base font-sans mt-6">
                    <span className="text-primary capitalize">power: </span>
                    <span className="text-dark">{props.power}</span>
                </div>
                <div className="text-base font-sans">
                    <span className="text-primary capitalize">criptonite: </span>
                    <span className="text-dark">{props.criptonite}</span>
                </div>
                <div className="text-base font-sans">
                    <span className="text-primary capitalize">struggle: </span>
                    <span className="text-dark">{props.struggle}</span>
                </div>
                <div className="text-base font-sans">
                    <span className="text-primary capitalize">gameplan: </span>
                    <span className="text-dark">{props.gameplan}</span>
                </div>
            </div>
            <h2 className="text-2xl font-typewriter font-bold text-primary-400 mt-3 mb-1">(1 of 1 Total)</h2>
        </div>
    )
}