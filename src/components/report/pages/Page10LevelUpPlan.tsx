import type { Page10Data } from "@/types/report";

interface Props { data: Page10Data; }

export function Page10LevelUpPlan({ data }: Props) {
  return (
    <div className="page-container p-6 md:p-8 relative">
      {/* 헤더 */}
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-4">
        <h1 className="text-3xl font-bold text-gray-400">4.2. [전문스킬] 항목별 (Self-Others 비교)</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 범례 */}
      <div className="flex gap-4 text-xs mb-3 justify-end">
        <span className="inline-flex items-center gap-1">
          <span className="inline-block w-3 h-3 bg-yellow-100 border border-yellow-300" />
          Self 평가 레벨
        </span>
        <span className="inline-flex items-center gap-1">
          <span className="inline-block w-3 h-3 bg-blue-100 border border-blue-300" />
          Master 평가 레벨
        </span>
      </div>

      {/* 스킬 테이블 */}
      <table className="w-full border-collapse border border-slate-300 text-[0.7rem] leading-snug">
        <thead>
          <tr className="bg-slate-100 text-gray-700 font-bold text-center">
            <th className="border border-slate-300 p-1.5 w-[12%]">전문스킬</th>
            <th className="border border-slate-300 p-1.5 w-[15%]">내용</th>
            <th className="border border-slate-300 p-1.5 w-[11%]">Level</th>
            <th className="border border-slate-300 p-1.5">행동지표</th>
            <th className="border border-slate-300 p-1.5 w-[18%]">정량지표</th>
            <th className="border border-slate-300 p-1.5 w-[6%]">Self</th>
            <th className="border border-slate-300 p-1.5 w-[6%]">Other</th>
          </tr>
        </thead>
        <tbody>
          {data.skills.map((skill) =>
            skill.levels.map((lv, lvIdx) => (
              <tr key={`${skill.skill_id}-${lv.level}`}>
                {lvIdx === 0 && (
                  <>
                    <td
                      rowSpan={skill.levels.length}
                      className="border border-slate-300 p-1 font-bold text-center align-middle"
                      style={{ color: "#1e4b82" }}
                    >
                      {skill.category}
                    </td>
                    <td
                      rowSpan={skill.levels.length}
                      className="border border-slate-300 p-1 align-top"
                    >
                      {skill.definition}
                    </td>
                  </>
                )}
                <td className="border border-slate-300 p-1 text-center whitespace-nowrap">
                  Level {lv.level}
                </td>
                <td className="border border-slate-300 p-1">{lv.description}</td>
                <td className="border border-slate-300 p-1">{lv.quantitative_criteria}</td>
                <td
                  className={`border border-slate-300 p-1 text-center ${
                    lv.self_selected ? "bg-yellow-100" : ""
                  }`}
                />
                <td
                  className={`border border-slate-300 p-1 text-center ${
                    lv.master_selected ? "bg-blue-100" : ""
                  }`}
                />
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* 푸터 */}
      <footer className="mt-4 text-right text-gray-400 text-xs">
        © 2026 INTERX Co., Ltd. All rights reserved.
      </footer>
    </div>
  );
}
