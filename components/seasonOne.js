import Image from "next/image";

export default function SeasonOne(props) {
    
    return (
        <div className="mb-10 lg:mb-0">
            <h2 className="text-5xl uppercase font-heading text-primary-500 mb-3 text-center">{props.title}</h2>
            <div className="bg-white md:min-h-[40rem]">
                <Image src={props.imageUrl} width={340} height={340} alt="rairy level image" className="w-full" />
                <p className="text-dark capitalize font-bold text-xl my-6">{props.title}</p>
                <p className="text-lg leading-[1.5rem]">{props.desc}</p>
            </div>
        </div>
    )
}