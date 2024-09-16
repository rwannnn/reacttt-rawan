import Image from "next/image";
import clean from "../../public/logos/mop.png";
import paint from "../../public/logos/paint-roller.png";
import elect from "../../public/logos/light-bulb.png";
import tool from "../../public/logos/tools.png";
import move from "../../public/logos/fast-delivery.png";

export default function Cat() {
  return (
    <>
      <div className="bg-[#FBE4CC] text-[#1B262C] p-6">
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-8 md:gap-16 p-3">
            <li className="flex flex-col items-center space-y-2 p-3">
              <a href="#">
                <Image
                  src={clean}
                  width={50}
                  height={50}
                  alt="cleaning"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Cleaning
                </p>
              </a>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <a href="#">
                <Image
                  src={paint}
                  width={50}
                  height={50}
                  alt="painting"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Painting
                </p>
              </a>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <a href="#">
                <Image
                  src={elect}
                  width={50}
                  height={50}
                  alt="electrical"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Electrical
                </p>
              </a>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <a href="#">
                <Image
                  src={tool}
                  width={50}
                  height={50}
                  alt="tools"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Home Repairs
                </p>
              </a>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <a href="#">
                <Image
                  src={move}
                  width={50}
                  height={50}
                  alt="moving"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Moving
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
