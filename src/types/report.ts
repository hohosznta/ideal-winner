// ──────────────────────────────────────────
// 공통 타입
// ──────────────────────────────────────────
export type Grade = "S" | "A" | "B" | "C";
export type SkillBand = "L45" | "L34" | "L23" | "L12" | "L01";
export type GapDirection = "positive" | "negative" | "neutral";
export type Zone = "white" | "yellow" | "green" | "blue";

export interface RankItem {
  rank: number;
  category: string;
  score: number;
  grade: Grade;
}

export interface ReportMeta {
  token: string;
  name: string;
  status: "done" | "error";
  created_at: string;
  updated_at: string;
}

// ──────────────────────────────────────────
// Page 1 — 표지
// ──────────────────────────────────────────
export interface Page1Data {
  name: string;
  position: string;
  title: string;
  date: string;
  background_image_url: string;
}

// ──────────────────────────────────────────
// Page 3 — 결과 요약 차트 + 성장전략
// ──────────────────────────────────────────
export interface Page3Data {
  zone: Zone;
  zone_context: string;
  chart_url: string;
  growth_strategy: string;
}

// ──────────────────────────────────────────
// Page 4 — 결과 이력
// ──────────────────────────────────────────
export interface CoreValueRow {
  grade: Grade;
  grade_label: string;
  description: string;
  is_current: boolean;   // ★ 검정
  is_expected: boolean;  // ★ 빨강
}

export interface SkillBandRow {
  band: SkillBand;
  band_label: string;
  description: string;
  is_current: boolean;
  is_expected: boolean;
}

export interface OKRRow {
  individual_okr: string;
  kr_quantitative: string;
  contribution: string;
  master_grade: string;
}

export interface Page4Data {
  name: string;
  position: string;
  core_grade: Grade;
  core_desc: string;
  core_table_rows: CoreValueRow[];
  skill_band: SkillBand;
  skill_label: string;
  skill_desc: string;
  skill_table_rows: SkillBandRow[];
  okr_rows: OKRRow[];
}

// ──────────────────────────────────────────
// Page 5 — 핵심가치 Summary
// ──────────────────────────────────────────
export interface Page5Data {
  grade: Grade;
  grade_label: string;
  grade_desc: string;
  radar_chart_url: string;
  top3: RankItem[];
  bottom3: RankItem[];
  ai_comment: string;
}

// ──────────────────────────────────────────
// Page 6 — 핵심가치 항목별 비교
// ──────────────────────────────────────────
export interface CoreValueItem {
  category: string;
  sub_name: string;
  definition: string;
  self_score: number;
  self_grade: string;
  self_description: string;
  others_score: number;
  others_grade: string;
  others_description: string;
  is_bottom3: boolean;
  gap_direction: GapDirection;
}

export interface CoreValueDomain {
  domain_name: string;
  domain_sub: string;
  items: CoreValueItem[];
}

export interface Page6Data {
  domains: CoreValueDomain[];
}

// ──────────────────────────────────────────
// Page 7 — Gap 사분면 분석
// ──────────────────────────────────────────
export interface QuadrantData {
  items: string[];
  ai_comment: string;
}

export interface Page7Data {
  known_strength: QuadrantData;
  pleasant_surprise: QuadrantData;
  development_opportunity: QuadrantData;
  blind_spot: QuadrantData;
}

// ──────────────────────────────────────────
// Page 8 — 전문스킬 Summary
// ──────────────────────────────────────────
export interface SkillBarData {
  skill_id: number;
  skill_name: string;
  self_level: number | null;
  master_level: number | null;
}

export interface Page8Data {
  expected_level: number;
  current_level?: number;
  current_level_name?: string;
  skills: SkillBarData[];
  chart_url: string;
  chart_url_2?: string;
  gap_direction1: string;
  gap_direction2: string;
  gap_direction3: string;
}

// ──────────────────────────────────────────
// Page 9 — 전문스킬 항목별
// ──────────────────────────────────────────
export interface SkillLevelDetail {
  level: number;
  level_name: string;
  description: string;
  quantitative_criteria: string;
  self_selected: boolean;
  master_selected: boolean;
}

export interface SkillDetail {
  skill_id: number;
  category: string;
  definition: string;
  levels: SkillLevelDetail[];
}

export interface Page9Data {
  job_title: string;
  skills: SkillDetail[];
  strengths: string[];   // Small Gap 스킬명
  tasks: string[];       // Big Gap 스킬명
  plan_70: string;
  plan_20: string;
  plan_10: string;
}

// ──────────────────────────────────────────
// Page 10 — 전문스킬 항목별 (Self-Others 비교)
// ──────────────────────────────────────────
export interface Page10Data {
  job_title: string;
  skills: SkillDetail[];
}

// ──────────────────────────────────────────
// Page 12 — 도전성과 Summary
// ──────────────────────────────────────────
export interface OKRResultItem {
  company_okr: string;
  individual_okr: string;
  kr_quantitative: string;
  kr_qualitative: string;
  self_grade: string;
  master_grade: string;
}

export interface MasterComment {
  strengths: string[];
  improvements: string[];
}

export interface Page12Data {
  grade: string;
  okr_items: OKRResultItem[];
  master_comment: MasterComment;
}

// ──────────────────────────────────────────
// Page 13 — OKR 제안
// ──────────────────────────────────────────
export interface OKRSection {
  direction: string;
  tobe: string | string[];
}

export interface Page13Data {
  description_line1: string;
  description_line2: string;
  current_individual_objective: string;
  current_key_results: string[];
  current_quantitative: string[];
  current_qualitative: string[];
  improvement_individual_objective: OKRSection;
  improvement_key_results: OKRSection;
  improvement_quantitative: OKRSection;
  improvement_qualitative: OKRSection;
}

// ──────────────────────────────────────────
// 전체 페이지 유니온
// ──────────────────────────────────────────
export type AllPagesResponse = {
  pages: {
    1?: Page1Data;
    3?: Page3Data;
    4?: Page4Data;
    5?: Page5Data;
    6?: Page6Data;
    7?: Page7Data;
    8?: Page8Data;
    9?: Page9Data;
    10?: Page10Data;
    12?: Page12Data;
    13?: Page13Data;
  };
  errors: Record<number, string>;
};

export const PAGE_ORDER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13] as const;
export type PageNumber = (typeof PAGE_ORDER)[number];
