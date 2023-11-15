public class AnimalLocator {
    public static String getAnimalNameById(Integer animalId) {
        String endpoint = 'https://th-apex-http-callout.herokuapp.com/animals/' + animalId;
        
        HttpRequest request = new HttpRequest();
        request.setEndpoint(endpoint);
        request.setMethod('GET');
        
        HttpResponse response = new HttpResponse();
        try {
            Http http = new Http();
            response = http.send(request);
        } catch (Exception e) {
            System.debug('Exception: ' + e.getMessage());
        }
        
        String animalName = '';
        if (response.getStatusCode() == 200) {
            Map<String, Object> jsonResponse = (Map<String, Object>) JSON.deserializeUntyped(response.getBody());
            animalName = (String) jsonResponse.get('name');
        }
        
        return animalName;
    }
}