@isTest
private class AnimalLocatorTest {
    private class AnimalLocatorMock implements HttpCalloutMock {
        public HTTPResponse respond(HTTPRequest req) {
            HttpResponse res = new HttpResponse();
            res.setHeader('Content-Type', 'application/json');
            res.setBody('{"name": "Elephant"}');
            res.setStatusCode(200);
            return res;
        }
    }
    
    @isTest
    static void testGetAnimalNameById() {
        Test.setMock(HttpCalloutMock.class, new AnimalLocatorMock());
        
        Integer animalId = 123;
        String animalName = AnimalLocator.getAnimalNameById(animalId);
        
        // Verify the expected result
        System.assertEquals('Elephant', animalName);
    }
}