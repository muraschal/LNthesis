import { thesesData } from "@/lib/thesis-data";

export default function ThesisOverview() {
  return (
    <section id="theses" className="mb-16">
      <h2 className="blog-section-title">Die Sechs Lightning-Thesen</h2>
      <div className="space-y-8">
        {thesesData.map((thesis) => (
          <div key={thesis.id} className="border-l-4 border-gray-200 pl-6">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-xl font-semibold" style={{color: '#000000'}}>{thesis.title}: {thesis.subtitle}</h3>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded" style={{color: '#000000'}}>
                {thesis.category}
              </span>
            </div>
            <p className="blog-content text-base">
              {thesis.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
