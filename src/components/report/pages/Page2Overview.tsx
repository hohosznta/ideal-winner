/** Page 2 — IX Expert 개요 (정적 콘텐츠, 데이터 불필요) */
export function Page2Overview() {
  return (
    <div className="page-container p-6 md:p-8">

      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-700">1. IX Expert 개요</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      {/* 진단 목적 */}
      <section className="mb-4">
        <h2 className="text-lg font-bold mb-3">1. 진단 목적</h2>
        <div className="ml-2">
          <h3 className="text-base font-bold text-gray-800 mb-1.5 italic">"성장을 위한 스스로의 이정표"</h3>
          <p className="text-gray-600 mb-3 leading-relaxed text-sm">
            본 진단은 단순히 실력을 측정하는 도구가 아니라, 전문가로서 성장을 위한 자신의 여정을 돌아보고 미래를 설계하기 위한{" "}
            <b className="text-gray-900 border-b-2 border-orange-200">&apos;성장 가이드&apos;</b>를 목적으로 합니다.
          </p>
          <div className="space-y-2">
            <div className="flex items-start">
              <span className="text-gray-900 mr-3 mt-1 text-sm">●</span>
              <p className="text-sm"><strong className="text-gray-900">성취의 성찰 (Reflection):</strong> 지난 활동을 통해 내가 어떤 전문적 성과를 이뤘고, 어떤 도전으로 가치를 만들어냈는지 스스로 되돌아봅니다.</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-900 mr-3 mt-1 text-sm">●</span>
              <p className="text-sm"><strong className="text-gray-900">현재의 객관적 점검 (Self-Check):</strong> IXE 레벨 체계를 통해 현재 나의 전문성 수준과 조직 내 위치를 객관적으로 파악합니다.</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-900 mr-3 mt-1 text-sm">●</span>
              <p className="text-sm"><strong className="text-gray-900">미래 성장의 설계 (Growth Planning):</strong> 점검된 현재 상태를 바탕으로, 부족한 부분을 보완하고 강점을 극대화하기 위한 구체적인 학습 및 성장 계획을 수립합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* IX 핵심인재 정의 */}
      <section className="mb-4">
        <h2 className="text-lg font-bold mb-3">2. IX 핵심인재 정의</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center shadow-sm">
          <div className="inline-block bg-white border border-gray-800 px-4 py-1.5 font-bold text-base mb-2 shadow-sm">
            &quot;현재보다 더 성장(<span className="text-orange-500">Level Up</span>)하는 인재&quot;
          </div>
          <div className="text-gray-500 text-xs mb-3 font-medium">- 더 전문, 더 실행, 더 연결 -</div>
          <div className="text-base font-bold leading-relaxed text-gray-800">
            &quot;자신의 전문성을 바탕으로{" "}
            <span className="text-blue-600 underline decoration-blue-200 underline-offset-4">&apos;꾸준히 학습&apos;</span>하며, 그 분야의{" "}
            <span className="text-green-600 underline decoration-green-200 underline-offset-4">&apos;고수로 인정&apos;</span>받고<br className="hidden md:block" />
            미래의 <span className="text-orange-500">새로운 가치(고객, 조직, 사회)</span>를 창출하는 사람&quot;
          </div>
        </div>
      </section>

      {/* 진단 및 평가 요소 */}
      <section>
        <h2 className="text-lg font-bold mb-3">3. 진단 및 평가 요소(IX Expertise)</h2>

        <div className="grid grid-cols-6 gap-2">
          {/* 좌측 3행 그리드 */}
          <div className="col-span-5 grid grid-cols-12 gap-2">

            {/* 핵심 가치 행 */}
            <div className="col-span-2 bg-[#1a4e8a] text-white flex flex-col items-center justify-center p-4 text-center font-bold text-sm leading-tight">
              역량<br /><br />핵심 가치
            </div>
            <div className="col-span-5 bg-gray-100 p-4 text-xs leading-relaxed border-t border-gray-200">
              <strong className="text-[#1a4e8a] block mb-2 text-sm">▶ IX의 태도와 문화를 만듦</strong>
              <ul className="list-disc ml-4 space-y-1">
                <li>IX 핵심인재가 되기 위한 가치를 공유하고 실천하는 역량</li>
                <li>전 직무, 전 레벨 공통 적용</li>
              </ul>
            </div>
            <div className="col-span-5 bg-gray-100 p-4 text-xs leading-relaxed border-t border-gray-200">
              <strong className="text-gray-800 block mb-2 text-sm">12가지 핵심가치</strong>
              <ul className="list-disc ml-4 space-y-1 text-gray-600">
                <li>360도 다면 진단</li>
                <li>구글폼 링크 전송</li>
                <li>반기 시행</li>
              </ul>
            </div>

            {/* 전문 스킬 행 */}
            <div className="col-span-2 bg-[#437c2c] text-white flex flex-col items-center justify-center p-4 text-center font-bold text-sm leading-tight">
              역량<br /><br />전문 스킬
            </div>
            <div className="col-span-5 bg-gray-100 p-4 text-xs leading-relaxed">
              <strong className="text-[#437c2c] block mb-2 text-sm">▶ IX의 실력과 전문성을 키움</strong>
              <ul className="list-disc ml-4 space-y-1">
                <li>업무수행에 필요한 (전사공통/직무별)지식 및 스킬 역량</li>
                <li>직무별 차등, 전 레벨 공통 적용</li>
              </ul>
            </div>
            <div className="col-span-5 bg-gray-100 p-4 text-xs leading-relaxed text-gray-600">
              <strong className="text-gray-800 block mb-2 text-sm">직무별, 레벨별 전문 스킬</strong>
              <ul className="list-disc ml-4 space-y-1">
                <li>IXE 전문가 Level 진단</li>
                <li>기대 Level &amp; 현 수준 비교</li>
                <li>반기 진행</li>
              </ul>
            </div>

            {/* 도전 성과 행 */}
            <div className="col-span-2 bg-[#8b0000] text-white flex flex-col items-center justify-center p-4 text-center font-bold text-sm leading-tight rounded-bl-lg">
              업적<br /><br />도전 성과
            </div>
            <div className="col-span-5 bg-gray-100 p-4 text-xs leading-relaxed border-b border-gray-200">
              <strong className="text-[#8b0000] block mb-2 text-sm">▶ IX의 성과를 직접 증명함</strong>
              <ul className="list-disc ml-4 space-y-1 text-gray-600">
                <li>실제적 성과 창출 및 비즈니스 기여도</li>
                <li>정량/정성적 지표 기반 평가</li>
              </ul>
            </div>
            <div className="col-span-5 bg-gray-100 p-4 text-xs leading-relaxed border-b border-gray-200">
              <strong className="text-gray-800 block mb-2 text-sm">OKR 기반의 도전성과</strong>
              <ul className="list-disc ml-4 space-y-1 text-gray-600">
                <li>개인별 목표 대비 실적 기술</li>
                <li>KR Master 검토 후 코멘트 기입 / 분기 진행</li>
              </ul>
            </div>
          </div>

          {/* 우측: 화살표 + IXE 레벨/등급 */}
          <div className="col-span-1 flex gap-0 items-stretch">
            {/* CSS 삼각형 화살표 */}
            <div className="flex items-center">
              <div style={{ width: 0, height: 0, borderTop: "60px solid transparent", borderBottom: "60px solid transparent", borderLeft: "30px solid #9ca3af", marginRight: "4px" }} />
            </div>

            {/* IXE 레벨 + 등급 */}
            <div className="flex gap-1 flex-1">
              <div className="relative flex-1 flex flex-col gap-1">
                <div className="absolute -top-4 inset-x-0 text-[10px] text-center font-bold text-gray-400">IXE 레벨</div>
                {["5.0","4.5","4.0","3.5","3.0","2.5","2.0","1.5","1.0"].map((lv) => (
                  <div key={lv} className="bg-blue-100 text-blue-800 text-[10px] font-bold flex-1 flex items-center justify-center rounded">{lv}</div>
                ))}
              </div>
              <div className="relative bg-gray-200 border border-gray-300 flex items-center justify-center px-2">
                <div className="absolute -top-[1.125rem] inset-x-0 text-[10px] text-center font-bold text-gray-400">등급</div>
                <span style={{ writingMode: "vertical-rl", textOrientation: "mixed" }} className="text-sm font-bold tracking-[0.5em] text-gray-600">S A B C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 페이지 풋터 */}
      <footer className="mt-6 text-right text-gray-300 text-xs">
        © 2026 INTERX Co., Ltd. All rights reserved. | 1
      </footer>

    </div>
  );
}
