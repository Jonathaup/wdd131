// Temples Array
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Salt Lake Utah",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 253015,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
	},
	{
		templeName: "Bogotá Colombia",
		location: "Bogotá, Colombia",
		dedicated: "1999, April, 24",
		area: 53500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/400x250/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
	},
	{
		templeName: "Provo City Center",
		location: "Provo, Utah, United States",
		dedicated: "2016, March, 20",
		area: 85084,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/provo-city-center/400x250/provo-city-center-temple-1572517-wallpaper.jpg"
	}
];

// Function to create temple cards
function createTempleCard(temple) {
	const figure = document.createElement('figure');

	const img = document.createElement('img');
	img.src = temple.imageUrl;
	img.alt = temple.templeName;
	img.loading = 'lazy'; // Native deferred charging

	const figcaption = document.createElement('figcaption');
	figcaption.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
  `;

	figure.appendChild(img);
	figure.appendChild(figcaption);

	return figure;
}

// Function to display temples
function displayTemples(filteredTemples) {
	const container = document.querySelector('main');

	// Clear previous content (except h1)
	const h1 = container.querySelector('h1');
	container.innerHTML = '';
	container.appendChild(h1);

	filteredTemples.forEach(temple => {
		const card = createTempleCard(temple);
		container.appendChild(card);
	});
}

// Function to filter ancient temples (before 1900)
function filterOldTemples() {
	const filtered = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(',')[0]);
		return year < 1900;
	});
	displayTemples(filtered);
	document.querySelector('h1').textContent = 'Old';
}

// Function to filter new temples (after 2000)
function filterNewTemples() {
	const filtered = temples.filter(temple => {
		const year = parseInt(temple.dedicated.split(',')[0]);
		return year >= 2000;
	});
	displayTemples(filtered);
	document.querySelector('h1').textContent = 'New';
}

// Function to filter large temples (over 90,000 sq ft)
function filterLargeTemples() {
	const filtered = temples.filter(temple => temple.area > 90000);
	displayTemples(filtered);
	document.querySelector('h1').textContent = 'Large';
}

// Function to filter small temples (less than 10,000 sq ft)
function filterSmallTemples() {
	const filtered = temples.filter(temple => temple.area < 10000);
	displayTemples(filtered);
	document.querySelector('h1').textContent = 'Small';
}

// Function to display all temples
function showAllTemples() {
	displayTemples(temples);
	document.querySelector('h1').textContent = 'Home';
}

// Event listeners for the menu
document.querySelectorAll('.navbar-temple a').forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const id = e.target.id;

		switch (id) {
			case 'home':
				showAllTemples();
				break;
			case 'old':
				filterOldTemples();
				break;
			case 'new':
				filterNewTemples();
				break;
			case 'large':
				filterLargeTemples();
				break;
			case 'small':
				filterSmallTemples();
				break;
		}
	});
});

// Functionality of the hamburger menu
const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navbar-temple');

menuButton.addEventListener('click', () => {
	nav.classList.toggle('open');
	menuButton.classList.toggle('open');
});

// Dynamic footer
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;

// Show all temples when the page loads
showAllTemples();