

export const ImageCard = ({image}) => {
    const{ type, webformatURL } = image;
  return (
    <div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img src={webformatURL} alt="" className="w-full" />
        </div>
    </div>
  )
}
