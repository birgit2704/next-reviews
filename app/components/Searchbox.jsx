"use client";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { David_Libre } from "next/font/google";

const reviews = [
  { slug: "hades-2018", title: "Hades" },
  { slug: "black-mesa", title: "Black Mesa" },
  { slug: "disco-elysium", title: "Disco Elysium" },
  { slug: "dead-cells", title: "Dead Cells" },
  { slug: "a-way-out-2018", title: "A Way Out" },
];

const Searchbox = () => {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }
  return (
    <div className="relative w-48">
      <Combobox>
        <Combobox.Input
          placeholder="Search..."
          className="border rounded w-full px-2 py-1"
        />

        <Combobox.Options className="absolute bg-white py1 w-full">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug}>
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
