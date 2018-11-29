
export default function storage() {
  try {
    // The problem was here
    const authToken = localStorage.getItem("Authorization")
    if (authToken !== null) {
      return authToken;
    }

    return false;
} catch (e) {
    console.log('Login error', e.message);
    return false;
}
}