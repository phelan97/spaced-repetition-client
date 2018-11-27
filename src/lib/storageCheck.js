
export default function storage() {
  try {
    // The problem was here
    const authToken = localStorage.getItem('AUTH_TOKEN')
    if (authToken !== null) {
      return authToken;
    }

    return false;
} catch (e) {
    //console.log(e.message);
    return false;
}
}