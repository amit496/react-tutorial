import Card1 from "./components/card"

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-10">
      <Card1 cardname="Modern Design Solutions" featureContent="Discover cutting-edge design patterns and UI components that elevate your digital experiences." />
      <Card1 cardname="Modern Design Solutions -1" featureContent="Explore innovative approaches to modern web development." />
    </main>
  )
}

export default App
