
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  onSnapshot,
  addDoc,         
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "----------",
    authDomain: "----------",
    projectId: "---------------",
    storageBucket: "----------",
    messagingSenderId: "--------",
    appId: "---------",
    measurementId: "--------"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Get Firestore instance

const recipeCollection = collection(db, 'recipes'); // Reference to 'recipes' collection

// Function to render recipes on the webpage
function renderRecipes(snapshot) {
  const recipeContainer = document.querySelector('.recipe-list');
  recipeContainer.innerHTML = ''; // Clear previous content

  snapshot.forEach(doc => {
    const recipeData = doc.data();

    // Create elements to display recipe details
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('h3');
    title.innerText = `Name: ${recipeData.Name}`;
    card.appendChild(title);

    const ingredient = document.createElement('p');
    ingredient.innerText = `Ingredient: ${recipeData.Ingredient}`;
    card.appendChild(ingredient);

    const method = document.createElement('p');
    method.innerText = `Method: ${recipeData.Method}`;
    card.appendChild(method);

    recipeContainer.appendChild(card); // Append the card to the container
  });
}

// Snapshot listener to fetch and display recipes
onSnapshot(recipeCollection, snapshot => {
  renderRecipes(snapshot.docs);
});

// Form for adding a recipe
const addRecipeForm = document.querySelector('.add');
addRecipeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(addRecipeForm);
  const name = formData.get('Name');
  const ingredient = formData.get('Ingredient');
  const method = formData.get('Method');

  try {
    await addDoc(recipeCollection, { Name: name, Ingredient: ingredient, Method: method });
    addRecipeForm.reset();
  } catch (error) {
    console.error('Error adding recipe: ', error);
  }
});

// Form for deleting a recipe
const deleteRecipeForm = document.querySelector('.delete');
deleteRecipeForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(deleteRecipeForm);
  const recipeId = formData.get('recipeId');

  try {
    await deleteDoc(doc(db, 'recipes', recipeId));
    deleteRecipeForm.reset();
  } catch (error) {
    console.error('Error deleting recipe: ', error);
  }
});

// Google Sign-In functionality
const provider = new GoogleAuthProvider();
const signInButton = document.querySelector('.signin');
signInButton.addEventListener('click', async () => {
  const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log(user);
    window.location.href = 'done.html';
  } catch (error) {
    console.error('Google Sign-In Error: ', error);
    // Handle sign-in error
  }
});
