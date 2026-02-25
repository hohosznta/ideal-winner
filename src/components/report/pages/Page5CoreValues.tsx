import type { Page5Data } from "@/types/report";
import { ChartImage } from "@/components/shared/ChartImage";

interface Props { data: Page5Data; }

const GRADE_LEGEND = [
  { label: "혁신적 선도(Transformative):", desc: "세상에 없는 새로운 가치(본질)를 만드는 인재" },
  { label: "주도적 개선(Proactive):",       desc: "업계 및 특정분야 최고의 가치를 만드는 인재" },
  { label: "능동적 수행(Active):",           desc: "주어진 과업을 충실히 이해하고 결과를 만드는 인재" },
  { label: "수동적 대응(Passive):",          desc: "주어진 과정의 실행력이 부족 인재" },
];

export function Page5CoreValues({ data }: Props) {
  return (
    <div className="page-container p-8">
      {/* 헤더 */}
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-700">3.1. [핵심가치] Summary</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 등급 문구 */}
      <div className="text-xl font-bold text-gray-800 leading-relaxed mb-4">
        {data.grade_desc}{" "}
        <span className="inline-block bg-orange-100 text-orange-700 px-4 py-1 rounded-md mx-1 font-bold">
          {data.grade_label}
        </span>{" "}
        인재의 단계에 계십니다.
      </div>

      {/* 레이더 차트 */}
      <div className=" rounded-lg border shadow-sm flex justify-center">
      <ChartImage
        src={data.radar_chart_url}
        alt="핵심가치 레이더 차트"
        className="w-2/3 h-auto"
      />
    </div>

      {/* Top3 / Bottom3 */}
      <table className="report-table mt-6">
        <thead>
          <tr>
            <th className="table-header w-1/2">Top 3</th>
            <th className="table-header w-1/2">Bottom 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-left p-4">
              {data.top3.map((item) => (
                <div key={item.rank} className="mb-1 text-sm">
                   {item.rank}. {item.category}
                </div>
              ))}
            </td>
            <td className="text-left p-4">
              {data.bottom3.map((item) => (
                <div key={item.rank} className="mb-1 text-sm">
                   {item.rank}. {item.category} 
                </div>
              ))}
            </td>
          </tr>
        </tbody>
      </table>

      {/* AI 코멘트 */}
      <div className="border border-gray-300 bg-gray-50 min-h-32 w-full p-6 mt-4 rounded-sm shadow-inner">
        <p className="text-gray-700 text-sm whitespace-pre-line leading-relaxed">
          {data.ai_comment}
        </p>
      </div>
    </div>
  );
}
