import React from "react";

const DecorativeBackground = ({ className, children }) => {
  return (
    <div className={`absolute ${className}`} aria-hidden="true">
      {children}
    </div>
  );
};

const HeroSection = ({ title, subtitle, className }) => {
  return (
    <section
      className={`flex flex-col items-center justify-center ${className}`}
    >
      <h1 className="text-6xl font-bold mb-8 text-gray-800 rounded-lg shadow-lg p-4 fade-in">
        {title}
      </h1>
      <p className="text-2xl font-semibold mb-8 text-gray-600 rounded-lg shadow-lg p-4 bg-gray-100 fade-in">
        {subtitle}
      </p>
    </section>
  );
};

const AnimatedText = ({ children, className }) => {
  return (
    <p
      className={`text-lg mb-8 text-gray-600 rounded-lg shadow-lg p-4 bg-gray-100 fade-in ${className}`}
    >
      {children}
    </p>
  );
};

const Container = ({ children, className }) => {
  return <div className={`max-w-3xl ${className}`}>{children}</div>;
};

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-200">
      <HeroSection
        title="John Doe"
        subtitle="Web Developer & Designer"
        className="mb-8"
      />
      <DecorativeBackground
        className="top-0 right-0 w-1/4 h-1/4 bg-gradient-to-r from-pink-200 to-purple-200 opacity-50"
        aria-hidden="true"
      >
        <AnimatedText
          children="I am a web developer and designer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies, including React, Next.js, and Tailwind CSS."
          className="fade-in"
        />
      </DecorativeBackground>
      <DecorativeBackground
        className="bottom-0 left-0 w-1/4 h-1/4 bg-blur bg-gray-100 opacity-50"
        aria-hidden="true"
      >
        <Container className="fade-in">
          <AnimatedText
            children="I am a web developer and designer with a passion for creating beautiful and functional websites. I have experience with a variety of technologies, including React, Next.js, and Tailwind CSS."
            className="fade-in"
          />
        </Container>
      </DecorativeBackground>
      <svg className="absolute bottom-0 right-0 w-1/4 h-1/4 opacity-50">
        <circle cx="50%" cy="50%" r="50%" stroke="none" fill="url(#gradient)" />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#F8E1D0" />
            <stop offset="100%" stopColor="#F4C1C8" />
          </linearGradient>
        </defs>
      </svg>
    </main>
  );
};

export default Home;
