
const Skeleton = ({item}) => {
  return [...Array(item).keys()].map((_, key)=> (
    <div key={key} className="animate-pulse">
        <div className="bg-gray-300 rounded-lg h-[150px] w-[200px]">
        </div>
    </div>
  ))
}

export default Skeleton