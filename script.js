
/* =================================
1. CONFIGURAÇÃO DO WHATSAPP
================================= */

// Troque pelo número autorizado da clínica.
// Use apenas dígitos: código do país + DDD + número.

const telefoneWhatsapp = "5541999999999";

/* =================================
2. CONFIGURAR LINKS DE CONTATO
================================= */

const linksWhatsApp = document.querySelectorAll(".whatsapp-link");

linksWhatsApp.forEach((link) => {
    const mensagem = link.dataset.mensagem ||
        "Olá! Gostaria de conhecer os serviços da Aura Estética.";

    const textoCodificado = encodeURIComponent(mensagem);

    link.href = `https://wa.me/${telefoneWhatsApp}?text=${textoCodificado}`;

    link.target = "_blank";
    link.rel = "noopener noreferrer";
});