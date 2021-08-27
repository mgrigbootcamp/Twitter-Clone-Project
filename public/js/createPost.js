const newSquawkHandler = async (event) => {
    event.preventDefault();
  
    const squawk = document.querySelector('#squawk-post').value.trim();
    const username = document.querySelector('#username').value.trim();
    const posted_at = new Date();
  
    if (username && squawk && posted_at) {
      const response = await fetch(`/api/squawks`, {
        method: 'POST',
        body: JSON.stringify({ username, squawk, posted_at }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/newsfeed');
      } else {
        alert('Failed to squawk');
      }
    }
  };
  
//   const delButtonHandler = async (event) => {
//     if (event.target.hasAttribute('data-id')) {
//       const id = event.target.getAttribute('data-id');
  
//       const response = await fetch(`/api/projects/${id}`, {
//         method: 'DELETE',
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to delete project');
//       }
//     }
//   };
  
  document
    .querySelector('.new-squawk-form')
    .addEventListener('submit', newSquawkHandler);
  
//   document
//     .querySelector('.project-list')
//     .addEventListener('click', delButtonHandler);  