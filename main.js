document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search');
    const countryContainer = document.getElementById('country-container');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.trim();
        if (query) {
            fetch(`https://restcountries.com/v3.1/name/${query}`)
                .then(response => response.json())
                .then(countries => {
                    countryContainer.innerHTML = '';
                    countries.forEach(country => {
                        const countryElement = document.createElement('div');
                        countryElement.classList.add('country');
                        countryElement.innerHTML = `
                            <h2>${country.name.common}</h2>
                            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}">
                            <p><strong>Capital:</strong> ${country.capital}</p>
                            <p><strong>Region:</strong> ${country.region}</p>
                            <p><strong>Population:</strong> ${country.population}</p>
                        `;
                        countryContainer.appendChild(countryElement);
                    });
                })
                .catch(error => console.error('Error fetching country data:', error));
        } else {
            countryContainer.innerHTML = '';
        }
    });
});
