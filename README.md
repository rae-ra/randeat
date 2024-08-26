
# Randeat

## Overview

Welcome to the **Randeat** project! This application helps users discover new recipes and save their favorites. Built with ReactJS for the frontend and Python for the backend, this project integrates various web development principles and technologies, making it an ideal learning tool for ReactJS, MongoDB, and general web development.

## Project Structure

- **`randeat/frontend`**: The frontend application developed using ReactJS. This includes all UI components, state management, and user interactions.
- **`randeat/backend`**: The backend service developed using Python (Flask or Django, depending on your choice). This handles API requests, user authentication, and database interactions.

## Features

### Must Have

- **User Authentication:**
  - Sign up, log in, and log out functionality.
  - Passwords are hashed for security.
  - JWT (JSON Web Tokens) for session management.
  - Roles to differentiate normal users from chefs.

- **Random Recipe Generator:**
  - Fetch random recipes from the recipes created by _chefs_.
  - Display recipe details including ingredients, instructions, and images.

- **Favorites:**
  - Users can save, view, edit, or delete their favorite recipes.
  - Display a list of saved recipes on the user's profile page.

- **Search Functionality:**
  - Search for recipes by ingredient or name.
  - Results are displayed with pagination.

- **Responsive Design:**
  - Ensure the application is mobile-friendly.

### Should Have

- **Pagination for Recipe List:**
  - Implement pagination for search results and saved recipes to improve usability.

### Could Have

- **"Cooking Mode":**
  - Add a mode that displays one step of the recipe at a time, suitable for mobile users cooking in real-time.

- **User Roles:**
  - Implement different user roles (e.g., admin, regular user) with varying levels of access.

### Won't Have

- **Deploying with Docker:**
  - Dockerization might be considered later based on project needs and scope.

## Technologies and Tools

### Frontend

- **ReactJS:** Utilized with hooks and context API for state management.
- **Axios:** For making API requests.
- **React Router:** For navigation within the app.
- **TailwindCSS or Material-UI:** For styling and a polished look.

### Backend

- **Python (Flask):** For creating the REST API.
- **MongoDB:** For storing user data and favorite recipes.
- **Mongoose:** For database interaction.
- **bcrypt:** For password hashing.
- **JWT:** For user authentication and session management.

### Development Environment

- **WebStorm:** IDE for frontend development.
- **PyCharm:** IDE for backend development.
- **MongoDB Compass:** Tools for visual MongoDB management.
- **Postman:** For testing API endpoints.
- **Git:** Version control system, with GitHub for repository hosting.

## Basic Application Flow

1. **User Registration & Login:**
   - Users can create an account and log in.
   - On successful login, users are redirected to the homepage.

2. **Home Page:**
   - Display a random recipe and an option to generate a new one.
   - Option to "Save to Favorites" for storing recipes.

3. **Favorites Page:**
   - List of the user’s saved recipes.
   - Options to view, edit, or delete each saved recipe.

4. **Search Page:**
   - Search bar for finding recipes by keyword.
   - Results displayed with pagination and options to save to favorites.

## Backlog

### To Do

- [ ] **Build favorites functionality in `randeat/backend` and `randeat/frontend` (save, view, edit, delete).**
- [ ] **Implement search functionality with pagination in `randeat/frontend`.**
- [ ] **Allow _chef_ users to visualize their created recipes.**

### In Progress

- [ ] **Ensure responsive design in `randeat/frontend`.**
- [ ] **Allow _chef_ users to create recipes.**
- [ ] **Create recipe display component in `randeat/frontend` (ingredients, instructions, images).**

### Done

- [x] **Set up project repository and initial configurations.**
- [x] **Project setup and initial configurations.**
- [x] **Basic frontend layout and navigation in `randeat/frontend`.**
- [x] **Building the user authentication system in `randeat/backend`.**
- [x] **Connecting `randeat/frontend` with `randeat/backend`.**
- [x] **Implement user authentication (sign up, login, logout) in `randeat/backend`.**

## Extra

- [ ] **Implement pagination for the recipe list.**
- [ ] **Add a "Cooking Mode" to display one step of the recipe at a time.**
- [ ] **Implement user roles with different levels of access (admin, regular user).**
- [ ] **Deploy the application using Docker or another containerization tool.**

## Getting Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/rae-ra/randeat.git
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd randeat
   ```

3. **Install Dependencies for Frontend:**
   ```bash
   cd frontend
   npm install
   ```

4. **Install Dependencies for Backend:**
   ```bash
   cd ../backend
   pip install -r requirements.txt
   ```

5. **Start the Development Servers:**
   - **Frontend:**
     ```bash
     cd ../frontend
     npm start
     ```
   - **Backend:**
     ```bash
     cd ../backend
     python app.py
     ```

6. **Access the Application:**
   Open your browser and navigate to `http://localhost:3000` for the frontend.

## Contributing

Feel free to contribute to this project by opening issues or submitting pull requests. Your feedback and contributions are greatly appreciated!

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to adjust the details as needed to fit your specific requirements and development progress.
