function Formula({ message }) {
  return <h1>{message} Is your World Constructor's Champions!</h1>;
}

export default function App() {
  return (
    <>
      <Formula message="Red Bull Racing" />
      <Formula message="Mercedes" />
      <Formula message="McLaren" />

    </>
  );
}