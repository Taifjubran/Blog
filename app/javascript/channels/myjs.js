$('#form').submit(function(e){
	e.preverntDefault()
	var query = $("#search").val()
	let result =''
	var API_KEY='32df5711a7cf9ffc7d94e280fc5eaaac'

	var url = 'http://api.serpstack.com/search?access_key='+API_KEY+'&type=web&query='+ query


	$.get(url,function(data){
		$("#result").html('')
		console.log(data)
		data.organic.results.forEach(res => {
			result = `
				<h1>${res.title}</h1><br><a target="_blank" href="${res.url}"> </a>
				<p>${res.snippet}</p>
			`
			$("#result").append(result)

	});
})
})