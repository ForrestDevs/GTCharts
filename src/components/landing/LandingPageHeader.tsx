// Forrest Devs
// GT_CHARTS_V1.0
// FEB 14 2024

'use client';

import { Icons } from '@/components/custom/Icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';

const LandingPageHeader = () => {
  const { data: session } = useSession();
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const genericHamburgerLine = `h-0.5 w-7 my-1 rounded-full bg-foreground transition ease transform duration-300`;

  return (
    <header className="fixed left-0 top-0 z-10 w-full px-5 antialiased">
      <div className="container mt-4 flex w-full flex-col items-center justify-between rounded-lg border border-slate-500/40 backdrop-blur">
        <div className="flex w-full flex-row items-center justify-between">
          {/* <Link href={'/'}>
            <Icons.logoLight />
            <Icons.logoDark />
          </Link> */}

          <nav className="absolute left-1/2 -translate-x-1/2  px-3 py-2">
            <ul className="hidden items-center justify-center lg:flex">
              <li className="mx-3">
                <Link href={'/#features'} aria-label="Features">
                  <p className="font-bold transition duration-300 ease-in hover:text-muted-foreground">
                    Features
                  </p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href={'/#about'} aria-label="Features">
                  <p className="font-bold transition duration-300 ease-in hover:text-muted-foreground">
                    About
                  </p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href={'/#pricing'} aria-label="Features">
                  <p className="font-bold transition duration-300 ease-in hover:text-muted-foreground">
                    Pricing
                  </p>
                </Link>
              </li>
              <li className="mx-3">
                <Link href={'/#faq'} aria-label="Features">
                  <p className="font-bold transition duration-300 ease-in hover:text-muted-foreground">
                    FAQ
                  </p>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-between gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            >
              <Icons.sun className="rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Icons.moon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            {session ? (
              <Link
                href={'/dashboard/shed'}
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                Open Shed
              </Link>
            ) : (
              <Link
                href={'/login'}
                className={buttonVariants({ variant: 'ghost', size: 'sm' })}
              >
                Sign Up
              </Link>
            )}
            <button
              className="group flex h-12 w-12 flex-col items-center justify-center lg:hidden"
              onClick={handleToggleMenu}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <div
                className={`${genericHamburgerLine} ${
                  open
                    ? 'translate-y-2.5 rotate-45 opacity-50 group-hover:opacity-100'
                    : ' opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  open ? 'opacity-0' : 'opacity-50 group-hover:opacity-100'
                }`}
              />
              <div
                className={`${genericHamburgerLine} ${
                  open
                    ? '-translate-y-2.5 -rotate-45 opacity-50 group-hover:opacity-100'
                    : 'opacity-50 group-hover:opacity-100'
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`w-full duration-300 ease-in transition-height lg:hidden ${
            open ? 'h-fit' : 'h-0'
          }`}
        >
          <nav className={`w-full  ${open ? 'flex' : 'hidden'}`}>
            <ul className="mt-6 flex w-full flex-col items-center justify-between gap-6 border-t border-slate-500/40 py-4">
              <li>
                <Link
                  href="/#features"
                  onClick={handleToggleMenu}
                  className="w-full font-bold transition duration-300 ease-in hover:text-muted-foreground"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  onClick={handleToggleMenu}
                  className="w-full font-bold transition duration-300 ease-in hover:text-muted-foreground"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  onClick={handleToggleMenu}
                  className="w-full font-bold transition duration-300 ease-in hover:text-muted-foreground"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  onClick={handleToggleMenu}
                  className="w-full font-bold transition duration-300 ease-in hover:text-muted-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default LandingPageHeader;