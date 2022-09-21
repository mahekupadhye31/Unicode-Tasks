
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7922ae6e9bmsheaf663d2825ab86p11f1abjsn2270fab61eae',
		'X-RapidAPI-Host': 'corona-virus-world-and-india-data.p.rapidapi.com'
	}
};

async function my_async_fn() {
        let response = await fetch('https://corona-virus-world-and-india-data.p.rapidapi.com/api', options);
        response = await response.json();
        console.log(response); // Logs the response

        let tableData="";
        response.countries_stat.forEach(myFunction);
   function myFunction(values){
    tableData+= `<tr>
                    <td>${values.country_name}</td>
                    <td>${values.active_cases}</td>
                    <td>${values.deaths}</td>
                    <td>${values.total_recovered}</td>
                    <td>${values.total_cases_per_1m_population}</td>
                    <td>${values.new_cases}</td>
                    <td>${values.new_deaths}</td>


                </tr>`;


          }
          document.getElementById("table_body").innerHTML=tableData;
        return response;
}
my_async_fn();
console.log("sana didi");
    



   



