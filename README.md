
# Electro Mart

( Live Link ) [https://electros-mart.netlify.app/]

Welcome to **Electro Mart** – your go-to eCommerce platform for electronic products! We provide a seamless shopping experience with a wide range of electronics at competitive prices. Whether you're looking for the latest gadgets, home appliances, or accessories, we’ve got it all!

---

## 🚀 Features

- 🌟 **User-Friendly Interface**: Intuitive design for easy navigation and smooth shopping experience.
- 🔒 **Secure Authentication**: User authentication and authorization using Firebase.
- 🔍 **Advanced Search & Filter**: Find your desired products effortlessly with our search and filtering options.
- ⭐ **Product Reviews & Ratings**: Users can leave reviews and ratings to help others make informed decisions.
- 🛒 **Shopping Cart**: Add items to your cart and easily proceed to checkout.
- 📦 **Order Tracking**: Keep track of your orders and view your purchase history.
- ⚙️ **Admin Panel**: Manage products, orders, and users from a dedicated admin interface.
  
---

## 🛠 Technologies Used

### **Frontend**:
- **HTML**
- **CSS**: Tailwind CSS for responsive and modern design.
- **JavaScript**: React.js for building dynamic user interfaces.

### **Backend**:
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Backend framework for handling API routes.
- **MongoDB**: NoSQL database for storing product, user, and order data.

### **Payment Methods**:
- **Stripe**: For handling secure payments online.
- **Bkash, Nagad, Rocket**: Integrated local payment gateways for seamless transactions.

---

## 📋 Installation & Setup

Follow these steps to get the project running on your local machine:

### 1. **Clone the Repository**

First, clone the repository to your local machine:

```bash
git clone https://github.com/Ahammad204/Electro-Mart.git
```

Navigate into the project directory:

```bash
cd Electro-Mart
```


### 2. **Set Up Environment Variables**

Create a `.env` file in the `electro-server` directory and add your environment variables:

```env
VITE_API_URL=<your_api_url>

VITE_APIKEY=<your_firebase_apikey>

VITE_AUTHDOMAIN=<your_firebase_auth_domain>

VITE_PROJECTID=<your_firebase_project_id>

VITE_STORAGEBUCKET=<your_firebase_storage_bucket>

VITE_MESSAGINGSENDERID=<your_firebase_messaging_sender_id>

VITE_MEASUREMENTID=<your_firebase_measurement_id>

```



### 3. **Install Frontend Dependencies**

Move to the frontend directory and install dependencies:

```bash
cd ../electro-client
npm install
```

### 4. **Run the Frontend**

Start the development server for the frontend:

```bash
npm run dev
```

This will start the frontend on `http://localhost:5173` (or whichever port is available).

---

## 🛒 How to Use

1. **Sign Up / Sign In**: Create an account or sign in using your credentials.
2. **Browse Products**: Use the advanced search and filter to find the products you're looking for.
3. **Add to Cart**: Add items to your cart and proceed to checkout.
4. **Payment**: Choose from available payment methods (Stripe, Bkash, Nagad, Rocket).
5. **Order Tracking**: Track your order status in your user dashboard.

---

## 🧑‍💻 Contributing

We welcome contributions! Feel free to open issues or submit pull requests. For major changes, please open an issue first to discuss what you'd like to change.

---

## ⚖️ License

This project is licensed under the ISC License.

---

## 📞 Contact

<!-- Developed by [Kazi Ahammad Ullah](https://github.com/Ahammad204). -->
```

