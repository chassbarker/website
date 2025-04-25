    // Define the active class constant
    const ACTIVE_CLASS = 'active';

    // Highlight the current page in the navigation menu
    // Cache navigation links to improve performance
    highlightActiveNavLinks();


function highlightActiveNavLinks(selector = '.nav-links') {
    const navContainer = document.querySelector(selector); // Scope to the navigation container
    if (!navContainer) {
        console.warn(`Navigation container with selector "${selector}" not found. Exiting highlightActiveNavLinks.`);
        return;
    }
    const navLinks = getLinksArrayFromContainer(navContainer); // Retrieve and convert navigation links to a static array




    // The highlightActiveLink function was intended to handle link highlighting but was not defined.
    // Its call has been removed to prevent errors. Consider implementing it in the future if needed.
    // Get the current page by removing trailing slashes and extracting the last segment of the path
    const currentPage = window.location.pathname.replace(/\/$/, '').split('/').pop();

    // Remove the active class only from links that have it
    if (navLinks.some(link => link.classList.contains(ACTIVE_CLASS))) {
        navLinks.forEach(link => {
            if (link.classList.contains(ACTIVE_CLASS)) {
                link.classList.remove(ACTIVE_CLASS);
            }
        });
    }

    // Cache window.location.origin outside the loop to avoid redundant calls
    const origin = obtainURLOrigin();

    /**
     * Retrieves the origin of the current window location.
     * This function is used to construct absolute URLs for comparison.
     *
     * @returns {string} The origin of the current window location.
     */
    function obtainURLOrigin() {
        return window.location.origin;
    }
        navLinks.forEach(link => {
            try {
                const href = extractHref(link);
                if (href && isHrefValidForNavigation(href)) {
                    const linkPath = constructLinkPath(href, origin);
                    if (isCurrentPageLink(linkPath, currentPage)) {
                        link.classList.add(ACTIVE_CLASS); // Use the constant for the class name
                    }
                }
            } catch (error) {
                console.error('Error processing navigation link:', link.getAttribute('href'), 'Element:', link.outerHTML, error);
            }
        });

    function extractHref(link) {
        return link ? link.getAttribute('href') : null;
    }

    function constructLinkPath(href, origin) {
        return href.startsWith('/')
            ? (origin + href).replace(/\/$/, '')
            : new URL(href, origin).toString().replace(/\/$/, '');
    }
}

// Removed the obtainURLOrigin function as it is no longer needed

function getLinksArrayFromContainer(navContainer) {
    return Array.from(extractLinksFromContainer(navContainer));
}

/**
 * Extracts all anchor (`<a>`) elements from the given navigation container.
 * This function is used to retrieve the links that will be processed for highlighting.
 *
 * @param {HTMLElement} navContainer - The container element holding the navigation links.
 * @returns {NodeListOf<HTMLAnchorElement>} A list of anchor elements found within the container.
 */
function extractLinksFromContainer(navContainer) {
    if (!navContainer || !(navContainer instanceof Element)) {
        console.warn('Invalid navigation container provided to extractLinksFromContainer.');
        return []; // Return an empty array for better performance and clarity
    }
    // Retrieve all anchor elements within the navigation container
    return navContainer.querySelectorAll('a');
}

// Removed the getWindowOrigin function as it is no longer needed

function isHrefValidForNavigation(href) {
    return href && /^\/|^https?:\/\//.test(href);
}

