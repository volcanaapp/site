/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera uma aplicação estática que pode ser hospedada em qualquer lugar.
  output: 'export',

  // IMPORTANTE: Substitua 'seu-repo' pelo nome do seu repositório no GitHub.
  // Se você está usando um domínio personalizado ou a página principal
  // (ex: `username.github.io`), você pode remover `basePath` e `assetPrefix`.
  basePath: '/site',
  assetPrefix: '/site',

  // Desativa a otimização de imagens do Next.js, que não é compatível
  // com a exportação estática. Use tags <img> normais.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;