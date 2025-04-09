// Helper function to check if a link is active
// Parameters:
// - linkPath: The normalized path of the link (e.g., no trailing slashes).
// - currentPage: The normalized path of the current page.
// Returns true if the linkPath matches the currentPage, false otherwise.
function isLinkActive(linkPath, currentPage) {
    // Compare the normalized path of the link with the current page's path
    return linkPath === currentPage;
}
