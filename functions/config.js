// functions/config.js
export async function onRequest(context) {
  // Cloudflare 대시보드에서 설정한 환경변수 객체 (context.env)
  const { AUTH_CODE, API_KEY, SPREADSHEET_ID } = context.env;

  // 클라이언트에 전달할 환경변수 데이터 객체 구성
  const configData = {
    AUTH_CODE: AUTH_CODE,
    API_KEY: API_KEY,
    SPREADSHEET_ID: SPREADSHEET_ID,
  };

  // JSON 형식으로 응답 반환
  return new Response(JSON.stringify(configData), {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      // 필요에 따라 CORS 헤더 추가 (필요시 도메인 제한 가능)
      "Access-Control-Allow-Origin": "*",
    },
  });
}
