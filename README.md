# Advanced Computer Lab - Staff Management System

A comprehensive React-based staff management system for educational institutions. This application provides role-based access control for HR administrators, Heads of Department, Course Coordinators, Course Instructors, and general staff members to manage academic operations effectively.

## 🎯 Features

### 👥 Role-Based Access Control
- **HR Members**: Manage staff, departments, faculties, courses, locations, salaries, and attendance records
- **Head of Department (HOD)**: Assign instructors, manage teaching assignments, view staff day-offs and requests
- **Course Coordinator**: Manage course slots, control requests
- **Course Instructors**: Assign course coordinators, manage slot assignments
- **All Staff**: Submit leave requests, view schedules, track attendance, manage day-offs, update profiles

### 📋 Core Functionalities
- Staff management (add, update, delete)
- Course and department management
- Attendance tracking with missing days/hours reports
- Leave request submission and management
- Schedule management with slot linking
- Staff coverage views
- Course assignments and coordinator assignment
- Day-off management

## 📋 Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

Verify installations:
`ash
node --version
npm --version
`

## 🚀 Getting Started

### 1. Installation

`ash
git clone https://github.com/yourusername/AdvancedComputerLab-Frontend.git
cd AdvancedComputerLab-Frontend
npm install
`

### 2. Environment Configuration

Create .env.local from the example:
`ash
cp .env.example .env.local
`

Configure your environment variables:
`env
REACT_APP_API_BASE_URL=http://localhost:8080/api
PORT=3000
`

### 3. Start Development Server

`ash
npm start
`

Opens at [http://localhost:3000](http://localhost:3000) with hot-reload enabled.

## 📦 Available Scripts

- 
pm start - Development mode with hot-reload
- 
pm run build - Production build
- 
pm test - Run tests

## 📁 Project Structure

`
src/
├── components/
│   ├── Common Features/          (Shared for all roles)
│   ├── HR/                       (HR administrator)
│   ├── HOD/                      (Head of Department)
│   ├── Course Coordinator/
│   ├── Course Instructor/
│   ├── Header/
│   ├── Sidebar/
│   ├── Profile/
│   └── login/
├── App.js
└── index.js
`

## 🛠️ Technology Stack

- **React** 17 | **Router** v5 | **Axios**
- **Material-UI** v4 | **Ant Design** v4 | **Bootstrap** v3
- **Styled Components** v5

## 🔗 API Integration

Configure the backend API endpoint in .env.local:

`env
REACT_APP_API_BASE_URL=http://your-api-endpoint/api
`

## 🐛 Troubleshooting

### Port 3000 already in use?
`ash
npm start -- --port 3001
`

### Dependencies issues?
`ash
rm -rf node_modules package-lock.json
npm install
`

## 🚀 Production Build

`ash
npm run build
`

Creates optimized build in uild/ folder ready for deployment.

## 📄 License

Part of the Advanced Computer Lab course.

## 👨‍💻 Contributing

Feel free to fork, create issues, and submit pull requests for improvements!

---

**Happy Coding!** 🚀
