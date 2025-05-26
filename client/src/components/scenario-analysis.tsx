import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ScenarioAnalysis() {
  const scenarios = [
    {
      id: 1,
      title: "Erfolg in Balance",
      type: "Optimistisches Basisszenario",
      probability: "Hoch",
      badgeColor: "bg-green-100 text-green-800",
      description: "Lightning-Adoption steigt exponentiell, das Netzwerk wächst organisch mit moderater Konzentration. Regulatorische Anforderungen bleiben auf Gateways beschränkt.",
      keyPoints: [
        "Organisches Wachstum mit dezentralen Routing-Nodes",
        "Milde Parallelwelten mit Interaktion zwischen reguliertem und offenem Bereich",
        "Freiwillige Lightning-Konten für enhanced Features",
        "On-Chain und Lightning koexistieren harmonisch"
      ]
    },
    {
      id: 2,
      title: "Konzentration und Kontrolle",
      type: "Pessimistisches Szenario",
      probability: "Mittel",
      badgeColor: "bg-orange-100 text-orange-800",
      description: "Starke Zentralisierung um wenige Mega-Hubs, strikte Regulierung spaltet das Netzwerk in getrennte Welten auf.",
      keyPoints: [
        "3-5 Mega-Hubs kontrollieren 90% der Liquidität",
        "Klare Trennung zwischen weissem und schwarzem Netzwerk",
        "KYC-Pflicht für alle groesseren Transaktionen",
        "On-Chain wird zu Premium-Settlement-Layer"
      ]
    },
    {
      id: 3,
      title: "Nakamoto-Schock",
      type: "Extremszenario",
      probability: "Niedrig",
      badgeColor: "bg-red-100 text-red-800",
      description: "Drastische staatliche Intervention führt zu kompletter Fragmentierung oder Kollaps des offenen Lightning-Netzwerks.",
      keyPoints: [
        "Verbot anonymer Lightning-Knoten",
        "Whitelisting aller Bitcoin-UTXOs",
        "Nur lizenzierte Gatekeeper erlaubt",
        "Untergrund-Netzwerk wird kriminalisiert"
      ]
    }
  ];

  return (
    <section id="scenarios" className="mb-16">
      <h2 className="text-3xl font-bold academic-blue mb-8">Spieltheoretische Szenarien</h2>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="grid md:grid-cols-1 gap-6">
          {scenarios.map((scenario) => (
            <Card key={scenario.id} className="border-l-4 border-gray-200">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl academic-blue">{scenario.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge className={scenario.badgeColor}>
                      {scenario.probability} Wahrscheinlichkeit
                    </Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 font-medium">{scenario.type}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{scenario.description}</p>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">Kerncharakteristika:</h4>
                  <ul className="space-y-2">
                    {scenario.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-700">
                        <i className="fas fa-chevron-right text-gray-400 mr-2 mt-1 text-xs"></i>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Nash-Gleichgewichte */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h3 className="text-xl font-semibold academic-blue mb-6">
          <i className="fas fa-balance-scale mr-2"></i>Nash-Gleichgewichte und Kipppunkte
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 rounded-lg p-6">
            <h4 className="font-semibold text-blue-900 mb-3">Stabile Gleichgewichte</h4>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Hub-and-Spoke als Nash-optimale Struktur</li>
              <li>• Regulierte vs. unregulierte Cluster-Bildung</li>
              <li>• Gatekeeper-Position als dominante Strategie</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6">
            <h4 className="font-semibold text-yellow-900 mb-3">Kritische Kipppunkte</h4>
            <ul className="space-y-2 text-sm text-yellow-800">
              <li>• Regulatorischer Schock (über 50% Nodes betroffen)</li>
              <li>• Technischer Kollaps grosser Hubs</li>
              <li>• Massenexodus zu alternativen Layer-2-Lösungen</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}