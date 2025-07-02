"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GreetingSection() {
  const [greeting, setGreeting] = useState("");
  const [userName, setUserName] = useState("Ọlọ́lá"); // Example Nigerian name
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Nigerian greetings in different languages
  const greetings = [
    { language: "Pidgin", text: "How you dey?", subtext: "We dey hope say your business dey boom!" },
    { language: "Hausa", text: "Sannu!", subtext: "Muna fata cewa kasuwancinka yana ci gaba!" },
    { language: "Igbo", text: "Kedu!", subtext: "Anyị na-atụ anya na azụmahịa gị na-aga nke ọma!" },
    { language: "Yoruba", text: "Bawo ni!", subtext: "A ni ireti pe isowo re n tesiwon!" }
  ];
  
  useEffect(() => {
    // Get time of day to determine appropriate greeting
    const hour = new Date().getHours();
    let timeBasedGreeting = "Good ";
    
    if (hour < 12) timeBasedGreeting += "morning";
    else if (hour < 18) timeBasedGreeting += "afternoon";
    else timeBasedGreeting += "evening";
    
    // Create a new array with the English greeting at the beginning
    const allGreetings = [
      { language: "English", text: timeBasedGreeting, subtext: "We hope your business is thriving!" },
      ...greetings
    ];
    
    setGreeting(timeBasedGreeting);
    
    // Rotate through Nigerian greetings continuously
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % allGreetings.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Ensure we have a valid greeting even before the effect runs
  const allGreetings = [
    { language: "English", text: "Welcome", subtext: "We hope your business is thriving!" },
    ...greetings
  ];
  
  const currentGreeting = allGreetings[currentIndex % allGreetings.length] || allGreetings[0];
  
  return (
    <section className="bg-[#111] p-6 rounded-xl border border-[var(--primary)]/10 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentGreeting.language}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2">
            <motion.span 
              className="text-xs text-[var(--primary)]/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              {currentGreeting.language}
            </motion.span>
          </div>
          
          <motion.h1 
            className="text-3xl font-bold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {currentGreeting.text}{" "}
            <motion.span 
              className="text-[var(--primary)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {userName}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-[var(--foreground)]/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {currentGreeting.subtext}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
