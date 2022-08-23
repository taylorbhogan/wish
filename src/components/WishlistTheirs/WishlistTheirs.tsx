import { useParams } from "react-router-dom"

export default function WishlistTheirs() {
  const { wishlistId } = useParams()

  return (
    <div>{`WishlistTheirs: ${wishlistId}`}</div>
  )
}
