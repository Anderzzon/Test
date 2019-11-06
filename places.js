window.onload = () => {
    let method = 'static';

    if (method === 'static') {
        // setTimeout is a temporary fix
        setTimeout(() => {
            let places = staticLoadPlaces();
            renderPlaces(places);
        }, 3000);
    }

    if (method !== 'static') {

        // first get current user location
        return navigator.geolocation.getCurrentPosition(function (position) {

            // then use it to load from remote APIs some places nearby
            dynamicLoadPlaces(position.coords)
                .then((places) => {
                    renderPlaces(places);
                })
        },
            (err) => console.error('Error in retrieving position', err),
            {
                enableHighAccuracy: true,
                maximumAge: 0,
                timeout: 27000,
            }
        );
    }
};

function staticLoadPlaces() {
    return [
        {
            name: "Plats 1",
            link: '/question1',
            location: {
                lat: 59.304914, // add here latitude if using static data
                lng: 18.093909, // add here longitude if using static data
            }
        },
        {
            name: 'Plats 2',
            link: 'question1',
            location: {
                lat: 59.304881,
                lng: 18.097157,
            }
        },
        {
            name: 'Plats 3',
            link: 'question1',
            location: {                
                lat: 59.303819,
                lng: 18.096301,
            }
        },
        {
            name: 'Plats 4',
            link: 'question1',
            location: {                
                lat: 59.310671,
                lng: 18.024296,
            }
        },
        {
            name: 'Plats 5',
            link: 'question1',
            location: {                
                lat: 59.310212,
                lng: 18.022568,
            }
        },
        {
            name: 'Plats 6',
            link: 'question1',
            location: {                
                lat: 59.309476,
                lng: 18.021699,
            }
        },
        {
            name: 'Plats 7',
            link: 'question1',
            location: {                
                lat: 59.584411,
                lng: 18.583101,
            }
        },
        {
            name: 'Plats 8',
            link: 'qustion1',
            location: {                
                lat: 59.584122,
                lng: 18.583491,
            }
        }
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        // add place name
        let icon = document.createElement('a-link');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        icon.setAttribute('title', place.name);
        icon.setAttribute('href', place.link);
        icon.setAttribute('scale', '5 5 5');

        icon.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(icon);
    });
}




/*
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
            link: 'https://anderzzon.github.io',
            location: {
                lat: 59.304914, // add here latitude if using static data
                lng: 18.093909, // add here longitude if using static data
            }
        },
        {
            name: 'Plats 2',
            link: 'https://anderzzon.github.io',
            location: {
                lat: 59.304881,
                lng: 18.097157,
            }
        },
        {
            name: 'Plats 3',
            link: 'https://anderzzon.github.io',
            location: {                
                lat: 59.303819,
                lng: 18.096301,
            }
        },
        {
            name: 'Plats 4',
            link: 'https://anderzzon.github.io',
            location: {                
                lat: 59.310671,
                lng: 18.024296,
            }
        },
        {
            name: 'Plats 5',
            link: 'https://anderzzon.github.io',
            location: {                
                lat: 59.310212,
                lng: 18.022568,
            }
        },
        {
            name: 'Plats 6',
            link: 'https://anderzzon.github.io',
            location: {                
                lat: 59.309476,
                lng: 18.021699,
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
        icon.setAttribute('name', place.name);
        //icon.setAttribute('href', place.link)
        icon.setAttribute('src', 'map-icon.png');
        

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go to places...
        icon.setAttribute('scale', '5, 5');
        
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
                }, 5000);
            }
        };

        icon.addEventListener('click', clickListener); 

        scene.appendChild(icon);
    });
}/*
window.onload = () => {
    let method = 'static';

    if (method === 'static') {
        // setTimeout is a temporary fix
        setTimeout(() => {
            let places = staticLoadPlaces();
            renderPlaces(places);
        }, 3000);
    }
};*/