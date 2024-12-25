export default function Button({name}:{name:string}){
    return <div className="p-2 border border-white rounded-full hover:bg-white hover:text-black cursor-pointer">
    <button className="p-2">{name}</button>
  </div>


}