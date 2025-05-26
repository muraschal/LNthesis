import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CompleteThesis() {
  return (
    <div className="space-y-12">
      {/* Einleitung */}
      <section id="complete-introduction" className="mb-16">
        <h2 className="text-3xl font-bold mb-8" style={{color: '#000000'}}>
          Multidimensionale Analyse der „Steilen Lightning-Thesen"
        </h2>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>Einleitung: Problemstellung und Hypothesen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <p>
                Die Bitcoin-Community diskutiert zunehmend die Zukunft des Lightning Network (LN) – einem zweiten 
                Protokoll-Layer auf Bitcoin – und damit verbundene kühne Thesen. In der vorliegenden Analyse werden 
                sechs „steile Thesen" untersucht, die in einer Grafik (HWZ, 2023) formuliert wurden.
              </p>
              
              <div className="grid gap-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Die sechs Thesen:</h4>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">These 1</Badge>
                    <div>
                      <h5 className="font-semibold" style={{color: '#000000'}}>L1 vs. L2</h5>
                      <p className="text-sm">Layer-1-Bitcoin (On-Chain) wird langfristig wertvoller sein als Layer-2-Bitcoin (im Lightning-Netzwerk).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">These 2</Badge>
                    <div>
                      <h5 className="font-semibold" style={{color: '#000000'}}>Lightning-native Generation</h5>
                      <p className="text-sm">Zukünftige Generationen werden Bitcoin nur noch via Lightning nutzen; On-Chain-Transaktionen bleiben ein teures Luxusgut.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">These 3</Badge>
                    <div>
                      <h5 className="font-semibold" style={{color: '#000000'}}>Lightning-Zentralisierung</h5>
                      <p className="text-sm">Lightning führt zwangsläufig zu neuen Zentralisierungstendenzen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">These 4</Badge>
                    <div>
                      <h5 className="font-semibold" style={{color: '#000000'}}>Parallelwelten</h5>
                      <p className="text-sm">Es entstehen parallele Lightning-Welten: ein reguliertes "weisses" Netzwerk und ein anonymes "schwarzes" Netzwerk.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">These 5</Badge>
                    <div>
                      <h5 className="font-semibold" style={{color: '#000000'}}>Private Lightning Islands</h5>
                      <p className="text-sm">Unternehmen werden isolierte, private Lightning-Netzwerke („Inseln") schaffen.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="mt-1">These 6</Badge>
                    <div>
                      <h5 className="font-semibold" style={{color: '#000000'}}>KYC-Gatekeeper</h5>
                      <p className="text-sm">Brücken zwischen Layer 1 und Lightning (Channel-Eröffnungen/Schliessungen) unterliegen künftig regulatorischer Kontrolle (KYC).</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{color: '#000000'}}>Problemstellung</h4>
                <p className="text-sm" style={{color: '#000000'}}>
                  Diese Thesen implizieren gravierende Veränderungen für Bitcoins Ökosystem, die interdisziplinär zu 
                  beleuchten sind. Es stellen sich Fragen nach der künftigen Wertestruktur von Basis- und Zweitschicht-Coins, 
                  der Nutzung durch kommende Generationen, den Netzwerkstrukturen (Dezentralität vs. Zentralisierung), 
                  dem Einfluss staatlicher Regulierung sowie den systemischen Folgen solcher Entwicklungen.
                </p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{color: '#000000'}}>MECE-Struktur der Analyse</h4>
                <p className="text-sm" style={{color: '#000000'}}>
                  Die Analyse gliedert sich in klar voneinander abgegrenzte Dimensionen, die zusammen alle relevanten 
                  Aspekte abdecken. Zunächst werden die monetäre Werttheorie (These 1) und die Adoptionsdynamik (These 2) 
                  untersucht. Anschliessend folgt eine Analyse der Netzwerkstruktur und Zentralisierung (These 3 und 5) 
                  sowie der Auswirkungen von Regulierung und Parallelbildung (These 4 und 6).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Werttheoretische Perspektive */}
      <section id="werttheorie" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>Werttheoretische Perspektive: Layer 1 vs. Layer 2 Bitcoin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-semibold mb-2" style={{color: '#000000'}}>Hypothese 1</h4>
                <p className="text-sm">On-Chain-Bitcoin (Layer 1) könnte langfristig einen höheren Wert repräsentieren als Lightning-Bitcoin (Layer 2).</p>
              </div>
              
              <p>
                Diese These berührt das ökonomische Konzept der Geldhierarchie: analog zum Goldstandard (Basisgeld vs. 
                umlaufende Geldzertifikate) liesse sich Bitcoin auf Layer 1 als Basisgeld verstehen, während 
                Lightning-Transaktionen eine Art zweite Geldschicht darstellen.
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Historische Parallelen</h4>
                <p>
                  Historisch waren physisches Gold oder Zentralbankreserven wertvoller und vertrauenswürdiger als 
                  darauf basierende Banknoten – zumindest in Krisenzeiten. So führte etwa 1933 die Aufhebung der 
                  Goldeinlösbarkeit des US-Dollars (durch Präsident Roosevelt) dazu, dass physisches Gold plötzlich 
                  deutlich höher bewertet wurde als der offizielle Dollarpreis.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Wert und Vertrauen</h4>
                <p>
                  Im Normalfall sind 1 BTC auf Layer 1 und 1 BTC auf Layer 2 ökonomisch identisch, da Lightning-Bitcoin 
                  durch einen On-Chain-Channel vollständig gedeckt ist (keine Teilreserve, sondern „voll reserviertes" System). 
                  Das Lightning Network fügt Bitcoin eine Zeit- und Liquiditätskomponente hinzu, aber es schöpft keine 
                  zusätzlichen Coins.
                </p>

                <div className="grid gap-4 mt-4">
                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Verfügbarkeit und Gebühren</h5>
                    <p className="text-sm">
                      Wenn On-Chain-Transaktionen zum „Luxus" werden (hohe Gebühren, knapper Blockspace), könnten 
                      On-Chain-Coins einen Knappheitsaufschlag erhalten. Ähnlich wie grössere Goldbarren geringere 
                      Liquidität aber evtl. Sammlerwert haben.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Vertrauensrisiko und Greshamsches Gesetz</h5>
                    <p className="text-sm">
                      Sollte Lightning im Alltag dominieren, könnten Leute geneigt sein, „gutes Geld" (sicheres On-Chain-BTC) 
                      zu behalten und „schlechteres Geld" (LN-BTC mit potenziellen Einschränkungen) auszugeben.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Konvertibilität und Liquiditätspräferenz</h5>
                    <p className="text-sm">
                      Ludwig von Mises' Regressionstheorem zeigt, dass Geldwert auf dem Vertrauen in letztendliche 
                      Konvertibilität in ein wertvolles Gut basiert. Bitcoin auf Layer 2 ist jederzeit on-chain einlösbar, 
                      solange die Kanäle offen sind und das Netzwerk funktioniert.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{color: '#000000'}}>Hayeks Theorie der Entnationalisierung</h4>
                <p className="text-sm" style={{color: '#000000'}}>
                  In einem Wettbewerb der Geldformen überleben die stabilsten. Sollte LN-Bitcoin durch zentrale Eingriffe 
                  an Wertstabilität einbüssen, könnte On-Chain-Bitcoin als ultimative Wertbasis triumphieren – ähnlich 
                  einem Goldstandard, bei dem das Publikum letztlich zum stabilsten Wertträger (Gold selbst) flüchtet.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{color: '#000000'}}>Fazit zu These 1</h4>
                <p className="text-sm" style={{color: '#000000'}}>
                  Im Idealfall bleibt 1 BTC = 1 BTC, egal auf welcher Schicht – das Lightning Network fungiert als 
                  Transaktionsmedium ohne eigenen Wechselkurs. Sollte jedoch Vertrauen oder Zugänglichkeit von Layer 2 
                  leiden, könnte Layer-1-BTC einen Wertpremium entwickeln. Insbesondere Black-Swan-Events könnten 
                  kurzfristig On-Chain-Bitcoin bevorzugt werden lassen.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Adoptionsdynamik */}
      <section id="adoptionsdynamik" className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle style={{color: '#000000'}}>Adoptionsdynamik: Die Lightning-native Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6" style={{color: '#000000'}}>
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-semibold mb-2" style={{color: '#000000'}}>Hypothese 2</h4>
                <p className="text-sm">
                  Zukünftige Generationen werden Bitcoin vornehmlich über das Lightning Network kennenlernen und nutzen, 
                  während direkte On-Chain-Nutzung zum teuren Nischenprodukt wird.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Generationenwechsel und Technologie</h4>
                <p>
                  Historisch gibt es zahlreiche Beispiele für Technologiesprünge zwischen Generationen. Jüngere Menschen 
                  wachsen oft mit vereinfachenden Abstraktionsschichten auf, ohne die „Basistechnologie" direkt zu nutzen.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded text-center">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Musik</h5>
                    <p className="text-sm">Streaming vs. physische Tonträger</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded text-center">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Zahlung</h5>
                    <p className="text-sm">Mobile Payment vs. Bargeld</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded text-center">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Internet</h5>
                    <p className="text-sm">Apps vs. Protokolle</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>Empirische Indikatoren</h4>
                <p>
                  Erste Anzeichen für diese Entwicklung finden sich bereits. In El Salvador, wo Bitcoin 2021 gesetzliches 
                  Zahlungsmittel wurde, benutzten Millionen Bürger auf einmal Bitcoin – fast ausschliesslich via 
                  Lightning-fähiger Wallets (z.B. Chivo Wallet).
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>El Salvador</h5>
                    <p className="text-sm">Mehr Bitcoin-Wallets als Bankkonten nach einem Monat</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded">
                    <h5 className="font-semibold mb-2" style={{color: '#000000'}}>CoinGate</h5>
                    <p className="text-sm">Verdoppelung des Lightning-Transaktionsanteils 2023</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-lg" style={{color: '#000000'}}>On-Chain als Luxus</h4>
                <p>
                  Bitcoins Blockspace ist begrenzt und dürfte bei weltweiter Adoption sehr begehrt und teuer sein. 
                  Bereits während Hochphasen (etwa 2017 oder 2021) stiegen Gebühren auf zig Dollar pro Transaktion.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded">
                  <h5 className="font-semibold mb-2" style={{color: '#000000'}}>Historische Analogie: Goldstandard</h5>
                  <p className="text-sm" style={{color: '#000000'}}>
                    Banknoten für tägliche Zahlungen, Goldabhebungen nur in Ausnahmefällen. Diese waren teuer 
                    (Lagergebühren, Prägekosten) und tatsächlich ein „Luxus", den man nur in Krisen oder für 
                    grosse internationale Abrechnungen in Anspruch nahm.
                  </p>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3" style={{color: '#000000'}}>Keynesianische Perspektive</h4>
                <p className="text-sm" style={{color: '#000000'}}>
                  Bitcoin nähert sich mit LN dem Ideal des Umlaufmittels an. Keynes betonte die Wichtigkeit der 
                  Zirkulation des Geldes (hohe Umlaufgeschwindigkeit) für eine florierende Wirtschaft. Das Lightning 
                  Network ermöglicht Bitcoin-Transaktionen in hoher Frequenz und kleinem Wert.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}