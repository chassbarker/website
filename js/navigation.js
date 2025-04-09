    // Highlight the current page in the navigation menu
    // Cache navigation links to improve performance
    highlightActiveNavLinks();


function highlightActiveNavLinks(selector = '.nav-links') {
    const navContainer = document.querySelector(selector); // Scope to the navigation container
    if (!navContainer) {
        console.warn(`Navigation container with selector "${selector}" not found. Exiting highlightActiveNavLinks.`);
        return;
    }
    const navLinks = Array.from(extractLinksFromContainer(navContainer)); // Convert NodeList to a static array




    // The highlightActiveLink function was intended to handle link highlighting but was not defined.
    // Its call has been removed to prevent errors. Consider implementing it in the future if needed.
    // Get the current page by removing trailing slashes and extracting the last segment of the path
    const currentPage = window.location.pathname.replace(/\/$/, '').split('/').pop();

    // Remove the active class only from links that have it
    navLinks.forEach(link => {
        if (link.classList.contains(ACTIVE_CLASS)) {
            link.classList.remove(ACTIVE_CLASS);
        }
    });

    // Cache window.location.origin outside the loop to avoid redundant calls
    const origin = window.location.origin; 
    navLinks.forEach(link => {
        let linkPath = '';
        try {
            const href = link ? link.getAttribute('href') : null;
            if (href !== null) { // Ensure href is not null before using it
                if (isValidHref(href)) {
                    linkPath = href.startsWith('/') ? (origin + href).replace(/\/$/, '') : new URL(href, origin).pathname.replace(/\/$/, '');
                } else {
                    console.warn('Invalid href detected:', href, 'Element:', link.outerHTML);
                }
            }
            if (isCurrentPageLink(linkPath, currentPage)) {
                link.classList.add(ACTIVE_CLASS); // Use the constant for the class name
            }
        } catch (error) {
            console.error('Invalid URL in navigation link:', link.getAttribute('href'), 'Element:', link.outerHTML, error);
        }
    });
}

/**
 * Extracts all anchor (`<a>`) elements from the given navigation container.
 * This function is used to retrieve the links that will be processed for highlighting.
 * 
 * @param {HTMLElement} navContainer - The container element holding the navigation links.
 * @returns {NodeListOf<HTMLAnchorElement>} A list of anchor elements found within the container.
 */
function extractLinksFromContainer(navContainer) {
    if (!navContainer || !(navContainer instanceof HTMLElement)) {
        console.warn('Invalid navigation container provided to extractLinksFromContainer.');
        return document.createDocumentFragment().querySelectorAll('a'); // Return an empty NodeList
    }
    return navContainer.querySelectorAll('a');
}

// Removed the getWindowOrigin function as it is no longer needed

function isValidHref(href) {
    return href && (href.startsWith('/') || href.startsWith('http'));
}

