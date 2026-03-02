"use client";

import { Dialog, DialogPanel } from "@headlessui/react";
import { X } from "lucide-react";

export default function VideoPlayer({ isOpen, onClose, videoUrl, title = "Video Player" }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-full p-4">
          <DialogPanel className="relative w-full max-w-4xl bg-black rounded-lg shadow-xl">
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white hover:bg-opacity-10 rounded-full transition-all duration-200"
              aria-label="Close video player"
            >
              <X size={24} />
            </button>

            {/* Video Container */}
            <div className="relative w-full bg-black">
              <div className="relative pt-[56.25%]">
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  className="absolute top-0 left-0 w-full h-full"
                  controlsList="nodownload"
                  onContextMenu={(e) => e.preventDefault()}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Title (optional) */}
            {title && (
              <div className="p-4 bg-black border-t border-gray-700">
                <h3 className="text-white font-gotham font-black text-lg">{title}</h3>
              </div>
            )}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
