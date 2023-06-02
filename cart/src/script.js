var shoplist = {};
shoplist.name = "mybuylist 我的購物清單";
shoplist.time = "2023/05/04";
shoplist.list = [
	{ name: "吹風機", price: 453 },
	{ name: "行動電源", price: 1580 },
	{ name: "鍵盤滑鼠組", price: 2000 },
	{ name: "螢幕燈", price: 1135 },
	{ name: "皮夾", price: 2365 }
];
var item_html =
	"<li id={{id}} class='buy_item'>{{num}} {{item}}<div class='price'>{{price}}</div><div class='del_btn' id={{del_id}}>X</div></li>";

var total_html =
	"<li class='buy_item total'>總價<div class='price'>{{price}}</div></li>";

function showlist() {
	$("#item_list").html("");
	var total_price = 0;
	for (var i = 0; i < shoplist.list.length; i++) {
		var item = shoplist.list[i];
		var item_id = "buyitem_" + i;
		var del_item_id = "del_buyitem_" + i;
		total_price += parseInt(item.price);
		var current_item_html = item_html
			.replace("{{num}}", i + 1)
			.replace("{{item}}", item.name)
			.replace("{{id}}", item_id)
			.replace("{{del_id}}", del_item_id)
			.replace("{{price}}", item.price);

		$("#item_list").append(current_item_html);
		$("#" + del_item_id).click(function () {
			remove_item(item_id);
		});
	}
	var current_item_html = total_html.replace("{{price}}", total_price);
	$("#item_list").append(current_item_html);
}
showlist();

$(".addbtn").click(function () {
	shoplist.list.push({
		name: $("#input_name").val(),
		price: $("#input_price").val()
	});
	showlist();
	$("#input_name").val("");
	$("#input_price").val("");
});
function remove_item(id) {
	shoplist.list.splice(id, 1);
	showlist();
}
