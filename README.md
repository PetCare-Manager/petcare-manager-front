# Pet Manager!

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npm run start
   ```

3. Install Expo Go for mobile development

## Folder structure

   ```bash
   .
   ├── app
   │   └── (tabs)
   ├── assets
   │   ├── css
   │   ├── fonts
   │   └── images
   ├── components
   │   └── __tests__
   ├── constants
   ```

- `app/`: Contains the core application logic, such as navigation and different screens.
   - `(tabs)` folder is for the tabbed navigation setup (e.g., different sections or screens of the app).

- `assets/`: Holds static resources like:
   - `css/`: Stylesheets for global or specific styling.
   - `fonts/`: Custom fonts for typography.
   - `images/`: All image assets used in the app.

- `components/`: Reusable UI components.
   - `__tests__/` folder is for unit tests for these components.

- `constants/`: Stores application-wide constants (e.g., configuration, fixed values, or keys) to avoid hardcoding in components.

