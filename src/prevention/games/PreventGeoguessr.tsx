import Prevent from '../Prevent.tsx';

const sectionsData = [
    {
        title: 'Cyclone Kenneth au Mozambique, Afrique du Sud',
        description: 'Le cyclone Kenneth a frappé de plein fouet le Mozambique, situé dans le sud-est de l\'Afrique, en avril 2019, constituant l\'une des catastrophes naturelles les plus dévastatrices de la région. Cet événement météorologique exceptionnel a marqué une tragédie humanitaire, mettant à rude épreuve la résilience des communautés locales et mobilisant des efforts considérables d\'aide et de secours.\n\nCyclone Kenneth a atteint le stade de cyclone tropical intense, avec des vents dépassant les 200 kilomètres par heure. La région a été confrontée à des pluies torrentielles, des inondations massives et des glissements de terrain, causant d\'importants dégâts aux infrastructures, aux habitations et aux terres agricoles. Les communautés côtières ont été particulièrement touchées, subissant des vents violents et des vagues dévastatrices.',
    },
    {
        title: 'Feu forestier au Pyla, Arcachon, France',
        description: 'Le feu forestier qui a éclaté au Pyla, près d\'Arcachon en France, a marqué une situation d\'urgence environnementale et a mobilisé d\'importants efforts de lutte contre les incendies. Le Pyla, renommé pour sa célèbre dune du Pilat, a été confronté à un incendie de forêt qui a menacé la biodiversité locale, les habitations et les infrastructures.\n\nLe sinistre a probablement été alimenté par des conditions météorologiques défavorables, telles que des températures élevées, une faible humidité et des vents forts, créant des conditions propices à la propagation rapide du feu. Les pompiers, les forces de sécurité et les volontaires ont été rapidement mobilisés pour lutter contre les flammes, mettant en œuvre des stratégies de protection des zones habitées et des ressources naturelles.',
    },
    {
        title: 'Sécheresse du fleuve Parana, Argentine, Amérique du Sud',
        description: 'La sécheresse du fleuve Paraná en Argentine, Amérique du Sud, a engendré une crise environnementale majeure, mettant en péril les écosystèmes aquatiques, les ressources hydriques et les activités économiques dépendantes du fleuve. Le Paraná, l\'un des plus longs fleuves d\'Amérique du Sud, est vital pour la région en tant que source d\'eau douce, de navigation et de soutien à l\'agriculture.\n\nLa sécheresse a été exacerbée par des conditions météorologiques défavorables, des précipitations en dessous de la normale et des changements climatiques, entraînant une baisse significative du niveau d\'eau du fleuve. Cette diminution a eu des répercussions graves sur la biodiversité aquatique, les écosystèmes fluviaux et les activités humaines qui dépendent de la disponibilité de l\'eau.',
    },
    {
        title: 'Augmentation du risque de tornades au Kansas, Etats-Unis, Amérique du Nord',
        description: 'L\'augmentation du risque de tornades au Kansas, aux États-Unis, en Amérique du Nord, a suscité des inquiétudes majeures au sein des communautés locales et a nécessité une vigilance accrue des autorités et des organismes de gestion des catastrophes. Le Kansas est régulièrement confronté à des conditions météorologiques propices au développement de tornades, mais l\'augmentation du risque met en évidence des changements dans les schémas climatiques qui peuvent avoir des conséquences graves.\n\nLes tornades, caractérisées par des vents violents tourbillonnants, représentent une menace significative pour la sécurité des habitants, les biens, et l\'infrastructure. L\'augmentation du risque peut être liée à des facteurs tels que les variations climatiques, les changements dans les modèles atmosphériques, ou d\'autres influences environnementales. Ces phénomènes météorologiques peuvent causer des destructions massives, entraînant des pertes humaines, des dommages matériels et des interruptions importantes de la vie quotidienne.',
    },
    {
        title: 'Inondations en Inde, Asie',
        description: 'Les inondations en Inde, en Asie, sont un phénomène saisonnier récurrent, mais parfois elles atteignent des niveaux exceptionnels, provoquant des situations d\'urgence humanitaire et environnementale. Ces inondations sont souvent déclenchées par des pluies de mousson abondantes, des crues soudaines de rivières ou des cyclones tropicaux, mettant à rude épreuve la capacité des infrastructures et des communautés à faire face à de telles catastrophes.\n\nLorsque ces inondations atteignent des proportions considérables, elles ont des conséquences dévastatrices. Des zones étendues sont submergées, provoquant des déplacements massifs de population, des pertes de vies humaines, des dommages aux habitations, aux cultures et aux infrastructures essentielles comme les routes et les ponts. Les inondations peuvent également entraîner des problèmes sanitaires, y compris la propagation de maladies d\'origine hydrique, et compromettre l\'accès à l\'eau potable et aux services de santé.',
    },
];

const PreventGeoguessr = () => {
    return (
        <Prevent sections={sectionsData} destination={'/'} />
    );
}

export default PreventGeoguessr;
