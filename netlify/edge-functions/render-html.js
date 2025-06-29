export default async (request, context) => {
  const response = await context.next();
  const html = await response.text();

  // ejemplo: inyectar manualmente el header ya renderizado
  const prerenderedHeader = `
    <header>
      <!-- contenido estático del componente header -->
    </header>
  `;

  const updatedHtml = html.replace('<header-component></header-component>', prerenderedHeader);

  return new Response(updatedHtml, {
    headers: response.headers,
  });
};
