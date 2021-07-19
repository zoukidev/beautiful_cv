var app = new Vue({
    el: '#app',
    data: {
        fullname: 'Melvin Chabin',
        description: "J'ai 26 ans, je vis à Perpignan (France), dès mon plus jeune âge, j'ai commencé à développer en HTML et CSS pour ensuite me mettre aux PHP et à JavaScript.\nEn 2017, j'ai suivi une formation qualificative afin de valider mes acquis.\nEntre temps, je ne cesse d'apprendre d'autres langages et d'améliorer mes compétences.",
        educations: [
            {
                title: 'École Régionale du Numérique - L\'IDEM Creative Arts School (Bac +2)',
                desc: "Maîtriser les langages et les méthodes de programmation propres à Internet. Coder une application pour un site s’adaptant à différents supports, de l’intégrer à un site web ou d’en faire une application mobile hybride."
            }
        ],
        projects: [
            {
                title: 'Onset Lua',
                downloadCount: 900,
                desc: "VSCode extension for Onset game.",
                tags: ['snippet', 'typescript']
            }
        ],
        experiences: [
            {
                title: 'UgoFresh - Développeur Frontend - 16 Mois',
                desc: "Développer un Interface Administrateur, afin de faciliter l'ajout de nouveaux clients.\nCréer une librairie JavaScript personnalisable pour facilité l'intégration du ChatBot sur les sites des différents clients."
            },
            {
                title: 'HelloMyBot - Développeur Frontend - 3 Mois',
                desc: "Développer un Interface Administrateur, afin de faciliter l'ajout de nouveaux clients.\nCréer une librairie JavaScript personnalisable pour facilité l'intégration du ChatBot sur les sites des différents clients."
            },
            {
                title: 'Euresto - Développeur Web Fullstack - 3 Mois',
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
            'zouki.dev@gmail.com',
            '07.88.11.15.29',
            'github.com/zoukidev'
        ]
    }
  })