
"use client";

import { Card,Button } from "flowbite-react";

export default function Component({card}) {
  return (
    <div className="group inline-block">
        <Card
        className="max-w-sm"
        renderImage={() => <img className="h-64 group-hover:h-44" src={card.src} alt="image 1" />}
        >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {card.title}
        </h5>
        <Button color = "gray" className="hidden group-hover:block group-hover:flex border border-teal-500">Read Article</Button>
        </Card>
    </div>
  );
}
