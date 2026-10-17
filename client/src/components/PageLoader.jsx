export default function PageLoader() {
    return (
        <div role="status" className="flex min-h-[50vh] items-center justify-center">
            <span className="h-8 w-8 animate-spin rounded-full border-2 border-ink-600 border-t-accent" />
            <span className="sr-only">Loading page…</span>
        </div>
    );
}