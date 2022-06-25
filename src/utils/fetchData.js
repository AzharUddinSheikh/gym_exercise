export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2ec2da9e9bmsh776f1faec3e9707p194237jsn66179a4d9a36',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}