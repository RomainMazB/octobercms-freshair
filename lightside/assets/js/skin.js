$(function() {
	$("#right-sidebar .tab").hover(activate);
});

function activate() {
    $("#right-sidebar .tab.active").removeClass('active');
    $(this).addClass('active');
}
