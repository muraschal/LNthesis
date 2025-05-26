import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TableOfContents() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="table-of-contents" className="mb-16">
      <Card>
        <CardHeader>
          <CardTitle style={{color: '#000000'}}>Inhaltsverzeichnis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4" style={{color: '#000000'}}>
            
            {/* Hauptkapitel */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-blue-800">I. Einführung und Grundlagen</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('abstract')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  1.1 Abstract
                </button>
                <button 
                  onClick={() => scrollToSection('complete-introduction')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  1.2 Problemstellung und Hypothesen
                </button>
                <button 
                  onClick={() => scrollToSection('theses')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  1.3 Die Sechs Lightning-Thesen im Überblick
                </button>
                <button 
                  onClick={() => scrollToSection('methodology')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  1.4 Methodologie und MECE-Framework
                </button>
              </div>
            </div>

            {/* Theoretische Analyse */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-green-800">II. Theoretische Analyse</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('werttheorie')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  2.1 Werttheoretische Perspektive: Layer 1 vs. Layer 2 Bitcoin
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Historische Parallelen zum Goldstandard</div>
                  <div>• Wert und Vertrauen in Geldhierarchien</div>
                  <div>• Hayeks Theorie der Entnationalisierung</div>
                </div>
                
                <button 
                  onClick={() => scrollToSection('adoptionsdynamik')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  2.2 Adoptionsdynamik: Die Lightning-native Generation
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Generationenwechsel und Technologie</div>
                  <div>• Empirische Indikatoren (El Salvador Case Study)</div>
                  <div>• On-Chain als Luxusgut</div>
                </div>
              </div>
            </div>

            {/* Netzwerkanalyse */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-purple-800">III. Netzwerkanalyse und Strukturen</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('netzwerkanalyse')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  3.1 Lightning-Zentralisierung und Hub-Bildung
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Empirische Daten zur Netzwerk-Topologie</div>
                  <div>• Gini-Koeffizient und Liquiditätsverteilung</div>
                  <div>• Core-Periphery-Strukturen</div>
                </div>
                
                <button 
                  onClick={() => scrollToSection('private-islands')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  3.2 Private Lightning Islands
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Unternehmensinterne Netzwerke</div>
                  <div>• Fragmentierung vs. Interoperabilität</div>
                  <div>• Ökonomische Anreize für Isolation</div>
                </div>
              </div>
            </div>

            {/* Spieltheorie */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-orange-800">IV. Spieltheoretische Modelle</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('spieltheorie')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  4.1 Nash-Gleichgewichte im Lightning Network
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Hub-Bildung als stabiles Gleichgewicht</div>
                  <div>• Routing-Fee-Optimierung</div>
                  <div>• Kooperative vs. kompetitive Strategien</div>
                </div>
                
                <button 
                  onClick={() => scrollToSection('scenarios')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  4.2 Szenario-Analyse
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Best-Case, Worst-Case und Most-Likely Szenarien</div>
                  <div>• Regulatorische Eingriffe</div>
                  <div>• Technologische Entwicklungen</div>
                </div>
              </div>
            </div>

            {/* Regulierung */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-red-800">V. Regulierung und Parallelwelten</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('parallelwelten')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  5.1 Weisses vs. Schwarzes Lightning Network
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Regulierte vs. anonyme Netzwerke</div>
                  <div>• Compliance und KYC-Anforderungen</div>
                  <div>• Privacy-Technologien und Überwachung</div>
                </div>
                
                <button 
                  onClick={() => scrollToSection('kyc-gatekeeper')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  5.2 KYC-Gatekeeper und Kontrolle
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Börsen als Liquiditätsprovider</div>
                  <div>• Channel-Eröffnungen unter Aufsicht</div>
                  <div>• Indirekte Bitcoin-Zentralisierung</div>
                </div>
              </div>
            </div>

            {/* Ethik und Philosophie */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-indigo-800">VI. Ethische und Philosophische Implikationen</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('ethics')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  6.1 Dezentralisierung vs. Effizienz
                </button>
                <button 
                  onClick={() => scrollToSection('ethics')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  6.2 Finanzielle Inklusion und Zugänglichkeit
                </button>
                <button 
                  onClick={() => scrollToSection('ethics')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  6.3 Systemische Risiken und Verantwortung
                </button>
              </div>
            </div>

            {/* Fazit */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-gray-800">VII. Synthese und Ausblick</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('conclusion')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  7.1 Zusammenfassung der Erkenntnisse
                </button>
                <button 
                  onClick={() => scrollToSection('conclusion')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  7.2 Interdependenzen der Thesen
                </button>
                <button 
                  onClick={() => scrollToSection('conclusion')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  7.3 Forschungsausblick und offene Fragen
                </button>
              </div>
            </div>

            {/* Anhang */}
            <div className="space-y-3">
              <div className="border-b pb-2">
                <h3 className="text-lg font-semibold text-gray-600">VIII. Anhang</h3>
              </div>
              
              <div className="ml-4 space-y-2">
                <button 
                  onClick={() => scrollToSection('references')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  8.1 Literaturverzeichnis
                </button>
                <button 
                  onClick={() => scrollToSection('search')}
                  className="block text-left hover:text-blue-600 transition-colors"
                >
                  8.2 Suchfunktion und Index
                </button>
                <div className="ml-4 text-sm text-gray-600 space-y-1">
                  <div>• Technische Daten und Statistiken</div>
                  <div>• Glossar der Fachbegriffe</div>
                  <div>• Weiterführende Ressourcen</div>
                </div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </section>
  );
} 