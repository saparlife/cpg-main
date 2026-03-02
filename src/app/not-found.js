"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center relative">
      <div
        className="absolute right-0 h-full w-[20%] bg-right bg-contain bg-repeat-y z-10"
        style={{
          backgroundImage: "url(/arrow-bottom.svg)",
        }}
      ></div>
      <div className="mx-auto mt-20 max-w-2xl text-center sm:mt-24 relative z-20">
        <p className="text-base font-semibold leading-8 text-parrot-1100">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-parrot-1100 sm:text-5xl">Страница не найдена</h1>
        <p className="mt-4 text-sm leading-7 text-parrot-1100 sm:mt-6">Запрашиваемая страница не существует.</p>
      </div>
      <div className="mt-10 flex justify-center">
        <Link href="/" className="text-sm font-semibold leading-6 text-parrot-1100">
          <span aria-hidden="true">&larr; </span>
          Назад на главную
        </Link>
      </div>
    </div>
  );
}
