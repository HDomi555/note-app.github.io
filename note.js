const notes = [];

document.getElementById("save-note").addEventListener("click", () => {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-content").value;

  const note = {
    title,
    content,
  };

  notes.push(note);

  document.getElementById("notes-list").innerHTML = "";

  for (const note of notes) {
    const listItem = document.createElement("li");
    listItem.textContent = note.title;

    document.getElementById("notes-list").appendChild(listItem);
  }
});
