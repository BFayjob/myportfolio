import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" legacyBehavior>
          <a className="text-2xl font-bold">FAYJOB</a>
        </Link>
        <nav>
          <Link href="#about" className="ml-6">
            About
          </Link>
          <Link href="#projects" className="ml-6">
            Projects
          </Link>
          <Link href="#blog" className="ml-6">
            Blog
          </Link>
          <Link href="#contact" className="ml-6">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
