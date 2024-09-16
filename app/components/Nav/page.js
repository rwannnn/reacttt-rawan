import Image from "next/image";
import bgg from "../../public/logos/home bg.png";

export default function Nav() {
  return (
    <div className="bg-[#1B262C] flex justify-center p-4 mt-16">
      {/* mt-16 adjusts for header height */}
      <Image
        src={bgg}
        width={150}
        height={50}
        className="w-full h-96 overflow-hidden relative"
      ></Image>
      <div className="absolute pt-52">
        <div class="">
          <div class="relative rounded-3xl bg-[#1B262C] pt-4 pb-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:px-10">
            <p className="p-3 font-semibold text-[#FBE4CC]">
              What do you need help with ?
            </p>
            <div class="mx-auto max-w-md">
              <form action="" class="relative mx-auto w-max">
                <input
                  type="search"
                  class="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-[ #FBE4CC] focus:pl-16 focus:pr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent text-[#FBE4CC]  px-3.5 peer-focus:border-[#FBE4CC] peer-focus:text-[#FBE4CC] "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
