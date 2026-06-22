import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../components/ui/SectionTitle';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "How long does the Quantum Battery take to charge?", answer: "Using an Apex Supercharger, the Quantum Battery can reach an 80% charge in just 15 minutes, and a full charge in 30 minutes." },
    { question: "Is the Neural AI Core fully autonomous?", answer: "The hardware is capable of Level 5 autonomy. Currently, regulatory approval allows for Level 3 highway driving and automated parking." },
    { question: "What is the warranty on an Apex vehicle?", answer: "Every Apex vehicle comes with a 10-year / 150,000-mile comprehensive warranty, including the battery and drivetrain." },
    { question: "Can I customize the interior materials?", answer: "Yes, our Custom Build program allows you to choose from a wide range of sustainable materials, including vegan leather and recycled carbon fiber." }
  ];

  return (
    <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle title="Frequently Asked Questions" />
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-white/10 rounded-xl overflow-hidden bg-white/5">
            <button
              className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            >
              <span className="text-white font-medium text-lg">{faq.question}</span>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary"
              >
                <FaChevronDown />
              </motion.div>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
