import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Shield, Zap, Award } from 'lucide-react';

interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const TrustBadge: React.FC<TrustBadgeProps> = ({ icon, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-white p-8 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 5 }}
      className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary"
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold text-dark mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const TrustAndSecurity: React.FC = () => {
  const badges = [
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Enterprise Encryption',
      description: 'All your data is encrypted with AES-256 encryption, the same standard used by banks and governments.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'GDPR Compliant',
      description: 'We comply with GDPR, CCPA, and other international data protection regulations. Your privacy is paramount.',
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'SOC 2 Certified',
      description: 'Independently audited and certified for security, availability, and confidentiality standards.',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '99.9% Uptime',
      description: 'Hosted on enterprise-grade infrastructure with automatic backups and disaster recovery.',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold text-primary bg-primary/10 rounded-full border border-primary/20"
          >
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Security & Trust
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-extrabold text-dark tracking-tight"
          >
            Your data is safe with <span className="text-primary">FlavorFusion</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Enterprise-grade security, compliance certifications, and transparent privacy practices. Trust is everything.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {badges.map((badge, index) => (
            <TrustBadge key={index} {...badge} index={index} />
          ))}
        </div>

        {/* Certification Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/5 via-white to-secondary/5 border border-primary/10 rounded-2xl p-12"
        >
          <h3 className="text-center text-2xl font-bold text-dark mb-10">Trusted by Industry Leaders</h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {/* SSL Certificate Badge */}
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-lg border-2 border-green-500 flex items-center justify-center mb-2 shadow-md">
                <Lock className="w-10 h-10 text-green-500" />
              </div>
              <p className="text-xs font-bold text-gray-600">SSL Secure</p>
            </motion.div>

            {/* GDPR Badge */}
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-lg border-2 border-blue-500 flex items-center justify-center mb-2 shadow-md">
                <Shield className="w-10 h-10 text-blue-500" />
              </div>
              <p className="text-xs font-bold text-gray-600">GDPR</p>
            </motion.div>

            {/* SOC 2 Badge */}
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-lg border-2 border-purple-500 flex items-center justify-center mb-2 shadow-md">
                <Award className="w-10 h-10 text-purple-500" />
              </div>
              <p className="text-xs font-bold text-gray-600">SOC 2</p>
            </motion.div>

            {/* CCPA Badge */}
            <motion.div whileHover={{ scale: 1.1 }} className="text-center">
              <div className="w-20 h-20 mx-auto bg-white rounded-lg border-2 border-orange-500 flex items-center justify-center mb-2 shadow-md">
                <Zap className="w-10 h-10 text-orange-500" />
              </div>
              <p className="text-xs font-bold text-gray-600">CCPA</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Privacy Promise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 bg-white rounded-xl border-2 border-primary/20 p-8 md:p-12"
        >
          <h3 className="text-2xl font-bold text-dark mb-4">Our Privacy Promise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-primary mt-1">✓</div>
              <div>
                <p className="font-semibold text-dark">We never sell your data</p>
                <p className="text-sm text-gray-600 mt-1">Your ingredient lists and preferences are never shared with third parties.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary mt-1">✓</div>
              <div>
                <p className="font-semibold text-dark">Transparent data practices</p>
                <p className="text-sm text-gray-600 mt-1">Read our full privacy policy. No hidden terms or surprise charges.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary mt-1">✓</div>
              <div>
                <p className="font-semibold text-dark">Delete anytime</p>
                <p className="text-sm text-gray-600 mt-1">Export your data or delete everything with one click. No questions asked.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-primary mt-1">✓</div>
              <div>
                <p className="font-semibold text-dark">Contact support 24/7</p>
                <p className="text-sm text-gray-600 mt-1">Questions about privacy? Our team is here to help anytime.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustAndSecurity;
