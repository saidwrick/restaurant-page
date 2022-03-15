const contactPageLoad = () => {
    const content = document.querySelector("#content");

    content.innerHTML = 
`<div class="nav-bar">
<div class="tab" id="home">Home</div>
    <div class="tab" id="menu">Menu</div>
    <div class="tab selected" id="contact">Contact</div>
</div>

<div class="main">
    <div class="title">Contact Us</div>
    <div class="item">
        <div class="item-title">Location</div>
        <div class="item-content">
            123 Forest Drive, Forestville, Maine
        </div>
    </div>
    <div class="item">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1463975.7756409976!2d-70.65142646356918!3d44.22091149706779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb1cb69f362f3ef%3A0xac0d8159e6436b72!2sLandLubbers%20Grill%20and%20Dairy%20Bar!5e0!3m2!1sen!2sca!4v1647383621195!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
    </div>
</div>`;

};

export default contactPageLoad;