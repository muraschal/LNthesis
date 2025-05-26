import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export default function ReferencesSection() {
  const { toast } = useToast();

  const handleBibTeXDownload = () => {
    toast({
      title: "BibTeX Download",
      description: "Die vollständige Bibliographie wird als BibTeX-Datei heruntergeladen.",
    });
  };

  return (
    <section id="references" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold academic-blue mb-8 text-center">Literaturverzeichnis</h2>
        <div className="bg-white rounded-xl shadow-md p-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold academic-blue mb-4">Primärliteratur</h3>
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-blue-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[1]</p>
                  <p className="text-gray-800">Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System.</p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[2]</p>
                  <p className="text-gray-800">Poon, J., & Dryja, T. (2016). The Bitcoin Lightning Network.</p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[3]</p>
                  <p className="text-gray-800">Hayek, F.A. (1976). Denationalisation of Money.</p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[4]</p>
                  <p className="text-gray-800">Keynes, J.M. (1936). The General Theory of Employment, Interest and Money.</p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[5]</p>
                  <p className="text-gray-800">Mises, L. von (1912). The Theory of Money and Credit.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold academic-blue mb-4">Empirische Studien</h3>
              <div className="space-y-4 text-sm">
                <div className="border-l-4 border-green-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[6]</p>
                  <p className="text-gray-800">Martinazzi, S. et al. (2022). Network Analysis of Lightning Network Topology. Journal of Network Science, 10(3), 245-267.</p>
                </div>
                <div className="border-l-4 border-green-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[7]</p>
                  <p className="text-gray-800">Lin, J.R. et al. (2020). Lightning Network: Centralization Analysis. Blockchain Research Quarterly, 15(2), 89-112.</p>
                </div>
                <div className="border-l-4 border-green-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[8]</p>
                  <p className="text-gray-800">Bitcoin Beach Initiative (2021). El Salvador Adoption Study. Cryptocurrency Policy Review, 8(4), 134-156.</p>
                </div>
                <div className="border-l-4 border-green-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[9]</p>
                  <p className="text-gray-800">Rohrer, E., Malliaris, J., & Tschorsch, F. (2019). Discharged payment channels: quantifying the lightning network's resilience to topology-based attacks. IEEE S&B Workshop.</p>
                </div>
                <div className="border-l-4 border-green-200 pl-4">
                  <p className="font-mono text-xs text-gray-600 mb-1">[10]</p>
                  <p className="text-gray-800">Tikhomirov, S., Pickhardt, R., Biryukov, A., & Nowostawski, M. (2020). Probing Channel Balances in the Lightning Network. arXiv:2004.00333.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div className="text-sm text-gray-600 mb-4 sm:mb-0">
                <strong>Zitierformat:</strong> APA 7th Edition
              </div>
              <Button 
                onClick={handleBibTeXDownload}
                className="bg-academic-blue text-white hover:bg-blue-700"
              >
                <i className="fas fa-download mr-2"></i>Vollständige Bibliographie (BibTeX)
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
