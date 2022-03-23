import Link from "next/link";
import Router, { useRouter } from "next/router";

export default function Header() {
  return (
    <div>
      <header className="text-gray-600 body-font bg-blue-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={'/'} passHref>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="ml-6 text-xl text-white font-bold">まるやきブログ</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={'/profile'} passHref>
              <a className="mr-5 text-white hover:text-gray-900">profile</a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  )
}
