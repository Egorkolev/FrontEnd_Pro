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

document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateURLParams);
});