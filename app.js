import { signupUser, signInUser, checkAuth, redirectIfLoggedIn } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');


// Wire up sign in and sign up forms to supabase
// Redirect to /other-page on successful auth
// Redirect to /other-page when page loads if user is authenticated

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signUpForm);
    const user = {
        email: formData.get('email'),
        password: formData.get('password')
    };
    await signupUser(user.email, user.password);
    checkAuth();
    redirectIfLoggedIn();

});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(signInForm);
    const user = {
        email: formData.get('email'),
        password: formData.get('password')
    };
    await signInUser(user.email, user.password);
    checkAuth();
    redirectIfLoggedIn();
});
