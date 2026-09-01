/*
Hogar360 brand mark: the Hogar360 logo mark, rendered as a transparent-background image
so it blends cleanly with both the light (#fdfbf7) and dark (navy) chrome surfaces.
*/
export default function BrandMark({ inverted = false }: { inverted?: boolean }) {
  return (
    <img
      src="/images/brand/logo.png"
      alt="Hogar360"
      aria-hidden="true"
      className="h-9 w-9 shrink-0 object-contain"
    />
  );
}
