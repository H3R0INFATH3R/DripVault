import {
  BackgroundImage,
  Body,
  DirectoryItemContainer
} from './directory-item.styles.jsx'

const CategoryItem = ({ category }) => {
    const { title, id, imageUrl } = category

    return (
        <DirectoryItemContainer key = { id }>
          <BackgroundImage imageUrl = { imageUrl } />
          <Body>
            <h2>{ title }</h2>
            <p>Shop Now</p>
          </Body>
        </DirectoryItemContainer>
    )
}

export default CategoryItem