# React.js Dashboard Assignment

## Project Overview
This project is a **fully responsive dashboard** built using React.js. The dashboard fetches data from an API and presents it in an **intuitive UI**. Users can switch between **card view** and **analytics mode**, where numerical data is visualized using graphs and pie charts.

## What i use in React.js
Hooks -> useState,useEffect,useContext,
useContext use for changing the view mode Dark to Light and Light to Dark;
useState -> use for storing data in state.    
useEffect -> use for calling API.
          -> added an event listener and a destroy function so that when component will unmounted even listner will also removed.
           this event listerner use to get size of screen so that i can handle label of chart.
uses Try catch and finally block to handle error and also to free the memory.
## API is not working some times so i set a demo object in data state so that i can work on it properly.

## Features
### 1. API Integration
- Fetches data from: [https://jpfunware.free.beeceptor.com/dashboardData](https://jpfunware.free.beeceptor.com/dashboardData)
- Handles API failures gracefully.

### 2. UI Components
- **Responsive Layout:** Works across desktop, tablet, and mobile.

- **Data Display:** Each key from the API is shown in a stylish, structured card.
- **Analytics Toggle:** Switch to enable/disable analytics mode.

### 3. Analytics Feature (Charts & Graphs)
When analytics mode is enabled, data is visualized using charts instead of cards.
#### Charts Included:
- **Pie Charts:**
  - "New Users Distribution" (today, last 7 days, last 30 days).
  - "Active Users Distribution" (daily, weekly, monthly).
  in mobile view -> label shown to bottom.
- **Area Chart:**
  - "Deposits and Bonuses Comparison" (total deposits, admin deposits, admin bonuses).
- Built using **recharts** or **chart.js**.

### 4. Functional Enhancements
- Optimized API calls to prevent unnecessary requests.
- Implemented error handling.

## Bonus Features (Optional)
- **Dark Mode Toggle** for improved UI experience.
- **Smooth Transitions** when switching between views.
- **Performance Optimization** using React’s `useMemo` and `useCallback`.

## Installation & Setup
### 1. Clone the Repository
```sh
git clone <repository-url>
cd react-dashboard-assignment
```
### 2. Install Dependencies
```sh
npm install
```
### 3. Run the Application
```sh
npm start
```
### 4. Build for Production
```sh
npm run build
```

## Deployment
The project is live at: [JPFT Assignment on Vercel](https://vercel.com/jitendras-projects-107fa39f/jpftassingment)


---
### 🚀 Happy Coding & Good Luck! 🎯
