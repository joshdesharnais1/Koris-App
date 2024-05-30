document.getElementById('hamburgerBtn').addEventListener('click', function() {
    document.getElementById('dropdownMenu').classList.toggle('show');
});

function loadContent(page) {
    document.getElementById('contentFrame').src = page;
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.className += ' active';
}

function appendToCalc(value) {
    document.getElementById('calcDisplay').value += value;
}

function calculateResult() {
    try {
        document.getElementById('calcDisplay').value = eval(document.getElementById('calcDisplay').value);
    } catch (e) {
        alert('Invalid calculation');
    }
}

function clearCalc() {
    document.getElementById('calcDisplay').value = '';
}

window.onclick = function(event) {
    if (!event.target.matches('#hamburgerBtn')) {
        var dropdowns = document.getElementsByClassName('dropdown-content');
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
