import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ImageLink from "../ui/imageLink";

const MobileNav = () => {
  return (
    <header className="header">
      <ImageLink
        src="/assets/images/logo-text.svg"
        href="/"
        width={180}
        height={28}
        alt="logo"
        className="flex items-center gap-2 md:py-2"
      />
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default MobileNav;
