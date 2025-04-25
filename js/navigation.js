    // Define the active class constant
    const ACTIVE_CLASS = 'active';

    // Highlight the current page in the navigation menu
    // Cache navigation links to improve performance
    highlightActiveNavLinks();


function highlightActiveNavLinks(selector = '.nav-links') {
    const navContainer = document.querySelector(selector); // Scope to the navigation container
    if (!navContainer || !(navContainer instanceof Element)) {
        console.warn(`Invalid or missing navigation container with selector "${selector}". Exiting highlightActiveNavLinks.`);
        return;
    const navLinks = Array.from(extractLinksFromContainer(navContainer)); // Retrieve and convert navigation links to a static array




    /**
     * Placeholder for the highlightActiveLink function.
     * TODO: Implement this function to handle link highlighting logic if needed in the future.
    // Get the current page by processing the window location pathname
    let pathname = window.location.pathname; // Full path of the current page
    pathname = pathname.replace(/\/$/, ''); // Remove trailing slash if present
    const pathSegments = pathname.split('/'); // Split the path into segments
    const currentPage = pathSegments.pop(); // Extract the last segment as the current page
     * @param {HTMLElement} link - The navigation link element to highlight.
     */
    function highlightActiveLink(link) {
        console.warn('highlightActiveLink function is not implemented yet.');
    }
    // Its call has been removed to prevent errors. Consider implementing it in the future if needed.
    // Get the current page by removing trailing slashes and extracting the last segment of the path
    const currentPage = window.location.pathname.replace(/\/$/, '').split('/').pop();

    // Remove the active class only from links that have it
    // Iterate through each navigation link to determine if it matches the current page and apply the active class
    // Iterate through navigation links to determine and highlight the active link
    navLinks.forEach(link => {
        if (link.classList.contains(ACTIVE_CLASS)) {
            link.classList.remove(ACTIVE_CLASS);
                // Remove the active class to ensure only one link is highlighted at a time
                link.classList.remove(ACTIVE_CLASS);
    });

    // Cache window.location.origin outside the loop to avoid redundant calls
    const origin = window.location.origin;
        const linkPathCache = {}; // Cache object to store computed link paths
        navLinks.forEach(link => {
            processNavigationLink(link, linkPathCache, origin, currentPage);
        });

        function processNavigationLink(link, linkPathCache, origin, currentPage) {
            try {
                const href = extractHref(link);
                if (href && isHrefValidForNavigation(href)) {
                    if (!linkPathCache[href]) {
                        linkPathCache[href] = constructLinkPath(href, origin);
                    }
                    const linkPath = linkPathCache[href];
                    if (isCurrentPageLink(linkPath, currentPage)) {
                        link.classList.add(ACTIVE_CLASS);
                    }
                }
            } catch (error) {
                console.error('Error processing navigation link:', link.getAttribute('href'), 'Element:', link.outerHTML, error);
            }
        }

    /**
     * Extracts the `href` attribute from a given link element.
     *
     * @param {HTMLElement} link - The link element from which to extract the `href` attribute.
     * @returns {string|null} The `href` value if it exists, otherwise `null`.
     */
    function extractHref(link) {
        return link ? link.getAttribute('href') : null;
    }

    function constructLinkPath(href, origin) {
        // Check if the href starts with a forward slash (relative path)
        if (href.startsWith('/')) {
            // Construct the full path by appending the origin and remove trailing slashes
            return (origin + href).replace(/\/$/, '');
        } else {
            // Construct the full path using the URL constructor and remove trailing slashes
            return new URL(href, origin).toString().replace(/\/$/, '');
        }
    }
}

// Removed the obtainURLOrigin function as it is no longer needed

// Removed the getLinksArrayFromContainer function as it was redundant

/**
 * Extracts all anchor (`<a>`) elements from the given navigation container.
 * This function is used to retrieve the links that will be processed for highlighting.
 *
 * @param {HTMLElement} navContainer - The container element holding the navigation links.
 * @returns {NodeList} A NodeList of `<a>` elements found within the container.
 * Note: A NodeList is not an array but can be converted to one using `Array.from()` if needed.
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
    return href &&
           /^\/|^https?:\/\//.test(href) &&
           !/^javascript:void\(0\)$/.test(href) &&
           href !== '#';
}
}

