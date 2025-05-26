import { Button } from "@/components/ui/button";
import { FileText, Headphones, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const { toast } = useToast();

  const handlePdfDownload = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Lightning_Network_Thesis.pdf';
    link.download = 'Lightning_Network_Thesis.pdf';
    link.click();
    
    toast({
      title: "PDF Download gestartet",
      description: "Die Lightning Network Thesis wird heruntergeladen.",
    });
  };

  const handlePodcastDownload = () => {
    const link = document.createElement('a');
    link.href = '/attached_assets/Lightning_Network_Thesis_Podcast.wav';
    link.download = 'Lightning_Network_Thesis_Podcast.wav';
    link.click();
    
    toast({
      title: "Podcast Download gestartet",
      description: "Der Lightning Network Thesis Podcast wird heruntergeladen.",
    });
  };

  return (
    <header className="bg-white py-16 border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="blog-title">
            Multidimensionale Analyse der „Steilen Lightning-Thesen"
          </h1>
          <p className="blog-subtitle max-w-3xl mx-auto">
            Eine umfassende wissenschaftliche Untersuchung der Bitcoin Lightning Network Hypothesen 
            und deren Auswirkungen auf das dezentrale Ökosystem
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm blog-meta mb-8">
            <span>Forschungsbereich: Kryptowährung & Blockchain</span>
            <span>•</span>
            <span>Methodik: MECE-Framework</span>
            <span>•</span>
            <span>6 Hauptthesen</span>
          </div>

          {/* Prominent Download Section */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8 border border-blue-200">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              📚 Vollständige Forschungsarbeit verfügbar
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={handlePdfDownload}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3"
                size="lg"
              >
                <FileText className="w-5 h-5" />
                PDF Thesis herunterladen
                <Download className="w-4 h-4 ml-1" />
              </Button>
              <Button 
                onClick={handlePodcastDownload}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                size="lg"
              >
                <Headphones className="w-5 h-5" />
                Podcast anhören
                <Download className="w-4 h-4 ml-1" />
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Verfügbar als PDF-Dokument (369 KB) und Audio-Podcast (21 MB)
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
