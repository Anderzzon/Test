window.onload = () => {
     let method = 'static';

        // setTimeout is a temporary fix
        setTimeout(() => {
            let places = staticLoadPlaces();
            renderPlaces(places);
        }, 3000);
};
function staticLoadPlaces() {
    //Arrey with the places
    return [
        {
            name: "Plats 1",
            location: {
                lat: 59.304914, // add here latitude if using static data
                lng: 18.093909, // add here longitude if using static data
            }
        },
        {
            name: 'Plats 2',
            location: {
                lat: 59.304881,
                lng: 18.097157,
            }
        },
        {
            name: 'Plats 3',
            location: {                
                lat: 59.303819,
                lng: 18.096301,
            }
        },
        {
            name: 'Plats 4',
            location: {                
                lat: 59.310671,
                lng: 18.024296,
            }
        },
        {
            name: 'Plats 5',
            location: {                
                lat: 59.310212,
                lng: 18.022568,
            }
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        const latitude = place.location.lat;
        const longitude = place.location.lng;

        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', "TEST");
        //icon.setAttribute('name', place.name);
        icon.setAttribute('src', 'map-icon.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '20, 20');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {
                const label = document.createElement('span');
                const container = document.createElement('div');
                container.setAttribute('id', 'place-label');
                label.innerText = name;
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 1500);
            }
        };

        icon.addEventListener('click', clickListener);

        scene.appendChild(icon);
    });
}

window.onload = () => {
    let method = 'static';

    if (method === 'static') {
        // setTimeout is a temporary fix
        setTimeout(() => {
            let places = staticLoadPlaces();
            renderPlaces(places);
        }, 3000);
    }
};