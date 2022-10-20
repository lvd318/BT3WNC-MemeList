
function Gallery({ memes, randoms }){
    return(
        <div className="gallery container row row-cols-3">
            {memes &&
                memes.map((meme, index) => {
                    return (
                        randoms.includes(index) && (
                            <div className="meme col-3" key = {meme.id}>
                                <img src = {meme.url} alt={meme.name}/>
                                <p>{meme.name}</p>
                            </div>
                        )
                    );
                })}
        </div>
    );
}

export default Gallery;