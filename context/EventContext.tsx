import React, { createContext, ReactNode, useContext, useState } from "react";

interface Event {
  title: string;
  date: string;
  time: string;
  dogIcons: string[];
}

interface EventContextType {
  events: Event[];
  addEvent: (event: Event) => void;
}

interface EventProviderProps {
  children: ReactNode; // Definir explícitamente que `children` es un ReactNode
}

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>([]);

  const addEvent = (event: Event) => {
    setEvents((prevEvents) => [...prevEvents, event]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEvent = () => {
  const context = useContext(EventContext);
  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }
  return context;
};
