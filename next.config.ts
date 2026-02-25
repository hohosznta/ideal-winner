import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 차트 URL 도메인 추가 필요 시 여기에 등록
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
