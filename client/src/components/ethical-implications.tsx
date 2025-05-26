import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function EthicalImplications() {
  return (
    <section id="ethics" className="mb-16">
      <h2 className="text-3xl font-bold academic-blue mb-8">Ethisch-Philosophische Implikationen</h2>
      
      <div className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-6">
            Die Lightning-Thesen werfen fundamentale Fragen über Gerechtigkeit, Freiheit und 
            technologische Souveränität auf. Eine ethische Betrachtung der möglichen Entwicklungen 
            ist für das Verständnis der gesellschaftlichen Tragweite unerlässlich.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-l-4 border-blue-400">
          <CardHeader>
            <CardTitle className="text-lg academic-blue">
              <i className="fas fa-scales-balanced mr-2"></i>Gerechtigkeit und Zugang
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Digitale Divide</h4>
                <p>Eine Lightning-native Generation könnte eine neue Form der digitalen Ungleichheit schaffen. 
                Während technisch versierte Nutzer von günstigen Lightning-Transaktionen profitieren, 
                bleiben andere auf teure On-Chain-Transaktionen angewiesen.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Gleichberechtigung im Zugang</h4>
                <p>Die Frage nach fairer Verteilung von Lightning-Liquidität und Channel-Kapazitäten 
                wird zentral für die gesellschaftliche Akzeptanz des Systems.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-green-400">
          <CardHeader>
            <CardTitle className="text-lg academic-blue">
              <i className="fas fa-hand-fist mr-2"></i>Freiheit vs. Sicherheit
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Privatsphäre als Grundrecht</h4>
                <p>Die Aufspaltung in "weisses" und "schwarzes" Lightning berührt fundamentale 
                Fragen zur finanziellen Privatsphäre als demokratisches Grundrecht.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Selbstbestimmung vs. Compliance</h4>
                <p>KYC-Gatekeeper schaffen ein Spannungsfeld zwischen individueller Autonomie 
                und kollektiver Sicherheit vor Missbrauch.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card className="border-l-4 border-purple-400">
          <CardHeader>
            <CardTitle className="text-lg academic-blue">
              <i className="fas fa-crown mr-2"></i>Macht und Verantwortung
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Technologische Oligarchie</h4>
                <p>Die Konzentration auf wenige Lightning-Hubs könnte neue Machteliten schaffen, 
                die über Geldflüsse entscheiden - eine Form technokratischer Herrschaft.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Systemische Verantwortung</h4>
                <p>Betreiber kritischer Lightning-Infrastruktur tragen gesellschaftliche 
                Verantwortung, die über rein wirtschaftliche Interessen hinausgeht.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-orange-400">
          <CardHeader>
            <CardTitle className="text-lg academic-blue">
              <i className="fas fa-globe mr-2"></i>Globale Auswirkungen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <h4 className="font-semibold mb-2">Entwicklungsländer</h4>
                <p>Lightning könnte Finanzinklusion fördern, aber auch neue Abhängigkeiten 
                von westlichen Hub-Betreibern schaffen.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Währungssouveränität</h4>
                <p>Die globale Verbreitung von Bitcoin via Lightning stellt nationale 
                Geldpolitik vor fundamentale Herausforderungen.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Philosophische Reflexion */}
      <div className="bg-white rounded-xl shadow-md p-8">
        <h3 className="text-xl font-semibold academic-blue mb-6">
          <i className="fas fa-lightbulb mr-2"></i>Philosophische Reflexion
        </h3>
        
        <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-gray-300">
          <h4 className="font-semibold text-gray-800 mb-3">Rawls'sche Gerechtigkeitstheorie</h4>
          <p className="text-gray-700 mb-4">
            Aus Sicht von John Rawls' "Schleier des Nichtwissens" müssten Lightning-Entwicklungen 
            so gestaltet werden, dass sie auch den am wenigsten begünstigten Gesellschaftsschichten 
            zugutekommen. Eine reine Marktlösung könnte diesem Anspruch nicht genügen.
          </p>
          
          <h4 className="font-semibold text-gray-800 mb-3">Technologische Selbstbestimmung</h4>
          <p className="text-gray-700">
            Die Frage nach individueller vs. algorithmischer Entscheidungsfreiheit wird zentral: 
            Sollen Menschen die Komplexität von Bitcoin verstehen müssen, um es souverän nutzen zu können, 
            oder ist die Abstraktion durch Lightning ethisch vertretbar?
          </p>
        </div>
      </div>
    </section>
  );
}