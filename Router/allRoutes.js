import Route from "../Router/Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",[]),
    new Route("/galerie", "galerie", "/pages/galerie.html","/js/galerie.js",[]),
    new Route("/connexion", "connexion", "/pages/auth/connexion.html", "js/auth/signin.Js",["disconnected"]),
    new Route("/signup", "Inscrivez-vous ", "/pages/auth/signup.html" , "js/auth/signup.js",["disconnected"]),
    new Route("/account", "Mon compte ", "/pages/auth/account.html",["client", "admin"]),
    new Route("/editPassword", "Changer votre Mot de passe", "/pages/auth/editPassword.html",["client", "admin"]),
    new Route("/reservation", "Reservation", "/pages/reservation.html","reserv.js",["client"]),
    new Route("/editReserv", "Réservez", "/pages/editReserv.html",["client"]),
];  

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Quai Antique";
