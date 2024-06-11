"use client";
import { Projects } from "$/constants";
import PortfolioCard from "./portfolio-card";
import Image from "next/image";
import useMediaQuery from "$/hooks/useMediaQuery";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
export default function PortfolioGrid() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="flex items-center justify-center w-full">
      <div className="lg:mb-12 grid lg:grid-cols-3 gap-12 justify-center justify-items-center w-full">
        {isDesktop ? (
          <>
            {Projects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger>
                  <PortfolioCard
                    key={project.id}
                    imageUrl={project.images[0]}
                    tag={project.name}
                    pills={project.tags}
                    description={project.description}
                  />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader className="flex flex-col gap-4">
                    <DialogTitle className="font-bold text-4xl">
                      {project.name}
                    </DialogTitle>
                    <DialogDescription className="text-lg">
                      {project.description}
                    </DialogDescription>
                  </DialogHeader>
                  {project.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Snapshot-${index + 1}`}
                      width={100}
                      height={100}
                    />
                  ))}
                </DialogContent>
              </Dialog>
            ))}
          </>
        ) : (
          <>
            {Projects.map((project) => (
              <Drawer key={project.id}>
                <DrawerTrigger asChild>
                  <PortfolioCard
                    key={project.id}
                    imageUrl={project.images[0]}
                    tag={project.name}
                    pills={project.tags}
                    description={project.description}
                  />
                </DrawerTrigger>
              </Drawer>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
