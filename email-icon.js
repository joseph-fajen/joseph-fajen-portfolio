// Inject email icon into footer socials
(function() {
  function addEmailIcon() {
    // Find the footer socials container (where LinkedIn/GitHub icons are)
    const footer = document.querySelector('footer');
    if (!footer) return false;

    // Look for the social links container - typically contains the LinkedIn/GitHub links
    const socialLinks = footer.querySelectorAll('a[href*="linkedin"], a[href*="github"]');
    if (socialLinks.length === 0) return false;

    // Get the parent container of the social icons
    const socialsContainer = socialLinks[0].parentElement;
    if (!socialsContainer) return false;

    // Check if email icon already exists
    if (footer.querySelector('a[href^="mailto:"]')) return true;

    // Create email link element
    const emailLink = document.createElement('a');
    emailLink.href = 'mailto:joefajen@gmail.com';
    emailLink.setAttribute('aria-label', 'Email');
    emailLink.setAttribute('target', '_blank');
    emailLink.setAttribute('rel', 'noopener noreferrer');

    // Copy classes from an existing social link to match styling
    const existingLink = socialLinks[0];
    emailLink.className = existingLink.className;

    // Lucide-style envelope SVG (matches Mintlify's icon library)
    emailLink.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    `;

    // Insert after the last social icon
    socialsContainer.appendChild(emailLink);
    return true;
  }

  // Try immediately, then retry after DOM updates (Mintlify uses client-side rendering)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      setTimeout(addEmailIcon, 100);
    });
  } else {
    setTimeout(addEmailIcon, 100);
  }

  // Also observe for SPA navigation
  const observer = new MutationObserver(function() {
    addEmailIcon();
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
