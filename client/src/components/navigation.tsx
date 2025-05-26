import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { FileText, Headphones, Download } from "lucide-react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <div className="text-lg font-semibold text-primary">
              Lightning-Thesen Analyse
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('abstract')}
              className="text-secondary hover:text-primary transition-colors text-sm"
            >
              Abstract
            </button>
            <button
              onClick={() => scrollToSection('theses')}
              className="text-secondary hover:text-primary transition-colors text-sm"
            >
              Thesen
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="text-secondary hover:text-primary transition-colors text-sm"
            >
              Methodik
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="text-secondary hover:text-primary transition-colors text-sm"
            >
              Literatur
            </button>
            
            {/* Download Buttons */}
            <div className="flex items-center space-x-2 border-l border-gray-200 pl-4">
              <Button 
                onClick={handlePdfDownload}
                variant="outline"
                size="sm"
                className="text-xs flex items-center gap-1 bg-red-50 hover:bg-red-100 border-red-200 text-red-700"
              >
                <FileText className="w-3 h-3" />
                PDF Thesis
              </Button>
              <Button 
                onClick={handlePodcastDownload}
                variant="outline"
                size="sm"
                className="text-xs flex items-center gap-1 bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700"
              >
                <Headphones className="w-3 h-3" />
                Podcast
              </Button>
            </div>
          </div>
          <button 
            className="md:hidden text-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection('abstract')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-academic-blue"
            >
              Abstract
            </button>
            <button
              onClick={() => scrollToSection('theses')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-academic-blue"
            >
              Thesen
            </button>
            <button
              onClick={() => scrollToSection('methodology')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-academic-blue"
            >
              Methodik
            </button>
            <button
              onClick={() => scrollToSection('references')}
              className="block w-full text-left px-3 py-2 text-gray-600 hover:text-academic-blue"
            >
              Literatur
            </button>
            
            {/* Mobile Download Buttons */}
            <div className="border-t border-gray-200 pt-2 mt-2">
              <button
                onClick={handlePdfDownload}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-red-600 hover:bg-red-50"
              >
                <FileText className="w-4 h-4" />
                PDF Thesis herunterladen
              </button>
              <button
                onClick={handlePodcastDownload}
                className="flex items-center gap-2 w-full text-left px-3 py-2 text-blue-600 hover:bg-blue-50"
              >
                <Headphones className="w-4 h-4" />
                Podcast herunterladen
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
