export default function json2html(data) {
  const table = document.createElement("table");
  table.setAttribute("data-user", "singhharshit1909@gmail.com");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Name", "Age", "Gender"];
  headers.forEach((header) => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  data.forEach((person) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.textContent = person.Name;
    row.appendChild(nameCell);
    const ageCell = document.createElement("td");
    ageCell.textContent = person.Age;
    row.appendChild(ageCell);
    const genderCell = document.createElement("td");
    genderCell.textContent = person.Gender || "";
    row.appendChild(genderCell);
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}
