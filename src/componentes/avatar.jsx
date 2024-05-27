import avatarBatman from '../imagenes/avatar-batman.png';

export function Avatar() {
  return (
    <div className="flex items-center ml-4 mt-4">
      <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden">
        <img src={avatarBatman} alt="Avatar" className="object-cover w-full h-full" />
      </div>
      <h1 className="mt-2 ml-3 lg:ml-4 text-base lg:text-lg font-bold hover:text-purple-700 transition duration-500">
        Javier Martin
      </h1>
    </div>
  );
}
