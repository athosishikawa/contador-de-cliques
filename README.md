## Contador Animado em React
Este projeto é uma atividade prática desenvolvida como parte do curso Dev Start do SENAI. O objetivo principal é praticar e solidificar conceitos fundamentais de JavaScript e da biblioteca React, essenciais para o desenvolvimento web front-end.

# Descrição
O projeto consiste em um contador web simples, porém visualmente atraente, construído com React.  Ao interagir com um botão na interface, o contador incrementa seu valor numérico. Para tornar a experiência mais dinâmica e interativa, foram adicionadas animações em CSS, que realçam as mudanças no contador e no título a cada clique.

# Este projeto prático visa exercitar os seguintes conceitos:

- Componentes React: Criação e estruturação de componentes reutilizáveis (Contador).
- Estado (State) em React: Utilização do useState para gerenciar o estado do contador (count) e dos estados de animação (animateNumber, animateTitle), permitindo que a interface reaja às interações do usuário.
- Eventos em React: Implementação de manipuladores de eventos (onClick) para capturar cliques no botão e executar ações (incrementar o contador e disparar animações).
- Estilização com CSS: Aplicação de estilos CSS para personalizar a aparência do contador, utilizando classes e animações para criar efeitos visuais dinâmicos e agradáveis.
- Animações CSS: Criação de animações sutis para fornecer feedback visual ao usuário quando o contador é incrementado, melhorando a experiência interativa.
- useEffect Hook: Utilização do useEffect para gerenciar efeitos colaterais, neste caso, para controlar a duração das animações e desativá-las após um curto período, garantindo que as animações sejam disparadas a cada clique sem ficarem ativas continuamente.
- Importação e Exportação de Módulos: Organização do código em múltiplos arquivos (App.jsx, Contador.jsx, Contador.css) e utilização de import e export para modularizar e reutilizar componentes e estilos.

# Funcionalidades
- Contador numérico: Exibe um número que inicia em 0.
- Botão "Clique aqui": Ao ser clicado, incrementa o valor do contador.
- Animação no número: O número do contador aumenta ligeiramente de tamanho a cada incremento.
- Animação no título: O título "Contador Animado" também aumenta ligeiramente de tamanho a cada incremento.
- Estilização CSS: Design visual agradável e responsivo para o componente contador.
- Efeitos visuais no botão: Feedback visual ao passar o mouse e ao clicar no botão.

# Tecnologias Utilizadas
- React: Biblioteca JavaScript para construção de interfaces de usuário.
- JavaScript (ES6+): Linguagem de programação para a lógica da aplicação.
- CSS: Linguagem de estilos para a apresentação visual.

![image](https://github.com/user-attachments/assets/c30ed82c-33cf-494f-87e0-eadf2390d58b)


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
