document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api.jsonbin.io/v3/b/672624bbe41b4d34e44d10b5", {
        method: "GET",
        headers: {
            "X-Master-Key": "$2a$10$HsiqqLFHqhvWyuUoQW.t.OFRXyOQ2UgU8T3uLEyxUvNq60ciqX2Ma",
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const posts = data.record.Posts; // Adjust if your data structure differs
        console.log(posts); // Log posts to check that data retrieval is working
        displayPosts(posts); // Call the function to display posts
    })
    .catch(error => console.error("Error fetching data:", error));
});

// Function to display posts
function displayPosts(posts) {
    const postsContainer = document.getElementById('posts'); // Get the posts container

    posts.forEach(post => {
        // Create a div for each post
        const postDiv = document.createElement('div');
        postDiv.className = 'post'; // Add a class for styling

        // Create the HTML content for the post
        postDiv.innerHTML = `
            <h2>${post.author} - ${post.createTime}</h2>
            <p>${post.postBody}</p>
            <img src="${post.image}" alt="${post.postBody}" />
        `;

        // Append the postDiv to the postsContainer
        postsContainer.appendChild(postDiv);
    });
}
