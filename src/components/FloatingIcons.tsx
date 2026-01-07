"use client";

import { Phone } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const FloatingIcons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 animate-slide-up">
      <TooltipProvider delayDuration={0}>
        {/* Floating Call Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="tel:+917774911330"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#1F1E5E] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#1A184D] focus:outline-none focus:ring-2 focus:ring-[#1F1E5E] focus:ring-offset-2 border-2 border-white"
              aria-label="Call Us"
            >
              <Phone className="relative h-6 w-6 text-white fill-white" />
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="bg-[#1F1E5E] text-white border-[#1F1E5E] font-medium mr-2"
          >
            <p>Call Us Directly</p>
          </TooltipContent>
        </Tooltip>

        {/* Floating WhatsApp Button */}
        <Tooltip>
          <TooltipTrigger asChild>
            <a
              href="https://wa.me/917774911330"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:bg-[#20BA58] focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 border-2 border-white"
              aria-label="Chat on WhatsApp"
            >
              {/* WhatsApp Icon */}
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-white translate-x-[1px] -translate-y-[1px]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm.01 16.61c-1.48 0-2.94-.4-4.21-1.15l-.3-.18-3.11.82.83-3.03-.2-.31c-.82-1.31-1.26-2.83-1.26-4.38 0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42 1.56 1.56 2.41 3.63 2.41 5.83.02 4.54-3.68 8.22-8.22 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.39 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.07-.11-.23-.18-.48-.3z" />
              </svg>
            </a>
          </TooltipTrigger>
          <TooltipContent
            side="left"
            className="bg-[#25D366] text-white border-[#25D366] font-medium mr-2"
          >
            <p>Chat on WhatsApp</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
