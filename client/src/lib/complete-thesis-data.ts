// Vollständige 22-seitige Lightning Network Thesis Daten

export const completeThesisData = {
  title: "Multidimensionale Analyse der „Steilen Lightning-Thesen"",
  
  introduction: {
    title: "Einleitung: Problemstellung und Hypothesen",
    content: `Die Bitcoin-Community diskutiert zunehmend die Zukunft des Lightning Network (LN) – einem zweiten Protokoll-Layer auf Bitcoin – und damit verbundene kühne Thesen. In der vorliegenden Analyse werden sechs „steile Thesen" untersucht, die in einer Grafik (HWZ, 2023) formuliert wurden.`,
    theses: [
      {
        number: 1,
        title: "L1 vs. L2",
        description: "Layer-1-Bitcoin (On-Chain) wird langfristig wertvoller sein als Layer-2-Bitcoin (im Lightning-Netzwerk)."
      },
      {
        number: 2,
        title: "Lightning-native Generation", 
        description: "Zukünftige Generationen werden Bitcoin nur noch via Lightning nutzen; On-Chain-Transaktionen bleiben ein teures Luxusgut."
      },
      {
        number: 3,
        title: "Lightning-Zentralisierung",
        description: "Lightning führt zwangsläufig zu neuen Zentralisierungstendenzen."
      },
      {
        number: 4,
        title: "Parallelwelten",
        description: "Es entstehen parallele Lightning-Welten: ein reguliertes \"weisses\" Netzwerk und ein anonymes \"schwarzes\" Netzwerk."
      },
      {
        number: 5,
        title: "Private Lightning Islands",
        description: "Unternehmen werden isolierte, private Lightning-Netzwerke („Inseln") schaffen."
      },
      {
        number: 6,
        title: "KYC-Gatekeeper",
        description: "Brücken zwischen Layer 1 und Lightning (Channel-Eröffnungen/Schliessungen) unterliegen künftig regulatorischer Kontrolle (KYC) und könnten Bitcoin dadurch indirekt zentralisieren."
      }
    ],
    methodology: `Die Analyse gliedert sich in klar voneinander abgegrenzte Dimensionen, die zusammen alle relevanten Aspekte abdecken. Zunächst werden die monetäre Werttheorie (These 1) und die Adoptionsdynamik (These 2) untersucht. Anschliessend folgt eine Analyse der Netzwerkstruktur und Zentralisierung (These 3 und 5) sowie der Auswirkungen von Regulierung und Parallelbildung (These 4 und 6). Darauf aufbauend werden spieltheoretische Modelle und Szenarien entwickelt, gefolgt von einer Betrachtung ethisch-philosophischer Implikationen.`
  },

  werttheorie: {
    title: "Werttheoretische Perspektive: Layer 1 vs. Layer 2 Bitcoin",
    hypothesis: "On-Chain-Bitcoin (Layer 1) könnte langfristig einen höheren Wert repräsentieren als Lightning-Bitcoin (Layer 2).",
    content: {
      introduction: `Diese These berührt das ökonomische Konzept der Geldhierarchie: analog zum Goldstandard (Basisgeld vs. umlaufende Geldzertifikate) liesse sich Bitcoin auf Layer 1 als Basisgeld verstehen, während Lightning-Transaktionen eine Art zweite Geldschicht darstellen.`,
      
      historical_parallels: {
        title: "Historische Parallelen",
        content: `Historisch waren physisches Gold oder Zentralbankreserven wertvoller und vertrauenswürdiger als darauf basierende Banknoten – zumindest in Krisenzeiten. So führte etwa 1933 die Aufhebung der Goldeinlösbarkeit des US-Dollars (durch Präsident Roosevelt) dazu, dass physisches Gold plötzlich deutlich höher bewertet wurde als der offizielle Dollarpreis.`
      },

      wert_und_vertrauen: {
        title: "Wert und Vertrauen",
        content: `Im Normalfall sind 1 BTC auf Layer 1 und 1 BTC auf Layer 2 ökonomisch identisch, da Lightning-Bitcoin durch einen On-Chain-Channel vollständig gedeckt ist (keine Teilreserve, sondern „voll reserviertes" System). Das Lightning Network fügt Bitcoin eine Zeit- und Liquiditätskomponente hinzu, aber es schöpft keine zusätzlichen Coins.`,
        factors: [
          {
            title: "Verfügbarkeit und Gebühren",
            description: "Wenn On-Chain-Transaktionen zum „Luxus\" werden (hohe Gebühren, knapper Blockspace), könnten On-Chain-Coins einen Knappheitsaufschlag erhalten. Ähnlich wie grössere Goldbarren geringere Liquidität aber evtl. Sammlerwert haben, könnte ein unteilbarer On-Chain-UTXO von historischer Herkunft als Rarität gelten."
          },
          {
            title: "Vertrauensrisiko und Greshamsches Gesetz",
            description: "Sollte Lightning im Alltag dominieren, könnten Leute geneigt sein, „gutes Geld\" (sicheres On-Chain-BTC) zu behalten und „schlechteres Geld\" (LN-BTC mit potenziellen Einschränkungen) auszugeben – klassisch nach Greshams Gesetz."
          },
          {
            title: "Konvertibilität und Liquiditätspräferenz", 
            description: "Ludwig von Mises' Regressionstheorem zeigt, dass Geldwert auf dem Vertrauen in letztendliche Konvertibilität in ein wertvolles Gut basiert. Bitcoin auf Layer 2 ist jederzeit on-chain einlösbar, solange die Kanäle offen sind und das Netzwerk funktioniert."
          }
        ]
      },

      hayek_theory: {
        title: "Hayeks Theorie der Entnationalisierung",
        content: `In einem Wettbewerb der Geldformen überleben die stabilsten. Sollte LN-Bitcoin durch zentrale Eingriffe an Wertstabilität einbüssen, könnte On-Chain-Bitcoin als ultimative Wertbasis triumphieren – ähnlich einem Goldstandard, bei dem das Publikum letztlich zum stabilsten Wertträger (Gold selbst) flüchtet.`
      },

      fazit: {
        title: "Fazit zu These 1",
        content: `Im Idealfall bleibt 1 BTC = 1 BTC, egal auf welcher Schicht – das Lightning Network fungiert als Transaktionsmedium ohne eigenen Wechselkurs. Sollte jedoch Vertrauen oder Zugänglichkeit von Layer 2 leiden, könnte Layer-1-BTC einen Wertpremium entwickeln. Insbesondere Black-Swan-Events – z.B. eine schwere LN-Sicherheitslücke oder ein globaler Regulierungsakt – könnten kurzfristig On-Chain-Bitcoin bevorzugt werden lassen.`
      }
    }
  },

  adoptionsdynamik: {
    title: "Adoptionsdynamik: Die Lightning-native Generation",
    hypothesis: "Zukünftige Generationen werden Bitcoin vornehmlich über das Lightning Network kennenlernen und nutzen, während direkte On-Chain-Nutzung zum teuren Nischenprodukt wird.",
    
    content: {
      generationenwechsel: {
        title: "Generationenwechsel und Technologie",
        content: `Historisch gibt es zahlreiche Beispiele für Technologiesprünge zwischen Generationen. Jüngere Menschen wachsen oft mit vereinfachenden Abstraktionsschichten auf, ohne die „Basistechnologie\" direkt zu nutzen. Etwa kennt die heutige Jugend Musik fast ausschliesslich via Streaming (Spotify etc.), während physische Tonträger (CDs, Vinyl) zum Liebhaber-Luxus wurden.`,
        examples: [
          "Mobile Payment vs. Bargeld bei jungen Menschen",
          "Streaming vs. physische Tonträger", 
          "Internet-Protokolle bleiben den meisten Nutzern unsichtbar"
        ]
      },

      empirische_indikatoren: {
        title: "Empirische Indikatoren",
        content: `Erste Anzeichen für diese Entwicklung finden sich bereits. In El Salvador, wo Bitcoin 2021 gesetzliches Zahlungsmittel wurde, benutzten Millionen Bürger auf einmal Bitcoin – fast ausschliesslich via Lightning-fähiger Wallets (z.B. Chivo Wallet). Innerhalb eines Monats nach Einführung hatten mehr Salvadorianer eine Bitcoin-Wallet als ein Bankkonto.`,
        statistics: [
          "Mehr Bitcoin-Wallets als Bankkonten in El Salvador nach einem Monat",
          "CoinGate: Verdoppelung des Lightning-Transaktionsanteils 2023",
          "Exponentielles Wachstum der LN-Nutzerbasis"
        ]
      },

      onchain_als_luxus: {
        title: "On-Chain als Luxus",
        content: `Warum sollte die On-Chain-Nutzung zum Luxusprodukt werden? Hier spielen insbesondere Transaktionsgebühren und Skalierbarkeit eine Rolle. Bitcoins Blockspace ist begrenzt und dürfte bei weltweiter Adoption sehr begehrt und teuer sein. Bereits während Hochphasen (etwa 2017 oder 2021) stiegen Gebühren auf zig Dollar pro Transaktion.`,
        analogies: [
          "Goldstandard: Banknoten für tägliche Zahlungen, Goldabhebungen nur in Ausnahmefällen",
          "Bankensystem: Kleingeld digital, Grosstransaktionen auf sicheren Kanälen",
          "Physische vs. digitale Zahlungsmittel"
        ]
      },

      keynesianische_perspektive: {
        title: "Keynesianische Perspektive",
        content: `Bitcoin nähert sich mit LN dem Ideal des Umlaufmittels an. Keynes betonte die Wichtigkeit der Zirkulation des Geldes (hohe Umlaufgeschwindigkeit) für eine florierende Wirtschaft. Das Lightning Network ermöglicht Bitcoin-Transaktionen in hoher Frequenz und kleinem Wert, was die Nutzung im Alltag fördert.`
      },

      soziokulturelle_folgen: {
        title: "Soziokulturelle Folgen",
        content: `Eine Lightning-native Generation bedeutet auch, dass Konzepte wie „Transaktionsfinalität nach 6 Bestätigungen\" oder „UTXO-Management\" nur noch Experten geläufig sind. Die breite Masse würde Bitcoin hauptsächlich über benutzerfreundliche Lightning-Apps wahrnehmen.`,
        risks: [
          "Abhängigkeit von Zweitschicht-Technologie",
          "Verlust grundlegender On-Chain-Kenntnisse",
          "Potenzielle Machtkonzentrationen"
        ]
      }
    }
  }
};

export const netzwerkanalyse = {
  title: "Netzwerkanalyse: Struktur, Zentralisierung und „Private Islands\"",
  hypotheses: [
    "Das Lightning Network führt trotz seines dezentralen Anspruchs zwangsläufig zu neuen Zentralisierungstendenzen.",
    "Unternehmen werden eigene, isolierte Lightning-„Inseln\" betreiben, was die Fragmentierung erhöht."
  ],

  zentralisierungstendenzen: {
    title: "Zentralisierungstendenzen und Hubs im LN",
    empirical_data: {
      gini_coefficient: "~0,88",
      liquidity_concentration: "10% der Nodes halten etwa 80% der Liquidität",
      network_structure: "Core-Periphery-Struktur mit einigen hochvernetzten Knoten als Hubs"
    },
    
    spieltheorie: {
      title: "Spieltheoretische Erklärung",
      content: `Hub-Bildung als Nash-Gleichgewicht eines Netzwerkspiels. Jeder LN-Node entscheidet rational, mit wem er Kanäle öffnet, um Kosten zu minimieren und Einnahmen (Routing Fees) zu maximieren.`,
      mechanisms: [
        "Stern- bzw. Hub-Netzwerk als stabiles Gleichgewicht",
        "Netzwerkeffekte begünstigen grosse Knoten",
        "Economies of Scale bei Liquiditätsmanagement"
      ]
    }
  }
};