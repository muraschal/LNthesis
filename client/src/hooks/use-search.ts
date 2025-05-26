import { useState, useMemo } from "react";

interface SearchResult {
  section: string;
  content: string;
}

export function useSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const popularTerms = [
    "Lightning Network",
    "Zentralisierung", 
    "Greshamsches Gesetz",
    "MECE",
    "Adoption",
    "Layer-2",
    "Nash-Gleichgewicht",
    "KYC"
  ];

  const searchableContent = [
    {
      section: "These 1: Layer-1 vs. Layer-2 Wert",
      content: "Layer-1-Bitcoin wird langfristig wertvoller sein als Layer-2-Bitcoin aufgrund von Knappheit und Vertrauensaspekten. Greshamsches Gesetz bevorzugt gutes On-Chain-BTC."
    },
    {
      section: "These 2: Lightning-native Generation",
      content: "Zukünftige Generationen werden Bitcoin nur noch via Lightning nutzen. On-Chain-Transaktionen bleiben ein teures Luxusgut. El Salvador zeigt Leapfrog-Entwicklung."
    },
    {
      section: "These 3: Lightning-Zentralisierung",
      content: "Lightning führt zwangsläufig zu neuen Zentralisierungstendenzen durch Hub-Bildung und Netzwerkeffekte. Gini-Koeffizient von ~0.88 zeigt Ungleichverteilung."
    },
    {
      section: "These 4: Parallelwelten",
      content: "Es entstehen parallele Lightning-Welten: ein reguliertes weisses Netzwerk und ein anonymes schwarzes Netzwerk durch regulatorische Eingriffe."
    },
    {
      section: "These 5: Private Lightning Islands",
      content: "Unternehmen schaffen isolierte, private Lightning-Netzwerke für interne Zwecke. Fragmentierung des Netzwerks durch Datenschutz und Compliance-Anforderungen."
    },
    {
      section: "These 6: KYC-Gatekeeper",
      content: "Brücken zwischen Layer 1 und Lightning unterliegen regulatorischer Kontrolle (KYC) und könnten Bitcoin indirekt zentralisieren durch Gatekeeper-Funktionen."
    },
    {
      section: "MECE-Framework",
      content: "Mutually Exclusive, Collectively Exhaustive Analysemethodik zur systematischen Strukturierung komplexer Problemstellungen in der Forschung."
    },
    {
      section: "Spieltheorie",
      content: "Nash-Gleichgewichte in Netzwerkspielen erklären Hub-Bildung als rationale Entscheidung zur Kostenminimierung und Routing Fee Maximierung."
    },
    {
      section: "Hayeks Theorie",
      content: "Entnationalisierung des Geldes: In einem Wettbewerb der Geldformen überleben die stabilsten. On-Chain-Bitcoin als ultimative Wertbasis."
    },
    {
      section: "Keynesianische Perspektive",
      content: "Lightning Network ermöglicht hohe Zirkulation des Geldes, was für eine florierende Wirtschaft wichtig ist. Bitcoin nähert sich dem Ideal des Umlaufmittels an."
    }
  ];

  const searchResults = useMemo(() => {
    if (!searchTerm.trim()) return [];
    
    const term = searchTerm.toLowerCase();
    return searchableContent.filter(item => 
      item.section.toLowerCase().includes(term) || 
      item.content.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    searchResults,
    popularTerms
  };
}
