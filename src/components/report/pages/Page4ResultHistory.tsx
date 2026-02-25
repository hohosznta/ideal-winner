import type { Page4Data } from "@/types/report";

interface Props { data: Page4Data; }

export function Page4ResultHistory({ data }: Props) {
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

      {/* Expert 결과 History */}
      <h2 className="text-base font-bold mb-2">Expert 결과 History</h2>
      <table className="report-table mb-6" style={{ tableLayout: "fixed" }}>
        <colgroup>
          <col style={{ width: "14.28%" }} />
          <col style={{ width: "14.28%" }} />
          <col style={{ width: "14.28%" }} />
          <col style={{ width: "14.28%" }} />
          <col style={{ width: "14.28%" }} />
          <col style={{ width: "14.28%" }} />
          <col style={{ width: "14.28%" }} />
        </colgroup>
        <thead>
          <tr className="table-header">
            <th>년도</th>
            <th>소속</th>
            <th>이름</th>
            <th>호칭</th>
            <th>(기대) Level</th>
            <th>(현) Level</th>
            <th>종합 등급</th>
          </tr>
        </thead>
        <tbody className="text-center">
          <tr>
            <td className="font-bold">2025 하반기</td>
            <td>{data.position}</td>
            <td>{data.name}</td>
            <td></td>
            <td></td>
            <td className="bg-blue-50 font-bold"></td>
            <td></td>
          </tr>
          <tr>
            <td className="font-bold">2025 상반기</td>
            <td></td><td></td><td></td><td></td><td></td><td></td>
          </tr>
        </tbody>
      </table>

      {/* 범례 */}
      <div className="flex justify-end text-sm mb-2">
        <span className="mr-4">★=현재 수준</span>
        <span className="text-red-500">★=기대 수준</span>
      </div>

      {/* 핵심 가치 */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">
          핵심 가치 (역량 등급) :{" "}
          <span className="text-blue-700 ml-2 px-3 py-1 bg-blue-50 border border-blue-200">
            {data.core_grade}등급
          </span>
        </h3>
        <p className="text-sm text-gray-600 mb-3">{data.core_desc}</p>
        <table className="report-table">
          <tbody>
            {data.core_table_rows.map((row, i) => (
              <tr key={i}>
                {i === 0 && (
                  <td rowSpan={data.core_table_rows.length} className="category-blue">
                    핵심<br />가치
                  </td>
                )}
                <td className="font-bold bg-gray-50">{row.grade_label}</td>
                <td>{row.description}</td>
                {row.is_expected ? (
                  <td className="text-center star-red w-12">★</td>
                ) : row.is_current ? (
                  <td className="text-center star-black w-12">★</td>
                ) : (
                  <td className="w-12"></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 전문스킬 */}
      <div className="mb-6">
        <h3 className="font-bold mb-2">
          전문스킬 (역량 Level) :{" "}
          <span className="text-blue-700 ml-2 px-3 py-1 bg-blue-50 border border-blue-200">
            {data.skill_label}
          </span>
        </h3>
        <p className="text-sm text-gray-600 mb-3">{data.skill_desc}</p>
        <table className="report-table">
          <tbody>
            {data.skill_table_rows.map((row, i) => (
              <tr key={i}>
                {i === 0 && (
                  <td rowSpan={data.skill_table_rows.length} className="category-green">
                    전문<br />스킬
                  </td>
                )}
                <td className={`font-bold bg-gray-50${i === 0 ? " w-48" : ""}`}>{row.band_label}</td>
                <td>{row.description}</td>
                {row.is_expected ? (
                  <td className="text-center star-red w-12">★</td>
                ) : row.is_current ? (
                  <td className="text-center star-black w-12">★</td>
                ) : (
                  <td className="w-12"></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 도전성과 */}
      <div className="mb-4">
        <h3 className="font-bold mb-2">
          도전성과 (업무 달성도 : Individual OKR 기준):{" "}
          <span className="text-blue-700 ml-2 px-3 py-1 bg-blue-50 border border-blue-200">-</span>
        </h3>
        <table className="report-table">
          <tbody>
            {/* 헤더 행: category td + th 혼합, rowspan = 데이터 행 수 + 1 */}
            <tr className="table-header">
              <td rowSpan={data.okr_rows.length + 1} className="category-red">
                도전<br />성과
              </td>
              <th>Individual OKR</th>
              <th>결과 (정량)</th>
              <th>달성도</th>
              <th>등급</th>
            </tr>
            {data.okr_rows.map((row, i) => (
              <tr key={i} className="text-center">
                <td className="h-10 text-left text-xs">{row.individual_okr}</td>
                <td className="text-xs">{row.kr_quantitative}</td>
                <td>{row.contribution}</td>
                <td>{row.master_grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 등급 기준 */}
      <div className="text-[10px] text-gray-400 mt-4">
        100% = S등급, 80% = A등급, 60%=B등급, 40%= C 등급
      </div>

      {/* 페이지 풋터 */}
      <footer className="mt-6 text-right text-gray-300 text-xs">
        © 2026 INTERX Co., Ltd. All rights reserved. | 2
      </footer>

    </div>
  );
}
