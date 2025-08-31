type ProfileCardProps = {
  name?: string;
  role?: string;
  image?: string;
  link?: string;
};

export default function ProfileCard({ name, role, image, link }: ProfileCardProps) {
  return (
    <div className="w-44 sm:w-64 bg-white rounded-3xl shadow-lg overflow-hidden">
      {/* Profile Image */}
      {image && (
        <div className="w-full h-52 sm:h-60 overflow-hidden">
          <img
            src={image}
            alt={name || "Profile"}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Info Section */}
      {(name || role || link) && (
        <div className="p-5 flex flex-col items-center text-center">
          {name && <h2 className="font-semibold text-lg text-gray-900">{name}</h2>}

          {role && (
            <p className="text-gray-500 text-sm mt-1 relative">
              {role}
              <div className="absolute bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-sky-600 to-transparent"></div>
            </p>
          )}

          {link && (
            <a
              href={link}
              target="_blank"
              className="mt-4 w-full py-2 bg-neutral-200 text-gray-800 font-medium rounded-xl shadow-sm hover:bg-blue-600 hover:text-white transition"
            >
              Connect
            </a>
          )}
        </div>
      )}
    </div>
  );
}
