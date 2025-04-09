
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, Search, ShoppingCart, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto py-2 px-4">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <button className="flex items-center text-primary font-semibold mr-4">
              <Menu className="mr-2 h-5 w-5" />
              <span className="hidden sm:inline">BROWSE CATALOG</span>
            </button>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <span>(630) 833-0300</span>
            <span className="mx-2">|</span>
            <button>Email Us</button>
            <span className="mx-2">|</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center">
                  Log in <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Login</DropdownMenuItem>
                <DropdownMenuItem>Create Account</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex md:hidden items-center space-x-3">
            <button aria-label="User account">
              <User className="h-5 w-5" />
            </button>
            <button aria-label="Shopping cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center py-2 gap-4">
          <Logo />

          <div className="relative flex-grow w-full max-w-3xl mx-0 md:mx-4">
            <Input
              type="text"
              placeholder="Search"
              className="w-full border-2 pr-10 h-12"
            />
            <Button
              className="absolute right-0 top-0 h-full aspect-square border-l"
              variant="ghost"
            >
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <div className="hidden md:flex space-x-4 text-sm">
            <Button variant="ghost" className="text-primary font-semibold">
              ORDER
            </Button>
            <Button variant="ghost" className="text-primary font-semibold">
              ORDER HISTORY
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
