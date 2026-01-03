document.querySelector('form').addEventListener('submit',function(e)
{
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirm-password').value;

    if (password!==confirmpassword)
    {
        alert("Password do not match!");
        e.preventDefault();
        
    }

}