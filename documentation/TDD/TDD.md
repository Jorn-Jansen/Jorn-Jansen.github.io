# Technical Design Document (TDD)

### Technical Description
A website for booking appointments for a barbershop

### Technical stack
- HTML
- CSS
- JS
- Node.js
- mysql
- vue
- Google Calendar API
- Email service

## Techincal Requirements

### Authentication
- Admin log in with email, password and 2fa.
- passwords are stored securely.
- using supabase

### Calendar
- Google calendar used for appointments.
- Customers can see available times.
- bookings are added to the barbers google calendar.

### Email
- Customers receive an email confirmation after booking.

### Admin dashboard
- Admins can view appointments from the past, current and planned future appointments
- Admins can manage appointments

### Security
- Only authenticated admins can acces the admin dashboard.

### Responsive design
- the website works on desktop, laptop, tablet and mobile

### Performance
- the website loads within 2 seconds under normal network conditions.