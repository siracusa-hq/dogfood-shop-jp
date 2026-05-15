// PolaNest Lite ティア用: 環境変数で nitro preset を切替
// PolaNest Cloud Build が NITRO_PRESET=static を注入する
export default defineNuxtConfig({
  nitro: {
    preset: process.env.NITRO_PRESET || undefined,
  },
  ssr: false,
});
