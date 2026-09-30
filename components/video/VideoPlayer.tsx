"use client";

import * as React from "react";
import { Icon } from "@/components/ui/Icon";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * Performance-conscious video:
 *  - poster shown immediately, no layout shift (aspect box)
 *  - src attached only when the element approaches the viewport
 *  - plays muted+looping while in view, pauses when out of view
 *  - reduced-motion users get a poster + explicit play control
 *  - optional sound toggle for narrated films
 */
export function VideoPlayer({
  src,
  poster,
  className = "",
  sound = false,
  rounded = true,
  objectPosition = "center",
}: {
  src: string;
  poster: string;
  className?: string;
  sound?: boolean;
  rounded?: boolean;
  objectPosition?: string;
}) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [ready, setReady] = React.useState(false); // src attached
  const [inView, setInView] = React.useState(false);
  const [muted, setMuted] = React.useState(true);
  const [manualPlay, setManualPlay] = React.useState(false);

  // Attach src + track visibility.
  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReady(true);
        setInView(entry.intersectionRatio > 0.35);
      },
      { threshold: [0, 0.35, 0.6] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Play / pause with visibility (unless reduced motion and not manually started).
  React.useEffect(() => {
    const v = videoRef.current;
    if (!v || !ready) return;
    const shouldPlay = (inView && !reduced) || manualPlay;
    if (shouldPlay) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView, ready, reduced, manualPlay]);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    setMuted(next);
    v.muted = next;
    if (!next) {
      setManualPlay(true);
      v.play().catch(() => {});
    }
  };

  const startManually = () => {
    setManualPlay(true);
    setReady(true);
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-full w-full overflow-hidden bg-starry-900 ${
        rounded ? "rounded-lg" : ""
      } ${className}`}
    >
      {/* Poster underlay avoids flash + covers reduced-motion state */}
      <img
        src={poster}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
      />
      {ready && (
        <video
          ref={videoRef}
          poster={poster}
          muted={muted}
          loop
          playsInline
          preload="none"
          className="relative h-full w-full object-cover"
          style={{ objectPosition }}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Reduced-motion / not-yet-playing manual control */}
      {reduced && !manualPlay && (
        <button
          onClick={startManually}
          aria-label="Play video"
          className="absolute inset-0 z-10 grid place-items-center bg-black/25 transition-colors hover:bg-black/35"
        >
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-starry">
            <Icon name="play" size={26} />
          </span>
        </button>
      )}

      {/* Sound toggle for narrated films */}
      {sound && ready && (
        <button
          onClick={toggleSound}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className="absolute bottom-4 right-4 z-10 grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          {muted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M11 5 6 9H3v6h3l5 4zM17 9l4 6M21 9l-4 6" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M11 5 6 9H3v6h3l5 4zM16 8a5 5 0 0 1 0 8M19 5a9 9 0 0 1 0 14" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}
