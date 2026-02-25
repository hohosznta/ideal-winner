import type { CSSProperties } from "react";
import type { Page6Data } from "@/types/report";

interface Props { data: Page6Data; }

// Others 점수 셀 배경:
// positive = Self > Others → 타인이 낮게 평가 → red
// negative = Self < Others → 타인이 높게 평가 → blue
// neutral                                      → gray
const OTHERS_SCORE_BG: Record<string, string> = {
  positive: "#fee2e2", // red-100
  negative: "#dbeafe", // blue-100
  neutral:  "#f3f4f6", // gray-100
};

const cellBase: CSSProperties = {
  border: "1px solid #e2e8f0",
  padding: "5px 6px",
  fontSize: "0.7rem",
  verticalAlign: "middle",
};

const scoreCell: CSSProperties = {
  ...cellBase,
  padding: "3px 2px",
  textAlign: "center",
  overflow: "hidden",
  fontWeight: "bold",
};

export function Page6CoreValuesItems({ data }: Props) {
  return (
    <div className="page-container p-6 md:p-8">
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-4">
        <h1 className="text-3xl font-bold text-gray-700">3.2.[핵심가치] 항목별 (Self-Others 비교)</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      <div className="flex justify-between items-center mb-3 text-[11px] text-gray-500">
        <div>혁신적 선도자(S등급) = , 80% = A등급, 60%=B등급, 40%= C 등급</div>
        <div className="text-blue-600 font-medium underline cursor-pointer">
          핵심가치 등급별 행동 지표 및 행동 예시 Link
        </div>
      </div>

      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #e2e8f0",
          tableLayout: "fixed",
        }}
      >
        <colgroup>
          <col style={{ width: "11%" }} />
          <col style={{ width: "12%" }} />
          <col style={{ width: "28%" }} />
          <col style={{ width: "4%" }} />
          <col style={{ width: "18%" }} />
          <col style={{ width: "4%" }} />
          <col style={{ width: "18%" }} />
          <col style={{ width: "5%" }} />
        </colgroup>

        <thead>
          <tr style={{ backgroundColor: "#f8f9fa" }}>
            <th rowSpan={2} style={{ ...cellBase, fontWeight: "bold", textAlign: "center" }}>구분</th>
            <th rowSpan={2} style={{ ...cellBase, fontWeight: "bold", textAlign: "center" }}>항목</th>
            <th rowSpan={2} style={{ ...cellBase, fontWeight: "bold", textAlign: "center" }}>정의</th>
            <th colSpan={2} style={{ ...cellBase, fontWeight: "bold", textAlign: "center", borderBottom: "none" }}>Self</th>
            <th colSpan={2} style={{ ...cellBase, fontWeight: "bold", textAlign: "center", borderBottom: "none" }}>Others</th>
            <th rowSpan={2} style={{ ...cellBase, fontWeight: "bold", textAlign: "center" }}>중요</th>
          </tr>
          <tr style={{ backgroundColor: "#f8f9fa" }}>
            <th style={{ ...scoreCell, fontWeight: "bold" }}>점수</th>
            <th style={{ ...cellBase, fontWeight: "bold", textAlign: "center" }}>영역</th>
            <th style={{ ...scoreCell, fontWeight: "bold" }}>점수</th>
            <th style={{ ...cellBase, fontWeight: "bold", textAlign: "center" }}>영역</th>
          </tr>
        </thead>

        <tbody>
          {data.domains.flatMap((domain) =>
            domain.items.map((item, itemIdx) => (
              <tr key={`${domain.domain_name}-${itemIdx}`}>
                {itemIdx === 0 && (
                  <td
                    rowSpan={domain.items.length}
                    style={{
                      ...cellBase,
                      backgroundColor: "#1e4b82",
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "0.75rem",
                      verticalAlign: "middle",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {domain.domain_name}
                    {"\n\n"}
                    <span style={{ fontWeight: "normal", fontSize: "10px" }}>
                      {domain.domain_sub}
                    </span>
                  </td>
                )}

                {/* 항목 */}
                <td style={{ ...cellBase, textAlign: "center", verticalAlign: "middle" }}>
                  <p style={{ fontWeight: "bold", color: "#1a4e8a" }}>{item.category}</p>
                  <p style={{ fontSize: "10px", color: "#6b7280" }}>({item.sub_name})</p>
                </td>

                {/* 정의 */}
                <td style={{ ...cellBase, lineHeight: 1.4, color: "#4b5563" }}>
                  {item.definition}
                </td>

                {/* Self 점수 */}
                <td style={{ ...scoreCell, backgroundColor: "#f9fafb" }}>
                  {item.self_grade}
                </td>

                {/* Self 영역 설명 */}
                <td style={{ ...cellBase, fontSize: "0.6875rem", lineHeight: 1.4, color: "#4b5563" }}>
                  {item.self_description}
                </td>

                {/* Others 점수 */}
                <td
                  style={{
                    ...scoreCell,
                    backgroundColor: OTHERS_SCORE_BG[item.gap_direction] ?? "#f3f4f6",
                  }}
                >
                  {item.others_grade}
                </td>

                {/* Others 영역 설명 */}
                <td style={{ ...cellBase, fontSize: "0.6875rem", lineHeight: 1.4, color: "#4b5563" }}>
                  {item.others_description}
                </td>

                {/* 중요 */}
                <td style={{ ...cellBase, textAlign: "center", verticalAlign: "middle" }}>
                  {(item.category === "미래낙관적 도전" || item.category === "강박적 호기심") && (
                    <span style={{ color: "black", fontWeight: "bold", fontSize: "1.125rem" }}>★</span>
                  )}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <footer className="mt-6 text-right text-gray-300 text-xs">
        © 2026 INTERX Co., Ltd. All rights reserved.
      </footer>
    </div>
  );
}
