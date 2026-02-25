interface Props {
  /** 현재 등급 별 (검정) 표시 여부 */
  isCurrent?: boolean;
  /** 기대 등급 별 (빨강) 표시 여부 */
  isExpected?: boolean;
}

export function StarRating({ isCurrent, isExpected }: Props) {
  if (isExpected) return <span className="text-red-500 font-bold">★</span>;
  if (isCurrent) return <span className="text-gray-800 font-bold">★</span>;
  return null;
}
