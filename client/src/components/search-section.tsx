import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/hooks/use-search";

export default function SearchSection() {
  const { searchTerm, setSearchTerm, searchResults, popularTerms } = useSearch();

  const handleSearchTermClick = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <section className="mb-16">
      <div className="bg-white rounded-xl shadow-md p-8">
        <h3 className="text-xl font-semibold academic-blue mb-4">
          <i className="fas fa-search mr-2"></i>Durchsuchen Sie die Forschungsarbeit
        </h3>
        <div className="relative">
          <Input
            type="text"
            placeholder="Suchen Sie nach Begriffen, Thesen oder Konzepten..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-accent-blue"
          />
          <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Beliebte Suchbegriffe:</span>
          {popularTerms.map((term) => (
            <Button
              key={term}
              variant="secondary"
              size="sm"
              onClick={() => handleSearchTermClick(term)}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs hover:bg-blue-200 transition-colors"
            >
              {term}
            </Button>
          ))}
        </div>

        {searchTerm && searchResults.length > 0 && (
          <div className="mt-6 border-t pt-6">
            <h4 className="font-semibold text-gray-800 mb-4">Suchergebnisse ({searchResults.length})</h4>
            <div className="space-y-3">
              {searchResults.map((result, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="text-sm font-medium text-academic-blue mb-1">{result.section}</div>
                  <div className="text-sm text-gray-700">{result.content}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {searchTerm && searchResults.length === 0 && (
          <div className="mt-6 border-t pt-6">
            <p className="text-gray-600">Keine Ergebnisse für "{searchTerm}" gefunden.</p>
          </div>
        )}
      </div>
    </section>
  );
}
