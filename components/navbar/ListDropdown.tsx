import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import { LuAlignLeft } from "react-icons/lu";
import UserIcon from "./UserIcon";
import { SignedIn, SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import SignoutButton from "./SignoutButton";

type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/favorites ', label: 'favorites' },
  { href: '/bookings ', label: 'bookings' },
  { href: '/reviews ', label: 'reviews' },
  { href: '/rentals/create ', label: 'create rental' },
  { href: '/rentals', label: 'my rentals' },
  { href: '/profile ', label: 'profile' },
];

export default function ListDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-2 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
     <SignedIn>
        {
          links.map((link) => (
            <DropdownMenuItem key={link.href}>
             
              <Link href={link.href} className="w-full">
                {link.label}  
              </Link>
            </DropdownMenuItem>
          ))
        }

        <SignoutButton />
        </SignedIn>
        <SignedOut>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-md transition-colors flex items-center gap-2">
                Sign In
              </button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left px-4 py-2 hover:bg-secondary rounded-md transition-colors flex items-center gap-2">
                Sign Up
              </button>
            </SignUpButton>
          </DropdownMenuItem>
        </SignedOut>
     
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
