import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "@/components/main-nav";
import StoreSwitcher from "@/components/ui/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ThemeToggle } from "@/components/theme-toggle";

export default async function Navbar() {

  const { userId } = auth();

  if (!userId) redirect('/sign-in');

  const stores = await prismadb.store.findMany({
    where: {
      userId
    }
  });
  
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>
          <StoreSwitcher items={stores} />
        </div>
        <MainNav className="ms-6" />
        <div className="ml-auto flex items-center space-4">
          <div className="mr-6">
            <ThemeToggle />
          </div>
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  )
}