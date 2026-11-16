function copyEmail() {
    var emailText = document.getElementById("userEmail").innerText;
    
    navigator.clipboard.writeText(emailText);
    var show=document.getElementById("copyText");
    show.classList.add("show");
    setTimeout(() => {
        show.classList.remove("show");
      }, 3000);

  
}