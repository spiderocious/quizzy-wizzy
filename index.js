function continueQuiz() {
  const username = document.getElementById("name").value;
  if (username.trim() === "") return;

  const url = new URL(`/pages/quiz/index.html`, window.location.origin);
  url.searchParams.append('username', username);

  window.location.href = url;
}
