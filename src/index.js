import homePageLoad from './homePageLoad'
import menuPageLoad from './menuPageLoad'
import contactPageLoad from './contactPageLoad'

homePageLoad();

document.body.addEventListener('click', function(e){
    if (e.target.id == "home" && e.target.className !== "tab selected") {
        homePageLoad();
    }
    else if (e.target.id == "menu" && e.target.className !== "tab selected"){
        menuPageLoad();
    }
    else if (e.target.id == "contact" && e.target.className !== "tab selected"){
        contactPageLoad();
    }
});