"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users, Building, Coffee, Home, TrendingUp, Filter, Search, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "ANDRICO Coffee House - Kisaran",
    category: "coffee-shop",
    image: "/api/placeholder/600/400",
    description: "Flagship store yang menghadirkan konsep kedai kopi modern dengan fasilitas lengkap dan suasana yang nyaman.",
    location: "Kisaran Timur, Asahan",
    date: "2023",
    features: ["100+ seating capacity", "Outdoor seating", "Meeting rooms", "High-speed WiFi"],
    status: "completed"
  },
  {
    id: 2,
    title: "Green Valley Housing Project",
    category: "housing",
    image: "/api/placeholder/600/400",
    description: "Proyek perumahan modern dengan konsep hijau dan fasilitas lengkap untuk kenyamanan penghuni.",
    location: "Kisaran, Sumatera Utara",
    date: "2024",
    features: ["50+ units", "Green environment", "Modern facilities", "24/7 security"],
    status: "ongoing"
  },
  {
    id: 3,
    title: "ANDRICO Express - Mini Cafe",
    category: "coffee-shop",
    image: "/api/placeholder/600/400",
    description: "Konsep kedai kopi compact dengan fokus pada take-away dan delivery service untuk kemudahan pelanggan.",
    location: "Sentang, Kisaran Timur",
    date: "2023",
    features: ["Express service", "Drive-thru", "Digital ordering", "Parking area"],
    status: "completed"
  },
  {
    id: 4,
    title: "Bukit Asahan Residence",
    category: "housing",
    image: "/api/placeholder/600/400",
    description: "Kawasan perumahan eksklusif dengan pemandangan alam yang indah dan akses mudah ke fasilitas umum.",
    location: "Asahan, Sumatera Utara",
    date: "2024",
    features: ["30+ luxury units", "Mountain view", "Club house", "Private security"],
    status: "planning"
  },
  {
    id: 5,
    title: "ANDRICO Roastery",
    category: "coffee-shop",
    image: "/api/placeholder/600/400",
    description: "Fasilitas roasting kopi modern untuk memastikan kualitas terbaik dari setiap biji kopi yang kami sajikan.",
    location: "Kisaran Timur, Asahan",
    date: "2023",
    features: ["In-house roasting", "Quality control lab", "Training center", "Retail space"],
    status: "completed"
  },
  {
    id: 6,
    title: "City Center Commercial",
    category: "housing",
    image: "/api/placeholder/600/400",
    description: "Pengembangan pusat komersial modern dengan ruang ritel, kantor, dan fasilitas publik terintegrasi.",
    location: "Kota Kisaran",
    date: "2025",
    features: ["Mixed-use development", "Retail spaces", "Office units", "Public facilities"],
    status: "planning"
  }
];

const categories = [
  { id: "all", name: "Semua Proyek", icon: Building },
  { id: "coffee-shop", name: "Kedai Minuman", icon: Coffee },
  { id: "housing", name: "Perumahan", icon: Home }
];

const statusColors = {
  completed: "bg-green-100 text-green-800",
  ongoing: "bg-blue-100 text-blue-800",
  planning: "bg-yellow-100 text-yellow-800"
};

const statusText = {
  completed: "Selesai",
  ongoing: "Berjalan",
  planning: "Perencanaan"
};

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%237C2D12' fill-opacity='0.2'%3E%3Cpath d='M40 20c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm0 24c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8-8z'/%3E%3Cpath d='M40 28c-4.418 0-8 3.582-8 8 0 1.104.896 2 2 2s2-.896 2-2c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.104.896 2 2 2s2-.896 2-2c0-4.418-3.582-8-8-8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-900 to-yellow-600 bg-clip-text text-transparent">
                Portfolio Kami
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Koleksi proyek-proyek terbaik kami yang mencerminkan dedikasi dan profesionalisme dalam setiap pekerjaan
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-blue-900 to-yellow-600 hover:from-blue-800 hover:to-yellow-500 text-white"
                        : "border-gray-300 text-gray-700 hover:border-blue-900"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari proyek..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Tidak ada proyek ditemukan
              </h3>
              <p className="text-gray-500">
                Coba ubah filter atau kata kunci pencarian Anda
              </p>
            </motion.div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-yellow-100 flex items-center justify-center">
                        {project.category === "coffee-shop" ? (
                          <Coffee className="w-20 h-20 text-blue-900" />
                        ) : (
                          <Home className="w-20 h-20 text-blue-900" />
                        )}
                      </div>
                      <div className="absolute top-4 right-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
                          {statusText[project.status]}
                        </span>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                        <MapPin className="w-4 h-4 ml-2" />
                        <span>{project.location}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {project.features.slice(0, 2).map((feature, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                            >
                              {feature}
                            </span>
                          ))}
                          {project.features.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                              +{project.features.length - 2} lagi
                            </span>
                          )}
                        </div>
                        
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-blue-900 group-hover:text-white transition-colors"
                        >
                          Lihat Detail
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pencapaian Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Angka-angka yang mencerminkan dedikasi dan keberhasilan kami
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Proyek Selesai</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">1000+</h3>
              <p className="text-gray-600">Pelanggan Puas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">10+</h3>
              <p className="text-gray-600">Kedai Minuman</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600">Tahun Pengalaman</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Tertarik dengan Proyek Kami?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mari diskusikan bagaimana kami dapat membantu mewujudkan proyek impian Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => window.location.href = "/"}
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 text-lg"
              >
                Kembali ke Beranda
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-amber-900 via-amber-950 to-gray-900 text-white py-16 relative overflow-hidden">
        {/* Coffee Beans Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.2'%3E%3Cpath d='M30 15c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zm0 12c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4-4z'/%3E%3Cpath d='M30 21c-2.209 0-4 1.791-4 4 0 .552.448 1 1 1s1-.448 1-1c0-1.103.897-2 2-2s2 .897 2 2c0 .552.448 1 1 1s1-.448 1-1c0-1.103-.897-2-2-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-600 to-amber-700 rounded-full flex items-center justify-center">
                <Coffee className="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-amber-200 to-amber-100 bg-clip-text text-transparent">
              ANDRICO
            </h3>
            <p className="text-amber-200 mb-8 text-lg">
              Where Every Cup Tells a Story - Specialty Coffee & Premium Development
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
            <div className="border-t border-amber-800 pt-8">
              <p className="text-amber-300 text-sm">
                © 2024 ANDRICO. All rights reserved. | 
                <a href="/privacy" className="hover:text-amber-100 transition-colors ml-1">Privacy Policy</a> | 
                <a href="/terms" className="hover:text-amber-100 transition-colors ml-1">Terms & Conditions</a>
              </p>
              <p className="text-amber-400 text-xs mt-2">
                ☕ Crafted with passion, served with excellence
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}