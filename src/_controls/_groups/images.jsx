import ShowFeaturedOnly from "../show-featured-only"
import ShowZoom from "../show-zoom"
import ShowImagesCarousel from "../show-images-carousel"
import ImagesSizingToggle from "../images-sizing-toggle"
import ImagesSizingWidth from "../images-sizing-width"
import ImagesSizingHeight from "../images-sizing-height"
import ImagesSizingCrop from "../images-sizing-crop"
import ImagesSizingScale from "../images-sizing-scale"
import ImagesShowNextOnHover from "../images-show-next-on-hover"
import ThumbnailsImagesSizingToggle from "../thumbnails-images-sizing-toggle"
import ThumbnailsImagesSizingWidth from "../thumbnails-images-sizing-width"
import ThumbnailsImagesSizingHeight from "../thumbnails-images-sizing-height"
import ThumbnailsImagesSizingCrop from "../thumbnails-images-sizing-crop"
import ThumbnailsImagesSizingScale from "../thumbnails-images-sizing-scale"

function DescriptionControls({ settings }) {
  return (
    <>
      <ShowFeaturedOnly showFeaturedOnly={settings.showFeaturedOnly} />
      <ShowZoom showZoom={settings.showZoom} />
      <ShowImagesCarousel showImagesCarousel={settings.showImagesCarousel} />
      <ImagesShowNextOnHover
        showZoom={settings.showZoom}
        imagesShowNextOnHover={settings.imagesShowNextOnHover}
      />
      <ImagesSizingToggle toggle={settings.imagesSizingToggle} />
      <ImagesSizingWidth
        width={settings.imagesSizingWidth}
        toggle={settings.imagesSizingToggle}
      />
      <ImagesSizingHeight
        height={settings.imagesSizingHeight}
        toggle={settings.imagesSizingToggle}
      />
      <ImagesSizingCrop
        crop={settings.imagesSizingCrop}
        toggle={settings.imagesSizingToggle}
      />
      <ImagesSizingScale
        scale={settings.imagesSizingScale}
        toggle={settings.imagesSizingToggle}
      />
      <ThumbnailsImagesSizingToggle
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingWidth
        width={settings.thumbnailImagesSizingWidth}
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingHeight
        height={settings.thumbnailImagesSizingHeight}
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingCrop
        crop={settings.thumbnailImagesSizingCrop}
        toggle={settings.thumbnailImagesSizingToggle}
      />
      <ThumbnailsImagesSizingScale
        scale={settings.thumbnailImagesSizingScale}
        toggle={settings.thumbnailImagesSizingToggle}
      />
    </>
  )
}

export default wp.element.memo(DescriptionControls)
