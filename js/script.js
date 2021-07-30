var JSON = {}
var markers = [];
var srcRedIcon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png";
var srcBlackIcon = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png";

function onMapClick(e) {
	console.log("You clicked the map at " + e.latlng);
}

function getRedIcon(country) {
	var redIcon = new L.Icon({
		iconUrl: srcRedIcon,
		shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
		iconSize: [25, 41],
		iconAnchor: [12, 41],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
		className: country
	});

	return redIcon;
}

function pointGermany(mymap) {
	var country = "Germania";
	var position = [51.862924, 10.151367];

	var marker = L.marker(
		position, {
			icon: getRedIcon(country),
		},
	).addTo(mymap);

	$("." + country).popover({
		html: true,
		container: "body",
		content: msg[country],
		title: country,
		trigger: "hover"
	})

	$("." + country).click(function () {
		$("#modal" + country).modal("show");
	})

	markers.push(marker);
}

function pointItaly(mymap) {
	var country = "Italia";
	var position = [43.389082, 11.733398];

	var marker = L.marker(
		position, {
			icon: getRedIcon(country),
		},
	).addTo(mymap);

	$("." + country).popover({
		html: true,
		container: "body",
		content: msg[country],
		title: country,
		trigger: "hover"
	})

	$("." + country).click(function () {
		$("#modal" + country).modal("show");
	})

	markers.push(marker);
}

function pointTurchia(mymap) {
	var country = "Turchia";
	var position = [39.436193, 40.517578];

	var marker = L.marker(
		position, {
			icon: getRedIcon(country),
		},
	).addTo(mymap);

	$("." + country).popover({
		html: true,
		container: "body",
		content: msg[country],
		title: country,
		trigger: "hover"
	})

	$("." + country).click(function () {
		$("#modal" + country).modal("show");
	})

	markers.push(marker);
}

function pointRomania(mymap) {
	var country = "Romania";
	var position = [46.890232, 26.235352];

	var marker = L.marker(
		position, {
			icon: getRedIcon(country),
		},
	).addTo(mymap);

	$("." + country).popover({
		html: true,
		container: "body",
		content: msg[country],
		title: country,
		trigger: "hover"
	})

	$("." + country).click(function () {
		$("#modal" + country).modal("show");
	})

	markers.push(marker);
}

function pointPolonia(mymap) {
	var country = "Polonia";
	var position = [53.409532, 20.34668];

	var marker = L.marker(
		position, {
			icon: getRedIcon(country),
		},
	).addTo(mymap);

	$("." + country).popover({
		html: true,
		container: "body",
		content: msg[country],
		title: country,
		trigger: "hover"
	})

	$("." + country).click(function () {
		$("#modal" + country).modal("show");
	})

	markers.push(marker);
}

function pointFoibe(mymap) {
	var country = "Foibe";
	var position = [45.844108, 14.139404];

	var marker = L.marker(
		position, {
			icon: getRedIcon(country),
		},
	).addTo(mymap);

	$("." + country).popover({
		html: true,
		container: "body",
		content: msg[country],
		title: country,
		trigger: "hover"
	})

	$("." + country).click(function () {
		$("#modal" + country).modal("show");
	})

	markers.push(marker);
}

function pointLegend(mymap) {
	var legend = L.control({
		position: "topleft"
	})

	legend.onAdd = function () {
		var div = L.DomUtil.create("div", "info legend");
		div.innerHTML += "<i class=\"red_square\"></i><button class=\"btnLegend btn btn-dark\" id=\"btnShoah\">SHOAH ☠️</button><br/>";
		div.innerHTML += "<i class=\"blue_square\"></i><button class=\"btnLegend btn btn-dark\" id=\"btnArmeno\">ARMENO ☠️</button><br/>";
		div.innerHTML += "<i class=\"green_square\"></i><button class=\"btnLegend btn btn-dark\" id=\"btnFoibe\">FOIBE ☠️</button><br/>";
		div.innerHTML += "<i class=\"white_square\"></i><button class=\"btnLegend btn btn-dark\" id=\"btnReset\">RESET</button><br/>";
		return div;
	};

	legend.addTo(mymap);
}

function bore() {
	$(".leaflet-marker-icon").hover(function () {
		$(this).attr("src", "imgs/favicon.svg");
	})

	$(".leaflet-marker-icon").mouseout(function () {
		$(this).attr("src", srcRedIcon);
	})
}

function show_map() {
	var position_start = [51.862924, 10.151367];
	var mymap = L.map("map").setView(position_start, 5);

	L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
		attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
		id: "mapbox/outdoors-v11",
		tileSize: 512,
		zoomOffset: -1,
		accessToken: "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA"
	}).addTo(mymap);

	pointLegend(mymap);

	$("#btnShoah").click(function () {
		$(this).attr("disabled", true);
		pointGermany(mymap);
		pointItaly(mymap);
		pointRomania(mymap);
		pointPolonia(mymap);
		var position = [51.862924, 10.151367];

		var style = {
			fillColor: "red",
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7
		};

		shoahJSON = L.geoJson(
			shoah_countries, {
				style: style
			}
		);

		JSON['shoah'] = shoahJSON;
		JSON['shoah'].addTo(mymap);
		mymap.setView(position, 5);
		bore();
	})

	$("#btnArmeno").click(function () {
		$(this).attr("disabled", true);
		pointTurchia(mymap);
		var position = [40.346544, 35.068359];

		var style = {
			fillColor: "blue",
			weight: 2,
			opacity: 1,
			color: 'white',
			dashArray: '3',
			fillOpacity: 0.7
		};

		shoahJSON = L.geoJson(
			armenian_countries, {
				style: style
			}
		);

		JSON['armeno'] = shoahJSON;
		JSON['armeno'].addTo(mymap);
		mymap.setView(position, 5);
		bore();
	})

	$("#btnFoibe").click(function () {
		$(this).attr("disabled", true);
		pointFoibe(mymap);
		var position = [45.844108, 14.139404];

		var foibeCircle = L.circle(position, {
			color: "green",
			fillColor: '#02db00',
			fillOpacity: 0.5,
			radius: 80000
		}).addTo(mymap);

		JSON['foibe'] = foibeCircle;
		JSON['foibe'].addTo(mymap);
		mymap.setView(position, 8);
		bore();
	})

	$("#btnReset").click(function () {
		var position = [43.389082, 11.733398];
		$(".btnLegend").attr("disabled", false);

		for (a in JSON) {
			mymap.removeLayer(JSON[a]);
		}

		for (a = 0; a < markers.length; a++) {
			mymap.removeLayer(markers[a]);
		}

		mymap.setView(position, 5);
	})

	$(".close").click(function () {
		var modal = $(this).closest(".modal");
		$(modal).modal("hide");
	})

	mymap.on("click", onMapClick);
}

$(function () {
	$("#iceberg").click(function () {
		$(this).slideUp(2000);
		$("#map").css("height", "1080px");
		$("#map").css("visibility", "display");
		show_map();
	})
})