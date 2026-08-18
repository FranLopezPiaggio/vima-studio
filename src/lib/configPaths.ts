// Nombre de tu repositorio en GitHub
const REPO_NAME = 'vima-studio';

export const basePath =
  process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '';

// Helper para envolver cualquier ruta de public
export const getAssetPath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};