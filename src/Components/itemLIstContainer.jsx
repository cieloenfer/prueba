import itemList from "./itemList";

export default function itemLIstContainer({greeting}) {
    return(
        <div className="item-List-Container">
          <h1>{greeting}</h1>
          <itemList/>
        </div>
    )
}