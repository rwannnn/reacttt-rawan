import Image from "next/image";
import cleaning from "../../public/logos/cleann.png";
import paint from "../../public/logos/Painting-Services.png";
import plumb from "../../public/logos/plumb.png";
import electt from "../../public/logos/Electrical-Services-3-1024x682.jpg";
import window from "../../public/logos/window.png";
import move from "../../public/logos/moving.png";

export default function Projects() {
  return (
    <>
      <p className="text-[#1B262C] bg-[#FBE4CC] text-center font-bold text-3xl p-3">
        MOST POPULAR PROJECTS
      </p>
      <div className="bg-[#FBE4CC] flex justify-center">
        <div className="grid grid-cols-3 gap-5 items-center">
          <div className="bg-[#1B262C] p-4 w-[350px] h-[280px] flex flex-col items-center rounded-3xl">
            <div className="w-[280px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src={cleaning}
                width={280}
                height={180}
                objectFit="contain"
                alt="cleaning service"
              />
            </div>
            <p className="text-[#FBE4CC] mt-3 text-2xl">
              Home & Apartment Cleaning
            </p>
            <p className="text-[#FBE4CC]  text-sm">Projects starting at $49</p>
          </div>

          <div className="bg-[#1B262C] p-4 w-[350px] h-[280px] flex flex-col items-center rounded-3xl">
            <div className="w-[280px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src={paint}
                width={280}
                height={180}
                objectFit="contain"
                alt="painting service"
              />
            </div>
            <p className="text-[#FBE4CC] mt-3 text-2xl">Indoor Painting </p>
            <p className="text-[#FBE4CC]  text-sm">Projects starting at $79</p>
          </div>

          <div className="bg-[#1B262C] p-4 w-[350px] h-[280px] flex flex-col items-center rounded-3xl">
            <div className="w-[280px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src={move}
                width={280}
                height={180}
                objectFit="contain"
                alt="moving service"
              />
            </div>
            <p className="text-[#FBE4CC] mt-3 text-2xl">Help Moving</p>
            <p className="text-[#FBE4CC]  text-sm">Projects starting at $67</p>
          </div>
        </div>
      </div>
      <div className="bg-[#FBE4CC] flex justify-center pt-3">
        <div className="grid grid-cols-3 gap-5 items-center">
          <div className="bg-[#1B262C] p-4 w-[350px] h-[280px] flex flex-col items-center rounded-3xl">
            <div className="w-[280px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src={plumb}
                width={280}
                height={180}
                objectFit="contain"
                alt="plumbing service"
              />
            </div>
            <p className="text-[#FBE4CC] mt-3 text-2xl">
              Minor Plumbing Repairs
            </p>
            <p className="text-[#FBE4CC]  text-sm">Projects starting at $74</p>
          </div>

          <div className="bg-[#1B262C] p-4 w-[350px] h-[280px] flex flex-col items-center rounded-3xl">
            <div className="w-[280px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src={window}
                width={280}
                height={180}
                objectFit="contain"
                alt="window service"
              />
            </div>
            <p className="text-[#FBE4CC] mt-3 text-2xl">
              Window & Blinds Repair
            </p>
            <p className="text-[#FBE4CC]  text-sm">Projects starting at $61</p>
          </div>
          <div className="bg-[#1B262C] p-4 w-[350px] h-[280px] flex flex-col items-center rounded-3xl">
            <div className="w-[280px] h-[180px] flex items-center justify-center overflow-hidden">
              <Image
                src={electt}
                width={280}
                height={180}
                objectFit="contain"
                alt="window service"
              />
            </div>
            <p className="text-[#FBE4CC] mt-3 text-2xl">Electrical Help</p>
            <p className="text-[#FBE4CC]  text-sm">Projects starting at $69</p>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </>
  );
}
