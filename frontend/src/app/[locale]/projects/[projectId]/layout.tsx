export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="border-t-1 dark:border-app-border-primary min-h-[calc(100vh-64px)]">
      <div className="w-full p-4">{children}</div>
    </div>
  );
}
