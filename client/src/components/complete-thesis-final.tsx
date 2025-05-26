import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CompleteThesisFinal() {
  return (
    <div className="space-y-12">
      {/* Spieltheoretische Modelle */}
      <section id="spieltheorie" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>Spieltheoretische Modelle und Nash-Gleichgewichte</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold mb-2" style={{color: '#000000'}}>Hub-Bildung als Nash-Gleichgewicht</h4>
                <p className="text-sm">
                  Aus Sicht der Spieltheorie lässt sich die Hub-Bildung als Nash-Gleichgewicht eines 
                  Netzwerkspiels interpretieren. Jeder LN-Node entscheidet rational, mit wem er Kanäle 
                  öffnet, um Kosten zu minimieren und Einnahmen (Routing Fees) zu maximieren.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Stern-Netzwerk als stabile Lösung</h4>
                <p>
                  Tatsächlich haben Analysen gezeigt, dass unter bestimmten Annahmen (z.B. vernachlässigbaren 
                  Routing-Gebühren) eine Sternstruktur Nash-stabil ist. Intuitiv: Wenn bereits ein grosser 
                  Hub existiert, hat ein neuer Teilnehmer den grössten Nutzen, sich mit dem Hub zu verbinden, 
                  um das gesamte Netzwerk zu erreichen.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Vorteile für neue Nodes</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Sofortiger Zugang zum gesamten Netzwerk</li>
                      <li>• Geringere Kosten als viele eigene Kanäle</li>
                      <li>• Höhere Erfolgsrate für Routing</li>
                      <li>• Weniger Liquiditätsmanagement nötig</li>
                    </ul>
                  </div>
                  <div className="bg-orange-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Hub-Verstärkung</h5>
                    <ul className="text-sm space-y-1">
                      <li>• Mehr Verbindungen = mehr Traffic</li>
                      <li>• Economies of Scale bei Liquidität</li>
                      <li>• Höhere Routing-Fee-Einnahmen</li>
                      <li>• Selbstverstärkender Kreislauf</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Peter Thiel Perspektive: Competition is for Losers</h4>
                <p>
                  Ökonom Peter Thiel, bekannt für seine Befürwortung von Monopolen in Technologie 
                  („Competition is for losers"), würde hier vielleicht anmerken, dass sich effizientere 
                  Strukturen mit wenigen grossen Intermediären durchsetzen, da sie Dienste günstiger 
                  anbieten können.
                </p>
                
                <div className="bg-gray-100 p-4 rounded">
                  <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Thiel'sche Skaleneffekte im Lightning Network</h5>
                  <ul className="text-sm space-y-1" style={{color: '#000000'}}>
                    <li>• Grosse Routing-Knoten haben besseres Liquiditätsmanagement</li>
                    <li>• Geringere Latenz durch professionelle Infrastruktur</li>
                    <li>• Mehr Traffic anzieht noch mehr Traffic</li>
                    <li>• Monopolistische Tendenzen als natürliches Ergebnis</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Parallelwelten-Spieltheorie</h4>
                <p>
                  Die Aufspaltung in „weisses" und „schwarzes" Lightning schafft ein asymmetrisches Spiel: 
                  Wir haben zwei „Gemeinschaften" von Spielern – konforme und non-konforme.
                </p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-gray-300 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Konforme Spieler (Weisses Netz)</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Wenn die Strafen für Konforme, die mit Nicht-Konformen interagieren, hoch sind, 
                      ist die beste Antwort für Konforme, keine Verbindungen zu haben.
                    </p>
                  </div>
                  <div className="bg-gray-900 text-white p-4 rounded">
                    <h5 className="font-semibold mb-2">Non-Konforme (Schwarzes Netz)</h5>
                    <p className="text-sm">
                      Für Nicht-Konforme ist es hingegen nützlich, zumindest einen Fuss ins weisse 
                      Netz zu bekommen (um an Liquidität zu kommen, etwa einen On/Off-Ramp).
                    </p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded mt-4">
                  <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Gleichgewicht mit Brücken</h5>
                  <p className="text-sm" style={{color: '#000000'}}>
                    Dieses asymmetrische Spiel könnte ein Gleichgewicht hervorbringen, in dem ein oder 
                    zwei halb-legale Brücken existieren (vielleicht via Drittstaaten), die jedoch immer 
                    Risiko laufen, dicht gemacht zu werden.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Ethische und gesellschaftliche Implikationen */}
      <section id="ethische-implikationen-vollstaendig" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>Ethische und gesellschaftliche Implikationen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <p className="text-lg">
                Abschliessend soll die Diskussion um eine normative Dimension erweitert werden: 
                Welche ethischen, moralischen und politischen Fragen werfen diese Thesen und 
                Entwicklungen auf? Welche verborgenen Machtstrukturen könnten entstehen?
              </p>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3" style={{color: '#000000'}}>Freiheit vs. Sicherheit</h4>
                  <p className="mb-4" style={{color: '#000000'}}>
                    Bitcoin war ursprünglich ein Projekt für Freiheit und Souveränität des Individuums. 
                    Lightning als Skalierungsschicht sollte diese Mission unterstützen. Doch Zentralisierung 
                    und Regulierungstendenzen stellen das Freiheitsversprechen infrage.
                  </p>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-red-400">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Moralisches Dilemma</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Ist es vertretbar, im Namen der Verbreitung von Bitcoin Kompromisse bei der 
                      Zensurresistenz einzugehen? Oder muss um jeden Preis die radikale Freiheit 
                      verteidigt werden, auch wenn das langsamere Adoption bedeutet?
                    </p>
                  </div>

                  <div className="mt-4 bg-blue-100 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Jordan Peterson Perspektive</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Peterson würde hier an das individuelle Verantwortungsgefühl appellieren: Jeder 
                      Nutzer sollte Verantwortung übernehmen, Bitcoin im Sinne der ersten Prinzipien zu 
                      nutzen (eigene Nodes, Privacy beachten), anstatt bequem den Weg des geringsten 
                      Widerstands (Custodial Lightning mit KYC) zu gehen.
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3" style={{color: '#000000'}}>Inklusive vs. Exklusive Finanzwelt</h4>
                  <p className="mb-4" style={{color: '#000000'}}>
                    Lightning kann extreme Gegensätze hervorbringen: Einerseits finanzielle Inklusion – 
                    Mikrozahlungen für alle, auch Unbanked, via Smartphone. Andrerseits droht eine neue 
                    Exklusivität, falls On-Chain wirklich Luxus wird.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded">
                      <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Erste Klasse</h5>
                      <ul className="text-sm space-y-1">
                        <li>• KYC-zertifizierter „sauberer" Bitcoin-Zugang</li>
                        <li>• Alle Dienstleistungen verfügbar</li>
                        <li>• Unter vollständiger Überwachung</li>
                        <li>• Mainstream-Integration</li>
                      </ul>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Zweite Klasse</h5>
                      <ul className="text-sm space-y-1">
                        <li>• Ausweichen in Schattenökonomien</li>
                        <li>• Anonym, aber geächtet</li>
                        <li>• Mit erheblichen Hürden</li>
                        <li>• Begrenzte Liquidität</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 bg-yellow-100 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Ethische Kernfrage</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Sollten wir ein Finanzsystem anstreben, das absolute Transparenz und Compliance hat 
                      (um Verbrechen zu verhindern), oder eins, das Privatsphäre und Freiheit schützt 
                      (in Kauf nehmend, dass es Missbrauch geben kann)?
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3" style={{color: '#000000'}}>Machtstrukturen und Interessenkonflikte</h4>
                  <p className="mb-4" style={{color: '#000000'}}>
                    Wer kontrolliert im Endeffekt Bitcoin und Lightning? Heute wäre die Antwort: Niemand, 
                    es ist dezentral. Doch die Thesen zeigen potenzielle neue Machthaber:
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h6 className="font-semibold text-sm" style={{color: '#000000'}}>Neue Machthaber</h6>
                        <ul className="text-xs space-y-1" style={{color: '#000000'}}>
                          <li>• Grosse Node-Betreiber</li>
                          <li>• Regulatoren mit KYC-Schlüsseln</li>
                          <li>• Unternehmen mit abgeschotteten Netzwerken</li>
                          <li>• Protocol-Entwickler (Governance)</li>
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded">
                        <h6 className="font-semibold text-sm" style={{color: '#000000'}}>Zielkonflikte</h6>
                        <ul className="text-xs space-y-1" style={{color: '#000000'}}>
                          <li>• Gemeinwohl vs. Individualrecht</li>
                          <li>• Innovation vs. Stabilität</li>
                          <li>• Globale vs. lokale Interessen</li>
                          <li>• Effizienz vs. Dezentralisierung</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Persönlichkeiten-Perspektiven */}
              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Perspektiven verschiedener Denker</h4>
                
                <div className="grid gap-4">
                  <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-400">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Peter Thiel: Macht und Strategie</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Als erfolgreicher Kapitalist und „contrarian" Denker könnte Thiel die Situation aus 
                      Sicht von Macht und Strategie lesen: Einerseits liebt er Bitcoin als Aussenseiter-Investment 
                      gegen Zentralbanken, andererseits weiss er, dass Marktmacht sich konzentriert. 
                      Vielleicht investiert er in LN-Startups, um bei einer möglichen Monopolisierung vorne dabei zu sein.
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-400">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Jordan Peterson: Individuelle Tugend</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Peterson würde vermutlich den Diskurs auf eine individuelle Tugendebene heben: 
                      Bitcoin gibt dem Individuum Verantwortung und Macht, Lightning multipliziert diese 
                      Möglichkeiten. Bitcoin als hartes, ehrliches Geld vs. Fiat-Betrug. Lightning darf 
                      dieses Ethos nicht korrumpieren.
                    </p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded border-l-4 border-orange-400">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Populistische Sicht: Nationale Interessen</h5>
                    <p className="text-sm" style={{color: '#000000'}}>
                      Populisten könnten Bitcoin als Gefahr für nationale Interessen ansehen 
                      („eine Währung gegen den Dollar"). Eine populistische Zukunft für Lightning wäre 
                      vielleicht: Ein starker US-zentraler LN-Hub (vielleicht Fedcoin Lightning?) und 
                      Druck auf andere Länder, es genauso zu machen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3" style={{color: '#000000'}}>Ethisches Resümee</h4>
                <p className="mb-4" style={{color: '#000000'}}>
                  Die steilen Lightning-Thesen zwingen uns, über den Zweck von Technologie nachzudenken. 
                  Technik ist nie neutral – sie begünstigt bestimmte Werte. Lightning begünstigt zunächst 
                  Geschwindigkeit und Skalierung (Wert: Effizienz). Die Gefahr ist, dass dadurch andere 
                  Werte – Dezentralisierung, Gleichheit, Privatheit – geschliffen werden.
                </p>

                <div className="space-y-3">
                  <div className="bg-white p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1" style={{color: '#000000'}}>Erfordert Aufklärung</h6>
                    <p className="text-xs" style={{color: '#000000'}}>
                      Nutzer müssen verstehen, warum es vielleicht besser ist, einen eigenen Node zu betreiben, 
                      auch wenn Custodial einfacher ist.
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1" style={{color: '#000000'}}>Entwickler-Verantwortung</h6>
                    <p className="text-xs" style={{color: '#000000'}}>
                      Entwickler müssen an Lösungen arbeiten, die Privatsphäre und Dezentralität stärken 
                      (z.B. rendezvous routing, dezentrale Channel-Funding-Pools).
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded">
                    <h6 className="font-semibold text-sm mb-1" style={{color: '#000000'}}>Gesetzgeber-Rolle</h6>
                    <p className="text-xs" style={{color: '#000000'}}>
                      Gesetzgeber müssten idealerweise den Nutzen anerkennen (z.B. finanzielle Inklusion) 
                      und massvolle Regelungen finden, statt mit dem Hammer draufzuschlagen.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-2 border-indigo-200">
                <h4 className="font-semibold text-lg mb-3" style={{color: '#000000'}}>Generationenverantwortung</h4>
                <p style={{color: '#000000'}}>
                  In der Summe zeigen die Thesen, dass Bitcoin längst nicht mehr nur ein technisches 
                  Experiment ist, sondern ein gesellschaftliches Phänomen, in dem sich Grundsatzfragen 
                  zu Freiheit, Gerechtigkeit und Macht neu stellen. Es liegt an der aktuellen Generation 
                  von Nutzern und Entscheidern – der vielleicht letzten, die Bitcoin noch in seiner rohen 
                  Form erlebt hat – die Weichen richtig zu stellen, bevor die „Lightning-native" Generation 
                  kommt und das Ergebnis als gegeben annimmt.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}