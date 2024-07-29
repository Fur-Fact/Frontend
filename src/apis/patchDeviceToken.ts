import axios from "axios";

export async function patchDeviceToken(token: string) {
  const data = await axios.patch(
    `${import.meta.env.VITE_APP_BASE_URL}/api/user/updateToken`,
    { fcmToken: token },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_APP_TEACHER_TOKEN}`,
      },
    },
  );

  return data;
}
//토큰 전송 함수 