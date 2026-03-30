window.onload = function () {
            const xhr = new XMLHttpRequest()
            xhr.onload = function () {
                const bodyElement = document.querySelector("body")
                if (xhr.status == 200) {
                  const movies = JSON.parse(xhr.responseText);

                movies.forEach(element => {
                    const article = document.createElement("article");
                    article.innerHTML = `
                    <h1>${element.Title}</h1>
                    <img src="${element.Poster}" width="150">
                    <button onclick="window.location.href='edit.html?imdbID=${element.imdbID}'">Edit</button>
                    <p><strong>Id:</strong> ${element.imdbID}</p>
                    <p><strong>Released:</strong> ${element.Released}</p>
                    <p><strong>Runtime:</strong> ${Math.floor(element.Runtime / 60)}h ${element.Runtime % 60}min</p>
                    <p>${element.Plot}</p>

                    <section>
                    <h2>Genres</h2>
                        <ul>
                            ${element.Genres.map(g => `<li>${g}</li>`).join("")}
                        </ul>
                    </section>

                    <section>
                    <h2>Directors</h2>
                        <ul>
                            ${element.Directors.map(d => `<li>${d}</li>`).join("")}
                        </ul>
                    </section>

                    <section>
                    <h2>Writers</h2>
                        <ul>
                            ${element.Writers.map(w => `<li>${w}</li>`).join("")}
                        </ul>
                    </section>

                    <section>
                    <h2>Actors</h2>
                        <ul>
                            ${element.Actors.map(a => `<li>${a}</li>`).join("")}
                        </ul>
                    </section>

                    <p><strong>Metascore:</strong> ${element.Metascore}</p>
                    <p><strong>IMDb Rating:</strong> ${element.imdbRating}</p>
                    <hr>
                `;

                    bodyElement.append(article);
                });
                } else {
                    bodyElement.append("Daten konnten nicht geladen werden, Status " + xhr.status + " - " + xhr.statusText)
                }
            }
            xhr.open("GET", "http://localhost:3000/movies")
            xhr.send()
        }