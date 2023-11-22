document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const specialization = document.getElementById('specialization').value;
    const doctorDropdown = document.getElementById('doctor');
    const bookingDate = document.getElementById('bookingDate').value;
    const selectedTimeSlot = document.getElementById('selectedTimeSlot').value;

  console.log("Specialization:", specialization);
  console.log("Doctor:", selectedDoctor);
  console.log("Date:", bookingDate);
  console.log("Time Slot:", selectedTimeSlot);

function displayTimeSlots(timeSlots) {
  const timeSlotDropdown = document.getElementById('selectedTimeSlot');
  timeSlotDropdown.innerHTML = '';

  timeSlots.forEach(function(timeSlot) {
    const option = document.createElement('option');
    option.value = timeSlot;
    option.textContent = timeSlot;
    timeSlotDropdown.appendChild(option);
  });

  const timeSlotList = document.getElementById('timeSlotList');
  timeSlotList.classList.remove('hidden');
}
    const selectedDoctor = doctorDropdown.options[doctorDropdown.selectedIndex].text;
    const availableTimeSlots = getAvailableTimeSlots(selectedDoctor);
    displayTimeSlots(availableTimeSlots);
  });
  
  function populateDoctors(doctors) {
    const doctorDropdown = document.getElementById('doctor');
    doctorDropdown.innerHTML = '';
  
    doctors.forEach(function(doctor) {
      const option = document.createElement('option');
      option.value = doctor;
      option.textContent = doctor;
      doctorDropdown.appendChild(option);
    });
  }
  function getDoctorsBySpecialization(specialization) {
    const doctorDatabase = {
      cardiologist: ['Dr. Mayank', 'Dr. Vanshika', 'Dr. Diksha'],
      dermatologist: ['Dr. Firoz', 'Dr. Bhumika', 'Dr. Anjali'],
      neurologist: ['Dr. Shekhar', 'Dr. Akshata', 'Dr. Davis'],
      Gastroenterologists: ['Dr. Ranjan', 'Dr. Vihan', 'Dr. Kavya'],
      Oncologists: ['Dr. Sakshi', 'Dr. Ashwin', 'Dr. Aditi'],
      Surgeons: ['Dr. Nikhil', 'Dr. Jasleen', 'Dr. Riyaz'],
      Gynecologists: ['Dr. Yatika', 'Dr. Ayushman', 'Dr. Misha'],
      Anesthesiologists: ['Dr. Umesh', 'Dr. Richita', 'Dr. Mihir'],
      Radiologists: ['Dr. Suresh', 'Dr. Tanya', 'Dr. Ruhan'],
      Endocrinologists: ['Dr. Saurabh', 'Dr. Geet', 'Dr. Alok'],
      Immunologists: ['Dr. Tammanah', 'Dr. Shami', 'Dr. Karan'],
      // Add more doctor lists for different specializations
    };
  
    // Return the list of doctors for the selected specialization
    return doctorDatabase[specialization] || [];
  }
  
  // Simulated function to fetch available time slots for the selected doctor
  function getAvailableTimeSlots(doctor) {
    // Simulated data of available time slots for a doctor
    // You may replace this with actual logic to fetch available time slots
    const doctorTimeSlots = {
      'Dr. Mayank': ['9AM', '1PM', '3PM'],
      'Dr. Vanshika': ['10AM', '11AM', '2PM'],
      'Dr. Diksha': ['11AM', '4PM'],

      'Dr. Firoz': ['9AM', '2PM'],
      'Dr. Bhumika': ['10AM', '1PM', '4PM'],
      'Dr. Anjali': ['11AM', '3PM'],

      'Dr. Shekhar': ['9AM', '3PM', '5PM'],
      'Dr. Akshata': ['10AM', '1PM'],
      'Dr. Davis': ['11AM', '2PM'],

      'Dr. Ranjan': ['9AM', '4PM'],
      'Dr. Vihan': ['10AM', '3PM', '5PM'],
      'Dr. Kavya': ['11AM', '2PM'],

      'Dr. Sakshi': ['9AM', '2PM'],
      'Dr. Ashwin': ['10AM', '3PM'],
      'Dr. Aditi': ['11AM', '4PM'],

      'Dr. Nikhil': ['9AM', '1PM'],
      'Dr. Jasleen': ['10AM', '2PM', '5PM'],
      'Dr. Riyaz': ['11AM', '3PM'],

      'Dr. Yatika': ['9AM', '3PM'],
      'Dr. Ayushman': ['10AM', '2PM', '4PM'],
      'Dr. Misha': ['11AM', '5PM'],

      'Dr. Umesh': ['9AM', '2PM', '4PM'],
      'Dr. Richita': ['10AM', '3PM'],
      'Dr. Mihir': ['11AM', '5PM'],

      'Dr. Suresh': ['9AM', '3PM', '5PM'],
      'Dr. Tanya': ['10AM', '1PM'],
      'Dr. Ruhan': ['11AM', '2PM', '4PM'],

      'Dr. Saurabh': ['9AM', '2PM'],
      'Dr. Geet': ['10AM', '3PM', '5PM'],
      'Dr. Alok': ['11AM', '4PM'],
      'Dr. Tammanah': ['9AM', '1PM'],
      'Dr. Shami': ['10AM', '2PM', '5PM'],
      'Dr. Karan': ['11AM', '3PM'],
      // Add more time slots for other doctors
    };
  
    return doctorTimeSlots[doctor] || [];
  }
  
  function displayTimeSlots(timeSlots) {
    const timeSlotList = document.getElementById('timeSlotList');
    const timeSlotResults = document.getElementById('timeSlotResults');
  
    timeSlotResults.innerHTML = '';
  
    if (timeSlots.length > 0) {
      timeSlots.forEach(function(timeSlot) {
        const listItem = document.createElement('li');
        listItem.textContent = timeSlot;
        timeSlotResults.appendChild(listItem);
      });
  
      timeSlotList.classList.remove('hidden');
    } else {
      timeSlotResults.innerHTML = '<li>No available time slots for this doctor on selected date.</li>';
      timeSlotList.classList.remove('hidden');
    }
  }
  
  // Initial setup: Populate doctors for the default specialization
  const defaultSpecialization = 'cardiologist';
  const doctorsForDefaultSpecialization = getDoctorsBySpecialization(defaultSpecialization);
  populateDoctors(doctorsForDefaultSpecialization);
  