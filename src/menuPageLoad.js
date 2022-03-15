const menuPageLoad = () => {
    const content = document.querySelector("#content");

    content.innerHTML = 
`<div class="nav-bar">
<div class="tab" id="home">Home</div>
    <div class="tab selected" id="menu">Menu</div>
    <div class="tab" id="contact">Contact</div>
</div>

<div class="main">
    <div class="title">Menu</div>
    <div class="item">
        <div class="item-title">Starters</div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="menu-title">Food Item 1</div>
                <div class="menu-description">Lorem ipsum dolor sit amet.</div>
            </div>
            <div class="menu-price">$25</div>
        </div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="menu-title">Food Item 2</div>
                <div class="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="menu-price">$21</div>
        </div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="menu-title">Food Item 3</div>
                <div class="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</div>
            </div>
            <div class="menu-price">$15</div>
        </div>
    </div>

    <div class="item">
        <div class="item-title">Mains</div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="menu-title">Food Item 1</div>
                <div class="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="menu-price">$25</div>
        </div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="menu-title">Food Item 2</div>
                <div class="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</div>
            </div>
            <div class="menu-price">$21</div>
        </div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="menu-title">Food Item 3</div>
                <div class="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
            <div class="menu-price">$15</div>
        </div>
        <div class="menu-content">
            <div class="menu-item">
                <div class="menu-title">Food Item 4</div>
                <div class="menu-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</div>
            </div>
            <div class="menu-price">$18</div>
        </div>
    </div>

        <div class="item">
            <div class="item-title">Beverages</div>
            <div class="menu-content">
                <div class="menu-item">
                    <div class="menu-title">Coffee</div>
                    <div class="menu-description">Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div class="menu-price">$5</div>
            </div>
            <div class="menu-content">
                <div class="menu-item">
                    <div class="menu-title">Tea</div>
                    <div class="menu-description">Incididunt ut labore et dolore magna aliqua.</div>
                </div>
                <div class="menu-price">$2</div>
            </div>
            <div class="menu-content">
                <div class="menu-item">
                    <div class="menu-title">Soda</div>
                    <div class="menu-description">Lorem ipsum dolor sit amet.</div>
                </div>
                <div class="menu-price">$3</div>
            </div>
        </div>
</div>
</div>`;

};

export default menuPageLoad;