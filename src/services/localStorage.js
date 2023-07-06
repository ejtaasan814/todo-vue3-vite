  const getLocalData = () => {
    return localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  }

  const addLocalTodo = async (insert) => {
    console.log('Send post data');
    console.log(insert)
    localStorage.setItem('todos', JSON.stringify(insert));
  }

  const defTheme = () => {
    return localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')) : false;
  }

  const updateTheme = (val) => {
    localStorage.setItem('theme', JSON.stringify(val));
  }
  
  export { getLocalData, addLocalTodo, defTheme, updateTheme }