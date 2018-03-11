function searchText(searchText, ulList) {
    if(searchText != "") {
        var searchText = searchText.toLowerCase();
        ulList.find("li").hide();
        for(var i=0; i<ulList.find("li").length; i++) {
            var liTxt = ulList.find("li").eq(i).find("a").text().toLowerCase();
            console.log(liTxt);
            if(liTxt.indexOf(searchText) > -1) {
                ulList.find("li").eq(i).show();
            }
        }
    } else {
        ulList.find("li").show();
    }
}