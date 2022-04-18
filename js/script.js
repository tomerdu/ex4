function dosome() {
    const form = document.getElementById('form');
    const checkboxes = form.querySelectorAll('input[type=checkbox]');
    const checkboxLength = checkboxes.length;
    const firstCheckbox = checkboxLength > 0 ? checkboxes[0] : null;

    function init() {
        if (checkboxLength > 0) {
            for (let i = 0; i < checkboxLength; i++) {
                checkboxes[i].addEventListener('change', checkValidity);
            }

            checkValidity();
        }
    }

    let counter = 0;

    function isChecked() {
        for (let i = 0; i < checkboxLength; i++) {
            if (checkboxes[i].checked) {
                counter++;
            }

            if (counter >= 2)
                return true;
        }

        return false;
    }

    function checkValidity() {
        const errorMessage = !isChecked() ? 'At least two check-boxes must be selected.' : '';
        firstCheckbox.setCustomValidity(errorMessage);
    }

    init();
};

let audio = new Audio('audio/115-battle (vs trainer).mp3');

function music()
{
    let count = 0;
    if(audio.paused)
    {
        audio.play();
    }
    else
    {
        audio.pause();
    }
}