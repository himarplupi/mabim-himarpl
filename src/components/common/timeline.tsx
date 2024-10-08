import { CheckIcon } from "@radix-ui/react-icons";

interface TimelineItemProps {
  date: string;
  title: string;
  desc: string;
}

interface TimelineItemComponentProps {
  item: TimelineItemProps;
  index: number;
  currentDate: Date;
  nextDate?: string;
}

const timeline: TimelineItemProps[] = [
  {
    date: "2024-10-09",
    title: "Technical Meeting",
    desc: "Test cuy",
  },
  {
    date: "2024-10-26",
    title: "Day 1",
    desc: "Cihuy day 1",
  },
  {
    date: "2024-11-02",
    title: "Day 2",
    desc: "Yess day 2",
  },
  {
    date: "2024-11-03",
    title: "Day 3",
    desc: "Yess day 4",
  },
  {
    date: "2024-11-09",
    title: "Day 4",
    desc: "Yess day 4",
  },
];

export function Timeline() {
  const currentDate = new Date();

  return (
    <ul className="font-bonobo text-neutral-950">
      {timeline.map((item, index) => {
        const nextDate = timeline[index + 1]?.date;
        return (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            currentDate={currentDate}
            nextDate={nextDate}
          />
        );
      })}
    </ul>
  );
}

// Functional component for rendering each timeline item
function TimelineItem({
  item,
  index,
  currentDate,
  nextDate,
}: TimelineItemComponentProps) {
  const isFutureDate = currentDate.getTime() < new Date(item.date).getTime();
  return (
    <div key={index}>
      <div className="flex items-center gap-5">
        {isFutureDate ? (
          <div className="h-10 w-10 rounded-full border border-neutral-400/90 bg-neutral-400/80 shadow-md md:h-12 md:w-12" />
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-500/90 bg-primary-500/90 shadow-md md:h-12 md:w-12">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-400/90">
              <CheckIcon className="h-7 w-7 text-primary-50" />
            </div>
          </div>
        )}
        <div className="flex flex-col text-left font-semibold">
          <li className="text-xl tracking-wide text-neutral-950 md:text-2xl">
            {new Date(item.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </li>
          <li className="text-lg text-neutral-700 md:text-xl">{item.title}</li>
        </div>
      </div>
      <div className="flex">
        <div className="flex h-auto w-10 md:w-12">
          {nextDate && (
            <div
              className={`mx-4 my-2 w-5 rounded-sm border ${isFutureDate ? "border-neutral-400/90 bg-neutral-400/80" : "border-primary-500/90 bg-primary-500/90"} shadow-md`}
            ></div>
          )}
        </div>
        <div>
          <li className="ml-5 h-auto w-auto pb-10 pt-2 text-left text-neutral-600 md:text-lg">
            {item.desc}
          </li>
        </div>
      </div>
    </div>
  );
}
