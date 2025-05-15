import React, { useState } from 'react';

const initialContent = {
  aboutUs: "Selamat datang di Echo Beach Camp. Kami menyediakan pengalaman menginap terbaik dengan fasilitas lengkap dan pelayanan ramah.",
  contact: "Email: info@echobeachcamp.com\nTelepon: +62 812 3456 7890\nAlamat: Jalan Pantai No. 123, Bali",
  faq: "Q: Bagaimana cara melakukan booking?\nA: Anda dapat melakukan booking melalui halaman reservasi kami.\n\nQ: Apakah ada pembatalan?\nA: Pembatalan dapat dilakukan maksimal 24 jam sebelum tanggal check-in.",
};

const AdminCMSPage = () => {
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);

  const handleChange = (section, value) => {
    setContent((prev) => ({ ...prev, [section]: value }));
  };

  const handleSave = () => {
    setSaving(true);
    // Simulate saving delay
    setTimeout(() => {
      setSaving(false);
      alert('Konten berhasil disimpan!');
      // Here you would normally send content to backend API
    }, 1000);
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Admin CMS</h1>

      <div className="mb-8">
        <label htmlFor="aboutUs" className="block text-xl font-semibold mb-2">Tentang Kami</label>
        <textarea
          id="aboutUs"
          rows={6}
          className="w-full p-4 border border-gray-300 rounded-lg resize-none"
          value={content.aboutUs}
          onChange={(e) => handleChange('aboutUs', e.target.value)}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="contact" className="block text-xl font-semibold mb-2">Kontak</label>
        <textarea
          id="contact"
          rows={6}
          className="w-full p-4 border border-gray-300 rounded-lg resize-none"
          value={content.contact}
          onChange={(e) => handleChange('contact', e.target.value)}
        />
      </div>

      <div className="mb-8">
        <label htmlFor="faq" className="block text-xl font-semibold mb-2">FAQ</label>
        <textarea
          id="faq"
          rows={8}
          className="w-full p-4 border border-gray-300 rounded-lg resize-none"
          value={content.faq}
          onChange={(e) => handleChange('faq', e.target.value)}
        />
      </div>

      <button
        onClick={handleSave}
        disabled={saving}
        className="bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition disabled:opacity-50"
      >
        {saving ? 'Menyimpan...' : 'Simpan Perubahan'}
      </button>
    </div>
  );
};

export default AdminCMSPage;
