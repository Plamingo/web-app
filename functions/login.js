// functions/login.js
export async function onRequestPost(context) {
  try {
    const body = await context.request.json();
    const inputCode = body.authCode; // 프론트엔드에서 보낸 값
    const realAuthCode = context.env.AUTH_CODE; // 클라우드프레임에 숨겨진 진짜 토큰

    if (inputCode && inputCode === realAuthCode) {
      return new Response(JSON.stringify({ success: true }), {
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      });
    } else {
      return new Response(JSON.stringify({ success: false }), {
        status: 401,
        headers: { "Content-Type": "application/json;charset=UTF-8" },
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
