# 🎓 Smart Campus Operations Hub

A full-stack web application developed for managing university facility bookings and maintenance operations. This system is built as part of the **IT3030 – Programming Applications and Frameworks (PAF) Assignment 2026**.
3rd year 1st semester group project | java (Spring Boot) Rest API + React Frontend

---

## 📌 Project Overview

The **Smart Campus Operations Hub** is a centralized platform designed to:

* Manage facility and asset bookings (rooms, labs, equipment)
* Handle maintenance and incident reporting
* Provide role-based access for users, admins, and technicians
* Ensure clear workflows and system auditability

---

## 🚀 Tech Stack

### 🔙 Backend

* Java (Spring Boot)
* Spring Security (OAuth 2.0)
* Spring Data JPA
* MySQL

### 🌐 Frontend

* React.js
* Axios
* React Router

### ⚙️ Tools

* Git & GitHub
* Postman (API Testing)
* GitHub Actions (CI/CD)

---

## 🧩 Features

### 📦 Module A – Facilities & Assets

* Manage rooms, labs, and equipment
* Search and filter resources
* Track availability and status

### 📅 Module B – Booking System

* Request bookings with time/date
* Approval workflow (PENDING → APPROVED/REJECTED)
* Conflict detection (no overlapping bookings)

### 🛠 Module C – Maintenance Tickets

* Report issues with description and images
* Assign technicians
* Track status (OPEN → IN_PROGRESS → RESOLVED → CLOSED)

### 🔔 Module D – Notifications

* Real-time updates for bookings and tickets
* Notification panel in UI

### 🔐 Module E – Authentication & Authorization

* Google OAuth 2.0 login
* Role-based access control (USER, ADMIN, TECHNICIAN)

---

## 🗄 Database Design

Main entities:

* User
* Resource
* Booking
* Ticket
* Comment
* Attachment
* Notification

(Relationships implemented using JPA)

---

## 📡 API Endpoints (Sample)

### Resources

* GET /api/resources
* POST /api/resources
* PUT /api/resources/{id}
* DELETE /api/resources/{id}

### Bookings

* POST /api/bookings
* GET /api/bookings/my
* PUT /api/bookings/{id}/approve
* PUT /api/bookings/{id}/reject

### Tickets

* POST /api/tickets
* GET /api/tickets/my
* PUT /api/tickets/{id}/status

---

## ⚙️ Setup Instructions

### 🔽 Clone Repository

```bash
git clone https://github.com/Lukshan0607/Smart-Campus-Operations-Hub-.git
cd Smart-Campus-Operations-Hub-
```

---

### 🔙 Backend Setup (Spring Boot)

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

---

### 🌐 Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

---

## 🔑 Git Commands (Daily Workflow)

### 📥 Pull latest changes

```bash
git pull origin main
```

### 🌿 Create new branch

```bash
git checkout -b feature-branch-name
```

### ➕ Add changes

```bash
git add .
```

### 💬 Commit changes

```bash
git commit -m "Added new feature"
```

### 🚀 Push to GitHub

```bash
git push origin feature-branch-name
```

---

## 👥 Team Contributions

| Member   | Responsibility       |
| -------- | -------------------- |
| Member 1 | Resource Management  |
| Member 2 | Booking System       |
| Member 3 | Ticket System        |
| Member 4 | Auth & Notifications |

---

## 🧪 Testing

* API tested using Postman
* Backend validation & error handling implemented
* Unit testing with JUnit (optional)

---


## ⚠️ Notes

* Ensure database is running before starting backend
* Do not commit node_modules or target folders
* Follow proper commit history for evaluation

---

## 📄 License

This project is developed for academic purposes (SLIIT – IT3030 Module).

