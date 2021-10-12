function fetchUrl() {
  return fetch("https://swapi.dev/api/people");
}

async function getData() {
  try {
    const res = await fetchUrl();
    const data = await res.json();

    if (!res.ok) throw res.statusText;
    console.log(data.results);
  } catch (err) {
    console.error(err);
  }
}

// console.log(getData());
