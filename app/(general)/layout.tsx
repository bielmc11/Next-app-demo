
export default function generalLoyout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="flex flex-col items-center p-24">
        <h4 className="font-bold text-2xl">General Loyout</h4>
        {children}
      </main>
    </>
  );
}
