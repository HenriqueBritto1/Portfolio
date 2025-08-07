# Henrique Carrilho - Portfolio Website

Um portfólio moderno e responsivo construído com React, TypeScript e Tailwind CSS, este projeto mostra minha jornada como estudante de Engenharia de Software e desenvolvedor júnior, com suporte bilíngue (Inglês/Português) e um design limpo e profissional.

## 📋 Sobre

Este site de portfólio representa minha trajetória acadêmica e habilidades técnicas como estudante do 6º período de Engenharia de Software. Ele apresenta:

- **Suporte Bilíngue**: Traduções completas em português e inglês  
- **Design Responsivo**: Otimizado para todos os dispositivos e tamanhos de tela  
- **UI/UX Moderna**: Design limpo, profissional e com animações suaves  
- **Vitrine de Projetos**: Projetos acadêmicos e pessoais com descrições detalhadas  
- **Integração de Contato**: Formas fáceis de conectar e colaborar

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React** 
- **TypeScript**
- **Tailwind CSS** 
- **Lucide React** 

### Ferramentas de Build & Desenvolvimento
- **Vite** 
- **PostCSS**

## 🎯 Funcionalidades

- ✅ **Design Responsivo** – Funciona perfeitamente em desktop, tablet e celular  
- ✅ **Suporte Bilíngue** – Idiomas português e inglês    
- ✅ **Animações Suaves** – Efeitos de hover, transições e microinterações  
- ✅ **Modais de Projetos** – Informações detalhadas com tags de tecnologias  
- ✅ **Integração de Contato** – Várias formas de entrar em contato  
- ✅ **SEO Otimizado** – Metatags adequadas e HTML semântico  
- ✅ **Carregamento Rápido** – Otimizado com Vite e técnicas modernas de build  
- ✅ **Tipagem Segura** – Implementação completa com TypeScript

## 📦 Pré-requisitos

Antes de rodar este projeto, certifique-se de ter os seguintes softwares instalados:

### Instalação do Node.js

#### Windows
1. Acesse [nodejs.org](https://nodejs.org/)  
2. Baixe a versão LTS (recomendada)  
3. Execute o instalador e siga o assistente de configuração  
4. Verifique a instalação abrindo o Prompt de Comando e executando:  
   ```bash
   node --version
   npm --version
   ```

#### macOS  
**Opção 1: Download Direto**
1. Acesse [nodejs.org](https://nodejs.org/)  
2. Baixe a versão LTS  
3. Execute o instalador  

**Opção 2: Usando Homebrew**
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install nodejs npm
node --version
npm --version
```

#### Linux (CentOS/RHEL/Fedora)
```bash
sudo yum install nodejs npm  # Para CentOS/RHEL
sudo dnf install nodejs npm  # Para Fedora
```

## 🚀 Instalação e Execução

1. **Clone o repositório**
   ```bash
   git clone https://github.com/HenriqueBritto1/portfolio-website.git
   cd portfolio-website
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Abra seu navegador**
   Vá para `http://localhost:5173` para visualizar o site

## 📜 Scripts Disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento com recarregamento automático  
- `npm run build` – Compila o projeto para produção  
- `npm run preview` – Visualiza localmente o build de produção  
- `npm run lint` – Executa o ESLint para verificação de qualidade do código

## 🏗️ Estrutura do Projeto

```
portfolio-website/
├── src/
│   ├── assets/
│   │   ├── dev.ico
│   │   ├── Projeto1.jpg
│   │   ├── Projeto2.jpeg
│   │   └── Projeto3.jpeg
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Personalização

### Atualizando Informações Pessoais
Edite `src/App.tsx`:
- Nome, título, informações de contato  
- Projetos em `projectsData`  
- Links para redes sociais  
- Conteúdo da seção "Sobre"

### Estilização
- **Cores**: Modifique os gradientes no Tailwind  
- **Layout**: Ajuste com utilitários do Tailwind  
- **Animações**: Personalize efeitos e transições

### Adicionando Novos Idiomas
1. Adicione o idioma ao `translations`  
2. Atualize a alternância de idiomas  
3. Adicione dados em `projectsData`

## 🌐 Implantação

### Netlify (Recomendado)
```bash
npm run build
# Faça o deploy da pasta dist no Netlify
```

### Vercel
1. Conecte o repositório ao Vercel  
2. O Vercel detectará Vite e aplicará CI/CD automático

### GitHub Pages
```bash
npm install --save-dev gh-pages
# Adicione ao package.json:
# "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

## 🤝 Contribuindo

1. Fork este repositório  
2. Crie uma branch (`git checkout -b feature/melhoria`)  
3. Commit (`git commit -m 'feat: Adiciona melhoria'`)  
4. Push (`git push origin feature/melhoria`)  
5. Abra um Pull Request


## 📞 Contato

- **Email**: henrique.britto1711@outlook.com  
- **LinkedIn**: [linkedin.com/in/henrique-carrilho-b51a59245](https://linkedin.com/in/henrique-carrilho-b51a59245)  
- **GitHub**: [github.com/HenriqueBritto1](https://github.com/HenriqueBritto1)  
- **Instagram**: [instagram.com/henrique.c1_](https://instagram.com/henrique.c1_)


---

⭐ **Se este projeto te ajudou, deixe uma estrela!** ⭐

*Construído com ❤️ por Henrique Carrilho*
