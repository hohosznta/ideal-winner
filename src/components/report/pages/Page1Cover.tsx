import type { Page1Data } from "@/types/report";

interface Props { data: Page1Data; }

export function Page1Cover({ data }: Props) {
  return (
    <div
      className="page-container relative"
      style={{
        backgroundImage: `url('${data.background_image_url}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute text-left" style={{ top: "37%", left: "56px" }}>
        <p className="text-sm font-bold text-gray-700 mb-3">{data.date}</p>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          IX Expert 진단 결과_성장 가이드 리포트
        </h1>
        <p className="text-base text-gray-600">
          {data.position} / {data.name} / {data.title}
        </p>
      </div>
    </div>
  );
}
