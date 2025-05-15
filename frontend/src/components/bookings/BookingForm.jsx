import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SimpleBookingForm = ({ itemToBook, onClose, onBookingComplete, itemType }) => {
  const [guestName, setGuestName] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [bookingDate, setBookingDate] = useState(new Date()); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName || !guestPhone) {
      alert('Nama Pemesan dan Nomor Telepon wajib diisi.');
      return;
    }


    const bookingDetails = {
      itemId: itemToBook.id,
      itemName: itemToBook.name,
      itemType: itemType, 
      guestName,
      guestPhone,
      bookingDate: bookingDate.toLocaleDateString('id-ID'), 
    };

    onBookingComplete(bookingDetails);
  };

  return (

    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl w-full max-w-lg relative">
       <button
         onClick={onClose}
         className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold"
         aria-label="Tutup"
       >
         &times; 
       </button>

       <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
         Formulir {itemType === 'Kamar' ? 'Booking' : 'Reservasi'} - {itemToBook.name}
       </h2>

       <form onSubmit={handleSubmit} className="space-y-5">
         <div>
           <label htmlFor="guestName" className="block text-sm font-medium text-gray-700 mb-1">
             Nama Pemesan <span className="text-red-500">*</span>
           </label>
           <input
             type="text"
             id="guestName"
             value={guestName}
             onChange={(e) => setGuestName(e.target.value)}
             required
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             placeholder="Masukkan nama lengkap Anda"
           />
         </div>

         <div>
           <label htmlFor="guestPhone" className="block text-sm font-medium text-gray-700 mb-1">
             Nomor Telepon <span className="text-red-500">*</span>
           </label>
           <input
             type="tel"
             id="guestPhone"
             value={guestPhone}
             onChange={(e) => setGuestPhone(e.target.value)}
             required
             className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
             placeholder="Contoh: 08123456789"
           />
         </div>

         <div>
           <label htmlFor="bookingDate" className="block text-sm font-medium text-gray-700 mb-1">
             Tanggal {itemType === 'Kamar' ? 'Check-in' : 'Reservasi'} <span className="text-red-500">*</span>
           </label>
           <DatePicker
              id="bookingDate"
              selected={bookingDate}
              onChange={(date) => setBookingDate(date)}
              dateFormat="dd/MM/yyyy"
              minDate={new Date()}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              wrapperClassName="w-full"
              autoComplete="off"
              required
            />
            
           {itemType === 'Gazebo' && (
               <p className="text-xs text-gray-500 mt-1">Detail waktu/durasi reservasi bisa ditambahkan di sini.</p>
           )}
         </div>

         <div className="pt-4">
           <button
             type="submit"
             className={`w-full inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white ${itemType === 'Kamar' ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-500' : 'bg-green-600 hover:bg-green-700 focus:ring-green-500'} focus:outline-none focus:ring-2 focus:ring-offset-2 transition duration-150 ease-in-out`}
           >
             Konfirmasi {itemType === 'Kamar' ? 'Booking' : 'Reservasi'}
           </button>
         </div>
       </form>
     </div>
  );
};

export default SimpleBookingForm;