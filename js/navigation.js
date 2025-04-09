    // Highlight the current page in the navigation menu
    // Cache navigation links to improve performance
    const navContainer = document.querySelector('.nav-links'); // Scope to the navigation container
    const navLinks = navContainer ? navContainer.querySelectorAll('a') : []; // Query links within the container
    const ACTIVE_CLASS = 'active'; // Define the active class as a constant
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

        const origin = window.location.origin; // Cache window.location.origin
        navLinks.forEach(link => {
            let linkPath = '';
            try {
                const href = link.getAttribute('href');
                if (href) {
                    linkPath = new URL(href, origin).pathname.replace(/\/$/, '');
                }
                if (isCurrentPageLink(linkPath, currentPage)) {
                    link.classList.add(ACTIVE_CLASS); // Use the constant for the class name
                }
            } catch (error) {
                console.error('Invalid URL in navigation link:', link.getAttribute('href'), 'Element:', link.outerHTML, error);
            }
        // Removed redundant reassignment of linkPath
    });

    // Helper function to check if a link is active
    // Assumes that both `linkPath` and `currentPage` are normalized paths
    // (e.g., no trailing slashes) and directly compares them for equality.
    function isLinkActive(linkPath, currentPage) {
        return linkPath === currentPage;
    }


