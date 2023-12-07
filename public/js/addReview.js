const addReview = async(event) => {
    event.preventDefault();
    console.log('clicked')
    const titleEl = document.querySelector('#title-input');
    const contentEl = document.querySelector('#review-input');
    const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
            title: titleEl.value,
            content: contentEl.value,
        }),
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok) {
        document.location.replace('/');
    }else{
        alert('Something Wrong!')
    }
};
document.querySelector('.add-form').addEventListener('submit',addReview);