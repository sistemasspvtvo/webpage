// netlify/edge-functions/render-html.js
export default async (request, context) => {
  // Get the URL without waiting for the body
  const url = new URL(request.url);
  
  // Skip non-HTML requests immediately
  if (!url.pathname.endsWith('.html') && !url.pathname.endsWith('/')) {
    return context.next();
  }

  try {
    // Get the original HTML content directly from the filesystem
    let html;
    try {
      html = await context.fs.read(url.pathname === '/' ? '/index.html' : url.pathname);
      html = new TextDecoder().decode(html);
    } catch {
      // Fallback to next() if file doesn't exist
      return context.next();
    }

    // Header and footer templates
    const header = `
      <header style="
        background: #8B4513;
        color: white;
        padding: 20px;
        text-align: center;
        position: sticky;
        top: 0;
        z-index: 1000;
      ">
        <h1 style="margin: 0;">My Website</h1>
        <nav style="margin-top: 10px;">
          <a href="/" style="color: white; margin: 0 15px;">Home</a>
          <a href="/about" style="color: white; margin: 0 15px;">About</a>
        </nav>
      </header>
    `;

    const footer = `
      <footer style="
        background: #8B4513;
        color: white;
        padding: 20px;
        text-align: center;
      ">
        <p style="margin: 0;">© ${new Date().getFullYear()} My Website</p>
      </footer>
    `;

    // Inject content
    const modifiedHtml = html
      .replace(/(<body[^>]*>)/i, `$1${header}`)
      .replace(/<\/body>/i, `${footer}</body>`);

    return new Response(modifiedHtml, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'x-edge-function': 'render-html'
      }
    });

  } catch (error) {
    console.error('Edge Function error:', error);
    return context.next();
  }
};