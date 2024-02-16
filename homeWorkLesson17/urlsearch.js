function updateURLParams() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const urlParams = new URLSearchParams(window.location.search);
    
    checkboxes.forEach(checkbox => {
        const paramName = checkbox.id.toLowerCase();
        const paramValue = checkbox.checked ? "1" : "0";
        
        if (urlParams.has(paramName)) {
            urlParams.delete(paramName);
        }
        
        if (checkbox.checked) {
            urlParams.append(paramName, paramValue);
        }
    });

    const newURL = window.location.pathname + '?' + urlParams.toString();
    history.pushState({}, '', newURL);
}

function setCheckboxFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach(checkbox => {
        const paramName = checkbox.id.toLowerCase();
        if (urlParams.has(paramName) && urlParams.get(paramName) === "1") {
            checkbox.checked = true;
        }
    });
}

setCheckboxFromURL();

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateURLParams);
});