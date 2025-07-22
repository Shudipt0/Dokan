export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Optional dashboard-specific UI, e.g. sidebar */}
      {children}
    </section>
  );
}