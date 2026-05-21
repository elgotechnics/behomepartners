import type { ListingType } from "@/data/listings";

type IconProps = { size?: number; strokeWidth?: number };

export function MaisonIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 11.99V14.5C3 17.8 3 19.45 4.03 20.47C5.05 21.5 6.7 21.5 10 21.5H14C17.3 21.5 18.95 21.5 19.97 20.47C21 19.45 21 17.8 21 14.5V11.99C21 10.31 21 9.47 20.64 8.74C20.29 8.01 19.62 7.5 18.3 6.46L16.3 4.91C14.23 3.3 13.2 2.5 12 2.5C10.8 2.5 9.77 3.3 7.7 4.91L5.7 6.46C4.38 7.5 3.71 8.01 3.36 8.74C3 9.47 3 10.31 3 11.99Z" />
      <path d="M15 21.5V16.5C15 15.09 15 14.38 14.56 13.94C14.12 13.5 13.41 13.5 12 13.5C10.59 13.5 9.88 13.5 9.44 13.94C9 14.38 9 15.09 9 16.5V21.5" />
    </svg>
  );
}

export function AppartementIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 22V5C3 3.5 3.5 3 5 3H13C14.5 3 15 3.5 15 5V22" />
      <path d="M15 9H19C20.5 9 21 9.5 21 11V22" />
      <path d="M2 22H22" />
      <path d="M6.5 8H7.5M6.5 12H7.5M6.5 16H7.5" />
      <path d="M10.5 8H11.5M10.5 12H11.5M10.5 16H11.5" />
      <path d="M17 13H18M17 17H18" />
      <path d="M9 22V18C9 17.5 9.5 17 10 17C10.5 17 11 17.5 11 18V22" />
    </svg>
  );
}

export function TerrainIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 17l6-6 4 4 8-8" />
      <path d="M14 7h7v7" />
      <path d="M3 21h18" />
    </svg>
  );
}

export function BureauIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M14 22V8C14 5.17 14 3.76 13.12 2.88C12.24 2 10.83 2 8 2C5.17 2 3.76 2 2.88 2.88C2 3.76 2 5.17 2 8V16C2 18.83 2 20.24 2.88 21.12C3.76 22 5.17 22 8 22H14Z" />
      <path d="M6.5 11H5.5M10.5 11H9.5M6.5 7H5.5M6.5 15H5.5M10.5 7H9.5M10.5 15H9.5" />
      <path d="M18.5 15H17.5M18.5 11H17.5" />
      <path d="M18 8H14V22H18C19.89 22 20.83 22 21.41 21.41C22 20.83 22 19.89 22 18V12C22 10.11 22 9.17 21.41 8.59C20.83 8 19.89 8 18 8Z" />
    </svg>
  );
}

export function CommerceIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 10V20C2 20.5 2.5 21 3 21H21C21.5 21 22 20.5 22 20V10" />
      <path d="M2 10L4 4C4 3.5 4.5 3 5 3H19C19.5 3 20 3.5 20 4L22 10" />
      <path d="M2 10H22" />
      <path d="M7 10V8M12 10V8M17 10V8" />
      <path d="M9 21V15C9 14.5 9.5 14 10 14H14C14.5 14 15 14.5 15 15V21" />
    </svg>
  );
}

export function IndustrielIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M2 21V11L8 14V11L14 14V8L22 11V21H2Z" />
      <path d="M5 18H7M11 18H13M17 18H19" />
    </svg>
  );
}

export function GarageIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M3 21V9.5L12 4L21 9.5V21" />
      <path d="M6 21V12H18V21" />
      <path d="M6 16H18" />
      <path d="M2 21H22" />
    </svg>
  );
}

export function ImmeubleIcon({ size = 16, strokeWidth = 1.5 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M4 22V3.5C4 3 4.5 2.5 5 2.5H19C19.5 2.5 20 3 20 3.5V22" />
      <path d="M2 22H22" />
      <path d="M8 7H10M8 11H10M8 15H10" />
      <path d="M14 7H16M14 11H16M14 15H16" />
      <path d="M10 22V18C10 17.5 10.5 17 11 17H13C13.5 17 14 17.5 14 18V22" />
    </svg>
  );
}

export function iconForType(type: ListingType, size = 16): React.ReactNode {
  switch (type) {
    case "Maison":
      return <MaisonIcon size={size} />;
    case "Appartement":
      return <AppartementIcon size={size} />;
    case "Terrain":
      return <TerrainIcon size={size} />;
    case "Bureau":
      return <BureauIcon size={size} />;
    case "Commerce":
      return <CommerceIcon size={size} />;
    case "Industriel":
      return <IndustrielIcon size={size} />;
    case "Garage / parking":
      return <GarageIcon size={size} />;
    case "Immeuble de rapport":
      return <ImmeubleIcon size={size} />;
  }
}
