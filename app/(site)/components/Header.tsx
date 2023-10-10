import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between flex-col md:flex-row">
      <Link href="/" className="text-lg lowercase font-bold border-b">
        repetition
      </Link>

      <div className="flex items-center gap-3">
        {/* {pages.map((page) => {
          return (
            <Link
              key={page._id}
              href={`/${page.slug}`}
              className="hover:underline text-sm uppercase"
            >
              {page.title}
            </Link>
          );
        })} */}
        <Link href="/about" className="hover:underline text-sm lowercase">
          about
        </Link>
        <Link href="/audio" className="hover:underline text-sm lowercase">
          audio
        </Link>
        <Link href="/releases" className="hover:underline text-sm lowercase">
          releases
        </Link>
        <Link href="contact" className="hover:underline text-sm lowercase">
          contact
        </Link>
      </div>
    </header>
  );
};

export default Header;
