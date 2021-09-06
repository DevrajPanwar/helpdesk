const init = ()=>{
    FB.getLoginStatus(function(response){
        if(response.authResponse && response.status === 'connected'){
            console.log('Status of Login ',response);
        }
        else{
            //try again for login on the same screen
            return;
        }
    });
}

window.addEventListener('load',init);

function doLogin() {
    console.log("in doLogin");
    FB.login( function(response) {
      // statusChangeCallback(response);

      if (response.authResponse && response.status === 'connected') {
        const {userID,accessToken } = response.authResponse;
        FB.api(`https://graph.facebook.com/${userID}?fields=id,name,email,picture&access_token=${accessToken}`,function(res){
          //console.log('EMAIL is ', response);
          //console.log('Login SuccessFully');
        (async function(fbID, accessToken,emailID,userName){
          console.log(fbID, accessToken, emailID, userName);
          const result = await fetch('http://localhost:3000/login',{
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            method:'POST',
            body: JSON.stringify({fbID, accessToken, emailID, userName})
          });
          console.log('::::Result is ',result);
          location.href="/dashboard";
        })(userID,accessToken,res.email,res.name);
        });


        //location.href="/dashboard";
        // Logged into your webpage and Facebook.
      } else {
        document.querySelector('#result').innerText = 'Problem During FaceBook Login';
        console.log("Unable to Login ", response);
        // The person is not logged into your webpage or we are unable to tell.
      }

      console.log(response);
    },{scope: 'email,public_profile',auth_type: 'rerequest'});
  }