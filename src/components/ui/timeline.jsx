import { Caveat } from "next/font/google";

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

export function Timeline({ items }) {
  return (
    <div className={`${caveat.variable} -my-6`}>
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 sm:pl-32 py-6 group">
          {/* Purple label */}
          <div className="font-caveat font-medium mb-1 sm:mb-0">
            {item.label}
          </div>
          {/* Time + Title */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="text-xl font-bold text-slate-900">{item.title}</div>
          </div>
          {/* Description */}
          <div className="text-slate-500">{item.content}</div>
          <time className="sm: translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase  h-6 mb-3 px-2 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            {item.date}
          </time>
        </div>
      ))}
    </div>
  );
}
