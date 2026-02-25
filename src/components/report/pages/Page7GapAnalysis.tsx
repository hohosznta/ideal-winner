import type { Page7Data, QuadrantData } from "@/types/report";

interface Props { data: Page7Data; }

interface SectionCfg {
  key: keyof Page7Data;
  title: string;
  selfArrow: "▲" | "▼";
  selfColor: string;
  connector: "와" | "보다";
  othersArrow: "▲" | "▼";
  othersColor: string;
  suffix: string;
}

const SECTIONS: SectionCfg[] = [
  {
    key: "known_strength",
    title: "잘아는 강점 (Known Strength)",
    selfArrow: "▲", selfColor: "text-blue-500", connector: "와",
    othersArrow: "▲", othersColor: "text-blue-500",
    suffix: " 모두 상대적으로 높게 진단한 영역",
  },
  {
    key: "pleasant_surprise",
    title: "뜻밖의 강점 (Pleasant Surprise)",
    selfArrow: "▼", selfColor: "text-red-500", connector: "보다",
    othersArrow: "▲", othersColor: "text-blue-500",
    suffix: "가 상대적으로 더 높게 진단된 영역",
  },
  {
    key: "development_opportunity",
    title: "개선기회 (Development Opportunity)",
    selfArrow: "▼", selfColor: "text-red-500", connector: "와",
    othersArrow: "▼", othersColor: "text-red-500",
    suffix: " 모두 타 항목에 비해 낮게 진단한 영역",
  },
  {
    key: "blind_spot",
    title: "사각지대 (Blind Spot)",
    selfArrow: "▲", selfColor: "text-blue-500", connector: "보다",
    othersArrow: "▼", othersColor: "text-red-500",
    suffix: "가 상대적으로 더 낮게 진단된 영역",
  },
];

function CommentSection({ cfg, quadrant }: { cfg: SectionCfg; quadrant: QuadrantData }) {
  return (
    <div>
      <h3 className="inline-block border border-gray-800 px-4 py-1 text-sm font-bold mb-0 relative z-10 bg-white ml-4">
        {cfg.title}
        <span className="font-normal text-xs text-gray-500 ml-1">
          {": Self("}
          <span className={cfg.selfColor}>{cfg.selfArrow}</span>
          {")"}
          {cfg.connector}
          {" Others("}
          <span className={cfg.othersColor}>{cfg.othersArrow}</span>
          {")"}
          {cfg.suffix}
        </span>
      </h3>
      <div className="border border-gray-300 bg-gray-50 min-h-20 w-full p-4 -mt-3 rounded-sm shadow-inner">
        {quadrant.ai_comment && (
          <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
            {quadrant.ai_comment}
          </p>
        )}
      </div>
    </div>
  );
}

export function Page7GapAnalysis({ data }: Props) {
  return (
    <div className="page-container p-6 md:p-8 flex flex-col">
      <header className="flex justify-between items-end border-b-2 border-gray-800 pb-3 mb-6">
        <h1 className="text-3xl font-bold text-gray-700">3.3. [핵심가치] 영역별 Comment</h1>
        <div className="text-2xl font-black text-orange-500 italic">INTERX</div>
      </header>

      <section className="flex-grow space-y-6">
        <h3 className="text-lg font-bold text-gray-800">Comment</h3>

        {SECTIONS.map((cfg) => (
          <CommentSection key={cfg.key} cfg={cfg} quadrant={data[cfg.key]} />
        ))}
      </section>

      <footer className="mt-6 text-right text-gray-300 text-xs">
        © 2026 INTERX Co., Ltd. All rights reserved.
      </footer>
    </div>
  );
}
