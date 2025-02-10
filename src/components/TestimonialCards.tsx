"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const quotes = [
  {
    quote:
      "Code is like humor. When you have to explain it, it’s bad. Keep it simple, readable, and maintainable—because future you (or someone else) will have to understand it.",
    name: "Cory House",
    title: "Software Architect & Speaker",
  },
  {
    quote:
      "First, solve the problem. Then, write the code. A great developer isn't the one who writes the most code, but the one who finds the simplest solution.",
    name: "John Johnson",
    title: "Software Engineer",
  },
  {
    quote:
      "A user interface is like a joke. If you have to explain it, it’s not that good. The best design is invisible—it just works effortlessly.",
    name: "Martin Leblanc",
    title: "UI/UX Designer",
  },
  {
    quote:
      "JavaScript is like a Swiss Army knife: versatile, powerful, and sometimes confusing. Master its quirks, and you'll unlock endless possibilities in web development.",
    name: "Addy Osmani",
    title: "Google Chrome Engineer",
  },
  {
    quote:
      "Great websites aren’t built with just code; they are built with passion, usability, and a deep understanding of user needs. Always develop with the end user in mind.",
    name: "Jeffrey Zeldman",
    title: "Web Standards Advocate",
  },
  {
    quote:
      "Your website should work on any device, anywhere, anytime. Responsive design isn’t a feature, it’s a fundamental expectation.",
    name: "Ethan Marcotte",
    title: "Responsive Web Design Pioneer",
  },
  {
    quote:
      "Good developers write code that works. Great developers write code that is readable, maintainable, and scalable for the future.",
    name: "Robert C. Martin",
    title: "Software Engineer & Author",
  },
  {
    quote:
      "Performance is not just an optimization—it’s a user experience feature. Every millisecond matters in web development.",
    name: "Steve Souders",
    title: "Performance Engineer",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
    name: "John Woods",
    title: "Software Engineer",
  },
  {
    quote:
      "Don’t just build websites—build experiences. The difference between a good website and a great one is the attention to detail.",
    name: "Cameron Moll",
    title: "Web Designer & Author",
  },
  {
    quote:
      "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
    name: "Edsger W. Dijkstra",
    title: "Computer Scientist",
  },
  {
    quote:
      "Simplicity is the soul of efficiency. The best code is no code at all—always aim to do more with less in web development.",
    name: "Austin Freeman",
    title: "Software Developer",
  },
];

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-black bg-dot-white/[0.2]  dark:bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Review About Web Development
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards items={quotes} direction="right" speed="slow" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCards;
