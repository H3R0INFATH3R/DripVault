import './directory-item.styles.scss'

const CategoryItem = ({ category }) => {
    const { title, id, imageUrl } = category

    return (
        <div className = 'directory-item-container' key = { id }>
          <div className = 'background-image' style = {{
            backgroundImage: `url(${ imageUrl })`
          }} />
          <div className = 'body'>
            <h2>{ title }</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem