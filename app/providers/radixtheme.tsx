import { Theme } from "@radix-ui/themes";

export default function RadixThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Theme  appearance="dark" className="font-plus-jakarta-sans">
      {children}
    </Theme>
  );
}
