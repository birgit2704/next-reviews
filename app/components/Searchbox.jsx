"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Searchbox = ({ reviews }) => {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState("");

  if (!isClient) {
    return null;
  }

  const filtered = reviews
    .filter((review) =>
      review.title.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

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
          {filtered.map((review) => (
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
