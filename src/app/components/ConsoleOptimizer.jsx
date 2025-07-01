"use client";

import { useEffect } from "react";

export function ConsoleOptimizer() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      // Suppress specific warnings that are not critical in development
      const originalWarn = console.warn;
      const originalError = console.error;

      console.warn = (...args) => {
        const message = args[0];

        // Suppress multiple GoTrueClient warnings
        if (
          typeof message === "string" &&
          message.includes("Multiple GoTrueClient instances detected")
        ) {
          return;
        }

        // Suppress lightGallery license warnings in development
        if (
          typeof message === "string" &&
          message.includes(
            "lightGallery: 0000-0000-000-0000 license key is not valid"
          )
        ) {
          return;
        }

        // Suppress Cloudflare cookie warnings
        if (
          typeof message === "string" &&
          message.includes('Cookie "__cf_bm" has been rejected')
        ) {
          return;
        }

        // Suppress font preload warnings
        if (
          typeof message === "string" &&
          message.includes("preloaded with link preload was not used")
        ) {
          return;
        }

        originalWarn.apply(console, args);
      };

      console.error = (...args) => {
        const message = args[0];

        // Suppress source map errors in development
        if (
          typeof message === "string" &&
          message.includes("Source map error")
        ) {
          return;
        }

        originalError.apply(console, args);
      };
    }
  }, []);

  return null;
}
