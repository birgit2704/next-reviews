import React from "react";
import Link from "next/link";

const Paginationbar = ({ page, pageCount, href }) => {
  return (
    <div className="flex gap-2 pb-3 items-center">
      <PaginationLink enabled={page > 1} href={`${href}?page=${page - 1}`}>
        &lt;
        <p className="sr-only">previous page</p>
      </PaginationLink>

      <span>
        Page {page} of {pageCount}
      </span>

      <PaginationLink
        enabled={page < pageCount}
        href={`${href}?page=${page + 1}`}
      >
        &gt;
        <p className="sr-only">next page</p>
      </PaginationLink>
    </div>
  );
};

function PaginationLink({ children, enabled, href }) {
  return enabled ? (
    <Link
      href={href}
      className="flex gap-1 items-center border px-2 py-1 rounded text-slate-800 text-sm hover:bg-orange-100 hover:text-orange-500 "
    >
      {children}
    </Link>
  ) : (
    <span
      href={href}
      className="flex gap-1 items-center border px-2 py-1 rounded text-slate-300 text-sm cursor-not-allowed"
    >
      {children}
    </span>
  );
}

export default Paginationbar;
