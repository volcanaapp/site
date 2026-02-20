# Configuração para GitHub Pages

## Opção 1: Deploy com Node.js (Recomendado)

Se você pretende usar um servidor Node.js no GitHub Pages ou Vercel, use:

```bash
npm run build
npm start
```

Os arquivos de build estão em `.next/`

## Opção 2: Deploy com GitHub Actions

Crie um arquivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main, prod]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./.next/static
```

## Estrutura de Build

Após executar `npm run build`, os arquivos estão organizados em:

- `.next/static/` - Arquivos CSS, JS e assets estáticos
- `.next/server/` - Code do servidor (para deploy com Node.js)

## Variáveis de Ambiente

Certifique-se de adicionar as seguintes variáveis no GitHub Secrets:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Para um Site 100% Estático

Se precisar de um site 100% estático (sem servidor Node.js), será necessário:

1. Remover rotas dinâmicas como `/auth/callback`
2. Configurar `output: "export"` em `next.config.ts`
3. Pré-renderizar todas as páginas

Neste caso, execute: `npm run build && npx next export`
