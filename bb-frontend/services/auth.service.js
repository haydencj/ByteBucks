const emailPasswordLogin = async (email, password) => {
    try {
      const response = await fetch('/api/auth/login', {  // Adjust the URL to point to your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error during login:', error);
      throw error;
    }
  };
  
  export default emailPasswordLogin;
  