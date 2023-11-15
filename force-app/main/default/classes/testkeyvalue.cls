public class testkeyvalue {
     public static void loopThroughMap() {
        Map<String, String> keyValueMap = new Map<String, String>();
        keyValueMap.put('Key1', 'Value1');
        keyValueMap.put('Key2', 'Value2');
        keyValueMap.put('Key3', 'Value3');

        for (String key : keyValueMap.keySet()) {
            String value = keyValueMap.get(key);
            System.debug('Key: ' + key + ', Value: ' + value);
        }
    }
}