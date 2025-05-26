import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CompleteThesisExtended() {
  return (
    <div className="space-y-12">
      {/* Netzwerkanalyse: Private Islands */}
      <section id="private-islands" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>Private Lightning Islands: Unternehmensnetzwerke</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-semibold mb-2" style={{color: '#000000'}}>These 5: Private Lightning Islands</h4>
                <p className="text-sm">
                  Unternehmen werden isolierte, private Lightning-Netzwerke („Inseln") schaffen, was die 
                  Fragmentierung erhöht und die globale Konnektivität reduziert.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Gründe für Private Islands</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Compliance und Datenschutz</h5>
                    <p className="text-sm">
                      Unternehmen benötigen Kontrolle über Transaktionsdaten für Compliance-Zwecke. 
                      Private Islands ermöglichen interne Zahlungsabwicklung ohne externe Überwachung.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Kosteneffizienz</h5>
                    <p className="text-sm">
                      Grosse Unternehmen können durch eigene Lightning-Netzwerke Routing-Gebühren 
                      sparen und bessere Liquiditätskontrolle erreichen.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Technische Kontrolle</h5>
                    <p className="text-sm">
                      Private Netzwerke bieten bessere Performance, Verfügbarkeit und 
                      massgeschneiderte Funktionalitäten für spezifische Geschäftsprozesse.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Regulatorische Sicherheit</h5>
                    <p className="text-sm">
                      Geschlossene Systeme sind einfacher zu regulieren und entsprechen 
                      traditionellen Finanzdienstleistungsmodellen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{color: '#000000'}}>Fragmentierungsrisiko</h4>
                <p className="text-sm" style={{color: '#000000'}}>
                  Private Lightning Islands können zur Balkanisierung des Bitcoin-Ökosystems führen. 
                  Statt eines globalen, interoperablen Netzwerks entstehen isolierte Silos, die den 
                  ursprünglichen Dezentralisierungsgedanken untergraben. Dies reduziert die Netzwerkeffekte 
                  und könnte Bitcoin zu einem fragmentierten System machen.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Historische Parallelen</h4>
                <div className="grid gap-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Unternehmens-Intranets vs. Internet</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      In den 1990ern entstanden viele private Firmennetzwerke parallel zum öffentlichen Internet. 
                      Ähnlich könnten Lightning Islands das offene Netzwerk fragmentieren.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Traditionelles Bankwesen</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Grosse Banken betreiben eigene interne Clearingsysteme, bevor sie sich mit 
                      externen Partnern verbinden. Private Islands folgen diesem bewährten Muster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Regulierung und Parallelwelten */}
      <section id="regulierung-parallelwelten" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>Regulierung und Parallelwelten: Weisses vs. Schwarzes Lightning</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold mb-2" style={{color: '#000000'}}>These 4: Parallelwelten</h4>
                <p className="text-sm">
                  Es entstehen parallele Lightning-Welten: ein reguliertes "weisses" Netzwerk 
                  und ein anonymes "schwarzes" Netzwerk durch staatliche Eingriffe.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Weisses vs. Schwarzes Netzwerk</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border-2 border-gray-300 p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-600">Weisses Lightning Netzwerk</h5>
                    <ul className="space-y-2 text-sm" style={{color: '#000000'}}>
                      <li>• Vollständige KYC/AML-Compliance</li>
                      <li>• Lizenzierte Anbieter (Banken, Fintech)</li>
                      <li>• Transaktionsüberwachung</li>
                      <li>• Staatliche Akzeptanz</li>
                      <li>• Mainstream-Integration</li>
                      <li>• Stabile Liquidität</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900 text-white p-6 rounded-lg">
                    <h5 className="font-semibold mb-3 text-gray-300">Schwarzes Lightning Netzwerk</h5>
                    <ul className="space-y-2 text-sm">
                      <li>• Maximale Privatsphäre</li>
                      <li>• Anonyme Knoten</li>
                      <li>• Zensurresistenz</li>
                      <li>• Regulatorisches Risiko</li>
                      <li>• Begrenzte Liquidität</li>
                      <li>• Underground-Wirtschaft</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Spieltheoretische Dynamik</h4>
                <p>
                  Die Aufspaltung in zwei Netzwerke schafft ein asymmetrisches Spiel: Konforme Akteure 
                  (weisses Netz) riskieren Strafen bei Interaktion mit Non-Konformen, während 
                  Non-Konforme (schwarzes Netz) von Brücken ins weisse Netz profitieren würden.
                </p>

                <div className="bg-orange-50 p-4 rounded">
                  <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Jordan Peterson Perspektive</h5>
                  <p className="text-sm" style={{color: '#000000'}}>
                    Diese Dynamik lässt sich als moralischer Konflikt zwischen Ordnung und Chaos beschreiben: 
                    Das weisse Netz repräsentiert Ordnung (Gesetz, Sicherheit), das schwarze Netz Chaos 
                    (Freiheit, aber auch Gefahr). Peterson warnte, dass zu viel Ordnung in Tyrannei umschlägt 
                    und zu viel Chaos im Zerfall endet.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Brücken und Gateways</h4>
                <p>
                  Trotz Trennung werden illegale oder semi-legale Brücken zwischen den Netzwerken entstehen. 
                  Diese Gateways werden ständig dem Risiko staatlicher Schliessung unterliegen, was zu 
                  einem Katz-und-Maus-Spiel zwischen Regulierern und Innovatoren führt.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-red-50 p-4 rounded text-center">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Risiko</h5>
                    <p className="text-sm">Staatliche Verfolgung</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded text-center">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Liquidität</h5>
                    <p className="text-sm">Begrenzte Verbindungen</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded text-center">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Innovation</h5>
                    <p className="text-sm">Technische Umgehungen</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* KYC-Gatekeeper */}
      <section id="kyc-gatekeeper" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>KYC-Gatekeeper: Indirekte Zentralisierung durch On/Off-Ramps</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="font-semibold mb-2" style={{color: '#000000'}}>These 6: KYC-Gatekeeper</h4>
                <p className="text-sm">
                  Brücken zwischen Layer 1 und Lightning unterliegen künftig regulatorischer Kontrolle (KYC) 
                  und könnten Bitcoin dadurch indirekt zentralisieren.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Gatekeeper-Mechanismus</h4>
                <p>
                  Bereits jetzt sind klassische On/Off-Ramps (Börsen) zentralisiert – ein Grossteil der 
                  Bitcoin-Nutzer erwirbt Coins über einige wenige Handelsplätze, die KYC durchführen. 
                  Sollte Lightning grossflächig von Börsen integriert werden, könnten diese zu 
                  dominierenden Liquiditätsprovidern avancieren.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Aktuelle Beispiele</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Kraken betreibt öffentlichen Lightning Node</li>
                      <li>• River Financial bietet LN-APIs für Unternehmen</li>
                      <li>• Strike ermöglicht Lightning-Integration</li>
                      <li>• Börsen als Liquiditäts-Hubs</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Kontrollmechanismen</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Identitätsverknüpfung mit LN-Pubkeys</li>
                      <li>• Transaktionsüberwachung an Toren</li>
                      <li>• Blacklisting von Adressen</li>
                      <li>• Compliance-Reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{color: '#000000'}}>Ray Dalio Perspektive: Langfristige Schuldenzyklen</h4>
                <p className="text-sm" style={{color: '#000000'}}>
                  Dalio beschreibt, wie Regierungen am Ende eines Verschuldungszyklus zu Kapitalverkehrskontrollen 
                  greifen und „Schlupflöcher" schliessen. Übertragen: Wenn Bitcoin zu mächtig wird, werden 
                  Regierungen versuchen, es ins eigene Finanzsystem einzubetten und jede Fluchtmöglichkeit zu erschweren.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Auswirkungen auf Dezentralisierung</h4>
                <p>
                  Der Staat braucht dann nicht jeden LN-Hop zu überwachen – es reicht, die Tore zu kontrollieren. 
                  In der Folge hätte man ein Bitcoin-System, das nur nominell dezentral ist: Die Basis mag 
                  zensurresistent sein, aber praktisch alle benutzen den überwachten LN.
                </p>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-red-600">90%</div>
                    <div className="text-sm text-red-800">KYC-pflichtiger Traffic</div>
                    <div className="text-xs">über regulierte Gateways</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-orange-600">10%</div>
                    <div className="text-sm text-orange-800">Anonyme Nutzung</div>
                    <div className="text-xs">mit begrenzter Liquidität</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded text-center">
                    <div className="text-2xl font-bold text-blue-600">Nominal</div>
                    <div className="text-sm text-blue-800">Dezentralisierung</div>
                    <div className="text-xs">faktisch kontrolliert</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}