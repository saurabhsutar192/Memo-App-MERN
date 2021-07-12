export const getMemos = () =>
  fetch("http://localhost:4000/").then((res) => res.json());

export const deleteMemos = (id) =>
  fetch(`http://localhost:4000/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());

export const addMemos = (memo) =>
  fetch(`http://localhost:4000/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(memo),
  }).then((res) => res.json());

export const editMemos = (memo, id) =>
  fetch(`http://localhost:4000/${id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: memo.text }),
  }).then((res) => res.json());
