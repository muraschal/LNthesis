export const thesesData = [
  {
    id: 1,
    title: "These 1",
    subtitle: "Layer-1 vs. Layer-2 Bitcoin",
    category: "Werttheorie",
    description: "Layer-1-Bitcoin (On-Chain) wird langfristig wertvoller sein als Layer-2-Bitcoin (im Lightning-Netzwerk) aufgrund von Knappheit und Vertrauensaspekten.",
    borderColor: "border-red-400",
    tagColor: "bg-red-100 text-red-800"
  },
  {
    id: 2,
    title: "These 2",
    subtitle: "Lightning-native Generation",
    category: "Adoption",
    description: "Zukünftige Generationen werden Bitcoin nur noch via Lightning nutzen; On-Chain-Transaktionen bleiben ein teures Luxusgut.",
    borderColor: "border-blue-400",
    tagColor: "bg-blue-100 text-blue-800"
  },
  {
    id: 3,
    title: "These 3",
    subtitle: "Lightning-Zentralisierung",
    category: "Netzwerk",
    description: "Lightning führt zwangsläufig zu neuen Zentralisierungstendenzen durch Hub-Bildung und Netzwerkeffekte.",
    borderColor: "border-yellow-400",
    tagColor: "bg-yellow-100 text-yellow-800"
  },
  {
    id: 4,
    title: "These 4",
    subtitle: "Parallelwelten",
    category: "Regulierung",
    description: "Es entstehen parallele Lightning-Welten: ein reguliertes \"weisses\" Netzwerk und ein anonymes \"schwarzes\" Netzwerk.",
    borderColor: "border-purple-400",
    tagColor: "bg-purple-100 text-purple-800"
  },
  {
    id: 5,
    title: "These 5",
    subtitle: "Private Lightning Islands",
    category: "Fragmentierung",
    description: "Unternehmen werden isolierte, private Lightning-Netzwerke (\"Inseln\") für interne Zwecke schaffen.",
    borderColor: "border-green-400",
    tagColor: "bg-green-100 text-green-800"
  },
  {
    id: 6,
    title: "These 6",
    subtitle: "KYC-Gatekeeper",
    category: "Kontrolle",
    description: "Brücken zwischen Layer 1 und Lightning unterliegen künftig regulatorischer Kontrolle (KYC) und könnten Bitcoin indirekt zentralisieren.",
    borderColor: "border-orange-400",
    tagColor: "bg-orange-100 text-orange-800"
  }
];

export const detailedAnalysisData = [
  {
    id: "thesis-1",
    tag: "These 1",
    title: "Werttheoretische Perspektive: Layer 1 vs. Layer 2 Bitcoin",
    tagColor: "bg-red-100 text-red-800",
    introduction: "Die Hypothese, dass On-Chain-Bitcoin (Layer 1) langfristig einen höheren Wert repräsentieren könnte als Lightning-Bitcoin (Layer 2), berührt das ökonomische Konzept der Geldhierarchie.",
    sections: [
      {
        title: "Wert und Vertrauen",
        backgroundColor: "bg-gray-50",
        content: "Im Normalfall sind 1 BTC auf Layer 1 und 1 BTC auf Layer 2 ökonomisch identisch, da Lightning-Bitcoin durch einen On-Chain-Channel vollständig gedeckt ist. Dennoch könnten verschiedene Faktoren eine Wertabweichung bewirken:",
        points: [
          {
            title: "Verfügbarkeit und Gebühren",
            description: "Knapper Blockspace führt zu Knappheitsaufschlag für On-Chain-UTXOs"
          },
          {
            title: "Vertrauensrisiko und Greshamsches Gesetz",
            description: "Bei staatlicher Kontrolle über Lightning würden Akteure wertvolles On-Chain-BTC horten"
          },
          {
            title: "Konvertibilität und Liquiditätspräferenz",
            description: "Temporäre Einschränkungen der Einlösefähigkeit könnten On-Chain-Bitcoin bevorzugen lassen"
          }
        ]
      }
    ],
    highlight: {
      title: "Hayeks Theorie der Entnationalisierung",
      content: "In einem Wettbewerb der Geldformen überleben die stabilsten. Sollte LN-Bitcoin durch zentrale Eingriffe an Wertstabilität einbüssen, könnte On-Chain-Bitcoin als ultimative Wertbasis triumphieren.",
      backgroundColor: "bg-blue-50",
      borderColor: "border-blue-400",
      textColor: "text-blue-800"
    }
  },
  {
    id: "thesis-2",
    tag: "These 2",
    title: "Adoptionsdynamik: Die Lightning-native Generation",
    tagColor: "bg-blue-100 text-blue-800",
    introduction: "Zukünftige Generationen werden Bitcoin vornehmlich über das Lightning Network kennenlernen und nutzen, während direkte On-Chain-Nutzung zum teuren Nischenprodukt wird.",
    sections: [
      {
        title: "Generationenwechsel und Technologie",
        backgroundColor: "bg-gray-50",
        content: "Historische Beispiele zeigen Technologiesprünge zwischen Generationen. Ähnlich wie die heutige Jugend Musik via Streaming kennt, werden neue Bitcoin-User Lightning als Standard wahrnehmen."
      },
      {
        title: "Empirische Indikatoren",
        backgroundColor: "bg-gray-50",
        content: "El Salvador zeigt Leapfrog-Entwicklung: Millionen nutzten Bitcoin direkt über Lightning ohne Vorerfahrung. CoinGate verzeichnete 2023 eine Verdoppelung des Lightning-Transaktionsanteils."
      },
      {
        title: "On-Chain als Luxus",
        backgroundColor: "bg-gray-50",
        content: "Bei weltweiter Adoption werden On-Chain-Transaktionen für Grossbeträge und Settlement reserviert, ähnlich wie Goldabhebungen im historischen Goldstandard."
      }
    ],
    highlight: {
      title: "Keynesianische Perspektive",
      content: "Bitcoin nähert sich mit LN dem Ideal des Umlaufmittels an. Lightning ermöglicht hohe Zirkulation des Geldes, was für eine florierende Wirtschaft wichtig ist.",
      backgroundColor: "bg-green-50",
      borderColor: "border-green-400",
      textColor: "text-green-800"
    }
  },
  {
    id: "thesis-4",
    tag: "These 4 & 6",
    title: "Regulierung und Parallelwelten: Weisses vs. Schwarzes Lightning",
    tagColor: "bg-purple-100 text-purple-800",
    introduction: "Das Lightning-Netz könnte sich in ein reguliertes 'weisses' Netzwerk und ein anonymes 'schwarzes' Netzwerk aufspalten, wobei Gatekeeper zwischen den Schichten als KYC-Kontrollpunkte fungieren.",
    sections: [
      {
        title: "Regulierung des Lightning-Netzwerks",
        backgroundColor: "bg-gray-50",
        content: "Lightning-Transaktionen sind heute pseudo-anonym. Regulatoren könnten über Gateways (Börsen, Zahlungsanbieter) strikte KYC-Regeln durchsetzen und grosse öffentliche Nodes direkt ins Visier nehmen."
      },
      {
        title: "Weisses vs. Schwarzes Netzwerk",
        backgroundColor: "bg-gray-50",
        content: "Ein 'weisses' Lightning-Netzwerk würde regulierte, konforme Knoten umfassen (Banken, lizenzierte Provider), während ein 'schwarzes' Netzwerk anonyme, auf Privatsphäre bedachte Akteure verbindet."
      },
      {
        title: "KYC-Gatekeeper",
        backgroundColor: "bg-gray-50",
        content: "Brücken zwischen Layer 1 und Lightning werden zu Gatekeepern der Freiheit. Börsen als dominante Liquiditätsprovider könnten Bitcoin indirekt zentralisieren durch Kontrolle der Schichtübergänge."
      }
    ],
    highlight: {
      title: "Historische Parallele: Nixon-Schock 1971",
      content: "Ähnlich wie das Goldfenster geschlossen wurde, könnte ein 'Nakamoto-Schock' Bitcoin in ein Netzwerk genehmigter Knoten und whitelisted Coins umwandeln.",
      backgroundColor: "bg-orange-50",
      borderColor: "border-orange-400",
      textColor: "text-orange-800"
    }
  }
];
