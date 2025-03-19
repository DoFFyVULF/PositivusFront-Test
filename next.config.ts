import type { NextConfig } from "next";

const nextConfig = {
  output: 'export', // Включает статический экспорт
  images: {
    unoptimized: true, // Отключает оптимизацию изображений (опционально)
  },
};

export default nextConfig;
