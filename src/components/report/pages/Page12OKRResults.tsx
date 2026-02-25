import type { Page12Data } from "@/types/report";

interface Props { data: Page12Data; }

export function Page12OKRResults({ data }: Props) {
  return (
    <div className="page-container p-6 md:p-8 relative">
      {/* 헤더 */}
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-5">
        <h1 className="text-3xl font-bold text-gray-700">5.1. [도전성과] Summary</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 현재 단계 */}
      <section className="mb-3">
        <p className="text-base font-medium mb-2">
          <span className="font-bold">도전성과진단 결과</span>
          {data.grade && (
            <span className="inline-block bg-blue-100 text-blue-800 border border-blue-300 px-3 py-0.5 mx-1 text-sm font-bold rounded-sm">
              {data.grade}
            </span>
          )}
          <span className="font-bold">단계에 해당합니다.</span>
        </p>
      </section>

      {/* Master Comment */}
      <section className="mb-4 relative">
        <h3 className="inline-block border border-gray-800 px-4 py-1 text-sm font-bold mb-0 relative z-10 bg-white ml-4">
          Master Comment
        </h3>
        <div className="border border-gray-300 bg-gray-50 w-full p-4 -mt-3 rounded-sm shadow-inner">
          <div className="text-xs leading-relaxed space-y-1">
            {data.master_comment.strengths.length > 0 && (
              <>
                <p className="font-semibold text-green-700 mb-1">강점 영역</p>
                {data.master_comment.strengths.map((s, i) => (
                  <p key={i}>· {s}</p>
                ))}
              </>
            )}
            {data.master_comment.improvements.length > 0 && (
              <>
                <p className="font-semibold text-orange-600 mb-1 mt-3">개선 영역</p>
                {data.master_comment.improvements.map((s, i) => (
                  <p key={i}>· {s}</p>
                ))}
              </>
            )}
            {data.master_comment.strengths.length === 0 &&
              data.master_comment.improvements.length === 0 && (
                <p className="text-gray-400">(AI 코멘트 준비 중)</p>
              )}
          </div>
        </div>
      </section>

      {/* OKR 테이블 */}
      <section>
        <table className="w-full border-collapse border border-slate-200 text-xs">
          <thead>
            <tr className="bg-slate-50 font-bold text-center text-gray-700">
              <th className="border border-slate-200 p-1.5 w-[18%]" rowSpan={2}>Individual OKR</th>
              <th className="border border-slate-200 p-1.5 w-[30%]" rowSpan={2}>KR (정량)</th>
              <th className="border border-slate-200 p-1.5 w-[30%]" rowSpan={2}>Task(과정/도구)</th>
              <th className="border border-slate-200 p-1.5 w-[8%]" rowSpan={2}>메세지</th>
              <th className="border border-slate-200 p-1.5 w-[7%]" colSpan={2}>등급</th>
            </tr>
            <tr className="bg-slate-50 font-bold text-center text-gray-700">
              <th className="border border-slate-200 p-1.5">Self</th>
              <th className="border border-slate-200 p-1.5">Master</th>
            </tr>
          </thead>
          <tbody>
            {data.okr_items.map((item, i) => (
              <tr key={i}>
                <td className="border border-slate-200 p-1.5 align-top font-bold leading-snug">
                  {item.individual_okr}
                </td>
                <td className="border border-slate-200 p-1.5 align-top leading-relaxed">
                  {item.kr_quantitative}
                </td>
                <td className="border border-slate-200 p-1.5 align-top leading-relaxed">
                  {item.kr_qualitative}
                </td>
                <td className="border border-slate-200 p-1.5 text-center align-middle" />
                <td className="border border-slate-200 p-1.5 text-center align-middle font-bold">
                  {item.self_grade}
                </td>
                <td className="border border-slate-200 p-1.5 text-center align-middle font-bold text-blue-700">
                  {item.master_grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* 푸터 */}
      <footer className="mt-6 text-right text-gray-300 text-xs">3</footer>
    </div>
  );
}
