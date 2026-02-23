
// Function to extract subdomain from current URL
export default function getSubdomainFromUrl(): string {
    const hostname = window.location.hostname;
    const localhostname = import.meta.env.VITE_SUBDOMAIN_LOCALHOST_NAME || 'mycompany';
    // For local development with subdomains like admin.localhost:3000
    if (hostname.includes('localhost')) {
        const parts = hostname.split('.');
        return parts.length > 1 ? parts[0] : localhostname; // default to 'admin' for localhost
    }

    // For production domains like admin.newral.in
    const parts = hostname.split('.');

    // Handle domains like:
    // - admin.newral.in → returns 'admin'
    // - newral.in → returns empty or default
    if (parts.length >= 2) {
        // If it's a subdomain like admin.newral.in
        return parts[0];
    }

    return 'mycompany'; // default fallback
}