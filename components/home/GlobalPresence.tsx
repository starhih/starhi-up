"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { locations, continents } from '@/src/data';

export default function GlobalPresence() {
  const [activeLocation, setActiveLocation] = useState<string | number | null>(null);
  const [selectedContinent, setSelectedContinent] = useState<string | number | null>(null);

  const handleLocationHover = (id: string | number | null) => {
    setActiveLocation(id);
  };

  const handleContinentClick = (id: string | number) => {
    setSelectedContinent(id === selectedContinent ? null : id);
  };

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h6 className="text-[#258F67] uppercase tracking-wider mb-2 font-medium">Worldwide Operations</h6>
          <h2 className="text-[#214842] mb-4">Our Global Presence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From sustainable farms to manufacturing facilities and distribution centers, our global network ensures quality and reliability worldwide.
          </p>
        </div>

        {/* Desktop map view */}
        <div className="hidden md:block relative">
          <div className="relative h-[500px] w-full">
            <Image
              src="/images/world-map.jpg"
              alt="World Map"
              fill
              sizes="100vw"
              className="object-cover rounded-2xl"
              priority
              unoptimized
            />
            <div className="absolute inset-0 bg-[#214842]/10 rounded-2xl"></div>
          </div>


          

          <TooltipProvider>
            {locations.map((location) => (
              <Tooltip key={location.id}>
                <TooltipTrigger asChild>
                  <button
                    className="absolute w-4 h-4 rounded-full bg-[#EFC368] hover:bg-[#258F67] hover:scale-150 transition-all duration-300 z-10"
                    style={{
                      left: location.position.left,
                      top: location.position.top,
                      transform: 'translate(-50%, -50%)',
                      boxShadow: '0 0 0 rgba(239, 195, 104, 0.6)',
                      animation: 'pulse 2s infinite'
                    }}
                    onMouseEnter={() => handleLocationHover(location.id)}
                    onMouseLeave={() => handleLocationHover(null)}
                    aria-label={location.name}
                  ></button>
                </TooltipTrigger>
                <TooltipContent side="top" className="bg-white p-3 rounded-lg shadow-md max-w-xs z-50">
                  <div>
                    <h4 className="font-semibold text-[#214842]">{location.name}</h4>
                    <div className="text-xs font-medium text-[#258F67] mb-1">{location.type}</div>
                    <p className="text-sm text-gray-600">{location.details}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>

        {/* Mobile accordion view */}
        <div className="md:hidden">
          <div className="rounded-xl overflow-hidden">
            {continents.map((continent) => (
              <div key={continent.id} className="border-b border-gray-200 last:border-b-0">
                <Button
                  variant="ghost"
                  onClick={() => handleContinentClick(continent.id)}
                  className="w-full justify-between p-4 rounded-none hover:bg-gray-50"
                >
                  <span className="font-medium text-[#214842]">{continent.name}</span>
                  <span className="text-[#EFC368]">
                    {selectedContinent === continent.id ? '−' : '+'}
                  </span>
                </Button>

                {selectedContinent === continent.id && (
                  <div className="px-4 pb-4 pt-2 bg-gray-50">
                    <ul className="space-y-3">
                      {continent.locations.map((locationId) => {
                        const location = locations.find(loc => loc.id === locationId);
                        if (!location) return null;

                        return (
                          <li key={location.id} className="flex items-start">
                            <span className="w-2 h-2 bg-[#EFC368] rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                            <div>
                              <h4 className="font-medium text-[#214842]">{location.name}</h4>
                              <div className="text-xs font-medium text-[#258F67] mb-1">{location.type}</div>
                              <p className="text-sm text-gray-600">{location.details}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}