const loadBtn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const usersDiv = document.getElementById("users");

loadBtn.addEventListener("click", () => {

    status.textContent = "Loading...";
    usersDiv.innerHTML = "";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {

                users.forEach(user => {

                    const card = document.createElement("div");
                    card.classList.add("user-card");

                    card.innerHTML = `
                        <h3>${user.name}</h3>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                    `;

                    usersDiv.appendChild(card);
                });

                status.textContent = "Loaded Successfully";
            })
            .catch(error => {
                status.textContent = "Error Loading Data";
                console.error(error);
            });

    }, 2000); // 2-second delay

});