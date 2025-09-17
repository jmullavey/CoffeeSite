// VisitMap.tsx
// Renders Google Map centered on business coords with AdvancedMarkerElement
/// <reference types="google.maps" />
import { useEffect, useRef } from "react";

const DEFAULT = { lat: 40.123456, lng: -111.654321 };
const DEFAULT_ZOOM = 14;
const apiKey = import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const mapId = import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID;

export default function VisitMap() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: google.maps.Map | null = null;
    let canceled = false;

    async function init() {
      if (!apiKey) {
        console.error("Missing NEXT_PUBLIC_GOOGLE_MAPS_API_KEY");
        return;
      }
      // Masked key length for sanity
      console.log('Maps key present:', apiKey ? apiKey.length : 0);

      const { Loader } = await import("@googlemaps/js-api-loader");
      const loader = new Loader({
        apiKey,
        version: "weekly",
        libraries: ["marker"],
      });
      await loader.load();

      // Import libraries (recommended pattern)
      const { Map } = (await (window as any).google.maps.importLibrary("maps")) as google.maps.MapsLibrary;
      const { AdvancedMarkerElement } = (await (window as any).google.maps.importLibrary("marker")) as google.maps.MarkerLibrary;

      if (canceled || !ref.current) return;

      const mapOptions: google.maps.MapOptions = {
        center: DEFAULT,
        zoom: DEFAULT_ZOOM,
        ...(mapId ? { mapId } : {}),
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
      };

      map = new Map(ref.current, mapOptions);

      new AdvancedMarkerElement({
        map,
        position: DEFAULT,
        title: "Our Location",
      });
    }

    init();
    return () => {
      canceled = true;
    };
  }, []);

  if (!apiKey) {
    return (
      <div style={{ minHeight: 360, width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span className="text-red-600">Google Maps API key missing. Please set NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.</span>
      </div>
    );
  }

  return <div ref={ref} style={{ minHeight: 360, width: "100%" }} />;
}
