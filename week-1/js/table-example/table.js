const showTable = () => {
  // const table = document.getElementById('table');
  getUsers().then(data => {
    let tableBody = '';
    data.forEach(user => {
      tableBody += '<tr>';
      tableBody += '<td>' + user.id + '</td>';
      tableBody += '<td>' + user.name + '</td>';
      tableBody += '<td>' + user.email + '</td>';
      tableBody += '<td>' + user.phone + '</td>';
      tableBody += '<td>' + user.company?.name + '</td>';
      tableBody += '</tr>';
    })
    document.querySelector('.tbody').innerHTML = tableBody;
  })
}

const getUsers = () => {
  return new Promise((resolve, reject) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(response => {
      resolve(response.data);
    }).catch(error => {
      reject(error);
    })
  });
}


showTable();

let obj = {
  name: 'caglayan'
};
// optional chaning
console.log(obj.company?.name);
