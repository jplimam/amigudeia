"use client";

import React, { useState, useEffect, RefAttributes } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Heart,
  Star,
  ArrowRight,
  Gift,
  Users,
  Clock,
  CheckCircle,
} from "lucide-react";
import CurvedLoop from "@/blocks/TextAnimations/CurvedLoop/CurvedLoop";
import Link from "next/link";
import Image from "next/image";

const AmigurumiLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100 overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "70%"]) }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300 rounded-full opacity-15 blur-2xl"
        />
      </div>

      {/* Hero Section - ATTENTION */}

      <CurvedLoop
        marqueeText="♥ Amigus ♥ Com ♥ Amor ♥ "
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

      <section className="relative z-10  flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div className="inline-block mb-4">
              <motion.img
                animate={{
                  y: [-10, 10, -10],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="w-50 h-50 sm:h-54 sm:w-54 md:h-58 md:w-58 mx-auto"
                src="/amigudeia-logo.png"
              />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
          >
            Desperte sorrisos e crie memórias especiais com nossos amigurumis
            <br className="hidden md:block" /> feitos à mão com amor e dedicação
            única
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-6 mb-20 justify-center items-center"
          >
            <Link
              href="https://wa.me/5512997393649?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20amigurumis%2C%20por%20favor!"
              target="_blank"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px -10px rgba(236, 72, 153, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r cursor-pointer from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              >
                <span>Ver Coleção</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
            <Link href="#products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-pink-400 cursor-pointer text-pink-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-pink-50 transition-all duration-300"
              >
                Peças Personalizadas
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section - INTEREST */}
      <section className="relative z-10 py-20 pt-0 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-pink-600">
              Por que Escolher Nossos Amigurumis?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada peça é única e criada com técnicas tradicionais japonesas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Feito com Amor",
                description:
                  "Cada amigurumi é criado à mão com carinho e atenção aos detalhes mais especiais",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Qualidade Premium",
                description:
                  "Utilizamos apenas fios de alta qualidade e materiais seguros para todas as idades",
              },
              {
                icon: <Gift className="w-8 h-8" />,
                title: "Presente Perfeito",
                description:
                  "Ideal para presentear pessoas especiais em qualquer ocasião ou celebração",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-200"
              >
                <div className="text-pink-500 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview - DESIRE */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-pink-600"
              id="products"
            >
              Alguns de nossos Amigurumis
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubra personagens únicos que vão conquistar seu coração
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Anjinho",
                image: "amigu-anjinho.png",
              },
              {
                name: "Carlo Acutis",
                image: "amigu-carlo.png",
              },
              {
                name: "Frei Galvão",
                image: "amigu-frei-galvao.png",
              },
              {
                name: "Seu Madruga",
                image: "amigu-madruga.png",
              },
              {
                name: "Nossa Senhora de Fátima",
                image: "amigu-nsa-fatima.png",
              },
              {
                name: "Nossa Senhora Aparecida",
                image: "amigu-nsa.png",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-pink-200"
              >
                <div
                  className="h-60 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(/${product.image})` }}
                >
                  <div className="absolute inset-0 bg-white/10" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 py-20 px-6 bg-white/60 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Mais de 30 Clientes Felizes
            </h2>
            <div className="flex justify-center items-center space-x-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-pink-500" />
                <span className="text-lg">30+ Clientes</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-pink-500" />
                <span className="text-lg">Entrega Rápida</span>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "João Pedro Lima",
                text: "Minha namorada amou o presente! Qualidade incrível e entrega super rápida.",
                rating: 5,
              },
              {
                name: "Antônio Marcelo",
                text: "Presente perfeito para o aniversário da minha esposa. Ela ficou emocionada!",
                rating: 5,
              },
              {
                name: "Louise Sampaio",
                text: "Já comprei 3 amigurumis e todos são perfeitos. Recomendo demais!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-pink-200"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-semibold text-gray-800">
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - ACTION */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Pronto para Criar Momentos Especiais?
            </h2>
            <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
              Garanta já o seu amigurumi favorito ou encomende uma peça
              personalizada única
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Link
                href="https://wa.me/5512997393649?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20amigurumis%2C%20por%20favor!"
                target="_blank"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white cursor-pointer text-pink-600 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Solicitar Orçamento</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </div>

            <div className="flex justify-center items-center space-x-6 text-pink-100">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Frete Grátis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Garantia Total</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5" />
                <span>Pagamento Seguro</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center space-x-2 mb-6">
            <Image
              src="/amigudeia-logo.png"
              alt="Amigudeia Logo"
              width={18}
              height={18}
            />
          </div>
          <p className="text-gray-400 mb-6">Created by João Pedro Lima</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a
              href="https://www.instagram.com/amigudeia/"
              target="_blank"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/andrea.lima.9828456/"
              target="_blank"
              className="hover:text-pink-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://wa.me/5512997393649?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20amigurumis%2C%20por%20favor!"
              target="_blank"
              className="hover:text-pink-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AmigurumiLanding;
