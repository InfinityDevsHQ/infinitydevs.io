"use client";
import { Projects } from "$/constants";
import PortfolioCard from "./portfolio-card";
import Image from "next/image";
import useMediaQuery from "$/hooks/useMediaQuery";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PortfolioGridProps {
  currentFilters: string[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ currentFilters }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const filteredProjects = Projects.filter((project) => {
    if (currentFilters.length === 0) {
      return true;
    }
    return project.tags.some((tag) => currentFilters.includes(tag));
  }).reduce((uniqueProjects, project) => {
    if (!uniqueProjects.some((p) => p.id === project.id)) {
      uniqueProjects.push(project);
    }
    return uniqueProjects;
  }, [] as typeof Projects);

  return (
    <div className="flex items-center justify-center w-full">
      <div className="lg:mb-12 grid lg:grid-cols-3 gap-12 lg:justify-items-center w-full">
        {isDesktop ? (
          <>
            {filteredProjects.map((project) => (
              <Dialog key={project.id}>
                <DialogTrigger className="w-full">
                  <PortfolioCard
                    imageUrl={project.images[0]}
                    tag={project.name}
                    pills={project.tags}
                  />
                </DialogTrigger>
                <DialogContent className="overflow-y-auto max-h-[90vh] w-1/2 min-w-[50vw]">
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
                      width={10000}
                      height={10000}
                      className="h-full w-full"
                    />
                  ))}
                  {project.previewLink && (
                    <DialogFooter>
                      <Button
                        className="bg-blue-900/40 hover:-translate-y-1.5 transition-all ease-in-out duration-300 gap-2 px-5 py-2  common-border !rounded-full text-white"
                        asChild
                      >
                        <Link
                          href={project.previewLink}
                          target="blank"
                          className="flex items-center gap-2"
                        >
                          <span>Preview</span>
                          <ArrowRight />
                        </Link>
                      </Button>
                    </DialogFooter>
                  )}
                </DialogContent>
              </Dialog>
            ))}
          </>
        ) : (
          <>
            {filteredProjects.map((project) => (
              <Drawer key={project.id}>
                <DrawerTrigger>
                  <PortfolioCard
                    key={project.id}
                    imageUrl={project.images[0]}
                    tag={project.name}
                    pills={project.tags}
                  />
                </DrawerTrigger>
                <DrawerContent className="max-h-max">
                  <DrawerHeader className="flex flex-col gap-6">
                    <DrawerTitle className="text-2xl font-bold">
                      {project.name}
                    </DrawerTitle>
                    <DrawerDescription className="text-lg">
                      {project.description}
                    </DrawerDescription>
                  </DrawerHeader>
                  {project.images.map((img, index) => (
                    <Image
                      key={index}
                      src={img}
                      alt={`Snapshot-${index + 1}`}
                      width={10000}
                      height={10000}
                      className="h-full w-full"
                    />
                  ))}
                  {project.previewLink && (
                    <DrawerFooter>
                      <Button
                        className="bg-blue-900/40 hover:-translate-y-1.5 transition-all ease-in-out duration-300 flex items-center gap-2 px-5 py-2 self-start common-border !rounded-full text-white"
                        asChild
                      >
                        <Link
                          href={project.previewLink}
                          target="blank"
                          className="flex items-center gap-2"
                        >
                          <span>Preview</span>
                          <ArrowRight />
                        </Link>
                      </Button>
                    </DrawerFooter>
                  )}
                </DrawerContent>
              </Drawer>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioGrid;
