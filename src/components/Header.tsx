const Header = () => {
  return (
    <div className="HeaderDiv flex justify-center mb-10">
      <div className="Header  max-w-screen-2xl flex m-1  rounded-lg border-2 border-white text-neon-teal bg-neon-darkblue mb-4">
        <div className="Header-Items text-center rounded-lg overflow-hidden">
          <h1 className=" text-white whitespace-nowrap  text-3xl m-4">
            Projects Requiring Database Setup
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
