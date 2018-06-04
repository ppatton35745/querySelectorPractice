const firstArticleHeader = document.querySelector(".article__header");

firstArticleHeader.textContent = "Welcome to the Phil blog";

const allArticleHeaders = document.querySelectorAll(".article__header");

allArticleHeaders.forEach(
    function(header) {
        header.classList = "article__header important";
    }
);
