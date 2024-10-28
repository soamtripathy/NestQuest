# NestQuest 🏠

NestQuest is a vacation rental platform inspired by Airbnb, allowing travelers to discover and book unique accommodations while enabling hosts to list their properties. Built with MongoDB, Express.js, React.js, and Node.js.

![NestQuest Platform](https://via.placeholder.com/800x400)

## ✨ Features

- **Browse Stays**: Users can explore accommodations with filters for location, price, and amenities.
- **Host Listings**: Hosts can add, edit, and manage property listings.
- **User Authentication**: Secure user login and registration with JWT.
- **Booking Management**: Travelers can book stays and hosts manage booking requests.
- **Reviews and Ratings**: Users can leave feedback and rate their experiences.
- **Responsive Design**: Optimized for various devices and screen sizes.

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/nestquest.git
cd nestquest
```

2. Install dependencies:

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

3. Create `.env` file in backend:

```env
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
```

4. Start the application:

```bash
# Backend
npm run dev

# Frontend (in new terminal)
cd frontend
npm start
```

## 📱 Key Routes

### Authentication

- `/auth/register` - Create new account
- `/auth/login` - User login

### Properties

- `/properties` - View all properties
- `/properties/:id` - Property details
- `/properties/new` - Create listing

### Bookings

- `/bookings` - Manage bookings
- `/bookings/new` - Create booking

## 👥 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by Soam Tripathy
