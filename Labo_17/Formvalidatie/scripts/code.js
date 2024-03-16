const setup = () => {
    function validateForm() {
        const voornaamInput = document.getElementById('voornaam');
        const familienaamInput = document.getElementById('familienaam');
        const geboortedatumInput = document.getElementById('geboortedatum');
        const emailInput = document.getElementById('email');
        const aantalKinderenInput = document.getElementById('aantalKinderen');

        const voornaam = document.getElementById('voornaam').value.trim();
        const familienaam = document.getElementById('familienaam').value.trim();
        const geboortedatum = document.getElementById('geboortedatum').value.trim();
        const email = document.getElementById('email').value.trim();
        const aantalKinderen = document.getElementById('aantalKinderen').value.trim();

        document.getElementById('voornaamError').textContent = voornaam.length > 30 ? 'Max. 30 karakters' : '';
        document.getElementById('familienaamError').textContent = familienaam === '' ? 'Verplicht veld' : (familienaam.length > 50 ? 'Max. 50 karakters' : '');
        document.getElementById('geboortedatumError').textContent = !geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/) ? 'Formaat is niet jjjj-mm-dd' : '';
        document.getElementById('emailError').textContent = !email.includes('@') || email.indexOf('@') !== email.lastIndexOf('@') || email.indexOf('@') < 1 || email.indexOf('@') > email.length - 2 ? 'Geen geldig e-mailadres' : '';
        document.getElementById('aantalKinderenError').textContent = isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen >= 99 ? 'Is geen positief getal of te vruchtbaar' : '';

        voornaamInput.classList.remove('error-input');
        familienaamInput.classList.remove('error-input');
        geboortedatumInput.classList.remove('error-input');
        emailInput.classList.remove('error-input');
        aantalKinderenInput.classList.remove('error-input');

        if (voornaam.length > 30 || familienaam === '' || familienaam.length > 50 || !geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/) || !email.includes('@') || email.indexOf('@') !== email.lastIndexOf('@') || email.indexOf('@') < 1 || email.indexOf('@') > email.length - 2 || isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen >= 99) {
            if (voornaam.length > 30) voornaamInput.classList.add('error-input');
            if (familienaam === '' || familienaam.length > 50) familienaamInput.classList.add('error-input');
            if (!geboortedatum.match(/^\d{4}-\d{2}-\d{2}$/)) geboortedatumInput.classList.add('error-input');
            if (!email.includes('@') || email.indexOf('@') !== email.lastIndexOf('@') || email.indexOf('@') < 1 || email.indexOf('@') > email.length - 2) emailInput.classList.add('error-input');
            if (isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen >= 99) aantalKinderenInput.classList.add('error-input');
            return;
        }

        alert('Proficiat!');
    }

    document.getElementById('validateButton').addEventListener('click', validateForm);
}

setup();