const loadMenu = (() => {
    const content = document.querySelector("#content");

    content.innerHTML =  `<div class="nav-bar">
<div class="tab selected">Home</div>
    <div class="tab">Menu</div>
    <div class="tab">Contact</div>
</div>

<div class="main">
    <div class="title">Restaurant Name</div>
    <div class="item">
        <div class="item-title">About</div>
        <div class="item-content">
            This is a wonderful restaurant founded in 2022. 
            Featuring all sorts of delicious and wonderful food. 
        </div>
    </div>
    <div class="item">
        <div class="item-title">Hours</div>
        <div class="item-content">
            Sunday: 8am - 8pm <br>
            Monday: 6am - 6pm <br>
            Tuesday: 6am - 6pm <br>
            Wednesday: 6am - 6pm <br>
            Thursday: 6am - 10pm <br>
            Friday: 6am - 10pm <br>
            Saturday: 8am - 10pm
        </div>
    </div>
    <div class="item">
        <div class="item-title">Location</div>
        <div class="item-content">
            123 Forest Drive, Forestville, Maine
        </div>
    </div>
</div>`

    
})();