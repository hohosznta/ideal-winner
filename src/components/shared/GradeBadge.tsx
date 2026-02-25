import type { Grade } from "@/types/report";

const GRADE_COLORS: Record<Grade, string> = {
  S: "bg-blue-100 text-blue-800",
  A: "bg-green-100 text-green-800",
  B: "bg-orange-100 text-orange-800",
  C: "bg-red-100 text-red-800",
};

interface Props {
  grade: string;
  size?: "sm" | "md" | "lg";
}

export function GradeBadge({ grade, size = "md" }: Props) {
  const sizeClass = size === "sm" ? "text-xs px-2 py-0.5" : size === "lg" ? "text-lg px-5 py-2" : "text-sm px-3 py-1";
  const colorClass = GRADE_COLORS[grade as Grade] ?? "bg-gray-100 text-gray-800";
  return (
    <span className={`rounded-full font-bold ${sizeClass} ${colorClass}`}>
      {grade}
    </span>
  );
}
