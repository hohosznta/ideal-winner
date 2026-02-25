import type { Page8Data } from "@/types/report";
import { ChartImage } from "@/components/shared/ChartImage";

interface Props { data: Page8Data; }

export function Page8SkillsSummary({ data }: Props) {
  const directions = [
    { label: "방향 1", sub: "Small Gap → Level Up 준비", text: data.gap_direction1 },
    { label: "방향 2", sub: "Big Gap → Level 차이 인식", text: data.gap_direction2 },
    { label: "방향 3", sub: "Self 미체크 항목 인식", text: data.gap_direction3 },
  ];

  return (
    <div className="page-container p-6 md:p-8 relative">
      {/* 헤더 */}
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-700">4.1. [전문스킬] Summary</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 기대 레벨 & 현재 레벨 */}
      <section className="mb-6">
        {data.current_level != null && (
          <div className="flex items-center justify-between bg-white p-2 mb-6">
            <p className="font-bold text-lg leading-tight text-gray-900">
              현 전문스킬 수준 진단 결과{" "}
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 rounded-md mx-1 font-bold text-sm border border-yellow-200">
                {data.current_level_name ? `${data.current_level_name} ` : ""}Level {data.current_level}
              </span>{" "}
              단계에 있습니다.
            </p>
          </div>
        )}
      </section>

      {/* 차트 이미지 */}
      {data.chart_url && (
        <div className="mb-3">
          <ChartImage src={data.chart_url} alt="전문스킬 차트 1" className="w-full object-contain" />
        </div>
      )}
      {data.chart_url_2 && (
        <div className="mb-2">
          <ChartImage src={data.chart_url_2} alt="전문스킬 차트 2" className="w-full object-contain" />
        </div>
      )}

      {/* Comment (GAP 이해) */}
      <section className="grid grid-cols-1 gap-3 mb-6 mt-4">
        <div>
          <h3 className="inline-block border border-gray-800 px-4 py-1 text-sm font-bold mb-0 relative z-10 bg-white ml-4">
            Comment (GAP 이해)
          </h3>
          <div className="border border-gray-300 bg-gray-50 w-full p-4 -mt-3 rounded-sm shadow-inner">
            {directions.map((d, i) => (
              <div key={i} className={i < directions.length - 1 ? "mb-3" : ""}>
                <p className="font-semibold text-gray-800 text-sm mb-1">
                  {d.label}. {d.sub}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {d.text || "(AI 코멘트 준비 중)"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="mt-6 text-right text-gray-300 text-xs">3</footer>
    </div>
  );
}
