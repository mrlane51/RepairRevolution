const commentFormHandler = async (event) => {
    event.preventDefault();
    console.log('this is the comment form handler before the if statement');
    const comment = document.querySelector('#newComment').value.trim();

    // need to append an element onto dashboard page on each post
    if (comment) {
        const response = await fetch('/comment', {
            method: 'POST',
            body: JSON.stringify({ response, topic, date_created }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('this is the commentFormHandler')
        if (response.ok) {
            alert('thank you for your comment!')
        } else {
            alert(response.statusText)
        }
    }
};

document.querySelector('#commentForm').addEventListener('submit', commentFormHandler);