export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  gradient: {
    from: string;
    to: string;
  };
  icon: string;
}

export const projects: Project[] = [
  {
    id: "event-music",
    title: "Event Music Timeline Tool",
    description: "A mobile app that syncs Spotify with a digital event schedule — replacing DJs with automation.",
    tags: ["Mobile App", "Spotify API", "Automation"],
    gradient: {
      from: "indigo-500",
      to: "purple-600"
    },
    icon: "M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
  },
  {
    id: "food-tracking",
    title: "On-Device Food Tracking",
    description: "A mobile app using vision + voice to track meals with AI, no internet needed.",
    tags: ["Computer Vision", "On-Device AI", "Voice Recognition"],
    gradient: {
      from: "green-500",
      to: "teal-600"
    },
    icon: "M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
  },
  {
    id: "translation-api",
    title: "Real-Time Translation API",
    description: "A multi-language translator that queues user input and generates natural-sounding speech via TTS.",
    tags: ["NLP", "API", "Text-to-Speech"],
    gradient: {
      from: "blue-500",
      to: "cyan-600"
    },
    icon: "M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z"
  },
  {
    id: "ecommerce-ai",
    title: "E-Commerce AI Assistant",
    description: "An AI agent that helps store owners generate product descriptions, tag items, and handle customer questions.",
    tags: ["E-Commerce", "Content Generation", "Customer Service"],
    gradient: {
      from: "pink-500",
      to: "red-600"
    },
    icon: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
  }
];
