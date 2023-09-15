export default function Card({
    id,
    personal_info: { address, phone_number, zipcode },
    employee_name,
    employee_salary,
    employee_age,
    image: { profile_image, description },
  }) {
  
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      
      <p class="card-id">ID: ${id}</p>
      <img src="${profile_image}" alt="${description}" class="card-avatar">
      <p class="card-name">${employee_name}</p>
      <div class="card-info">
        <p class="card-age">Age: ${employee_age}</p>
        <p class="card-personainfo">Address: ${address}</p>
        <p class="card-personainfo">ZIP code: ${zipcode}</p>
        <p class="card-personainfo">Phone: ${phone_number}</p>
        <p class="card-salary">Salary: $${employee_salary} USD</p>
        
      </div>
    `;
    return card;
  }
  