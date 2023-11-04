"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

const Searchbox = () => {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (debouncedQuery.length > 1) {
      const url = "/api/search?query=" + encodeURIComponent(debouncedQuery);
      const controller = new AbortController();
      (async () => {
        const response = await fetch(url, {
          signal: controller.signal,
        });
        const reviews = await response.json();
        setReviews(reviews);
      })();
      return () => controller.abort();
    } else {
      setReviews([]);
    }
  }, [debouncedQuery]);

  if (!isClient) {
    return null;
  }

  const handleChange = (review) => {
    router.push(`/reviews/${review.slug}`);
  };

  return (
    <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="border rounded w-full px-2 py-1"
        />

        <Combobox.Options className="absolute bg-white py1 w-full">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    active ? "bg-orange-100" : ""
                  }
              `}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Searchbox;
