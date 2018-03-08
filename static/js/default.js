function searchText(searchText, ulList) {
    if(searchText != "") {
        ulList.find("li").hide();
        ulList.find("a:contains(" + searchText + ")").parent().show();
    } else {
        ulList.find("li").show();
    }
}