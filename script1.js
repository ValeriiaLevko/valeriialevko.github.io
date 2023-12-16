function addComment() {
            var commentText = document.getElementById('comment').value;
            var signatureText = document.getElementById('signature').value;

            if (commentText.trim() === '' || signatureText.trim() === '') {
                alert('Будь ласка, введіть коментар та підпис.');
                return;
            }

            // Створюємо об'єкт коментаря
            var comment = {
                text: commentText,
                signature: signatureText,
                timestamp: new Date().toLocaleString() // Додаємо час коментування
            };

            // Отримуємо поточні коментарі з локального сховища
            var comments = JSON.parse(localStorage.getItem('comments')) || [];

            // Додаємо новий коментар до масиву
            comments.push(comment);

            // Зберігаємо оновлений масив коментарів у локальному сховищі
            localStorage.setItem('comments', JSON.stringify(comments));

            // Оновлюємо відображення коментарів на сторінці
            displayComments();
        }

        function displayComments() {
            var commentsContainer = document.getElementById('comments');
            var comments = JSON.parse(localStorage.getItem('comments')) || [];

            // Очищаємо контейнер коментарів
            commentsContainer.innerHTML = '';

            // Відображаємо кожен коментар
            comments.forEach(function(comment) {
                var commentElement = document.createElement('div');
                commentElement.innerHTML = '<strong>' + comment.signature + ':</strong> ' + comment.text + ' <em>(' + comment.timestamp + ')</em>';
                commentsContainer.appendChild(commentElement);
            });
        }

        // Під час завантаження сторінки відображаємо збережені коментарі
        window.onload = displayComments;