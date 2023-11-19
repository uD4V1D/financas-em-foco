document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.forms');

    form.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
            alert('Por favor, preencha todos os campos antes de enviar.');
        } else {
            saveToLocalStorage();
            console.log(getFormDataAsJSON());
        }
    });

    function validateForm() {
        const inputs = form.querySelectorAll('input[required], select[required]');
        for (const input of inputs) {
            if (!input.value.trim()) {
                return false;
            }
        }
        return true;
    }

    function saveToLocalStorage() {
        const formData = getFormDataAsJSON();
        localStorage.setItem('formData', JSON.stringify(formData));
    }

    function getFormDataAsJSON() {
        const formData = {};
        const inputs = form.querySelectorAll('input, select');
        for (const input of inputs) {
            formData[input.name] = input.type === 'radio' ? document.querySelector(`input[name="${input.name}"]:checked`).value : input.value;
        }
        return formData;
    }
});
