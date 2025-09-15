type ExecutiveMemberProps = {
  name: string;
  link?: string;
  image?: string; // optional → fallback to initials
};

export default function ExecutiveMemberCard({ name, link, image }: ExecutiveMemberProps) {
  // Function to generate initials if no image
  const getInitials = (fullName: string) => {
    const parts = fullName.trim().split(" ");
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[1][0]).toUpperCase();
  };

  return (
    <div className="w-44 sm:w-64 bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Profile Section */}
      <div className="w-full h-36 sm:h-44 flex items-center justify-center bg-gray-100">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className=" w-20 sm:w-24 h-20 sm:h-24 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-3xl">
            {getInitials(name)}
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-5 flex flex-col items-center text-center">
        <h2 className="font-semibold text-lg text-gray-900">{name}</h2>

        {/* Connect Button */}
        {link!= "" &&<a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 w-full py-2 bg-neutral-200 text-gray-800 font-medium rounded-xl shadow-sm hover:bg-blue-600 hover:text-white transition"
        >
          Connect
        </a>}
      </div>
    </div>
  );
}
