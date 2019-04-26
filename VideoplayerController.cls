public class VideoplayerController {
	//Get Document List
    @AuraEnabled
    public static List<Map<String, String>> getDocList() {
        List<Map<String, String>> docNameList = new List<Map<String, String>>();
        for(Document docName : [SELECT Id, Name, ContentType FROM Document WHERE ContentType = 'video/mp4' ORDER BY Name]) {
            docNameList.add(new Map<String, String>{'value' => docName.Id, 'label' => docName.Name});
        }
        return docNameList;
    }
}