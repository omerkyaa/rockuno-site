"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 pb-10">
      <div className="flex flex-col justify-between gap-6 rounded-3xl rockuno-border bg-white/60 px-6 py-6 text-sm text-rockuno-ink md:flex-row md:items-center dark:bg-white/5 dark:text-white">
        <div className="flex items-center gap-3">
          <Image src="/logo-icon.png" alt="Rockuno" width={28} height={28} className="rounded-lg" />
          <div>
            <span className="block">© {new Date().getFullYear()} Rockuno. All rights reserved.</span>
            <span className="flex items-center gap-1.5 mt-1 text-xs text-rockuno-ink dark:text-white">
              <MapPin className="h-3 w-3" />
              Germany / EU
            </span>
          </div>
        </div>
        <div className="flex flex-wrap gap-4">
          <a className="hover:opacity-70 transition" href="/imprint">Imprint</a>
          <a className="hover:opacity-70 transition" href="/privacy">Privacy</a>
          <a className="hover:opacity-70 transition" href="/terms">Terms of Service</a>
          <a className="hover:opacity-70 transition" href="/cookies">Cookie Policy</a>
          <a className="hover:opacity-70 transition" href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}
