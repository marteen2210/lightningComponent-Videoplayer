({
	getDocument : function(component) {
        var doc_List = component.get("c.getDocList");
        doc_List.setCallback(this, function(response) {
            if(response.getState() == "SUCCESS") {
                var d_list = response.getReturnValue();
                component.set("v.doumentList", d_list);
            }
        });
        $A.enqueueAction(doc_List);
    }
})