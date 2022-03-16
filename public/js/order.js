// DOM declarations
const newComment = document.querySelector("#new-comment");
const commentForm = document.querySelector("#comment-form");
const commentFormContainer = document.querySelector("#comment-form-container");

// API call to check if user is still signed in before showing comment form
const checkSignedIn = async () => {
    const response = await fetch('/api/users/signed-in', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    if (response.ok) {
        // Displays comment form once user is confirmed as signed in
        commentFormContainer.classList.remove("hide");
        newComment.classList.add("hide");
    } else {
        // Redirects user to sign in page
        document.location.replace("/login");
    }
}

// Assigns checkSignedIn to "New Comment" button
newComment.addEventListener("click", checkSignedIn);

// Function to submit new comment info to server
// const submitComment = async (event) => {
//     event.preventDefault();

//     const postId = document.querySelector(".post").dataset.post_id;

//     const commentText = document.querySelector("#textarea").value.trim();

//     if (!commentText) {
//         alert("Enter comment text");
//     }

//     const response = await fetch('/api/orders/new', {
//         method: 'POST',
//         body: JSON.stringify({
//             text: commentText,
//             comment_date: new Date(),
//             post_id: postId
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })

//     if (response.ok) {
//         // Reloads page, which will now include new comment
//         document.location.replace(`/order/${orderId}`);
//     }
// }

// Assigns submitComment to form for submission event
commentForm.addEventListener("submit", submitComment);