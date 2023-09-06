
const submitData=(name, email)=>{    
      // method: "POST" is missing from the object below
      const configurationObject = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,}),
      };
      return fetch("http://localhost:3000/users", configurationObject)
        .then(response => {
            if (!response.ok) {
                return response.text().then(errorMessage => {
                    throw new Error(errorMessage);
                });
            }

            return response.json();

        })
        .then(responseData => {
            const newId = responseData.id;
            document.body.innerHTML += `<p>New ID: ${newId}</p>`;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`;
        });

}