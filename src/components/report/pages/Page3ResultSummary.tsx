import type { Page3Data } from "@/types/report";
import { ChartImage } from "@/components/shared/ChartImage";

interface Props { data: Page3Data; }

export function Page3ResultSummary({ data }: Props) {
  return (
    <div className="page-container p-6 md:p-8">

      {/* 헤더 */}
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-700">
          2. 결과 Summary{" "}
          <span className="text-lg font-normal text-gray-400 ml-2">(2025. 07 ~ 2025.12)</span>
        </h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 개인 프로파일 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">개인 프로파일</h2>
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <tbody>
            <tr className="h-10">
              <th className="w-1/6 bg-gray-100 border border-gray-300 px-4 text-left">직무</th>
              <td className="w-2/6 border border-gray-300 px-4 text-center"></td>
              <th className="w-1/6 bg-gray-100 border border-gray-300 px-4 text-left">프로젝트 경험</th>
              <td className="w-2/6 border border-gray-300 px-4"></td>
            </tr>
            <tr className="h-10">
              <th className="bg-gray-100 border border-gray-300 px-4 text-left">보유 자격 사항</th>
              <td className="border border-gray-300 px-4"></td>
              <td colSpan={2} className="border border-gray-300"></td>
            </tr>
            <tr className="h-10">
              <th className="bg-gray-100 border border-gray-300 px-4 text-left italic text-gray-600">
                Career Profiling(Goal)
              </th>
              <td colSpan={3} className="border border-gray-300 px-4"></td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* 핵심 가치 & 전문스킬 */}
      <section className="mb-10">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h2 className="text-xl font-bold mb-1">핵심 가치 & 전문스킬 Level (역량) :</h2>
            <p className="text-gray-500 text-sm">: 핵심가치와 직무Level 수준을 통해 맞춤형 성장 전략</p>
          </div>
          <div className="bg-gray-100 px-4 py-2 border border-gray-200 text-sm font-bold">
            현재 수준: <span className="text-black">★=Self</span>,{" "}
            <span className="text-blue-600">★=Other</span> /{" "}
            <span className="text-red-500">▲=기대수준</span>
          </div>
        </div>

        <div className="relative flex mb-8">
          <ChartImage
            src={data.chart_url}
            alt="핵심가치-전문스킬 매트릭스"
            className="w-3/5 h-auto block mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-1 w-fit ml-auto text-xs">
          <div className="flex items-center gap-2">
            <div className="w-32 bg-blue-100 py-1 text-center font-bold border border-blue-200">핵심인재</div>
            <p>= 파괴적 혁신의 업무 범위 확장을 통해 전략적 프로젝트 리더를 넘어 마스터 영역의 확장 요구 영역</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-32 bg-green-100 py-1 text-center font-bold border border-green-200">핵심인재 후보</div>
            <p>= 전문 스킬 고도화를 통한 Level 5 도전 및 핵심인재(S급) 거듭을 위한 본인만의 필살기를 Global No1 확립 요구 영역</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-32 bg-yellow-100 py-1 text-center font-bold border border-yellow-200">Level up 요구</div>
            <p>= 전문가 밀착 코칭을 통한 스킬업 집중 및 본인의 강점과 현재 직무간의 정렬(Alignment) 재점검 영역</p>
          </div>
        </div>
      </section>

      {/* 맞춤형 성장전략 */}
      <section>
        <h3 className="inline-block border border-gray-800 px-4 py-1 text-sm font-bold mb-0 relative z-10 bg-white ml-4">
          맞춤형 성장전략
        </h3>
        <div className="border border-gray-300 bg-gray-50 min-h-32 w-full p-6 -mt-3 rounded-sm shadow-inner">
          <p className="text-gray-700 whitespace-pre-line text-sm">
            {data.growth_strategy}
          </p>
        </div>
      </section>

      <footer className="mt-8 text-right text-gray-400 text-sm">2</footer>
    </div>
  );
}
