import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  category?: string;
};

export default function Pagination({
  currentPage,
  totalPages,
  category,
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams();

    params.set("page", String(page));

    if (category) {
      params.set("category", category);
    }

    return `/blog?${params.toString()}`;
  };

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
    >
      {currentPage > 1 ? (
        <Link
          href={getPageUrl(currentPage - 1)}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#173B65] hover:text-[#173B65]"
        >
          Previous
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-slate-100 px-4 py-2 text-sm text-slate-400">
          Previous
        </span>
      )}

      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <Link
            key={page}
            href={getPageUrl(page)}
            aria-current={currentPage === page ? "page" : undefined}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-semibold transition ${
              currentPage === page
                ? "bg-[#173B65] text-white"
                : "border border-slate-200 bg-white text-slate-700 hover:border-[#173B65] hover:text-[#173B65]"
            }`}
          >
            {page}
          </Link>
        ),
      )}

      {currentPage < totalPages ? (
        <Link
          href={getPageUrl(currentPage + 1)}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-[#173B65] hover:text-[#173B65]"
        >
          Next
        </Link>
      ) : (
        <span className="cursor-not-allowed rounded-lg border border-slate-100 px-4 py-2 text-sm text-slate-400">
          Next
        </span>
      )}
    </nav>
  );
}