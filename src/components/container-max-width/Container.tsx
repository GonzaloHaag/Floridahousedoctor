export const Container = ({ children } : { children:React.ReactNode }) => {
  return (
    <div className="w-full container mx-auto max-w-7xl px-4 bg-inherit">
        { children }
    </div>
  )
}
