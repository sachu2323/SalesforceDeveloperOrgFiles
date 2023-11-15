public class customLoginFormController {
@AuraEnabled
    public static String login(String userName, String password, STring startUrl)
    {
        try{
            ApexPages.PageReference lgn = Site.login(userName,password,startUrl);
            aura.redirect(lgn);
            return 'success';
        }catch(Exception e){
            System.debug(e.getMessage());
            return e.getMessage();
        }
    }
}