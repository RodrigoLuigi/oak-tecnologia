export function FiltersMenu() {
  return (
    <div className="grid-in-menu bg-[#20272A] relative ">
      <img src="../public/bg-detail.png" alt="" className="absolute h-full" />

      <div className="px-10 pt-16 space-y-6 relative">
        <h2 className="text-xl font-medium">Filtrar por:</h2>

        <div className="space-y-6 text-lg font-medium">
          <div className="flex items-center gap-2.5">
            <input type="checkbox" name="all" id="all" />
            <label htmlFor="all">Todos</label>
          </div>

          <div className="flex items-center gap-2.5">
            <input type="checkbox" name="lowest-price" id="lowest-price" />
            <label htmlFor="lowest-price">Menor preço</label>
          </div>

          <div className="flex items-center gap-2.5">
            <input type="checkbox" name="biggest-price" id="biggest-price" />
            <label htmlFor="biggest-price">Maior preço</label>
          </div>
        </div>
      </div>
    </div>
  )
}
