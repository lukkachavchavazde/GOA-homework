let current_time = new Date();
let formatted_time = `${current_time.getFullYear()}/${(current_time.getMonth() + 1).toString().padStart(2, '0')}/${current_time.getDate().toString().padStart(2, '0')}/${current_time.getHours().toString().padStart(2, '0')}/${current_time.getMinutes().toString().padStart(2, '0')}`;

console.log(formatted_time);
