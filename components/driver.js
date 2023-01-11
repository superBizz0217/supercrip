import Image from "next/image";

export default function Driver(props) {
    return (
    <div className={`driver ` + props.class}>
        <Image src={props.src} width={315} alt="driving accross" height={315} />
    </div>
    )
}