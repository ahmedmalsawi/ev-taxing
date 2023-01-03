/** @format */

function taxing() {
	let beforeTax = document.getElementById("beforeTax");
	let tax = document.getElementById("tax");
	let afterTax = document.getElementById("afterTax");

	tax.value = Math.round(((afterTax.value / 115)* 15) * 100) / 100;
	beforeTax.value = Math.round((afterTax.value / 115) * 100 * 100) / 100;
}
function taxing2() {
	let beforeTax2 = document.getElementById("beforeTax2");
	let tax2 = document.getElementById("tax2");
	let afterTax2 = document.getElementById("afterTax2");

	tax2.value = Math.round((beforeTax2.value / 100) * 15 * 100) / 100;
	afterTax2.value = Math.round((beforeTax2.value / 100) * 115 * 100) / 100;
}
