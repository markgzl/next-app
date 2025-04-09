export default function OrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen container mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}