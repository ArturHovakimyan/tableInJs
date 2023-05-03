const minBody = document.getElementById("minBody");
const addButtnoЕmployeeInfo = document.getElementById("addButtnoЕmployeeInfo");
const addButton = document.getElementById("add");
const resultButton = document.getElementById("result");
let employeeInfo = null;
const employeeNamesArray = [
	"Ivan P",
	"Roman N",
	"Nik L",
	"George S",
	"Roland H",
	"Cris T",
	"Ray B",
	"Dmitri M",
	"Stan S",
	"Jane M",
	"Julia R",
	"Tanya S",
];
addButtnoЕmployeeInfo.addEventListener("click", () => {
	const mySelect = document.querySelectorAll(".mySelect");
	const employeeCount = document.querySelectorAll(".myInput");
	const employeeData = [...employeeCount]
		.map((employee, index) => {
			return {
				name: mySelect[index].value,
				count: employee.value,
			};
		})
		.filter((employee) => employee.name !== "" && employee.count !== "");
	employeeInfo = employeeData;
	minBody.innerHTML = "";
	if (employeeInfo !== null) {
		employeeInfo.forEach((employee, index) => drawContent(employee, index));
	}
});

resultButton.addEventListener("click", () => {
	minBody.innerHTML = "";
	if (employeeInfo !== null) {
		employeeInfo.forEach((employee, index) => drawContent(employee, index));
	}
});

addButton.addEventListener("click", () => {
	minBody.innerHTML = "";
	employeeNamesArray.forEach((employee, index) => drawTboby(index));
	const mySelect = document.querySelectorAll(".mySelect");
	mySelect.forEach((item) => {
		item.addEventListener("click", (e) => {
			const select = document.getElementById(`${e.target.id}`);
			if (!select.childNodes[0]) {
				employeeNamesArray.forEach((employee) => drawOption(select, employee));
			}
		});
	});
});

function drawTboby(index) {
	const tr = document.createElement("tr");
	const thNumber = document.createElement("th");
	const tdInput = document.createElement("td");
	const tdSelect = document.createElement("td");
	const input = document.createElement("input");
	const select = document.createElement("select");
	thNumber.textContent = index + 1;
	input.type = "number";
	input.value = "";
	input.className = "myInput";
	select.name = "";
	select.className = "mySelect";
	select.id = Math.random();
	tdInput.append(input);
	tdSelect.append(select);
	tr.append(thNumber, tdSelect, tdInput);
	minBody.append(tr);
}

function drawContent({ name, count }, index) {
	const tr = document.createElement("tr");
	const thNumber = document.createElement("th");
	const tdName = document.createElement("td");
	const tdCount = document.createElement("td");
	thNumber.textContent = index + 1;
	tdName.textContent = name;
	tdCount.textContent = count;
	tr.append(thNumber, tdName, tdCount);
	minBody.append(tr);
}

function drawOption(select, employeeName) {
	const option = document.createElement("option");
	option.textContent = employeeName;
	option.value = employeeName;
	select.append(option);
}
