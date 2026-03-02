"use client";

export default function ErrorPage() {
  const handleReset = () => {
    if (typeof window === "undefined") return;

    // Clear all cookies
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;`;
    });

    // Clear localStorage and sessionStorage
    localStorage.clear();
    sessionStorage.clear();

    // Force reload and redirect to home (hard reload, cache-busting)
    window.location.replace("/");
  };
  return (
    <html lang="en" className="h-full light" suppressHydrationWarning>
      <body className="h-full">
        <main className="relative isolate min-h-full">
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base/8 font-semibold text-white">500</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Внутренняя ошибка сервера
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-white/70 sm:text-xl/8">
              Произошла непредвиденная ошибка. Пожалуйста, попробуйте снова позже.
            </p>
            <div className="mt-10 flex justify-center">
              <button onClick={handleReset} className="text-sm/7 font-semibold text-white">
                <span aria-hidden="true">&larr;</span>
                Назад
              </button>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
