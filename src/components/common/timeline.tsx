"use client";

// const timeline = [
//   {
//     date: "19 Oktober 2024",
//     activity: "Technical Meeting",
//     desc: "Test cuy",
//   },
//   {
//     date: "26 Oktober 2024",
//     activity: "Day 1",
//     desc: "Cihuy day 1",
//   },
//   {
//     date: "2 November 2024",
//     activity: "Day 2",
//     desc: "Yess day 2",
//   },
//   {
//     date: "3 November 2024",
//     activity: "Day 3",
//     desc: "Yess day 4",
//   },
//   {
//     date: "9 November 2024",
//     activity: "Day 4",
//     desc: "Yess day 4",
//   },
// ];

export function Timeline() {
  return (
    <ul className="font-bonobo text-neutral-950">
      <div className="p-10">
        <div className="flex items-center gap-5">
          <div className="h-10 w-10 rounded-full bg-neutral-400 md:h-12 md:w-12"></div>
          <div className="flex flex-col text-left font-bold md:text-lg">
            <li className="">19 Oktober 2024</li>
            <li className="">Technical Meeting</li>
          </div>
        </div>
        <div className="flex">
          <div className="flex h-auto w-10 md:w-12">
            <div className="mx-4 my-2 w-5 bg-neutral-400"></div>
          </div>
          <div className="">
            <li className="ml-10 h-auto w-auto pb-10 text-left text-sm md:text-base"></li>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-10 w-10 rounded-full bg-neutral-400 md:h-12 md:w-12"></div>
          <div className="flex flex-col text-left font-bold md:text-lg">
            <li className="">26 Oktober 2024</li>
            <li className="">Day 1</li>
          </div>
        </div>
        <div className="flex">
          <div className="flex h-auto w-10 md:w-12">
            <div className="mx-4 my-2 w-5 bg-neutral-400"></div>
          </div>
          <div className="">
            <li className="ml-10 h-auto w-auto pb-10 text-left text-sm md:text-base"></li>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-10 w-10 rounded-full bg-neutral-400 md:h-12 md:w-12"></div>
          <div className="flex flex-col text-left font-bold md:text-lg">
            <li className="">2 November 2024</li>
            <li className="">Day 2</li>
          </div>
        </div>
        <div className="flex">
          <div className="flex h-auto w-10 md:w-12">
            <div className="mx-4 my-2 w-5 bg-neutral-400"></div>
          </div>
          <div className="">
            <li className="ml-10 h-auto w-auto pb-10 text-left text-sm md:text-base"></li>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-10 w-10 rounded-full bg-neutral-400 md:h-12 md:w-12"></div>
          <div className="flex flex-col text-left font-bold md:text-lg">
            <li className="">3 November 2024</li>
            <li className="">Day 3</li>
          </div>
        </div>
        <div className="flex">
          <div className="flex h-auto w-10 md:w-12">
            <div className="mx-4 my-2 w-5 bg-neutral-400"></div>
          </div>
          <div className="">
            <li className="ml-10 h-auto w-auto pb-10 text-left text-sm md:text-base"></li>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="h-10 w-10 rounded-full bg-neutral-400 md:h-12 md:w-12"></div>
          <div className="flex flex-col text-left font-bold md:text-lg">
            <li className="">9 November 2024</li>
            <li className="">Day 4</li>
          </div>
        </div>
        <div className="flex">
          <div className="flex h-auto w-10 md:w-12">
            <div className="mx-4 my-2 w-5 bg-white"></div>
          </div>
          <div className="">
            <li className="ml-10 h-auto w-auto pb-10 text-left text-sm md:text-base"></li>
          </div>
        </div>
      </div>
    </ul>
  );
}
