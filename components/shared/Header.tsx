import { ToolbarHeader } from "./ToolbarHeader";
import { Navbar } from "./Navbar";

export function Header() {
  return (
    <header className="top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <ToolbarHeader />
      <Navbar />
    </header>
  );
}
