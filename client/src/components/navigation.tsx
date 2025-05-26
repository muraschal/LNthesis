import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handlePdfDownload = () => {
    toast({
      title: "PDF wird generiert",
      description: "Ihre Forschungsarbeit wird als PDF erstellt...",
    });
    
    // Simulate PDF generation
    setTimeout(() => {
      toast({
        title: "PDF bereit",
        description: "Die PDF-Version der Forschungsarbeit ist bereit zum Download.",
      });
    }, 2000);
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
            <Button 
              onClick={handlePdfDownload}
              variant="outline"
              size="sm"
              className="text-xs"
            >
              PDF Download
            </Button>
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
          </div>
        </div>
      )}
    </nav>
  );
}
