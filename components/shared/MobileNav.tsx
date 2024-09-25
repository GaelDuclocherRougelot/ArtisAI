"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import ImageLink from "../ui/imageLink";

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <header className="header">
      <ImageLink
        src="/assets/images/logo-text.png"
        href="/"
        width={180}
        height={28}
        alt="logo"
        className="flex items-center gap-2 md:py-2"
      />

      <nav className="flex gap-2">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <Sheet>
          <SheetTrigger>
            <Image
              src="/assets/icons/menu.svg"
              width={32}
              height={32}
              className="cursor-pointer"
              alt="icon"
            />
          </SheetTrigger>
          <SheetContent className="sheet-content sm:w-64">
            <>
              <Image
                src="/assets/images/logo-text.png"
                width={152}
                height={23}
                alt="logo"
              />
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      key={link.route}
                      className={`${
                        isActive && "gradient-text"
                      } p-18 flex whitespace-nowrap text-dark-700`}
                    >
                      <Link
                        href={link.route}
                        className="sidebar-link cursor-pointer"
                      >
                        <Image
                          src={link.icon}
                          width={24}
                          height={24}
                          alt="icon"
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </>
          </SheetContent>
        </Sheet>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
