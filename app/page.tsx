export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-50 px-6 text-stone-900">
      <section className="w-full max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
          Badminton Tracker
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.05em] text-balance sm:text-6xl">
          Track every match with less clutter.
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
          A simple place to view badminton matches and manage updates.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/matches"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            See matches
          </a>
          <a
            href="/login"
            className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400 hover:bg-white"
          >
            Admin login
          </a>
        </div>
      </section>
    </main>
  );
}
