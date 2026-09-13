// functions/config.js
export async function onRequest(context) {
  // Cloudflare 대시보드에서 설정한 환경변수 객체 (context.env)
  const { API_KEY, SPREADSHEET_ID } = context.env;

  return new Response(
    JSON.stringify({
      API_KEY: API_KEY,
      SPREADSHEET_ID: SPREADSHEET_ID,
    }),
    {
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*", // 필요에 따라 CORS 헤더 추가 (필요시 도메인 제한 가능)
      },
    },
  );
}
