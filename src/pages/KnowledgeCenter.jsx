import ActionSection from "../ui/ActionSection";

function KnowledgeCenter() {
  return (
    <div>
      <div className="lg-px-32 px-10 text-gray-600 my-16">
        <p className="font-bold text-center">Knowledge center</p>
        <h2 className="text-center font-bold text-2xl tracking-wide mb-5">
          Resources and insights
        </h2>
        <p className="text-center text-gray-600 mb-5">
          The latest industry news, interviews, technologies, and resources.
        </p>
      </div>
      <ActionSection />
    </div>
  );
}

export default KnowledgeCenter;
