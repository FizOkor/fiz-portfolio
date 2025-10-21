"use client";

import { ExternalLink } from "lucide-react";

interface CertificationCardProps {
  initials: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
  img_src: string;
  certificateUrl?: string;
}

export function CertificationCard({
  title,
  issuer,
  date,
  img_src,
  certificateUrl,
}: CertificationCardProps) {
  return (
    <a
      href={certificateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border border-white/10 rounded-lg overflow-hidden hover:border-white/20 hover:-translate-y-2 duration-300 ease-in"
    >
      <div className={`aspect-video flex items-center justify-center relative`}>
        <img src={img_src} className="h-full w-full object-cover" />
        {certificateUrl && (
          <div className="absolute top-3 right-3 text-white/60 group-hover:text-white transition-colors">
            <ExternalLink className="w-4 h-4" />
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col justify-between">
        <h3 className="text-white font-semibold text-base mb-1 group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-white/50 text-xs mb-1">{date}</p>
        <p className="text-white/60 text-xs">{issuer}</p>
      </div>
    </a>
  );
}
