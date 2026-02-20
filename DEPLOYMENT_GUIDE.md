# Guia de Deployment para GitHub Pages

## ✅ Build Preparado

A build foi configurada e testada com sucesso. Os arquivos estão prontos em `.next/`

### Estrutura do Build

```
.next/
├── static/          # Arquivos CSS, JS e assets (para GitHub Pages)
├── server/          # Code do servidor Node.js
├── cache/           # Cache de compilação
└── ...              # Arquivos de configuração
```

## 📋 Passos para Deploy

### 1. Configurar Secrets no GitHub

Adicione as seguintes variáveis de ambiente no GitHub Secrets:

```
NEXT_PUBLIC_SUPABASE_URL = seu_url_aqui
NEXT_PUBLIC_SUPABASE_ANON_KEY = sua_chave_aqui
```

### 2. Criar ou Atualizar o Workflow

O arquivo `.github/workflows/deploy.yml` já foi criado. Este workflow:

- Faz build automaticamente em cada push
- Valida o código com linter
- Faz upload dos artefatos
- Deploy para GitHub Pages (branch `main` ou `prod`)

### 3. Executar Build Localmente (Teste)

```bash
npm run build
npm start
```

Acesse `http://localhost:3000`

### 4. Deploy no GitHub

```bash
git add .
git commit -m "Deploy: Preparar para GitHub Pages"
git push origin prod  # ou main
```

O GitHub Actions executará automaticamente:
- ✓ Instalar dependências
- ✓ Build do projeto
- ✓ Linter
- ✓ Deploy

## 🌐 Configuração do GitHub Pages

1. Vá para Settings > Pages
2. Source: Deploy from a branch
3. Branch: gh-pages
4. Folder: / (root)
5. Salve

## 📊 Opções de Deploy

### Opção A: GitHub Pages (Estático)
- Melhor para: Sites estáticos
- Requer: Remover rotas dinâmicas
- Comando: `npm run build && npx next export`

### Opção B: Vercel (Recomendado para Next.js)
- Melhor para: Aplicações Next.js completas
- Suporta: SSR, APIs, dinâmico
- Fácil: Deploy em 1 clique

### Opção C: Node.js Server
- Melhor para: Deploy em servidor próprio
- Suporta: Todas as features
- Comando: `npm run build && npm start`

## 🔧 Troubleshooting

### Erro: "Property does not exist"
- Verifique `next.config.ts`
- Rode `npm run build` localmente
- Limpe `.next/` e tente novamente: `rm -rf .next && npm run build`

### Erro: "Module not found"
- Rode `npm install`
- Verifique imports nos arquivos

### Site não aparece após deploy
- Aguarde 5-10 minutos
- Verifique GitHub Actions
- Limpe cache do navegador (Ctrl+Shift+Delete)

## 📱 Verificar Status

GitHub Actions: Settings > Actions > All workflows

## ✨ Próximos Passos

1. Fazer push do código
2. Monitorar GitHub Actions
3. Verificar site em `https://seu-usuario.github.io/repo`
4. Configurar domínio customizado (se necessário)

