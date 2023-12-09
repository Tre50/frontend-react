export default function Login({ setToken }) {
    const handleLogin = (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
  
      fetch('https://backend-events2.web.app/recipe-builder/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Login failed');
          }
        })
        .then((data) => {
          setToken(data.token);
        })
        .catch((error) => {
          alert('Error: ' + error.message);
        });
    };
  
    return (
      <section>
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" />
          </label>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" />
          </label>
          <button type="submit">Login</button>
        </form>
      </section>
    );
  }
  