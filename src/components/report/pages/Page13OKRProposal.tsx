import type { Page13Data, OKRSection } from "@/types/report";

interface Props { data: Page13Data; }

function DirectionCell({ text }: { text: string }) {
  const lines = text.split("\n").filter(Boolean);
  return (
    <div className="text-xs leading-relaxed text-gray-700">
      {lines.map((line, i) => (
        <p key={i} className={i < lines.length - 1 ? "mb-1" : ""}>{line}</p>
      ))}
    </div>
  );
}

function TobeContent({ tobe }: { tobe: string | string[] }) {
  if (Array.isArray(tobe)) {
    return (
      <div className="space-y-1">
        {tobe.map((item, i) => {
          const parts = item.match(/^(•\s*)?(\[[^\]]+\])\s*(.*)$/);
          if (parts) {
            return (
              <p key={i}>
                {parts[1] && <span>{parts[1]}</span>}
                <span className="font-semibold">{parts[2]}</span>{" "}
                <span>{parts[3]}</span>
              </p>
            );
          }
          return <p key={i}>{item}</p>;
        })}
      </div>
    );
  }
  return <p className="text-xs text-gray-700">{tobe}</p>;
}

const ROWS: {
  label: [string, string];
  currentKey: keyof Page13Data | null;
  sectionKey: keyof Page13Data;
}[] = [
  {
    label: ["Individual", "Objective"],
    currentKey: "current_individual_objective",
    sectionKey: "improvement_individual_objective",
  },
  {
    label: ["Key", "Results"],
    currentKey: null,
    sectionKey: "improvement_key_results",
  },
  {
    label: ["결과", "(정량)"],
    currentKey: "current_quantitative",
    sectionKey: "improvement_quantitative",
  },
  {
    label: ["결과", "(정성)"],
    currentKey: "current_qualitative",
    sectionKey: "improvement_qualitative",
  },
];

export function Page13OKRProposal({ data }: Props) {
  return (
    <div className="page-container p-6 md:p-8 relative">
      {/* 헤더 */}
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-5">
        <h1 className="text-3xl font-bold text-gray-700">5.2. OKR 목표 작성 제안(Sample)</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 설명 텍스트 */}
      <section className="mb-6 space-y-3 text-sm leading-relaxed text-gray-800">
        {data.description_line1 && <p>{data.description_line1}</p>}
        {data.description_line2 && (
          <p>
            {(() => {
              const hasImpact = data.description_line2.includes("어떤 비즈니스 임팩트");
              if (!hasImpact) return data.description_line2;
              const idx = data.description_line2.indexOf('"어떤 비즈니스 임팩트');
              const before = data.description_line2.slice(0, idx).trimEnd();
              return (
                <>
                  {before && <>{before} </>}
                  <strong className="text-red-600">"어떤 비즈니스 임팩트/가치를 만들었는가"</strong>가 수치로 드러나야 합니다.
                </>
              );
            })()}
          </p>
        )}
      </section>

      {/* OKR 개선 제안 테이블 */}
      <section>
        <table className="w-full border-collapse border border-slate-200 text-xs">
          <thead>
            <tr className="bg-slate-50 font-bold text-center text-gray-700">
              <th className="border border-slate-200 p-1.5 w-[9%]">Individual</th>
              <th className="border border-slate-200 p-1.5 w-[34%]">As-Is</th>
              <th className="border border-slate-200 p-1.5 w-[23%]">변화 방향</th>
              <th className="border border-slate-200 p-1.5 w-[34%]">To-Be</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map(({ label, currentKey, sectionKey }) => {
              const section = data[sectionKey] as OKRSection;
              const current = currentKey ? data[currentKey] : null;
              const currentList: string[] = Array.isArray(current)
                ? (current as string[])
                : current
                ? [current as string]
                : [];

              return (
                <tr key={sectionKey}>
                  <td className="border border-slate-200 bg-slate-50 font-bold text-center align-middle p-1.5">
                    {label[0]}
                    <br />
                    {label[1]}
                  </td>
                  <td className="border border-slate-200 p-1.5 align-top leading-relaxed">
                    {currentList.map((s, i) => (
                      <p key={i} className={i < currentList.length - 1 ? "mb-1" : ""}>{s}</p>
                    ))}
                  </td>
                  <td className="border border-slate-200 p-1.5 align-top bg-orange-50">
                    <DirectionCell text={section.direction} />
                  </td>
                  <td className="border border-slate-200 p-1.5 align-top leading-relaxed">
                    <TobeContent tobe={section.tobe} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      {/* 푸터 */}
      <footer className="mt-6 text-right text-gray-300 text-xs">3</footer>
    </div>
  );
}
