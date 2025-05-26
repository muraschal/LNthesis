export default function MethodologySection() {
  return (
    <section id="methodology" className="mb-16">
      <h2 className="text-3xl font-bold academic-blue mb-8">Forschungsmethodik</h2>
      <div className="bg-white rounded-xl shadow-md p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold academic-blue mb-4">MECE-Framework</h3>
            <p className="text-gray-700 mb-4">
              Die Analyse folgt dem MECE-Prinzip (Mutually Exclusive, Collectively Exhaustive) 
              zur systematischen Strukturierung komplexer Problemstellungen.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                Monetäre Werttheorie
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                Adoptionsdynamik
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                Netzwerkstruktur
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                Regulatorische Aspekte
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold academic-blue mb-4">Analytische Ansätze</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Spieltheorie</h4>
                <p className="text-sm text-gray-600">Nash-Gleichgewichte in Netzwerkspielen</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Netzwerkanalyse</h4>
                <p className="text-sm text-gray-600">Empirische Daten zur LN-Topologie</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2">Ökonomische Theorie</h4>
                <p className="text-sm text-gray-600">Geldtheorie und Marktdynamiken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
