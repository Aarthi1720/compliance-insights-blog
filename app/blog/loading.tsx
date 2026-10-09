export default function BlogLoading() {
  return (
    <main
      className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8"
      aria-busy="true"
      aria-label="Loading blog articles"
    >
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-4 w-28 rounded bg-slate-200" />

        <div className="mt-8 h-10 max-w-md rounded bg-slate-200" />

        <div className="mt-4 h-5 max-w-xl rounded bg-slate-200" />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }, (_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
            >
              <div className="aspect-video bg-slate-200" />

              <div className="space-y-4 p-5">
                <div className="h-4 w-28 rounded bg-slate-200" />
                <div className="h-6 w-full rounded bg-slate-200" />
                <div className="h-4 w-5/6 rounded bg-slate-200" />
                <div className="h-4 w-2/3 rounded bg-slate-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}