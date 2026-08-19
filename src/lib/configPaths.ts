// Nombre de tu repositorio en GitHub
const REPO_NAME = 'vima-studio';

export const basePath =
  process.env.NODE_ENV === 'production' ? `/${REPO_NAME}` : '';

// Helper para envolver cualquier ruta de public
export const getAssetPath = (path: string) => {
  if (!path) return '';
  // Elimina puntos iniciales si existen (ej. ./img -> /img)
  const cleanPath = path.replace(/^\.\//, '').startsWith('/')
    ? path.replace(/^\.\//, '')
    : `/${path}`;

  return `${basePath}${cleanPath}`;
};