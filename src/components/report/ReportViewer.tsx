"use client";

import { useState } from "react";
import type { AllPagesResponse, ReportMeta } from "@/types/report";
import { PAGE_ORDER } from "@/types/report";

// 페이지 컴포넌트
import { Page1Cover } from "./pages/Page1Cover";
import { Page2Overview } from "./pages/Page2Overview";
import { Page3ResultSummary } from "./pages/Page3ResultSummary";
import { Page4ResultHistory } from "./pages/Page4ResultHistory";
import { Page5CoreValues } from "./pages/Page5CoreValues";
import { Page6CoreValuesItems } from "./pages/Page6CoreValuesItems";
import { Page7GapAnalysis } from "./pages/Page7GapAnalysis";
import { Page8SkillsSummary } from "./pages/Page8SkillsSummary";
import { Page9SkillsItems } from "./pages/Page9SkillsItems";
import { Page10LevelUpPlan } from "./pages/Page10LevelUpPlan";
import { Page12OKRResults } from "./pages/Page12OKRResults";
import { Page13OKRProposal } from "./pages/Page13OKRProposal";

interface Props {
  meta: ReportMeta;
  pages: AllPagesResponse;
}

// pageNum → 컴포넌트 렌더 함수
function renderPage(pageNum: number, pages: AllPagesResponse["pages"]) {
  switch (pageNum) {
    case 1:  return pages[1]  ? <Page1Cover data={pages[1]} />           : null;
    case 2:  return <Page2Overview />;
    case 3:  return pages[3]  ? <Page3ResultSummary data={pages[3]} />   : null;
    case 4:  return pages[4]  ? <Page4ResultHistory data={pages[4]} />   : null;
    case 5:  return pages[5]  ? <Page5CoreValues data={pages[5]} />      : null;
    case 6:  return pages[6]  ? <Page6CoreValuesItems data={pages[6]} /> : null;
    case 7:  return pages[7]  ? <Page7GapAnalysis data={pages[7]} />     : null;
    case 8:  return pages[8]  ? <Page8SkillsSummary data={pages[8]} />   : null;
    case 9:  return pages[9]  ? <Page9SkillsItems data={pages[9]} />     : null;
    case 10: return pages[10] ? <Page10LevelUpPlan data={pages[10]} />   : null;
    case 12: return pages[12] ? <Page12OKRResults data={pages[12]} />    : null;
    case 13: return pages[13] ? <Page13OKRProposal data={pages[13]} />   : null;
    default: return null;
  }
}

export function ReportViewer({ meta, pages }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentPage = PAGE_ORDER[currentIndex];
  const totalPages = PAGE_ORDER.length;

  const goNext = () => setCurrentIndex((i) => Math.min(i + 1, totalPages - 1));
  const goPrev = () => setCurrentIndex((i) => Math.max(i - 1, 0));

  const pageContent = renderPage(currentPage, pages.pages);
  const hasError = pages.errors[currentPage];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* 네비게이션 바 */}
      <div className="no-print fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm px-6 py-3 flex items-center justify-between">
        <div className="text-sm text-gray-600">
          <span className="font-bold text-gray-800">{meta.name}</span> 님의 리포트
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="px-4 py-1.5 rounded border border-gray-300 text-sm disabled:opacity-40 hover:bg-gray-50"
          >
            ← 이전
          </button>
          <span className="text-sm text-gray-600">
            {currentIndex + 1} / {totalPages} (Page {currentPage})
          </span>
          <button
            onClick={goNext}
            disabled={currentIndex === totalPages - 1}
            className="px-4 py-1.5 rounded border border-gray-300 text-sm disabled:opacity-40 hover:bg-gray-50"
          >
            다음 →
          </button>
          <button
            onClick={() => window.print()}
            className="px-4 py-1.5 rounded bg-gray-800 text-white text-sm hover:bg-gray-700"
          >
            인쇄
          </button>
        </div>

        {/* 페이지 빠른 이동 */}
        <div className="flex items-center gap-1">
          {PAGE_ORDER.map((p, i) => (
            <button
              key={p}
              onClick={() => setCurrentIndex(i)}
              className={`w-7 h-7 rounded text-xs font-medium transition-colors ${
                i === currentIndex
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* 페이지 본문 */}
      <div className="pt-20 px-6">
        {hasError ? (
          <div className="page-container p-8 flex items-center justify-center text-gray-400">
            <p>Page {currentPage} 데이터를 불러올 수 없습니다: {hasError}</p>
          </div>
        ) : pageContent ? (
          pageContent
        ) : (
          <div className="page-container p-8 flex items-center justify-center text-gray-400">
            <p>Page {currentPage} 준비 중...</p>
          </div>
        )}
      </div>
    </div>
  );
}
