"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, Shield, AlertTriangle, Users, Gavel, Scale, CheckCircle, Coffee, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/navbar";

export default function TermsPage() {
  const sections = [
    {
      icon: Shield,
      title: "Penerimaan Syarat",
      content: "Dengan mengakses dan menggunakan website ANDRICO, Anda menyetujui syarat dan ketentuan yang berlaku"
    },
    {
      icon: Users,
      title: "Hak Pengguna",
      content: "Anda berhak menggunakan layanan kami sesuai dengan ketentuan yang ditetapkan"
    },
    {
      icon: Gavel,
      title: "Kewajiban Pengguna",
      content: "Pengguna wajib mematuhi semua ketentuan dan hukum yang berlaku"
    },
    {
      icon: Scale,
      title: "Penyelesaian Sengketa",
      content: "Sengketa akan diselesaikan melalui musyawarah atau prosedur hukum yang berlaku"
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
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-900 to-yellow-600 bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Syarat dan ketentuan penggunaan website ANDRICO yang mengatur hak dan kewajiban pengguna serta perusahaan
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
                  Selamat datang di website ANDRICO. Syarat dan Ketentuan Penggunaan ini ("Syarat") mengatur penggunaan Anda terhadap website kami, layanan, dan konten yang tersedia. Dengan mengakses atau menggunakan website kami, Anda setuju untuk terikat oleh Syarat ini.
                </p>
                <p>
                  Website ANDRICO dimiliki dan dioperasikan oleh ANDRICO, perusahaan yang bergerak di bidang Food & Beverage serta pengembangan proyek. Syarat ini berlaku untuk semua pengunjung, pengguna, dan pelanggan kami.
                </p>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <div className="flex">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mr-2 mt-0.5" />
                    <p className="text-sm text-yellow-700">
                      <strong>Penting:</strong> Jika Anda tidak setuju dengan Syarat ini, jangan menggunakan website atau layanan kami.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-900 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        {section.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Terms */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* 1. Penerimaan Syarat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  1. Penerimaan Syarat dan Ketentuan
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Dengan mengakses, browsing, atau menggunakan website ANDRICO, Anda menyatakan bahwa Anda telah membaca, memahami, dan menyetujui untuk terikat oleh:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Syarat dan Ketentuan Penggunaan ini</li>
                    <li>Kebijakan Privasi kami</li>
                    <li>Semua kebijakan lain yang dirujuk dalam Syarat ini</li>
                  </ul>
                  <p>
                    Jika Anda tidak menyetujui Syarat ini, Anda harus segera menghentikan penggunaan website kami.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 2. Definisi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  2. Definisi
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <ul className="space-y-3">
                      <li><strong>"Website":</strong> Situs web ANDRICO yang dapat diakses melalui URL andrico.com</li>
                      <li><strong>"Layanan":</strong> Produk dan jasa yang ditawarkan ANDRICO melalui website</li>
                      <li><strong>"Pengguna":</strong> Individu atau entitas yang mengakses atau menggunakan website kami</li>
                      <li><strong>"Konten":</strong> Semua materi, informasi, dan konten yang tersedia di website</li>
                      <li><strong>"ANDRICO":</strong> Perusahaan pemilik dan operator website</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 3. Hak dan Kewajiban Pengguna */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  3. Hak dan Kewajiban Pengguna
                </h3>
                <div className="space-y-6 text-gray-600">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Hak Pengguna:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Mengakses dan menggunakan website sesuai dengan Syarat yang berlaku</li>
                      <li>Mendapatkan informasi tentang produk dan layanan ANDRICO</li>
                      <li>Menghubungi kami untuk pertanyaan atau layanan pelanggan</li>
                      <li>Memberikan feedback dan saran untuk perbaikan layanan</li>
                      <li>Meminta penghapusan data pribadi sesuai dengan Kebijakan Privasi</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Kewajiban Pengguna:</h4>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Memberikan informasi yang akurat dan terkini</li>
                      <li>Tidak menggunakan website untuk tujuan ilegal atau tidak sah</li>
                      <li>Tidak mengganggu atau merusak fungsi website</li>
                      <li>Mematuhi hukum dan regulasi yang berlaku</li>
                      <li>Tidak melakukan aktivitas yang melanggar hak pihak ketiga</li>
                      <li>Menjaga kerahasiaan informasi akun dan password</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 4. Penggunaan Website */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  4. Penggunaan Website yang Diizinkan
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Anda diizinkan untuk:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Melihat dan mengunduh konten untuk penggunaan pribadi dan non-komersial</li>
                    <li>Menyimpan halaman website untuk referensi pribadi</li>
                    <li>Berbagi tautan ke halaman website kami</li>
                    <li>Menggunakan fitur kontak dan formulir yang tersedia</li>
                    <li>Mengakses informasi tentang produk dan layanan kami</li>
                  </ul>
                  
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 mt-4">
                    <p className="text-sm text-red-700">
                      <strong>Dilarang:</strong> Menggunakan konten website untuk tujuan komersial tanpa izin tertulis, melakukan scraping data, atau mendistribusikan ulang konten tanpa persetujuan.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 5. Hak Kekayaan Intelektual */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  5. Hak Kekayaan Intelektual
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Semua konten, desain, logo, merek dagang, dan materi lain di website ANDRICO dilindungi oleh hukum hak kekayaan intelektual.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Merek Dagang:</strong> Nama ANDRICO dan logo terdaftar adalah milik perusahaan</li>
                    <li><strong>Konten:</strong> Teks, gambar, video, dan materi lain dilindungi hak cipta</li>
                    <li><strong>Desain:</strong> Tampilan dan tata letak website adalah hak milik ANDRICO</li>
                  </ul>
                  <p>
                    Penggunaan tanpa izin dari materi yang dilindungi dapat mengakibatkan tindakan hukum.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 6. Pembatasan Tanggung Jawab */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  6. Pembatasan Tanggung Jawab
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Website ANDRICO disediakan "sebagaimana adanya" tanpa jaminan dalam bentuk apa pun. Sejauh diizinkan oleh hukum:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kami tidak menjamin keakuratan, kelengkapan, atau keandalan konten</li>
                    <li>Kami tidak bertanggung jawab atas kerugian langsung atau tidak langsung</li>
                    <li>Kami tidak menjamin website akan beroperasi tanpa gangguan</li>
                    <li>Kami tidak bertanggung jawab atas konten pihak ketiga yang terhubung</li>
                  </ul>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
                    <p className="text-sm text-blue-700">
                      <strong>Batasan Maksimal:</strong> Tanggung jawab kami terbatas pada jumlah yang Anda bayar untuk layanan, jika ada.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* 7. Privasi dan Data Pribadi */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  7. Privasi dan Data Pribadi
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Penggunaan data pribadi Anda diatur oleh Kebijakan Privasi kami yang merupakan bagian tidak terpisahkan dari Syarat ini.
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Kami mengumpulkan data sesuai dengan Kebijakan Privasi</li>
                    <li>Data Anda dilindungi sesuai standar keamanan yang berlaku</li>
                    <li>Anda memiliki hak atas data pribadi Anda sesuai regulasi</li>
                    <li>Kami tidak menjual data pribadi kepada pihak ketiga</li>
                  </ul>
                  <p>
                    Dengan menggunakan website kami, Anda menyetujui pengumpulan dan penggunaan data sesuai Kebijakan Privasi.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 8. Perubahan Syarat */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  8. Perubahan Syarat dan Ketentuan
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    ANDRICO berhak untuk mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Diinformasikan melalui website</li>
                    <li>Berlaku efektif setelah publikasi</li>
                    <li>Menggantikan semua versi sebelumnya</li>
                  </ul>
                  <p>
                    Penggunaan berkelanjutan website setelah perubahan constitutes acceptance dari Syarat yang diperbarui.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 9. Penyelesaian Sengketa */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  9. Penyelesaian Sengketa
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Sengketa yang timbul dari penggunaan website ini akan diselesaikan sebagai berikut:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 ml-4">
                    <li><strong>Musyawarah:</strong> Upaya penyelesaian secara damai terlebih dahulu</li>
                    <li><strong>Mediasi:</strong> Jika musyawarah gagal, melalui mediasi profesional</li>
                    <li><strong>Yurisdiksi:</strong> Sengketa akhir diselesaikan di pengadilan yang berwenang</li>
                  </ol>
                  <p>
                    Hukum yang berlaku adalah hukum Republik Indonesia dan pengadilan yang berwenang adalah pengadilan di Kabupaten Asahan.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* 10. Kontak */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 bg-gradient-to-r from-blue-50 to-yellow-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  11. Hubungi Kami
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                  </p>
                  <div className="bg-white p-4 rounded-lg">
                    <ul className="space-y-2">
                      <li><strong>Email:</strong> legal@andrico.com</li>
                      <li><strong>Telepon:</strong> +6282382466172</li>
                      <li><strong>Alamat:</strong> JL JENDR G SUBROTO LK I, Sentang, Kisaran Timur, Asahan</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Terima Kasih Telah Membaca
              </h3>
              <p className="text-gray-600 mb-6">
                Dengan melanjutkan penggunaan website ANDRICO, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => window.location.href = "/"}
                  className="bg-gradient-to-r from-blue-900 to-yellow-600 hover:from-blue-800 hover:to-yellow-500 text-white px-8 py-3"
                >
                  Saya Mengerti dan Setuju
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.location.href = "/contact"}
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3"
                >
                  Hubungi Kami untuk Pertanyaan
                </Button>
              </div>
            </Card>
          </motion.div>
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
              Siap Memulai Kerjasama?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Kami siap membantu mewujudkan proyek dan kebutuhan Anda dengan profesionalisme terbaik
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