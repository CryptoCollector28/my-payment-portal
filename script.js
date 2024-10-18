// Initialize Stripe
const stripe = Stripe('pk_live_51QB7wKRrS2ty6bSr05VP4XUo7jAZFuJ8VtIxq6YywtXYdKuzUToEB6XTUjtFSQpaUFnhoQduT7L3MiGQ175s1oMM00521eTBnP');  // Replace this with your actual Stripe publishable key

// Create an instance of Elements
const elements = stripe.elements();
const card = elements.create('card');
card.mount('#card-element');

// Handle form submission
const form = document.getElementById('payment-form');
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const { token, error } = await stripe.createToken(card);

    if (error) {
        alert('Payment failed: ' + error.message);
    } else {
        alert('Payment successful! Token: ' + token.id);
        // You can send the token to your backend server here for further processing
    }
});
