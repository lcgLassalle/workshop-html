function validation(event){
    var nom = document.getElementById("name");
    var prenom = document.getElementById("firstname");
    var email = document.getElementById("email");
    var age = document.getElementById("age");
    var tel = document.getElementById("phone");
    var message = document.getElementById("message")
    var erreurs = [];
    var messageerreur = document.getElementById("error");
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log("coucou");
    if(nom.value.length<4 ){
        erreurs.push("Le nom doit être au moins de 4 charactères");        
    }
    if(prenom.value.length<4 ){
        erreurs.push("Le prénom doit être au moins de 4 charactères");        
    }
    if(age.value.length<1){
        erreurs.push("L'âge est une donnée obligatoire");        
    }
    if(age.value<18 ){
        erreurs.push("L'âge minimum est de 18ans");        
    }
    if(email.value.length<4 ){
        erreurs.push("L'email doit être au moins de 4 charactères");        
    }
	if (!email.value.match(regex))
	{
		erreurs.push("l'email n'est pas en format valide");
	}
    if (tel.value<10 || tel.value>10)
	{
		erreurs.push("le téléphone n'est pas de la bonne taille");
	}
    if (typeof tel != "Number")
	{
		erreurs.push("l'email doit être en format numérique");
	}
    if (message.value.length>150)
	{
		erreurs.push("le message est trop long");
	}
    if(erreurs.length>0){
        messageerreur.innerHTML=erreurs.join("<br>");
        event.preventDefault();
    }else{
        messageerreur.innerHTML="";
    }
}