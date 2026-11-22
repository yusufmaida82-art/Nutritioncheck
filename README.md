# NutriCheck

NutriCheck helps people with diet needs (like a milk allergy, diabetes or celiac disease) find meals that are safe for them.

**Live site:** https://nutrition-wheat-eta.vercel.app

## The problem
Many people with diet restrictions don't know what is inside a meal. This can lead to poor food choices and health risks.

## The solution
NutriCheck shows meals with their ingredients and warns the user when a meal has something they should avoid.

## Features
- Register, login and logout with email and password
- Login with Google
- Protected pages (only logged-in users can see the menu)
- Meals loaded from TheMealDB API
- Meal details page with ingredients
- Diet warnings (No milk, No sugar, No flour)
- My Meals: save, add a note, and delete meals (stored in Firebase Firestore)
- Works on phone, tablet and laptop

## Tech used
- React (Vite)
- Tailwind CSS
- React Router
- Firebase Authentication
- Firebase Firestore
- TheMealDB API
- Vitest and React Testing Library
- GitHub Actions
- Vercel

## How to run it on your computer
1. Clone the repo:
   `git clone https://github.com/yusufmaida82-art/Nutritioncheck.git`
2. Go into the folder: `cd Nutritioncheck`
3. Install: `npm install`
4. Create a `.env` file with your Firebase keys (see `.env.example`)
5. Start: `npm run dev`

## Tests
Run `npm test` to run the tests, or `npm run coverage` to see the coverage score.

## Note
NutriCheck gives guidance only. Always check with the restaurant and your doctor.

## Author
Maida Yusuf