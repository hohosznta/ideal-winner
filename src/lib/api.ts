import type { AllPagesResponse, ReportMeta } from "@/types/report";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
    // Server Component에서 호출 시 캐시 제어
    next: { revalidate: 60 },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error((error as { detail?: string }).detail ?? `API error ${res.status}`);
  }

  return res.json();
}

export const api = {
  /** 리포트 메타데이터 조회 */
  getReport: (token: string) =>
    apiFetch<ReportMeta>(`/api/v1/reports/${token}`),

  /** 전체 페이지 데이터 한 번에 조회 */
  getAllPages: (token: string) =>
    apiFetch<AllPagesResponse>(`/api/v1/reports/${token}/pages`),

  /** 특정 페이지 데이터 조회 */
  getPage: <T>(token: string, pageNum: number) =>
    apiFetch<T>(`/api/v1/reports/${token}/pages/${pageNum}`),
};
