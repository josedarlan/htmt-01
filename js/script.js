document.addEventListener('DOMContentLoaded', function() {
    // URL da página de vendas da Hotmart (substitua pelo seu link real)
    const hotmartUrl = 'https://pay.hotmart.com/I99982686T';
    
    // Configura todos os botões CTA
    const setupCtaButtons = () => {
        const ctaButtons = document.querySelectorAll(
            '#cta-button, #ebook-cta-button, #guarantee-button, #final-cta-button'
        );
        
        ctaButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Redireciona para a Hotmart
                window.location.href = hotmartUrl;
                
                // Opcional: Configuração de tracking
                trackConversion();
            });
        });
    };
    
    
    // Inicializa contador de tempo na página (opcional)
    const initTimeOnPage = () => {
        let timeSpentOnPage = 0;
        
        const timer = setInterval(() => {
            timeSpentOnPage++;
            
            // Exemplo: Disparar evento a cada 30 segundos
            if (timeSpentOnPage % 30 === 0) {
                console.log(`Usuário está na página há ${timeSpentOnPage} segundos`);
                // Aqui você pode adicionar tracking de tempo de sessão
            }
        }, 1000);
        
        // Limpa o timer quando o usuário sai da página
        window.addEventListener('beforeunload', () => {
            clearInterval(timer);
            console.log(`Tempo total na página: ${timeSpentOnPage} segundos`);
        });
    };
    
    // Inicializa todas as funções
    setupCtaButtons();
    initTimeOnPage();
    
    // Efeito de scroll suave para links internos (opcional)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Animação de elementos quando entram na viewport (opcional)
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.benefit-card, .testimonial-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    };
    
    animateOnScroll();
});