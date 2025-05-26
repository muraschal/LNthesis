import { detailedAnalysisData } from "@/lib/thesis-data";

export default function DetailedAnalysis() {
  return (
    <section id="analysis" className="mb-16">
      <h2 className="blog-section-title">Detaillierte Analyse</h2>
      
      {detailedAnalysisData.map((analysis) => (
        <article key={analysis.id} id={analysis.id} className="mb-12">
          <div className="mb-6">
            <span className="text-xs bg-gray-100 px-2 py-1 rounded mr-3" style={{color: '#000000'}}>
              {analysis.tag}
            </span>
            <h3 className="blog-content text-xl font-semibold inline" style={{color: '#000000'}}>{analysis.title}</h3>
          </div>
          
          <div className="blog-content">
            <p className="text-lg mb-6">
              {analysis.introduction}
            </p>
            
            {analysis.sections.map((section, index) => (
              <div key={index} className="mb-6">
                <h4>{section.title}</h4>
                <p>{section.content}</p>
                {section.points && (
                  <ul>
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <strong>{point.title}:</strong> {point.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {analysis.highlight && (
              <div className="border-l-4 border-gray-300 pl-6 my-6 bg-gray-50 p-4">
                <h4 className="font-semibold mb-2">
                  {analysis.highlight.title}
                </h4>
                <p>
                  {analysis.highlight.content}
                </p>
              </div>
            )}
          </div>
        </article>
      ))}

      {/* Network Analysis Visualization */}
      <div id="thesis-3" className="bg-white rounded-xl shadow-md p-8 mb-8">
        <div className="flex items-center mb-6">
          <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
            These 3 & 5
          </div>
          <h3 className="text-2xl font-bold" style={{color: '#000000'}}>Netzwerkanalyse: Struktur und Zentralisierung</h3>
        </div>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6" style={{color: '#000000'}}>
            Das Lightning Network zeigt trotz seines dezentralen Anspruchs bereits ausgeprägte 
            Zentralisierungstendenzen und Hub-Bildung.
          </p>
          
          {/* Network Visualization Placeholder */}
          <div className="bg-gray-100 rounded-lg p-8 mb-6 text-center">
            <i className="fas fa-project-diagram text-6xl text-gray-400 mb-4"></i>
            <p style={{color: '#000000'}}>Lightning Network Topologie</p>
            <p className="text-sm" style={{color: '#000000'}}>Core-Periphery-Struktur mit Hub-Knoten</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="bg-red-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-600">~0.88</div>
              <div className="text-sm text-red-800">Gini-Koeffizient</div>
              <div className="text-xs" style={{color: '#000000'}}>Netzwerkverteilung</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">80%</div>
              <div className="text-sm text-blue-800">Liquidität</div>
              <div className="text-xs" style={{color: '#000000'}}>in 10% der Nodes</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-600">Rich-get-richer</div>
              <div className="text-sm text-green-800">Effekt</div>
              <div className="text-xs" style={{color: '#000000'}}>Netzwerkwachstum</div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
            <h5 className="font-semibold text-yellow-900 mb-2">Spieltheoretische Erklärung</h5>
            <p style={{color: '#000000'}}>
              Hub-Bildung als Nash-Gleichgewicht: Jeder Node entscheidet rational, 
              mit wem er Kanäle öffnet, um Kosten zu minimieren und Routing Fees zu maximieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
