"use client";
import React from "react";
import { useEffect } from "react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any[];
  }
}

interface AdProps {
  client: string;
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
}

const Ad = ({
  client,
  slot,
  format = "auto",
  fullWidthResponsive = true,
}: AdProps) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9931033884121639";
    script.async = true;
    script.crossOrigin = "anonymous";
    document.head.appendChild(script);

    (window.adsbygoogle = window.adsbygoogle || []).push({});

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive ? "true" : "false"}
    />
  );
};

export default Ad;
