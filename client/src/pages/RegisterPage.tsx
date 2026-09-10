export function RegisterPage() {
    return (
        <main className = 'flex min-h-screen flex-col bg-zinc-950 px-10 py-6 text-zinc-100'>
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
        </main>
    )
}
