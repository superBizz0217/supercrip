import Image from "next/image";
import logo1 from "../public/images/logo1.webp";
import logo2 from "../public/images/logo2.webp";
import logo3 from "../public/images/logo3.webp";
import logo4 from "../public/images/logo4.webp";
import logo5 from "../public/images/logo5.png";
import logo6 from "../public/images/logo6.png";
import logo7 from "../public/images/logo7.png";
import logo8 from "../public/images/logo8.png";
import logo9 from "../public/images/logo9.png";
import logo10 from "../public/images/logo10.png";
import logo11 from "../public/images/logo11.png";
import logo12 from "../public/images/logo12.png";
import logo13 from "../public/images/logo13.png";

const logos1 = [logo1, logo3, logo11, logo13, logo2, logo4];

const logos2 = [logo5, logo6, logo7, logo12, logo8, logo9, logo10];

export default function Footer() {
  return (
    <footer className="bg-white md:py-[5rem] mt-6 md:mt-0">
      <div className="container">
        <div className="md:grid md:grid-cols-2 lg:grid-cols-7">
          {logos1.map((e, i) => (
            <div key={i} className="col-span-1 md:flex items-center logo1 px-6 mb-6 lg:mb-0">
              <Image src={e} alt="logo" className="mx-auto md:mx-0" />
            </div>
          ))}
        </div>
        <div className="md:flex justify-center md:justify-between items-end flex-1 lg:flex-auto logos">
            {logos2.map((e, i) => (
                <div key={i} className="logo px-6 mb-6 lg:mb-0">
                    <Image src={e} alt="logo" className="mx-auto md:mx-0" />
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
}
