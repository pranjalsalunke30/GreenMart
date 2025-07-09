# 🛒 GreenMart Shopping App

GreenMart is a full-featured e-commerce platform for gardening and plant lovers. It includes a product catalog, cart, billing, admin panel, delivery system, chatbot assistance, and Google translation support for regional users.

---

## 📌 Features

- 🌿 Unique & rare seeds and gardening products
- 🧺 Cart & instant "Buy Now" checkout
- 💳 Online payment system with refund handling
- 🔁 Product return/cancel with payment updates
- 🧾 Dynamic bill generation from grouped cart items
- 🚚 Delivery system with OTP verification & auto-assignment
- 🤖 Chatbot assistant for plant care & product support
- 🌐 Google Translation for regional language support
- 👨‍🌾 Gardener appointment based on filters (state, age, language, etc.)
- 🛠️ Admin panel with CRUD, image upload, and category management

---

## 🧠 Chatbot Feature

- Upload images of plants or issues
- Get instant care tips or usage guidance
- Integrated using Dialogflow & Firebase

---

## 🌍 Google Translation Support

- Powered by i18n and Google Translate API
- Users can switch between languages seamlessly
- Especially helpful for Indian regional customers

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express
- **Database:** MySQL
- **Chatbot:** Dialogflow, Firebase
- **Other:** Multer, Google Maps API, i18n

---

## 📸 Screenshots

### 🏠 Homepage  
![Homepage](../screenshots/Home.png)

### 🛒 Cart Page  
![Cart](../screenshots/cart.png)

### 📦 Admin Panel  
![Admin Panel](../screenshots/admin-panel.png)

### 🤖 Chatbot  
![Chatbot](../screenshots/Chatbot.png)

---

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/pranjalsalunke30/GreenMart.git
cd GreenMart
````

### 2. Install Frontend Dependencies

```bash
cd GreenMart
npm install
npm run dev
```

### 3. Install Backend Dependencies

```bash
cd src/Components/Backend
npm install
npm start
```

### 4. Configure Database

* Ensure MySQL server is running
* Create the required database and tables
* Update DB credentials in `.env` file (create it if not present)



