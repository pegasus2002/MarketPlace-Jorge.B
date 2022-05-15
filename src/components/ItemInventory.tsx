type props = {
  item: any
}

const ItemInventory = ({ item }: props) => {
  return (
    <div className='bg-group1061-image px-6 py-6 overflow-hidden bg-no-repeat flex flex-col justify-center items-center'>
      <div className='w-28 h-28'><img src={item.img_url} alt="" /></div>
      <div className='mt-6 text-xs h-26 pb-3'> <b >{item.head}</b><br />{item.content}</div>
    </div>
  )
}

export { ItemInventory } 