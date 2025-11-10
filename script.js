// Dados dos projetos
const projects = {
    1: {
        title: "RPG Medieval Fantasy",
        date: "Janeiro 2024",
        tools: "Unreal Engine 5, C++, Blueprints",
        engine: "Unreal Engine 5.3",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Um RPG medieval envolvente com sistema de combate dinâmico, exploração de mundo aberto e narrativa rica. O projeto incluiu desenvolvimento de sistema de inventário, progressão de personagem, IA de NPCs e mecânicas de crafting. Utilizei Blueprints para prototipagem rápida e C++ para otimização de performance em sistemas críticos."
    },
    2: {
        title: "Shooter Futurista",
        date: "Março 2024",
        tools: "Unreal Engine 5, Niagara, Metasounds",
        engine: "Unreal Engine 5.2",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "FPS futurista com gráficos de última geração utilizando Lumen e Nanite. Implementei sistema de armas modular, física realista de projéteis e efeitos visuais impressionantes com Niagara. O sistema de áudio foi criado com MetaSounds para resposta dinâmica ao gameplay."
    },
    3: {
        title: "Simulador de Corrida",
        date: "Maio 2024",
        tools: "Unreal Engine 5, Chaos Physics, C++",
        engine: "Unreal Engine 5.1",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Simulador de corrida realista com física de veículos avançada usando Chaos Physics. Desenvolvido sistema de danos procedurais, condições climáticas dinâmicas e múltiplos modos de jogo. Otimização para manter 60 FPS em cenários de alta densidade."
    },
    4: {
        title: "Plataforma 3D",
        date: "Julho 2024",
        tools: "Unreal Engine 5, Blueprints, Animation System",
        engine: "Unreal Engine 5.3",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Jogo de plataforma 3D colorido e divertido com mecânicas de movimento fluidas. Implementei sistema de duplo salto, dash, wall-run e grappling hook. Design de níveis focado em desafio progressivo e collectibles secretos."
    },
    5: {
        title: "Horror Survival",
        date: "Agosto 2024",
        tools: "Unreal Engine 5, Blueprints, AI System",
        engine: "Unreal Engine 5.2",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Jogo de terror e sobrevivência com atmosfera tensa e IA de inimigos inteligente. Desenvolvido sistema de som posicional para aumentar imersão, gerenciamento de recursos escassos e mecânicas de stealth. Iluminação dinâmica e sombras foram cruciais para criar tensão."
    },
    6: {
        title: "Experiência VR",
        date: "Outubro 2024",
        tools: "Unreal Engine 5, VR Template, C++",
        engine: "Unreal Engine 5.3",
        video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        description: "Experiência imersiva em realidade virtual focada em exploração e interação. Implementei sistema de teleporte e movimento livre, interações físicas realistas com objetos e UI espacial. Otimização rigorosa para manter frame rate estável e evitar motion sickness."
    }
};

// Função para abrir o modal do projeto
function openProject(id) {
    const project = projects[id];
    const modal = document.getElementById('projectModal');
    const content = document.getElementById('projectContent');
    
    content.innerHTML = `
        <h2>${project.title}</h2>
        
        <div class="project-info">
            <div class="info-box">
                <h3>Data de Criação</h3>
                <p>${project.date}</p>
            </div>
            <div class="info-box">
                <h3>Ferramentas</h3>
                <p>${project.tools}</p>
            </div>
            <div class="info-box">
                <h3>Game Engine</h3>
                <p>${project.engine}</p>
            </div>
        </div>
        
        <div class="video-container">
            <div class="video-wrapper">
                <iframe 
                    src="${project.video}" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
        
        <div class="project-description">
            <h3>Descrição do Projeto</h3>
            <p>${project.description}</p>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Smooth scroll para links da navbar
document.addEventListener('DOMContentLoaded', function() {
    // Hamburger Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    const menuLinks = navLinks.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Fechar modal ao clicar fora
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeProject();
            }
        });
    }

    // Fechar modal com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeProject();
        }
    });
});
