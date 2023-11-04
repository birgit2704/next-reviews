"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

const reviews = [
  { slug: "hades-2018", title: "Hades" },
  { slug: "black-mesa", title: "Black Mesa" },
  { slug: "disco-elysium", title: "Disco Elysium" },
  { slug: "dead-cells", title: "Dead Cells" },
  { slug: "a-way-out-2018", title: "A Way Out" },
];

const Searchbox = () => {
  const router = useRouter();
  const isClient = useIsClient();
  const [query, setQuery] = useState("");

  if (!isClient) {
    return null;
  }

  const filtered = reviews.filter((review) => review.title.includes(query));

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
