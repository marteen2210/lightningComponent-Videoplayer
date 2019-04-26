({
	playVideo : function(component, event, helper) {
		var videoid = component.get("v.srcvalue");
        alert(videoid);
        var url = "https://marteen-dev-ed--c.ap4.content.force.com/servlet/servlet.FileDownload?file=" + videoid;
        component.set("v.src_value", url);
        document.getElementById("vdo").load();
        document.getElementById("vdo").play();
	}
})