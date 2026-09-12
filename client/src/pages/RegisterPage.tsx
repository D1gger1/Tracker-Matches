export function RegisterPage() {
    return (
        <div className='flex min-h-screen flex-col bg-zinc-950 px-10 py-6 text-zinc-100'>
            <header className='flex items-center gap-3 '>
                <div className='grid size-9 place-items-center rounded-xl border border-zinc-700 bg-zinc-900'>
                    <span className='text-sm font-black text-lime-300'>
                        R<span className='text-zinc-200'>.</span>
                    </span>
                </div>

                <span className='text-base font-black tracking-[-0.04em] text-zinc-100'>
                    REP / TRACK
                </span>
            </header>
            <main className='flex flex-1 items-center py-8'>
                <section className='mx-auto w-full max-w-md '>
                    <div className='mb-4 text-xs font-bold tracking-widest text-lime-300'>
                        <p className='text-lime-300 text-xs font-bold py-4' > НАЧНЁМ ТРЕНИРОВКУ </p>
                        <h1 className='font-bold text-3xl'>Создать аккаунт</h1>
                        <p className=' text-zinc-400 py-3' >Сохраняйте подходы и наблюдайте, как растёт результат.</p>
                    </div>
                    <div className="registr-btns grid grid-cols-2 rounded-xl border border-zinc-800 bg-zinc-900 p-1">
                        <button type='button' className='rounded-lg bg-zinc-800 px-4 py-2 text-sm font-semibold text-zinc-100 shadow-sm'>Регистрация</button>
                        <button type='button' className='rounded-lg px-4 py-2 text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-200 '>Войти</button>
                    </div>
                    <form className="mt-6 space-y-4">
                        <div className='space-y-2'>
                            <label htmlFor="email" className="block text-sm font-medium text-zinc-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                                placeholder="you@example.com"
                                required
                                className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-lime-300" />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-zinc-300">Пароль</label>
                            <input type="password"
                                id="password"
                                name="password"
                                autoComplete="new-password"
                                required
                                className="h-12 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 text-sm text-zinc-100 outline-none transition-colors  placeholder:text-zinc-600 focus:border-lime-300" />
                        </div>
                        <button
                            type="submit"
                            className="h-12 w-full rounded-xl bg-lime-300 px-4 text-sm font-bold text-zinc-950 transition-colors hover:bg-lime-200 active:bg-lime-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-300"
                        >
                            Создать аккаунт
                        </button>
                    </form>
                </section>
            </main>
        </div>


    )
}
