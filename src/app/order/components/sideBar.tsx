
import React from "react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  "Abrading & Polishing",
  "Building & Grounds",
  "Electrical & Lighting",
  "Fabricating",
  "Fastening & Joining",
  "Filtering",
  "Flow & Level Control",
  "Furniture & Storage",
  "Hand Tools",
  "Hardware",
  "Heating & Cooling",
  "Lubricating",
  "Material Handling",
  "Measuring & Inspecting",
  "Office Supplies & Signs",
  "Pipe, Tubing, Hose & Fittings",
  "Plumbing & Janitorial",
  "Power Transmission",
  "Pressure & Temperature Control",
  "Pulling & Lifting",
  "Raw Materials",
  "Safety Supplies",
  "Sawing & Cutting",
  "Sealing",
  "Shipping",
  "Suspending"
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r h-full">
      <div className="p-4 font-medium">Choose a Category</div>
      <ScrollArea className="h-[calc(100vh-180px)]">
        <nav className="space-y-1 p-2">
          {categories.map((category) => (
            <Link
              key={category}
              href="#"
              className="block px-2 py-1.5 text-sm hover:bg-gray-100 rounded"
            >
              {category}
            </Link>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}
