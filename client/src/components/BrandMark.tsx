/*
  Hogar360 brand mark: a restrained 360-degree viewing cue.
  Two orbit rings and a central viewport point replace a generic initial icon.
*/
export default function BrandMark({ inverted = false }: { inverted?: boolean }) {
  const ring = inverted ? "border-[#8ce3d6]" : "border-[#008f86]";
  const inner = inverted ? "border-[#8ce3d6]/45" : "border-[#008f86]/35";
  const dot = inverted ? "bg-[#8ce3d6]" : "bg-[#008f86]";

  return (
    <span aria-hidden="true" className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full border-2 ${ring}`}>
      <span className={`absolute inset-[4px] rounded-full border ${inner}`} />
      <span className={`absolute inset-[9px] rounded-full border ${inner}`} />
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className={`absolute -right-1.5 top-1/2 h-px w-3 -translate-y-1/2 ${dot}`} />
      <span className={`absolute -top-1 left-1/2 h-2 w-px -translate-x-1/2 ${dot}`} />
    </span>
  );
}
