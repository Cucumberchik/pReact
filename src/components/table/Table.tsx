import css from "./table.module.scss"

export default function Table({handleClick}:{handleClick:()=>void}) {
  return (
    <div>
        <button onClick={handleClick}>
            button
        </button>
    </div>
  )
}
