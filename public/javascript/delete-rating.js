async function deleteRatingHandler(event) {

  if (event.target.textContent=="Remove") {
    event.preventDefault();
    
    const id = parseInt(event.target.dataset.productid);

    console.log(id);
    console.log(event.target.dataset.productid);
    console.log(parseInt(event.target.dataset.productid));
  
  //   const response = await fetch(`/api/ratings/${id}`, {
  //     method: 'DELETE'
  //   });
  
  //   if (response.ok) {
  //     document.location.reload();
  //   } else {
  //     alert(response.statusText);
  //   }
   }

}
  
document.querySelector('.all-reviews').addEventListener('click', deleteRatingHandler)
