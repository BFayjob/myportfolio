export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-[70vh] flex items-center bg-gray-800 text-white"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/secret-agent-bg.jpg')" }}
      ></div>
      <div className="relative z-10 container mx-auto flex items-center">
        <div className="w-1/2">
          <img
            src="/images/profile-pic-half.png"
            alt="Boluwatife Fayjob"
            className="rounded-l-lg h-full w-full object-cover"
          />
        </div>
        <div className="w-1/2 p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Hi, my name is Boluwatife Fayjob.
          </h1>
          <p className="text-md md:text-lg">
            I am a security analyst with a passion for cloud security and
            software engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
