"use client";

interface Props {
  src: string;
  alt: string;
  className?: string;
}

/** 차트 URL → <img> 래퍼. URL이 없거나 빈 문자열이면 placeholder 표시. */
export function ChartImage({ src, alt, className = "w-full h-auto" }: Props) {
  if (!src) {
    return (
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center text-gray-400 rounded-lg border border-dashed border-gray-300">
        차트 준비 중
      </div>
    );
  }
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt={alt} className={className} />;
}
