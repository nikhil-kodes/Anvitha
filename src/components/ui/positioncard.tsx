type ProfileCardProps = {
  image: string;
  name: string;
  role: string;
  mail: string;
  description: string;
  icon: React.ReactNode;
  side?: "left" | "right"; // default: left
};

export default function PositionCard({
  image,
  name,
  role,
  mail,
  description,
  icon,
  side = "left",
}: ProfileCardProps) {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row md:h-64">
      {/* Image Section */}
      <div
        className={`w-full md:w-1/3 h-64 md:h-auto ${
          side === "right" ? "md:order-2" : ""
        }`}
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Info Section */}
      <div className="w-full md:w-2/3 p-6 flex flex-col justify-center">
        <div className="flex items-center gap-3">
          {icon && <div className="text-blue-600 text-2xl">{icon}</div>}
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
        </div>
        <p className="text-gray-500 text-sm mt-1">{role}</p>
        <a
          href={`mailto:${mail}`}
          className="text-blue-600 hover:underline text-sm mt-2"
        >
          {mail}
        </a>
        <p className="text-gray-700 text-base mt-4 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
