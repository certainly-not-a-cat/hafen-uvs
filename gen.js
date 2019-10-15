	var folderSVG = "pattern-svg/";
	var folderPNG = "pattern-png/";
	var tTable = document.getElementById("main_container");
	var gl_objectNames = [
		{name : "Shield", res : "gfx_terobjs_items_roundshield"},
		{name : "Cape", res : "gfx_borka_capeproj"},
		{name : "Tabard-f: Back", res : "gfx_borka_tabardproj-female-back"},
		{name : "Tabard-f: Front", res : "gfx_borka_tabardproj-female-front"},
		{name : "Tabard-m: Back", res : "gfx_borka_tabardproj-male-back"},
		{name : "Tabard-m: Front", res : "gfx_borka_tabardproj-male-front"},
		{name : "Barterstand", res : "gfx_terobjs_barterstand-sign"},
		{name : "Battle standard", res : "gfx_terobjs_items_battlestandard"},
		{name : "Face cut out", res : "gfx_terobjs_facecutoutstandee"},
		{name : "Foldup sign", res : "gfx_terobjs_foldupsign"},
		{name : "Painting", res : "gfx_terobjs_items_painting"},
		{name : "Sail: Knarr", res : "gfx_terobjs_vehicle_knarr"},
		{name : "Sail: Snekkja", res : "gfx_terobjs_vehicle_snekkja"},
		{name : "Signboard", res : "gfx_terobjs_signboard"},
		{name : "Standing flag", res : "gfx_terobjs_standingflag"},
		{name : "Village flag", res : "gfx_terobjs_vflag"},
	];

document.onLoad = main();

function main() {
	for (let r of gl_objectNames) {
		let nRow = document.createElement("tr");
		let nCell = document.createElement("td");
		
		let nH2 = document.createElement("H2");
		nH2.innerHTML = r.name;

		let nImg = document.createElement("img");
		nImg.src = folderPNG + r.res + ".png";

		let nA = document.createElement("A");
		nA.href = folderSVG + r.res + ".svg";
		nA.innerHTML = "SVG";

		nCell.appendChild(nH2);
		nCell.appendChild(nImg);
		nCell.appendChild(nA);

		nRow.appendChild(nCell);
		tTable.appendChild(nRow);
	}
}
	