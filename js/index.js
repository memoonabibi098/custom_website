document.addEventListener('DOMContentLoaded', function() {
    // Get all select elements
    const selectElements = document.querySelectorAll('.search-div-select');
    
    selectElements.forEach((select) => {
        // Find the corresponding caret icon (next sibling span)
        const caretIcon = select.nextElementSibling;
        
        // Track if dropdown is open
        let isOpen = false;
        
        // When select is clicked
        select.addEventListener('mousedown', function() {
            isOpen = !isOpen;
            toggleCaretIcon(caretIcon, isOpen);
        });
        
        // When select loses focus (dropdown closes)
        select.addEventListener('blur', function() {
            isOpen = false;
            toggleCaretIcon(caretIcon, isOpen);
        });
        
        // When an option is selected
        select.addEventListener('change', function() {
            isOpen = false;
            toggleCaretIcon(caretIcon, isOpen);
        });
    });
    
    function toggleCaretIcon(icon, isOpen) {
        if (isOpen) {
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');
        } else {
            icon.classList.remove('fa-caret-up');
            icon.classList.add('fa-caret-down');
        }
    }
});