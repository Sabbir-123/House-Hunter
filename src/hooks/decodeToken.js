export function decodeToken(token) {
    try {
      const [, payloadBase64] = token.split(".");
      const payload = JSON.parse(atob(payloadBase64));
      return { payload };
    } catch (error) {
      console.error("Failed to decode JWT:", error);
      return null;
    }
  }