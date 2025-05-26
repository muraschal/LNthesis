import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import TableOfContents from "@/components/table-of-contents";
import CompleteThesis from "@/components/complete-thesis";
import CompleteThesisExtended from "@/components/complete-thesis-extended";
import CompleteThesisFinal from "@/components/complete-thesis-final";
import CompleteThesisConclusion from "@/components/complete-thesis-conclusion";
import ThesisOverview from "@/components/thesis-overview";
import DetailedAnalysis from "@/components/detailed-analysis";
import MethodologySection from "@/components/methodology-section";
import SearchSection from "@/components/search-section";
import ScenarioAnalysis from "@/components/scenario-analysis";
import EthicalImplications from "@/components/ethical-implications";
import ReferencesSection from "@/components/references-section";
import SidebarNavigation from "@/components/sidebar-navigation";

export default function Home() {
  return (
    <div className="font-sans bg-white text-primary min-h-screen">
      <Navigation />
      <HeroSection />
      
      {/* Abstract Section */}
      <section id="abstract" className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="blog-section-title">Abstract</h2>
          <div className="blog-content border-l-4 border-gray-200 pl-6">
            <p>
              Die Bitcoin-Community diskutiert zunehmend die Zukunft des Lightning Network (LN) – einem zweiten 
              Protokoll-Layer auf Bitcoin – und damit verbundene kühne Thesen. Diese Forschungsarbeit untersucht 
              sechs „steile Thesen" mittels einer multidimensionalen Analyse, die ökonomische, technologische 
              und regulatorische Aspekte umfasst.
            </p>
            <p>
              Unter Anwendung des MECE-Frameworks (Mutually Exclusive, Collectively Exhaustive) werden 
              Hypothesen zu Wertstrukturen, Adoptionsdynamik, Netzwerkzentralisierung und regulatorischen 
              Eingriffen systematisch analysiert. Die Ergebnisse zeigen komplexe Interdependenzen zwischen 
              technologischer Innovation und ökonomischen Anreizsystemen auf.
            </p>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <TableOfContents />
      </div>

      {/* Main Content - Vollständige 22-seitige Lightning Network Thesis */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <CompleteThesis />
        <CompleteThesisExtended />
        <CompleteThesisFinal />
        <CompleteThesisConclusion />
        
        {/* Ergänzende Analysen */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <h2 className="text-2xl font-bold mb-8" style={{color: '#000000'}}>Ergänzende Analysen und Vertiefungen</h2>
          <ThesisOverview />
          <DetailedAnalysis />
          <MethodologySection />
          <ScenarioAnalysis />
          <EthicalImplications />
          <SearchSection />
        </div>
      </main>

      <ReferencesSection />

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-secondary">
              © 2024 Lightning-Thesen Analyse. Verfügbar unter Creative Commons Lizenz.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
