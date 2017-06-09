
// fine-wine-model.js

function BusData() {
    BusData.super(this);
    this.add_attr({
	ligne1ANom: "null",
	ligne1ATime: "0 mn",
	ligne1BNom: "null",
	ligne1BTime: "0 mn",
	ligne2ANom: "null",
	ligne2ATime: "0 mn",
	ligne2BNom: "null",
	ligne2BTime: "0 mn",
	ligne3ANom: "null",
	ligne3ATime: "0 mn",
	ligne3BNom: "null",
	ligne3BTime: "0 mn",
	ligne4ANom: "null",
	ligne4ATime: "0 mn",
	ligne4BNom: "null",
	ligne4BTime: "0 mn",
    });
}

spinalCore.extend(BusData, Model);

function CineData() {
    CineData.super(this);
    this.add_attr({
	filme1Nom: "null",
	filme1resv: "null",
	filme1trailler: "null",
	filme1actor: "null",
	filme1seance1: "null",
	filme1seance2: "null",
	filme1aff: "null",
	filme2Nom: "null",
	filme2resv: "null",
	filme2trailler: "null",
	filme2actor: "null",
	filme2seance1: "null",
	filme2seance2: "null",
	filme2aff: "null",
	filme3Nom: "null",
	filme3resv: "null",
	filme3trailler: "null",
	filme3actor: "null",
	filme3seance1: "null",
	filme3seance2: "null",
	filme3aff: "null",
	filme4Nom: "null",
	filme4resv: "null",
	filme4trailler: "null",
	filme4actor: "null",
	filme4seance1: "null",
	filme4seance2: "null",
	filme4aff: "null"	
    });
}

spinalCore.extend(CineData, Model);


function AdminData() {
    AdminData.super(this);
    this.add_attr({
	DSA: false,
	DSAZone: 0,
	Panne: false,
	PanneZone: 0,
	PanneMessage: "null",
	Incident: false,
	IncidentZone: 0,
	IncidentType: "null"
    });
}

spinalCore.extend(AdminData, Model);

function GlobalNotifData() {
    GlobalNotifData.super(this);
    this.add_attr({
	NotifGlobal: false,
	NotifGlobalType: "null"
    });
}

spinalCore.extend(GlobalNotifData, Model);


function MapData() {
    MapData.super(this);
    this.add_attr({
	Temp1: 20,
	DangerTemp1: false,
	People1: 0,
	Temp2: 20,
	DangerTemp2: false,
	People2: 0,
	Temp3: 20,
	DangerTemp3: false,
	People3: 0,
	Temp4: 20,
	DangerTemp4: false,
	People4: 0,
	Temp5: 20,
	DangerTemp5: false,
	People5: 0,
	Temp6: 39,
	DangerTemp6: false,
	People6: 0,
	Temp7: 20,
	DangerTemp7: false,
	People7: 0
    });
}

spinalCore.extend(MapData, Model);


