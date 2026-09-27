import React from "react";

interface VideoLinkProps {
  thumbnail: string;
  title: string;
  url: string;
}

export function VideoLink({ thumbnail, title, url }: VideoLinkProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block relative rounded-lg overflow-hidden my-6"
    >
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover"
      />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
        <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
          <div className="w-0 h-0 border-y-8 border-y-transparent border-l-[14px] border-l-black ml-1" />
        </div>
      </div>
      <p className="absolute bottom-3 left-3 text-white text-sm font-medium">
        {title}
      </p>
    </a>
  );
}
