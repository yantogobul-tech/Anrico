"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, Eye, Lock, Database, UserCheck, FileText, AlertCircle, Coffee, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";

export default function PrivacyPage() {
  const sections = [
    {
      icon: Eye,
      title: "Informasi yang Kami Kumpulkan",
      content: [
        "Informasi pribadi yang Anda berikan secara sukarela (nama, email, nomor telepon)",
        "Informasi penggunaan website (IP address, browser, waktu akses)",
        "Informasi lokasi jika Anda mengizinkan akses lokasi",
        "Data formulir kontak dan permintaan layanan"
      ]
    },
    {
      icon: Lock,
      title: "Cara Kami Melindungi Data Anda",
      content: [
        "Enkripsi data selama transmisi dan penyimpanan",
        "Akses terbatas hanya untuk authorized personnel",
        "Regular security audits dan updates",
        "Compliance dengan standar keamanan industri"
      ]
    },
    {
      icon: Database,
      title: "Penggunaan Data",
      content: [
        "Untuk menyediakan layanan yang Anda minta",
        "Untuk meningkatkan kualitas layanan kami",
        "Untuk komunikasi terkait layanan",
        "Untuk keperluan analisis dan pengembangan"
      ]
    },
    {
      icon: UserCheck,
      title: "Hak Anda sebagai Pengguna",
      content: [
        "Hak untuk mengakses data pribadi Anda",
        "Hak untuk memperbaiki data yang tidak akurat",
        "Hak untuk menghapus data pribadi Anda",
        "Hak untuk menarik persetujuan penggunaan data"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-900 to-yellow-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kebijakan privasi kami menjelaskan bagaimana ANDRICO melindungi data pribadi Anda sesuai standar internasional GDPR
            </p>
          </motion.div>
        </div>
      </section>

      {/* Last Updated */}
      <section className="py-8 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-600">
              <strong>Terakhir diperbarui:</strong> 1 Januari 2024
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pendahuluan
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Di ANDRICO, kami sangat memperhatikan privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagi informasi pribadi Anda ketika Anda menggunakan website kami atau layanan kami.
                </p>
                <p>
                  Kebijakan ini telah disusun sesuai dengan General Data Protection Regulation (GDPR) dan regulasi perlindungan data lainnya yang berlaku untuk memastikan hak privasi Anda terlindungi sepenuhnya.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <div className="flex">
                    <AlertCircle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                    <p className="text-sm text-yellow-700">
                      <strong>Penting:</strong> Dengan menggunakan website kami, Anda menyetujui praktik pengumpulan dan penggunaan data seperti yang dijelaskan dalam kebijakan ini.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Policies */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Data Collection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  1. Pengumpulan Data Pribadi
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Kami mengumpulkan data pribadi Anda melalui berbagai cara:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Data yang Dikumpulkan Secara Langsung:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Nama lengkap dan informasi identitas</li>
                      <li>Alamat email dan nomor telepon</li>
                      <li>Alamat fisik untuk pengiriman atau layanan</li>
                      <li>Informasi pembayaran dan transaksi</li>
                      <li>Pesan dan komunikasi dengan kami</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Data yang Dikumpulkan Secara Otomatis:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Informasi teknis (IP address, browser, device)</li>
                      <li>Data penggunaan website (pages visited, time spent)</li>
                      <li>Cookies dan tracking technologies</li>
                      <li>Location data (dengan persetujuan Anda)</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Data Usage */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  2. Penggunaan Data Pribadi
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Data pribadi Anda kami gunakan untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Penyediaan Layanan:</strong> Memproses permintaan Anda dan menyediakan layanan yang diminta</li>
                    <li><strong>Komunikasi:</strong> Menghubungi Anda terkait layanan, produk, atau pertanyaan</li>
                    <li><strong>Personalisasi:</strong> Menyesuaikan pengalaman Anda dengan preferensi dan kebutuhan</li>
                    <li><strong>Analisis:</strong> Menganalisis penggunaan untuk meningkatkan layanan kami</li>
                    <li><strong>Keamanan:</strong> Melindungi website dan pengguna dari aktivitas ilegal</li>
                    <li><strong>Legal Compliance:</strong> Memenuhi kewajiban hukum dan regulasi yang berlaku</li>
                  </ul>
                </div>
              </Card>
            </motion.div>

            {/* Data Sharing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  3. Pembagian Data Pribadi
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Kami tidak menjual, menyewakan, atau membagi data pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam kondisi berikut:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Service Providers:</strong> Pihak ketiga yang membantu kami menyediakan layanan (payment processors, hosting providers)</li>
                    <li><strong>Legal Requirements:</strong> Ketika diwajibkan oleh hukum atau regulasi</li>
                    <li><strong>Business Transfers:</strong> Dalam kasus merger, akuisisi, atau penjualan aset</li>
                    <li><strong>Safety:</strong> Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                    <p className="text-sm text-blue-700">
                      <strong>Keamanan Data:</strong> Semua pihak ketiga yang memiliki akses ke data Anda diwajibkan untuk menjaga kerahasiaan dan keamanan data sesuai dengan standar kami.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* User Rights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  4. Hak Data Pribadi Anda
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Sesuai dengan GDPR, Anda memiliki hak-hak berikut terkait data pribadi Anda:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hak Akses</h4>
                      <p className="text-sm">Mengakses dan mengetahui data pribadi yang kami simpan tentang Anda</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hak Koreksi</h4>
                      <p className="text-sm">Memperbaiki data yang tidak akurat atau tidak lengkap</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hak Penghapusan</h4>
                      <p className="text-sm">Meminta penghapusan data pribadi Anda dalam kondisi tertentu</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hak Pembatasan</h4>
                      <p className="text-sm">Membatasi pengolahan data pribadi Anda</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hak Portabilitas</h4>
                      <p className="text-sm">Menerima data dalam format yang terstruktur dan dapat digunakan</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Hak Penolakan</h4>
                      <p className="text-sm">Menolak pengolahan data untuk tujuan tertentu</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Data Security */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  5. Keamanan Data
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Kami menerapkan berbagai langkah keamanan untuk melindungi data pribadi Anda:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Enkripsi:</strong> Data dienkripsi selama transmisi dan penyimpanan</li>
                    <li><strong>Access Control:</strong> Akses terbatas hanya untuk personnel yang berwenang</li>
                    <li><strong>Regular Audits:</strong> Audit keamanan rutin untuk mengidentifikasi vulnerability</li>
                    <li><strong>Employee Training:</strong> Pelatihan regular tentang keamanan data</li>
                    <li><strong>Secure Infrastructure:</strong> Infrastruktur teknologi yang aman dan terupdate</li>
                  </ul>
                  <p className="text-sm text-gray-500">
                    Namun, perlu diingat bahwa tidak ada metode transmisi internet atau penyimpanan elektronik yang 100% aman.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  6. Kebijakan Cookies
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Website kami menggunakan cookies untuk meningkatkan pengalaman pengguna:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Essential Cookies:</strong> Diperlukan untuk fungsi dasar website</li>
                    <li><strong>Performance Cookies:</strong> Mengumpulkan data tentang penggunaan website</li>
                    <li><strong>Functional Cookies:</strong> Mengingat preferensi dan pengaturan Anda</li>
                    <li><strong>Marketing Cookies:</strong> Digunakan untuk menampilkan iklan yang relevan</li>
                  </ul>
                  <p>
                    Anda dapat mengatur preferensi cookies melalui browser Anda atau cookie consent banner di website kami.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-yellow-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  7. Hubungi Kami
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin melaksanakan hak data pribadi Anda, silakan hubungi kami:
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> privacy@andrico.com</li>
                      <li><strong>Telepon:</strong> +6282382466172</li>
                      <li><strong>Alamat:</strong> JL JENDR G SUBROTO LK I, Sentang, Kisaran Timur, Asahan</li>
                    </ul>
                  </div>
                  <p className="text-sm">
                    Kami akan merespons permintaan Anda sesuai dengan regulasi yang berlaku dan dalam waktu yang wajar.
                  </p>
                </div>
              </Card>
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
              Privasi Anda Adalah Prioritas Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi data pribadi Anda dengan standar tertinggi
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
                onClick={() => window.location.href = "/contact"}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg"
              >
                Hubungi Kami
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