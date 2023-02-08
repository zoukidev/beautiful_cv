var app = new Vue({
    el: '#app',
    data: {
        title: 'Melvin Chabin',
        subtitle: 'Développeur web fullstask',
        description: "J'ai 26 ans, je vis à Perpignan (France), dès mon plus jeune âge, j'ai commencé à développer en HTML et CSS pour ensuite me mettre aux PHP et à JavaScript.\nEn 2017, j'ai suivi une formation qualificative afin de valider mes acquis.\nEntre temps, je ne cesse d'apprendre d'autres langages et d'améliorer mes compétences.",
        educations: [
            {
                title: 'Développeur web et application',
                // title: 'École Régionale du Numérique - L\'IDEM Creative Arts School <span class="badge bg-primary">bac +2</span>',
                desc: "Maîtriser les langages et les méthodes de programmation propres à Internet. Coder une application pour un site s’adaptant à différents supports, de l’intégrer à un site web ou d’en faire une application mobile hybride.",
                level: 2
            }
        ],
        experiences: [
            {
                title: 'UgoFresh - Développeur Frontend <span class="badge text-bg-warning border border-dark">3 ans</span>',
                desc: "Développer une interface Administrateur, afin de faciliter l'ajout de nouveaux clients.\nCréer une librairie JavaScript personnalisable pour facilité l'intégration du ChatBot sur les sites des différents clients."
            },
            {
                title: 'HelloMyBot - Développeur Frontend <span class="badge bg-warning text-dark">6 mois</span>',
                desc: "Développer un Interface Administrateur, afin de faciliter l'ajout de nouveaux clients.\nCréer une librairie JavaScript personnalisable pour facilité l'intégration du ChatBot sur les sites des différents clients."
            },
            {
                title: 'Euresto - Développeur Web Fullstack <span class="badge bg-warning text-dark">3 Mois</span>',
                desc: "Développer un système de widgets et le mettre en place sur l'application EURESTO.\nParticiper à l'intégration côté serveur afin de rendre le tout fonctionnel."
            }
        ],
        languages: [
            { name: 'Php' },
            { name: 'Javascript' },
            { name: 'Python' },
            { name: 'CSharp' },
            { name: 'Sql' },
            { name: 'Html' },
            { name: 'Css' },
            { name: 'Scss' },
            { name: 'Typescript' },
            { name: 'Lua' },
        ],
        technologies: [
            { name: 'Docker' },
            { name: 'Nodejs' },
            { name: 'Symfony' },
            { name: 'Laravel' },
            { name: 'Wordpress' },
            { name: 'Bootstrap' },
            { name: 'React' },
            { name: 'Angular' },
            { name: 'Vue' },
            { name: 'Webpack' },
            { name: 'jQuery' },
        ],
        contacts: [
            {
                type: 'email',
                value: 'zouki.dev@gmail.com',
                icon: 'bi bi-envelope'
            },
            {
                type: 'phone',
                value: '+33 6 30 94 93 57',
                icon: 'bi bi-phone'
            }
        ]
    }
  })