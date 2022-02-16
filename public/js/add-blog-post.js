const blogFormHandler = async (event) => {
    event.preventDefault();
    console.log('this is the form handler function before the if statements')
    const topic = document.querySelector('#topic').value.trim();
    const title = document.querySelector('#title').value.trim();
    const comment = document.querySelector('#comment').value.trim();
    if (topic && title && comment) {
        const response = await fetch('/api/blog_post', {
            method: 'POST',
            body: JSON.stringify({ topic, title, comment }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log('this is the blogForm handler')
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};
document.querySelector('#blogForm').addEventListener('submit', blogFormHandler);
