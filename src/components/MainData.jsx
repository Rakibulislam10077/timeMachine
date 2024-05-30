// eslint-disable-next-line react/prop-types
export default function MainData({ d }) {
  // const totalTime = d?.reduce(
  //   (acc, work) => {
  //     acc.hours += parseInt(work.workHours);
  //     acc.minutes += parseInt(work.workMinutes);
  //     return acc;
  //   },
  //   { hours: 0, minutes: 0 }
  // );

  // Convert minutes to hours if 60 or more
  // totalTime.hours += Math.floor(totalTime.minutes / 60);
  // totalTime.minutes = totalTime.minutes % 60;
  // console.log(totalTime);

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types*/}
      <div className="">
        <div className="flex flex-row justify-between border-b">
          <h1>{d?.projectName}</h1>
          <h1>
            ({d?.hours}h {d?.minutes}mins)
          </h1>
        </div>
        <div className="flex flex-row justify-between">
          <h1>{d?.title}</h1>
          <h1>
            ({d?.hours}h {d?.minutes}mins)
          </h1>
          <span className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7l16 0" />
              <path d="M10 11l0 6" />
              <path d="M14 11l0 6" />
              <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
              <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}
