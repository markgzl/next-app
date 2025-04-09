
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Sample data for product categories
const fasteners = [
  { name: "Screws & Bolts", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Threaded Rods & Studs", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Eyebolts", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "U-Bolts", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Nuts", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Washers", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Shims", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Helical & Threaded Inserts", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Spacers & Standoffs", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Pins", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
  { name: "Anchors", img: "https://ext.same-assets.com/4168194019/1735135472.png" },
];

const adhesives = [
  { name: "Adhesives", img: "https://ext.same-assets.com/4168194019/2314541865.png" },
  { name: "Tape", img: "https://ext.same-assets.com/4168194019/2314541865.png" },
  { name: "Hook & Loop", img: "https://ext.same-assets.com/4168194019/2314541865.png" },
];

const welding = [
  { name: "Electrodes & Wire", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Welders", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Gas Regulators", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Welding Gloves", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Welding Helmets & Glasses", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Protective Screens", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Brazing Alloys", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Torches", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Solder", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Soldering Irons", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
  { name: "Melting Pots", img: "https://ext.same-assets.com/4168194019/2042395658.png" },
];

const CategorySection = ({ title, items }: { title: string; items: { name: string; img: string }[] }) => {
  return (
    <div className="category-section">
      <h2 className="text-xl font-medium mb-4 text-primary">{title}</h2>
      <div className="category-container sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        {items.map((item) => (
          <Link key={item.name} href="#" className="category-item">
            <div className="flex items-center justify-center h-[70px] mb-2">
              <Image
                src={item.img}
                alt={item.name}
                width={60}
                height={60}
                className="category-icon"
              />
            </div>
            <span className="text-center text-xs md:text-sm">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default function MainContent() {
  return (
    <div className="flex-grow p-3 md:p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl md:text-2xl font-medium">All Categories</h1>
      </div>

      <CategorySection title="Fastening & Joining" items={fasteners} />
      <CategorySection title="Adhesives & Tape" items={adhesives} />
      <CategorySection title="Welding, Brazing & Soldering" items={welding} />
    </div>
  );
}
