import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Clock, Sparkles, ArrowRight, Search } from 'lucide-react';
import PageTransition from '../components/ui/PageTransition';
import Container from '../components/ui/Container';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import TiltCard from '../components/ui/TiltCard';
import { services, serviceCategories } from '../data/services';

export const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Category filter tabs
  const allTabs = [
    { id: 'all', name: 'ALL SERVICES' },
    ...serviceCategories
  ];

  // Filtered services
  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.categoryId === selectedCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Group services by category when viewing 'all' and not searching
  const groupedServices = useMemo(() => {
    if (selectedCategory !== 'all' || searchQuery.trim() !== '') {
      return null;
    }
    const map = {};
    serviceCategories.forEach((cat) => {
      map[cat.name] = services.filter((s) => s.category === cat.name);
    });
    return map;
  }, [selectedCategory, searchQuery]);

  return (
    <PageTransition>
      <div className="pt-32 sm:pt-36 pb-28 bg-obsidian min-h-screen text-ivory">
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-gold-glow pointer-events-none rounded-full blur-[120px] opacity-15" />
        <div className="absolute top-96 right-10 w-80 h-80 bg-champagne-glow pointer-events-none rounded-full blur-[100px] opacity-10" />

        <Container className="relative z-10">
          <SectionHeading
            badge="OFFICIAL SERVICE MENU"
            title="Bespoke Grooming Services"
            subtitle="Engineered with artistic precision and luxury products. Experience authentic grooming rituals tailored for the modern gentleman."
          />

          {/* Sticky Luxury Filter Bar */}
          <div className="sticky top-20 z-30 mt-12 mb-12 py-4 bg-obsidian/90 backdrop-blur-xl border-y border-champagne/15 transition-all">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
                {allTabs.map((tab) => {
                  const isActive = selectedCategory === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setSelectedCategory(tab.id);
                        setSearchQuery('');
                      }}
                      className={`relative px-3.5 py-2 text-[11px] tracking-[0.2em] font-mono uppercase whitespace-nowrap transition-all duration-300 rounded-none border ${
                        isActive
                          ? 'border-champagne text-champagne bg-champagne/10 shadow-gold-subtle'
                          : 'border-white/10 text-ivory-muted hover:text-ivory hover:border-white/25 bg-obsidian-card/60'
                      }`}
                    >
                      {tab.name}
                      {isActive && (
                        <motion.div
                          layoutId="categoryActiveIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-champagne"
                          transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Search Box */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-champagne/60 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 bg-obsidian-card border border-white/10 text-xs font-mono text-ivory placeholder:text-ivory-muted/50 focus:outline-none focus:border-champagne/60 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Services Grid Display */}
          {groupedServices ? (
            // Grouped By Category Layout
            <div className="space-y-16">
              {serviceCategories.map((category) => {
                const categoryList = groupedServices[category.name] || [];
                if (categoryList.length === 0) return null;

                return (
                  <section key={category.id} id={category.id} className="scroll-mt-36">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8 pb-3 border-b border-white/10">
                      <h2 className="font-serif text-2xl sm:text-3xl text-ivory tracking-wide flex items-center gap-3">
                        <span className="text-gold-gradient">{category.name}</span>
                      </h2>
                      <span className="text-[11px] font-mono text-ivory-muted/70 tracking-widest uppercase">
                        ({categoryList.length} RITUALS)
                      </span>
                      <div className="flex-grow h-px bg-gradient-to-r from-champagne/20 to-transparent" />
                    </div>

                    {/* Category Service Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {categoryList.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            // Filtered / Search Results View
            <div>
              {filteredServices.length === 0 ? (
                <div className="text-center py-20 glass-card p-12 max-w-lg mx-auto">
                  <Scissors className="w-8 h-8 text-champagne/40 mx-auto mb-4" />
                  <h3 className="font-serif text-2xl text-ivory mb-2">No Services Found</h3>
                  <p className="text-sm text-ivory-muted font-light mb-6">
                    No ritual matches "{searchQuery}". Try selecting another category or clear your search query.
                  </p>
                  <Button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    variant="outline"
                    size="sm"
                  >
                    RESET FILTERS
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredServices.map((service, index) => (
                    <ServiceCard key={service.id} service={service} index={index} />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Bottom Luxury Assurance Note */}
          <div className="mt-20 glass-panel p-8 sm:p-10 border-gold-subtle text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-champagne text-[11px] font-mono uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE AAURA ASSURANCE</span>
            </div>
            <h3 className="font-serif text-2xl text-ivory mb-3">Uncompromising Care & Precision</h3>
            <p className="text-xs sm:text-sm text-ivory-muted leading-relaxed font-light max-w-2xl mx-auto mb-6">
              All services include personalized consultation, sterile surgical-grade instruments, and high-end grooming elixirs. Prices are transparent and reflect authentic studio rates.
            </p>
            <Button to="/book" variant="primary" size="md">
              RESERVE YOUR APPOINTMENT
            </Button>
          </div>
        </Container>
      </div>
    </PageTransition>
  );
};

// Reusable Individual Service Card with Subtle 3D Tilt & Sweep
const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="h-full"
    >
      <TiltCard
        maxTilt={5}
        glow={true}
        className="glass-panel p-6 sm:p-7 h-full flex flex-col justify-between border-white/10 hover:border-champagne/40 bg-obsidian-card/75"
      >
        <div>
          {/* Top category & duration row */}
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-[9px] tracking-[0.25em] font-mono uppercase text-champagne border border-champagne/25 px-2 py-0.5 bg-champagne/5">
              {service.category}
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-ivory-muted/70">
              <Clock className="w-3 h-3 text-champagne/60" />
              <span>{service.duration}</span>
            </div>
          </div>

          {/* Service Title */}
          <h3 className="font-serif text-xl sm:text-2xl text-ivory mb-2.5 group-hover:text-champagne transition-colors duration-300">
            {service.name}
          </h3>

          {/* Service Description */}
          <p className="text-xs text-ivory-muted leading-relaxed font-light mb-6 line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Card Footer: Price & Booking Action */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between mt-auto">
          <div>
            {service.startingFrom && (
              <span className="block text-[9px] font-mono tracking-wider text-champagne/80 uppercase">
                ESTIMATED
              </span>
            )}
            <span className="font-serif text-2xl text-champagne-light font-medium tracking-tight group-hover:text-champagne transition-colors">
              {service.formattedPrice}
            </span>
          </div>

          <Button
            to="/book"
            variant="ghost"
            size="sm"
            className="text-[11px] tracking-[0.15em] px-3 py-1.5 text-ivory-muted group-hover:text-champagne group-hover:border-champagne/30"
          >
            <span>BOOK</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </TiltCard>
    </motion.div>
  );
};

export default Services;
