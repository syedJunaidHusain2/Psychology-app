import { usePathname } from "next/navigation";

export function usePath() {
  const location = usePathname();
  return location;
}
