export default function Home() {
  let user = localStorage.getItem('user');
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container text-center position-relative">
        <h1>24/7 care is Availble</h1>
        <h2>Welcome everyone</h2>
        { !user && <h3>`welcome ${user}`</h3>}
      </div>
    </section>
  );
}
