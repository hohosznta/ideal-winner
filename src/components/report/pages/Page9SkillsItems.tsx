import type { Page9Data } from "@/types/report";

interface Props { data: Page9Data; }

// 목록을 두 컬럼으로 분배
function splitColumns<T>(arr: T[]): [T[], T[]] {
  const mid = Math.ceil(arr.length / 2);
  return [arr.slice(0, mid), arr.slice(mid)];
}

export function Page9SkillsItems({ data }: Props) {
  const [strengthsLeft, strengthsRight] = splitColumns(data.strengths ?? []);
  const [tasksLeft, tasksRight] = splitColumns(data.tasks ?? []);

  return (
    <div className="page-container p-6 md:p-8 relative">
      {/* 헤더 */}
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-700">4.1. [전문스킬] Summary</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 학습 강점 / 학습 우선 과제 */}
      <section className="mb-6">
        <h3 className="font-bold mb-3 text-sm">학습 강점 / 학습 우선 과제</h3>
        <table className="w-full border-collapse border border-gray-200 text-xs">
          <tbody>
            {/* 학습 강점 */}
            <tr>
              <td className="border border-gray-200 bg-gray-50 font-bold text-center w-20 p-2 align-top">
                학습<br />강점
              </td>
              <td className="border border-gray-200 p-3 w-1/2 align-top">
                <ol className="list-decimal list-inside space-y-1">
                  {strengthsLeft.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ol>
              </td>
              <td className="border border-gray-200 p-3 align-top">
                <ol start={strengthsLeft.length + 1} className="list-decimal list-inside space-y-1">
                  {strengthsRight.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ol>
              </td>
            </tr>
            {/* 학습 과제 */}
            <tr>
              <td className="border border-gray-200 bg-gray-50 font-bold text-center p-2 align-top">
                학습<br />과제
              </td>
              <td className="border border-gray-200 p-3 w-1/2 align-top">
                <ol className="list-decimal list-inside space-y-1">
                  {tasksLeft.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ol>
              </td>
              <td className="border border-gray-200 p-3 align-top">
                <ol start={tasksLeft.length + 1} className="list-decimal list-inside space-y-1">
                  {tasksRight.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Level UP 플랜 요약 */}
      <section className="grid grid-cols-1 gap-3 mb-6">
        <div>
          <h3 className="inline-block border border-gray-800 px-4 py-1 text-sm font-bold mb-0 relative z-10 bg-white ml-4">
            Level UP 플랜 요약
          </h3>
          <div className="border border-gray-300 bg-gray-50 min-h-24 w-full p-4 -mt-3 rounded-sm shadow-inner">
            {/* 70% */}
            <div className="mb-3">
              <div className="text-xs font-bold mb-1" style={{ color: "#1e4b82" }}>
                70% - 업무에서의 성장 (Experiential Learning)
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {data.plan_70 || "(AI 코멘트 준비 중)"}
              </p>
            </div>
            {/* 20% */}
            <div className="mb-3">
              <div className="text-xs font-bold mb-1" style={{ color: "#2d6a4f" }}>
                20% - 관계를 통한 학습 (Social Learning)
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {data.plan_20 || "(AI 코멘트 준비 중)"}
              </p>
            </div>
            {/* 10% */}
            <div>
              <div className="text-xs font-bold mb-1" style={{ color: "#7b5e1a" }}>
                10% - 교육을 통한 학습 (Formal Learning)
              </div>
              <p className="text-xs text-gray-700 leading-relaxed">
                {data.plan_10 || "(AI 코멘트 준비 중)"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="mt-6 text-right text-gray-300 text-xs">3</footer>
    </div>
  );
}
