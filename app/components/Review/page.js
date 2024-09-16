import Image from "next/image";
import star from "../../public/logos/star.png";

export default function Projects() {
  return (
    <>
      <p className="text-[#1B262C] bg-[#FBE4CC] font-bold text-center text-3xl p-3">
        See what happy customers are saying about FIX IT
      </p>
      <div className="bg-[#FBE4CC] flex justify-center">
        <div className="grid grid-cols-4 gap-5 items-center">
          {/* Card 1 */}
          <div className="text-[#1B262C] bg-[#FBE4CC] border-[#1B262C] border-4 p-3 w-[350px] h-[300px] flex flex-col rounded-3xl overflow-hidden">
            <div className="w-[280px] h-[90px] flex flex-col items-center justify-center overflow-hidden">
              <div className="flex items-center space-x-5">
                <p className="font-bold text-lg">Mary K.</p>
                <Image src={star} width={100} height={30} alt="Star rating" />
              </div>
            </div>
            <p className="mt-3 text-lg line-clamp-4 overflow-hidden text-[#1B262C]">
              My Mom was very pleased with her service, the products used and
              the attentiveness by the ladies who cleaned the apartment.
            </p>
            <a href="#">
              <p className="mt-5 text-2xl font-bold text-[#FBE4CC] text-center bg-[#1B262C]">
                Apartment Cleaning
              </p>
            </a>
          </div>

          {/* Card 2 */}
          <div className="text-[#1B262C] bg-[#FBE4CC] border-[#1B262C] border-4 p-3 w-[350px] h-[300px] flex flex-col rounded-3xl overflow-hidden">
            <div className="w-[280px] h-[90px] flex flex-col items-center justify-center overflow-hidden">
              <div className="flex items-center space-x-5">
                <p className="font-bold text-lg">Amanda L.</p>
                <Image src={star} width={100} height={30} alt="Star rating" />
              </div>
            </div>
            <p className="mt-3 text-lg line-clamp-4 overflow-hidden text-[#1B262C]">
              I hired Joe to patch 2 holes on my wall and 1 hole on my ceiling.
              Joe was great with communication, was fast, professional and did a
              fantastic job.
            </p>
            <a href="#">
              <p className="text-[#FBE4CC] text-center bg-[#1B262C] mt-5 text-2xl font-bold">
                Home Repairs
              </p>
            </a>
          </div>

          {/* Card 3 */}
          <div className="text-[#1B262C] bg-[#FBE4CC] border-[#1B262C] border-4 p-3 w-[350px] h-[300px] flex flex-col rounded-3xl overflow-hidden">
            <div className="w-[280px] h-[90px] flex flex-col items-center justify-center overflow-hidden">
              <div className="flex items-center space-x-5">
                <p className="font-bold text-lg">Sabrina K.</p>
                <Image src={star} width={100} height={30} alt="Star rating" />
              </div>
            </div>
            <p className="mt-3 text-lg line-clamp-4 overflow-hidden text-[#1B262C]">
              Aleksandr was fantastic! He came with all the equipment to do the
              job, even the hardware I didn't know I would need.
            </p>
            <a href="#">
              <p className="text-[#FBE4CC] text-center bg-[#1B262C] mt-5 text-2xl font-bold">
                Electrical Help
              </p>
            </a>
          </div>

          {/* Card 4 */}
          <div className="text-[#1B262C] bg-[#FBE4CC] border-[#1B262C] border-4 p-3 w-[350px] h-[300px] flex flex-col rounded-3xl overflow-hidden">
            <div className="w-[280px] h-[90px] flex flex-col items-center justify-center overflow-hidden">
              <div className="flex items-center space-x-5">
                <p className="font-bold text-lg">Jana T.</p>
                <Image src={star} width={100} height={30} alt="Star rating" />
              </div>
            </div>
            <p className="mt-3 text-lg line-clamp-4 overflow-hidden text-[#1B262C]">
              Jose fixed my AC drain line which was clogging my master bathroom
              sink. He was prompt, communicative, and efficient. Highly
              recommend!
            </p>
            <a href="#">
              <p className="text-[#FBE4CC] text-center bg-[#1B262C] mt-5 text-2xl font-bold">
                Plumbing
              </p>
            </a>
          </div>
          <br />
        </div>
      </div>
    </>
  );
}
