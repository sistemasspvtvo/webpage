exports.handler = async (event) => {
  const contentLength = parseInt(event.headers['content-length'] || '0');
  const maxSize = 200000; // 200 KB

  if (contentLength > maxSize) {
    return {
      statusCode: 413,
      body: JSON.stringify({ error: "El archivo excede 200 KB" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Archivo válido" }),
  };
};