import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Container from "./Container";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <header className="mt-8 mb-12">
        <div className="flex justify-between items-center gap-4">
          <p className="font-bold">
            <Link href={"/dashboard"}>Invoiced</Link>
          </p>
          <div>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
