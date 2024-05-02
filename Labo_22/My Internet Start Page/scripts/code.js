const setup = () => {
    let history = [];

    if (localStorage.getItem('history')) {
        history = JSON.parse(localStorage.getItem('history'));
        renderHistory();
    }

    document.getElementById('go-button').addEventListener('click', function () {
        const zoekopdracht = document.getElementById('zoekopdracht').value;
        const parts = zoekopdracht.split(' ');
        const prefix = parts[0];
        const zoekwaarde = parts.slice(1).join(' ');

        if (prefix === '/g' || prefix === '/y' || prefix === '/t' || prefix === '/i') {
            let url;
            switch (prefix) {
                case '/g':
                    url = "https://www.google.com/search?q=" + zoekwaarde;
                    break;
                case '/y':
                    url = "https://www.youtube.com/results?search_query=" + zoekwaarde;
                    break;
                case '/t':
                    url = "https://twitter.com/hashtag/" + zoekwaarde;
                    break;
                case '/i':
                    url = "https://www.instagram.com/explore/tags/" + zoekwaarde;
                    break;
                default:
                    alert('Ongeldig commando! Gebruik /g, /y, /t of /i.');
                    return;
            }

            history.push({
                title: prefix.slice(1).toUpperCase(),
                text: zoekwaarde,
                url: url
            });

            localStorage.setItem('history', JSON.stringify(history));

            // Open the URL in a new tab
            window.open(url, '_blank');

            // Render the updated history
            renderHistory();

            document.getElementById('zoekopdracht').value = '';
        } else if (prefix === '/clear') {
            history = [];
            localStorage.removeItem('history');
            document.getElementById('history').innerHTML = '';
            document.getElementById('zoekopdracht').value = '';
        } else {
            alert('Ongeldig commando! Gebruik /g, /y, /t, /i of /clear.');
        }
    });

    function renderHistory() {
        const historyContainer = document.getElementById('history');
        historyContainer.innerHTML = '';
        history.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('col-md-4');
            card.innerHTML = `
                <div class="card ${getCardTheme(item.title)}">
                    <div class="card-body">
                        <h3 class="card-title">${getFullTitle(item.title)}</h3>
                        <p class="card-text">${item.text}</p>
                        <a href="${item.url}" target="_blank">Go!</a>
                    </div>
                </div>
            `;
            historyContainer.appendChild(card);
        });
    }

    function getCardTheme(prefix) {
        switch (prefix) {
            case 'G':
                return 'google-card';
            case 'Y':
                return 'youtube-card';
            case 'T':
                return 'twitter-card';
            case 'I':
                return 'instagram-card';
            default:
                return '';
        }
    }

    function getFullTitle(initial) {
        switch (initial) {
            case 'G':
                return 'Google';
            case 'Y':
                return 'YouTube';
            case 'T':
                return 'Twitter';
            case 'I':
                return 'Instagram';
            default:
                return '';
        }
    }

}

window.addEventListener("load", setup);