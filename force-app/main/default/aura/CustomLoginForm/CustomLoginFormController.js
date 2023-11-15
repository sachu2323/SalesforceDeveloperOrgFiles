({
	onLogin : function(component, event, helper) {
		var UserName = component.find('username').get('v.value');
        var PassWord = component.find('password').get('v.value');
        if(UserName != '' && PassWord != '')
        {
            console.log("UserName :",UserName);
            console.log("PassWord :",PassWord);
            helper.loginHelper(component,event,helper,UserName,PassWord);
        }else{
            console.log("Empty");
            alert('Please enter the user name and password')
        }
	}
})