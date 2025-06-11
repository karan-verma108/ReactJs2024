export const getTodosFromLocalStorage = () => {
  try {
    return JSON.parse(localStorage.getItem('todos') || '');
  } catch (error: unknown) {
    console.log('error', error);

    return null;
  }
};
