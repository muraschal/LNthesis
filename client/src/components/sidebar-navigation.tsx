import { useActiveSection } from "@/hooks/use-active-section";

export default function SidebarNavigation() {
  const activeSection = useActiveSection();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'thesis-1', label: 'These 1: Layer-1 vs. Layer-2 Wert' },
    { id: 'thesis-2', label: 'These 2: Lightning-native Generation' },
    { id: 'thesis-3', label: 'These 3: Lightning-Zentralisierung' },
    { id: 'thesis-4', label: 'These 4: Parallelwelten' },
    { id: 'thesis-5', label: 'These 5: Private Lightning Islands' },
    { id: 'thesis-6', label: 'These 6: KYC-Gatekeeper' },
  ];

  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24">
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h3 className="text-lg font-semibold academic-blue mb-4">
            <i className="fas fa-list-ul mr-2"></i>Inhaltsverzeichnis
          </h3>
          <nav className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === item.id
                    ? 'text-academic-blue bg-blue-50'
                    : 'text-gray-600 hover:text-academic-blue hover:bg-blue-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold academic-blue mb-4">
            <i className="fas fa-chart-bar mr-2"></i>Studien-Kennzahlen
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Analysierte Thesen</span>
              <span className="font-semibold">6</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Dimensionen</span>
              <span className="font-semibold">4</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Literaturquellen</span>
              <span className="font-semibold">25+</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Methodik</span>
              <span className="font-semibold">MECE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
