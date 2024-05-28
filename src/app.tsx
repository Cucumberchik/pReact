import css from "./app.module.scss"
import Table from "./components/table/Table"
export default function App() {
  const handleClick = () => {
    alert('Tom Holand')
  }
  return (
    <main className={css.main} >
      <div className="container">
        <Table handleClick={handleClick} />
      </div>
    </main>
  )
}
